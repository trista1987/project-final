import {useState, useEffect} from "react"
import moment from "moment"

export const Weather = ({city}) => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(null)

    const BASE_URL='https://api.openweathermap.org/data/2.5/'
    const BASE_URL1 ='weather'
    const API_KEY = '0a3f5beba05e6db2d5da18ddf3283c92'
    const URL1 = `${BASE_URL}${BASE_URL1}?q=${city}&units=metric&appid=${API_KEY}`
    
    useEffect (() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch (URL1)
                const data = await res.json()
                setWeather(data)
                console.log(data)
            } catch (err) {
                console.error("Error fetching the weather data:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [city])

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!weather) {
        return <div>Failed to fetch weather data.</div>;
      }

      return (
        <div>
           //icon
           <p>{weather.main.temp}°C</p>
           <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
           <p>{weather.name}:{weather.weather[0].description}</p>
        </div>
      )
}