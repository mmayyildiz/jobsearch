import StyledButton from "../../../styleComponents/button";
import styled from "styled-components";

interface FilterButtonProps {
  isShow: boolean;
}

export default styled(StyledButton)<FilterButtonProps>`
  float: right;
  border: 3px solid black;
  color: black;
  width: 100px;
  height: 35px;
  font-size: 14px;
  background-color: rgb(200, 265, 250);
  cursor: pointer;
  display: ${props => (props.isShow ? "block" : "none")};
`;
