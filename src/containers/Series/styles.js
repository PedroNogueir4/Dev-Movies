import { styled, keyframes } from 'styled-components'

const scale = keyframes`
from{
  transform: scale(0);
}
to{
  transform: scale(1);
}
`

export const Container = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  h1 {
    animation: ${scale} 0.5s linear;
  }
`
