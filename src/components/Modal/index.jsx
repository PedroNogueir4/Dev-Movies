import { useEffect, useState } from 'react'

import { getVideos } from '../../services/getAllData'
import { Container, Background, CloseButton } from './styles'

function Modal({ movieId, setShowModal }) {
  const [modalVideo, setModalVideo] = useState()

  useEffect(() => {
    async function loadVideo() {
      setModalVideo(await getVideos(movieId))
    }

    loadVideo()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {modalVideo && (
        <Container>
          <CloseButton>X</CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${modalVideo[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal
