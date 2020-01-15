import styled from "styled-components";

type DivProps = {
  direction?: "row" | "column";
  marginLeft?: string;
  display?: string;
};

export default styled.div<DivProps>`
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  margin-left: ${props => props.marginLeft};
`;
