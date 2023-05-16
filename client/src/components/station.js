import { useEffect, useState } from "react"
import stationService from "../services/stationService"
import { useNavigate, useParams } from "react-router-dom"

export function SingleStation() {
    const [station, setStation] = useState([])

    const id = useParams().id
    const navigate = useNavigate()
    console.log(id)
    console.log(station)

    useEffect(() => {
      console.log(id)
      stationService.get(id).then(s => setStation(s))
    }, [])

    return (
      <div> 
        <div>
          <h2>{station.Name} ({station.Namn})</h2>
          <h3>{station.Osoite}</h3>
        </div>
        <div>
          <button onClick={() => navigate(-1)} >Palaa</button>
        </div>
      </div>
      
    )
}

export default SingleStation