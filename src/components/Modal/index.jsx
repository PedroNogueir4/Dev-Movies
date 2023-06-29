import { useEffect, useState } from 'react'

import api from '../../services/api'
import { Container, Background, CloseButton } from './styles'

function Modal({ movieId, setShowModal }) {
  const [modalVideo, setModalVideo] = useState()

  useEffect(() => {
    async function loadVideoModal() {
      const {
        data: { results }
      } = await api.get(`/movie/${movieId}/videos`)
      setModalVideo(results[0])
    }

    loadVideoModal()
  }, [movieId])

  return (
    <Background onClick={() => setShowModal(false)}>
      {modalVideo && (
        <Container>
          <CloseButton>X</CloseButton>
          <iframe
            src={`https://www.youtube.com/embed/${modalVideo.key}`}
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
