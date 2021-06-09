import axios from 'axios'

const localStorage = (typeof window !== 'undefined' && window.localStorage) || null

axios.interceptors.request.use(
  async config => {
    config.headers['X-IS-CAREGIVER'] = localStorage?.isCaregiver
    return Promise.resolve(config)
  }
)

export default axios
