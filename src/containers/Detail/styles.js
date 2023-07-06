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
  font-weight: 700;
  padding-bottom: 15px;

  @media (max-width: 780px) {
    overflow: hidden;
  }
`
export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 60vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
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
export const ContainerMain = styled.div`
  display: flex;
  gap: 22px;
  justify-content: center;
  align-items: flex-start;
  margin-top: -100px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    margin-top: -155px;
  }
`
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  height: 50%;
  z-index: 2;
  h1 {
    font-size: 50px;

    @media (max-width: 460px) {
      font-size: 38px;
    }
  }
`
export const Genres = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 780px) {
    justify-content: center;
  }
  @media (max-width: 460px) {
    width: 89%;
  }

  p {
    border: 2px solid white;
    border-radius: 30px;
    padding: 7px 18px;

    @media (max-width: 900px) {
      font-size: 14px;
      padding: 6px 13px;
    }

    @media (max-width: 460px) {
      font-size: 13.5px;
      padding: 4px 10px;
    }
  }
`
export const CardMovie = styled.div`
  z-index: 2;
  img {
    border-radius: 30px;
    width: 350px;
    animation: ${scale} 0.5s linear;
    @media (max-width: 780px) {
      width: 250px;
    }
  }
`
export const ContainerVideos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 100px;
  margin-bottom: 80px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (max-width: 780px) {
      font-size: 13px;
      padding: 0px 11px;
    }
  }
  iframe {
    border: none;
    @media (max-width: 460px) {
      width: 80%;
    }
  }
`
