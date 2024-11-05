import axios from 'axios'
const API_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:8081'

const PATH = `${API_URL}/example`

const Example = async () => {
  const path = `${PATH}`
  const response = await axios.get(path)

  return response
}

export { Example }
