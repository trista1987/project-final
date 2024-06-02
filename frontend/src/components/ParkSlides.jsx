// import { useParkStore } from "../store/useParkStore";
// import { useNavigate } from "react-router-dom";
// import {useEffect} from "react"

// export const ParkSlides = () => {
//     const {fetchParkData, parkData, loading, error} = useParkStore()
//     // const navigate = useNavigate()
    
//     useEffect(()=> {
//         fetchParkData("http://localhost:8080/parks")
//         console.log(parkData)
//     }, [fetchParkData])

//    if(loading) {
//     return <div>Loading...</div>
//    }

//    if(error) {
//     return <div>Error: {error}</div>
//    }

//    return (
//     <div>
//         {parkData.map((park) => (
//            <div key={park.id}>
//             <h4>{park.name}</h4>
//             <p>{park.introduction}</p>
//            </div>
//         ))}
//     </div>
        
  
//    )
// }