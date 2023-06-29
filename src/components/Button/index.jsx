import { ButtonStyle } from './styles'

function Button({ children, mainbutton, onClick }) {
  return (
    <ButtonStyle onClick={onClick} mainbutton={mainbutton}>
      {children}
    </ButtonStyle>
  )
}

export default Button
