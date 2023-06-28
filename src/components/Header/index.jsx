import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, ButtonNav } from './styles'

function Header() {
  const location = useLocation()
  const [changeBackground, setChangeBackground] = useState(false)

  window.onscroll = () => {
    if (!changeBackground && pageYOffset > 120) {
      setChangeBackground(true)
    }
    if (changeBackground && pageYOffset <= 120) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} />
      <div>
        <ButtonNav to="/" isactive={location.pathname === '/'}>
          Home
        </ButtonNav>
        <ButtonNav to="/series" isactive={location.pathname === '/series'}>
          Séries
        </ButtonNav>
        <ButtonNav to="/movies" isactive={location.pathname === '/movies'}>
          Filmes
        </ButtonNav>
      </div>
    </Container>
  )
}

export default Header
