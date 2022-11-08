import styled from "styled-components";

const PrimaryButton = styled.button`
  display: block;
  border: none;
  padding: 18px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.044) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #a28eda;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 0px #b7a5ea;
  border-radius: 100px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

const Button = ({ text, primary }) =>
  primary ? <PrimaryButton>{text}</PrimaryButton> : <button>{text}</button>;

Button.defaultProps = { text: "Button!", primary: true };

export default Button;
