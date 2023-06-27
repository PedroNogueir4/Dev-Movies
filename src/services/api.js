import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '68403f7e34adbd73072d3f3997fd0590',
    language: 'pt-BR',
    page: 1
  }
})

export default api
