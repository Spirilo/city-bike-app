import axios from "axios"

const url = "http://localhost:3001/api/stations"

const getAll = async () => {
    const res = await axios.get(url)
    return res.data
}

const get = async (id) => {
    console.log(id)
    const res = await axios.get(`${url}/${id}`)
    return res.data
}

export default {
    getAll,
    get
}