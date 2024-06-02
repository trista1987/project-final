import { useParkStore } from "../../store/useParkStore";
import {useEffect} from "react"
import { useParams } from "react-router-dom";

export const ParkDetails = () => {
    const {fetchParkData, parkData, loading, error} = useParkStore()
    const {id} = useParams
    useEffect(()=> {
        fetchParkData(`https://parkhive.onrender.com/parks/${id}`)
        console.log(parkData)
    }, [fetchParkData, id])
    

    if(loading) {
        return <div>Loading...</div>
       }
    
       if(error) {
        return <div>Error: {error}</div>
       }

       const park = parkData[0]

       return(
        <>
            {parkData.map((park)=> (
                <div key={park._id}>
                <h4>{park.name}</h4>
                <p>{park.rate}</p>
                <p>{park.opening_hours}</p>
                <p>{park.address}</p>
                <p>{park.parking_info}</p>
                <p>{park.introduction}</p>
                </div>
            ))}
        </>
       )
}