import StyledButton from "../../styleComponents/button";
import styled from "styled-components";

interface ApplyButtonProps {
  isApplied: boolean;
  as: string;
  onClick?: () => void;
  href?: string;
}

export default styled(StyledButton)<ApplyButtonProps>`
  border: 3px solid ${props => (props.isApplied ? "gray" : "green")};
  font-weight: bold;
  width: 100px;
  height: 40px;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  color: ${props => (props.isApplied ? "gray" : "green")};
`;
