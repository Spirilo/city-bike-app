import { useEffect, useState } from "react"
import stationService from "../services/stationService"
import { useNavigate, useParams } from "react-router-dom"

export function SingleStation() {
    const [station, setStation] = useState([])
    const [departures, setDepartures] = useState(0)
    const [arrivals, setArrivals] = useState(0)
    const [loading, setLoading] = useState(true)


    const id = useParams().id
    const navigate = useNavigate()

    useEffect(() => {
      const fetch = async () => {
        const data = await stationService.get(id)
        console.log(data)
        setStation(data.station)
        setDepartures(data.depStations)
        setArrivals(data.retStations)
        setLoading(false)
      }
      fetch()
    }, [])

    if(loading) {
      return (
        <h2>Loading....</h2>
      )
    }

    return (
      <div> 
        <div>
          <h2>{station.Name} ({station.Namn})</h2>
          <h3>{station.Osoite}</h3>
          <h3>Lähdöt asemalta: {departures}</h3>
          <h3>Saapuneet asemalle: {arrivals}</h3>
        </div>
        <div>
          <button onClick={() => navigate(-1)} >Palaa</button>
        </div>
      </div>
      
    )
}

export default SingleStation