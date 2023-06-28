import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Caroulsel from '../../components/Carousel'
import api from '../../services/api'
import { getImage } from '../../utils/getImages'
import { Background, Info, Card, Container } from './styles'

export function Home() {
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')
      setMovie(results[3])
    }

    async function loadTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')
      setTopMovie(results)
    }

    loadTopMovies()
    loadMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImage(movie.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button mainbutton>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </div>
            </Info>
            <Card>
              <img alt="capa-do-filme" src={getImage(movie.poster_path)} />
            </Card>
          </Container>
        </Background>
      )}
      {topMovie && <Caroulsel info={topMovie} title={'Top Filmes'} />}
    </>
  )
}
