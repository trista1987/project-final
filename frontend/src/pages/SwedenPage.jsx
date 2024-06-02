import {Weather} from "../components/Weather"
import { ParkSlides } from "../components/ParkSlides"
export const SwedenPage = () => {
    return (
        <>
        <p>Sweden</p>
        <ParkSlides nation={"sweden"}/>
        <Weather city = {"Stockholm"} timezone={"Europe/Stockholm"}/>
        </>
    )
}