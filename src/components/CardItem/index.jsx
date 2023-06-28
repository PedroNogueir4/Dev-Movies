import { getImage } from '../../utils/getImages'
import { Container, Image } from './styles'

function CardItem({ item }) {
  return (
    <Container>
      <Image src={getImage(item.poster_path)} />
      <p>{item.title}</p>
    </Container>
  )
}
export default CardItem
