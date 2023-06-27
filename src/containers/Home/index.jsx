import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Card, Container } from './styles'

export function Home() {
  const [movie, setMovie] = useState()

  useEffect(() => {
    async function loadMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')
      setMovie(results[3])
    }

    loadMovies()
  }, [])

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button mainButton>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </div>
            </Info>
            <Card>
              <img
                alt="capa-do-filme"
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              />
            </Card>
          </Container>
        </Background>
      )}
    </>
  )
}
