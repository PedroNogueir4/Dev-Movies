import { Swiper, SwiperSlide } from 'swiper/react'

import CardItem from '../CardItem'
import { Container } from './styles'

function Caroulsel({ info, title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={25}
        grabCursor
        className="swiper"
      >
        {info.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <CardItem item={movie} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}

export default Caroulsel
