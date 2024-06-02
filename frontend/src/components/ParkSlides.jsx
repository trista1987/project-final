/* eslint-disable no-console */
import { useParkStore } from "../store/useParkStore";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

export const ParkSlides = ({nation}) => {
    const {fetchParkData, parkData, loading, error} = useParkStore()
    const navigate = useNavigate()
    
    useEffect(()=> {
        fetchParkData(`https://parkhive.onrender.com/parks?nation=${nation}`)
        console.log(parkData)
    }, [fetchParkData, nation])

   if(loading) {
    return <div>Loading...</div>
   }

   if(error) {
    return <div>Error: {error}</div>
   }
   
   return (
    <div>
        {parkData.map((park) => (
           <div key={park._id} onClick={() => navigate(`/parks/${park._id}`)}>
            <h4>{park.name} </h4>
           </div>
        ))}
    </div>
   )
}