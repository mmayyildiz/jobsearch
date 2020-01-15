import styled from "styled-components";

type FlexProps = {
  src?: string;
};

export default styled.img<FlexProps>`
  margin: 0px;
  height: 50px;
  margin-right: 100px;
  src: ${props => props.src};
`;
