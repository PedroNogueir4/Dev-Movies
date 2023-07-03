import { styled } from 'styled-components'

export const Container = styled.div``
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
