import { ButtonStyle } from './styles'

function Button({ children, mainbutton }) {
  return <ButtonStyle mainbutton={mainbutton}>{children}</ButtonStyle>
}

export default Button
