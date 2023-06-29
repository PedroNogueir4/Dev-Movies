import { styled } from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  background-color: #000;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: fixed;
  max-width: 1200px;

  iframe {
    border: none;
    height: 100%;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`
