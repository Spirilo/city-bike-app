import { useEffect, useState } from "react"
import stationService from "../services/stationService"
import { useNavigate, useParams } from "react-router-dom"

export function SingleStation() {
    const [station, setStation] = useState([])
    const [departures, setDepartures] = useState(0)
    const [arrivals, setArrivals] = useState(0)



    const id = useParams().id
    const navigate = useNavigate()
    console.log(id)
    console.log(station)

    useEffect(() => {
      console.log(id)
      stationService.get(id).then(s => {
        console.log(s)
        setStation(s.station)
        setDepartures(s.depStations)
        setArrivals(s.retStations)
      })
    }, [])

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