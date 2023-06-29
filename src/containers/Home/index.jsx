import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Caroulsel from '../../components/Carousel'
import Modal from '../../components/Modal'
import api from '../../services/api'
import { getImage } from '../../utils/getImages'
import { randomPopMovie } from '../../utils/popularMovie'
import { Background, Info, Card, Container } from './styles'

export function Home() {
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [artists, setArtists] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function loadMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[randomPopMovie(0, 20)])
    }

    async function loadTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')
      setTopMovie(results)
    }

    async function loadTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')
      setTopSerie(results)
    }

    async function loadArtists() {
      const {
        data: { results }
      } = await api.get('/person/popular')
      setArtists(results)
    }

    loadArtists()
    loadTopSeries()
    loadTopMovies()
    loadMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImage(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button mainbutton>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </div>
            </Info>
            <Card>
              <img alt="capa-do-filme" src={getImage(movie.poster_path)} />
            </Card>
          </Container>
        </Background>
      )}
      {topMovie && <Caroulsel info={topMovie} title={'Top Filmes'} />}
      {topSerie && <Caroulsel info={topSerie} title={'Top Séries'} />}
      {artists && <Caroulsel info={artists} title={'Artistas'} />}
    </>
  )
}
