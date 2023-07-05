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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    overflow: hidden;
  }
  @media (max-width: 450px) {
    gap: 50px;
  }
`
export const Info = styled.div`
  z-index: 2;
  color: #ffffff;
  width: 50%;
  @media (max-width: 450px) {
    width: 80%;
  }

  h1 {
    font-weight: 700;
    font-size: 4rem;
    @media (max-width: 780px) {
      font-size: 2rem;
    }
    @media (max-width: 450px) {
      font-size: 1.7rem;
    }
  }
  p {
    font-weight: 500;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 26px;
    @media (max-width: 780px) {
      font-size: 18px;
    }
    @media (max-width: 600px) {
      font-size: 15px;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  div {
    display: flex;
    gap: 17px;
    @media (max-width: 450px) {
      gap: 30px;
      margin-top: 50px;
    }
  }
`
export const Card = styled.div`
  z-index: 2;
  img {
    border-radius: 30px;
    width: 300px;
    @media (max-width: 780px) {
      width: 200px;
    }
    @media (max-width: 400px) {
      width: 170px;
    }
  }
`
