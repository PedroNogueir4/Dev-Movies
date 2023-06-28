import { getImage } from '../../utils/getImages'
import { Container, Image } from './styles'

function CardItem({ item }) {
  return (
    <Container>
      <Image src={getImage(item.poster_path || item.profile_path)} />
      <p>{item.title || item.name}</p>
    </Container>
  )
}
export default CardItem
