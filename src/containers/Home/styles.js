import { styled } from 'styled-components'

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
`
export const Info = styled.div`
  z-index: 2;
  color: #ffffff;
  width: 50%;

  h1 {
    font-weight: 700;
    font-size: 4rem;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 26px;
  }
  div {
    display: flex;
    gap: 17px;
  }
`
export const Card = styled.div`
  z-index: 2;
  img {
    border-radius: 30px;
    width: 300px;
  }
`
