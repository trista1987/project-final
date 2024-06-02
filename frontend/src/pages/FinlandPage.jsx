import { ParkSlides } from "../components/ParkSlides"
import { Weather } from "../components/Weather"
export const FinlandPage = () => {
    return (
        <>
        <p>Finland</p>
        <ParkSlides nation={"finland"}/>
        <Weather city = {"Helsinki"} timezone={"Europe/helsinki"}/>
        </>
    )
}