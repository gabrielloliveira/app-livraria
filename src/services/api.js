import axios from 'axios' 

const api = axios.create({
  baseURL: "http://10.180.41.185:8000",
})
 
export default api
