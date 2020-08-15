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
  response => {
    const {
      data: { message, status }
    } = response

    if (message) {
      Vue.notify({
        text: message,
        type: status
      })
    }

    return response
  },
  error => {
    const {
      response: {
        data: { message, status }
      }
    } = error

    if (message) {
      Vue.notify({
        text: message,
        type: status == 'error' ? 'warn' : null
      })
    }

    return error
  }
)

export default {
  install() {
    Vue.prototype.$client = client
    Vue['$client'] = client
  }
}
