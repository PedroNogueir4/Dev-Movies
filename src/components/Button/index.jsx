import { ButtonStyle } from './styles'

function Button({ children, mainButton }) {
  return <ButtonStyle mainButton={mainButton}>{children}</ButtonStyle>
}

export default Button
