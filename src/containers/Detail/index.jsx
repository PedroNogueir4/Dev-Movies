import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Caroulsel from '../../components/Carousel'
import {
  getCredits,
  getDetails,
  getSimilar,
  getVideos
} from '../../services/getAllData'
import { getImage } from '../../utils/getImages'
import {
  Container,
  Background,
  ContainerInfo,
  ContainerMain,
  Genres,
  CardMovie
} from './styles'

export function Detail() {
  const [videos, setVideos] = useState()
  const [movie, setMovie] = useState()
  const [similar, setSimilar] = useState()
  const [credits, setCredits] = useState()

  const { id } = useParams()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getVideos(id),
        getDetails(id),
        getSimilar(id),
        getCredits(id)
      ])
        .then(([videos, details, similar, credits]) => {
          setVideos(videos)
          setMovie(details)
          setSimilar(similar)
          setCredits(credits.cast)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <Container>
      {movie && (
        <>
          <Background img={getImage(movie.backdrop_path)} />
          <ContainerMain>
            <CardMovie>
              <img src={getImage(movie.poster_path)} />
            </CardMovie>
            <ContainerInfo>
              <h1>{movie.title}</h1>
              <Genres>
                {movie.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>
                })}
              </Genres>
              <p>{movie.overview}</p>
              {credits && <Caroulsel info={credits} title={'Créditos'} />}
            </ContainerInfo>
          </ContainerMain>
        </>
      )}
    </Container>
  )
}
