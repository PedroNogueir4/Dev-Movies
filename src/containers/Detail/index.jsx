import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getCredits,
  getDetails,
  getSimilar,
  getVideos
} from '../../services/getAllData'
import { getImage } from '../../utils/getImages'
import { Container, Background } from './styles'

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
          setCredits(credits)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && <Background img={getImage(movie.backdrop_path)} />}
      <Container>Detalhes</Container>
    </>
  )
}
