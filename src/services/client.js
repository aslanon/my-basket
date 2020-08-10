import Vue from 'vue'
import axios from 'axios'

const clientInstance = baseURL =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

const client = clientInstance(process.env.VUE_APP_API_BASE_URL)

export default {
  install() {
    Vue.$client = client
  }
}
