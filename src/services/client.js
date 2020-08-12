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

client.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      const {
        response: { status }
      } = error

      console.log(error, status)
    }
  }
)

export default {
  install() {
    Vue.prototype.$client = client
    Vue['$client'] = client
  }
}
