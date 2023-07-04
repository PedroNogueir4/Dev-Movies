import { getImage } from '../../utils/getImages'
import { Container, Image } from './styles'

function CardItem({ item, detailWidth }) {
  return (
    <>
      {(item.profile_path || item.poster_path) && (
        <Container>
          <Image
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
