import { useNavigate } from 'react-router-dom'

import { getImage } from '../../utils/getImages'
import { Container, Image } from './styles'

function CardItem({ item, detailWidth }) {
  const navigate = useNavigate()

  function navigateDetail() {
    if (item.poster_path && !item.first_air_date) {
      // (!item.first_air_date) = Bloqueio por conta de erro na API de terceiros
      navigate(`/detalhes/${item.id}`)
    }
  }
  return (
    <>
      {(item.profile_path || item.poster_path) && (
        <Container>
          <Image
            onClick={navigateDetail}
            detailWidth={detailWidth}
            src={getImage(item.poster_path || item.profile_path)}
          />
          <p>{item.title || item.name}</p>
        </Container>
      )}
    </>
  )
}
export default CardItem
