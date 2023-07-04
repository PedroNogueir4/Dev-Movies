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
import { getVideosYT } from '../../utils/getVideoYT'
import {
  Container,
  Background,
  ContainerInfo,
  ContainerMain,
  Genres,
  CardMovie,
  ContainerVideos
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
  }, [id])

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
              {credits && (
                <Caroulsel
                  detailWidth
                  info={credits.slice(0, 8)}
                  title={'Créditos'}
                />
              )}
            </ContainerInfo>
          </ContainerMain>
        </>
      )}
      <ContainerVideos>
        {videos &&
          videos.map((video) => (
            <div key={video.id}>
              <p>{video.name}</p>
              <iframe
                src={getVideosYT(video.key)}
                title="Youtube Video Player"
                height="350px"
                width="55%"
              ></iframe>
            </div>
          ))}
      </ContainerVideos>
      {similar && <Caroulsel info={similar} title={'Similares'} />}
    </Container>
  )
}
