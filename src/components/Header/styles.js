import { Link } from 'react-router-dom'

import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-right: 50px;
  div {
    display: flex;
    gap: 40px;
    align-items: center;
  }
`
export const ButtonNav = styled(Link)`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;

  padding-bottom: 5px;
  border-bottom: ${(props) => (props.isactive ? '2.5px solid red' : 'none')};
`
