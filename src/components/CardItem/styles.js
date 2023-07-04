import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: ${(props) => (props.detailWidth ? '85px' : '200px')};
  border-radius: ${(props) => (props.detailWidth ? 'none' : '15px')};
  margin-bottom: 10px;
`
