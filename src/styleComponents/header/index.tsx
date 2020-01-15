import styled from "styled-components";

type FlexProps = {
  className?: string;
};

export default styled.div<FlexProps>`
  overflow: hidden;
  background-color: #ccc;
  margin: 0px;
  height: 70px;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 0px 5px 8px 10px #888888;
  top: 0;
  width: 100%;
`;
