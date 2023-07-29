import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/challange-4efa0/us-central1/api', //the api(could function) URl
})

export default instance
