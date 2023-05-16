import axios from "axios"

const url = "http://localhost:3001/api/journeys"

const getAll = async () => {
    const res = await axios.get(url)
    return res.data
}

export default {
    getAll
}