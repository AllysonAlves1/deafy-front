import axios from "axios";
const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})
export default http
