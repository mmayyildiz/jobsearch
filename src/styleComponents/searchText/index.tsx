import styled from "styled-components";

interface InputProp {
  inputColor?: string;
}

// Create an Input component that'll render an <input> tag with some styles
export default styled.input<InputProp>`
  padding: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  width: 500px;
  height: 30px;
`;
