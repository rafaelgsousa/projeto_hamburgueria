import axios from "axios"

const api = axios.create({
    baseURL: "https://hamburgueriarafael2.herokuapp.com"
})

export default api