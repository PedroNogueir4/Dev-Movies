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

  background-color: ${(props) =>
    props.changeBackground ? '#000' : 'transparent'};
  transition: background-color 0.6s ease-in-out;

  img {
    width: 25%; // +- 70% responsivo
  }

  div {
    display: flex;
    gap: 40px; //15px responsivo
    align-items: center;
  }
`
export const ButtonNav = styled(Link)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-weight: 700;
  font-size: 17px; // 10px responsivo

  padding-bottom: 5px;

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
