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

export async function getVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)
  return results
}

export async function getDetails(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)
  return data
}

export async function getSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)
  return results
}

export async function getCredits(movieId) {
  const { data } = await api.get(`/movie/${movieId}/credits`)
  return data
}
