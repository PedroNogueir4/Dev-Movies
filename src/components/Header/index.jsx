import { useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import { Container, ButtonNav } from './styles'

function Header() {
  const location = useLocation()
  return (
    <Container>
      <img src={Logo} style={{ width: 300 }} />
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
