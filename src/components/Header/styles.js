import { Link } from 'react-router-dom'

import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-right: 50px;
  position: fixed;
  z-index: 99;
  width: 100vw;
  min-height: 50px;

  @media (max-width: 450px) {
    gap: 20px;
    padding-right: 30px;
  }

  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 25%;
    @media (max-width: 700px) {
      width: 45%;
    }
  }

  div {
    display: flex;
    gap: 40px;
    align-items: center;
    @media (max-width: 700px) {
      gap: 20px;
    }
  }
`
export const ButtonNav = styled(Link)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: 700;
  font-size: 17px;

  padding-bottom: 5px;

  @media (max-width: 450px) {
    font-size: 15px;
  }

  &::after {
    content: '';
    height: 2px;
    width: ${(props) => (props.isactive ? '100%' : 0)};
    background-color: red;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
