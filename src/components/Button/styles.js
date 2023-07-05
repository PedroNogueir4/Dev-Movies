import { styled } from 'styled-components'

export const ButtonStyle = styled.button`
  width: 200px;
  height: 38px;
  background: ${(props) => (props.mainbutton ? '#ff0000' : 'transparent')};
  color: white;
  font-weight: 700;
  font-size: 14px;

  border-radius: 20px;
  border: ${(props) => (props.mainbutton ? 'none' : '3px solid #ffffff')};
  box-shadow: 0px 0px 20px red;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.mainbutton ? '#ff0000' : '#ffffff')};
    color: ${(props) => (props.mainbutton ? '#ffffff' : '#ff0000')};
    box-shadow: ${(props) =>
      props.mainbutton ? ' 0px 0px 35px #ff0000' : '#ffffff'};
  }
  &:active {
    opacity: 0.7;
  }
`
