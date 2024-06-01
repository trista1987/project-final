import { Weather } from "../components/Weather"
export const FinlandPage = () => {
    return (
        <>
        <p>Finland</p>
        <Weather city = {"Helsinki"} timezone={"Europe/helsinki"}/>
        </>
    )
}