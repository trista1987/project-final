import { createContext, useState, useContext } from "react";
import { useAuthData } from "./AuthContext";

const FavParkContext = createContext();

export const FavParProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuthData();

  const addToFavourites = async (parkId) => {
    try {
      const res = await fetch("https://parkhive.onrender.com/add-favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
        body: JSON.stringify({ parkId }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("Failed to add park to your account.");
      }
      const updatedFavourites = await res.json();
      setFavourites((prevFavourites) => [...prevFavourites, { _id: parkId }]);
      console.log(updatedFavourites);
    } catch (error) {
      console.error("Save error:", error);
      alert("Save failed:" + error.message);
    }
  };

  const removeFromFavourites = async (parkId) => {
    try {
      const res = await fetch("https://parkhive.onrender.com/remove-favourite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
        body: JSON.stringify({ parkId }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error("Failed to add park to your account.");
      }
      const updatedFavourites = await res.json();
      setFavourites((prevFavourites) => prevFavourites.filter(fav => fav._id !== parkId));
      console.log(updatedFavourites);
    } catch (error) {
      console.error("Remove error:", error);
      alert("Remove failed:" + error.message);
    }
  };
  return (
    <FavParkContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavParkContext.Provider>
  );
};

export const useFavPark = () => useContext(FavParkContext);
