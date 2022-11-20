import axios from "axios";

const BASE_URL = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";

const Api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000
})

export default Api;