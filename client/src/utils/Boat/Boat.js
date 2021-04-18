import axios from 'axios'

const Boat = {
  getAll: () => axios.get('/api/boats', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  create: boat => axios.post('/api/boats', boat {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default Boat