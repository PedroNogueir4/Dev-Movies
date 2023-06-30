import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Caroulsel from '../../components/Carousel'
import Modal from '../../components/Modal'
import {
  getArtists,
  getMovies,
  getTopMovies,
  getTopSeries
} from '../../services/getAllData'
import { getImage } from '../../utils/getImages'
import { Background, Info, Card, Container } from './styles'

export function Home() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSerie, setTopSerie] = useState()
  const [artists, setArtists] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies(), getTopSeries(), getArtists()])
        .then((result) => {
          setMovie(result[0])
          setTopMovie(result[1])
          setTopSerie(result[2])
          setArtists(result[3])
        })
        .catch((error) => console.error(error))
    }

    getAllData()
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
                <Button
                  mainbutton
                  onClick={() => navigate(`/detalhes/${movie.id}`)}
                >
                  Assista Agora
                </Button>
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
