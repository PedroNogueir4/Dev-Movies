import { randomPopMovie } from '../utils/popularMovie'
import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')
  return results[randomPopMovie(0, 20)]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')
  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')
  return results
}

export async function getArtists() {
  const {
    data: { results }
  } = await api.get('/person/popular')
  return results
}
