import { getImage } from '../../utils/getImages'
import { Container, Image } from './styles'

function CardItem({ item }) {
  return (
    <>
      {(item.profile_path || item.poster_path) && (
        <Container>
          <Image src={getImage(item.poster_path || item.profile_path)} />
          <p>{item.title || item.name}</p>
        </Container>
      )}
    </>
  )
}
export default CardItem
