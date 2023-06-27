import { styled } from 'styled-components'

export const ButtonStyle = styled.button`
  width: 40%;
  height: 35px;
  background: ${(props) => (props.mainButton ? '#ff0000' : 'transparent')};
  color: white;
  font-weight: 700;
  font-size: 14px;

  border-radius: 20px;
  border: ${(props) => (props.mainButton ? 'none' : '3px solid #ffffff')};
  box-shadow: 0px 0px 20px red;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.mainButton ? '#ff0000' : '#ffffff')};
    color: ${(props) => (props.mainButton ? '#ffffff' : '#ff0000')};
    box-shadow: ${(props) =>
      props.mainButton ? ' 0px 0px 35px #ff0000' : '#ffffff'};
  }
  &:active {
    opacity: 0.7;
  }
`
