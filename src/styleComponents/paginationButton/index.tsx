import styled from "styled-components";
import LinkButton from "../button";

export default styled(LinkButton)`
  width: 20px;
  height: 30px;
  font-size: 16px;
  border: 1px solid black;
  padding: 0.25em 1em;
  background-color: white;
  cursor: pointer;
  display: flex;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  color: gray;
  font-weight: normal;
  &:hover {
    color: black;
    font-weight: bold;
    box-shadow: 0 10px 5px rgba(17, 16, 62, 0.15);
  }
  &:focus {
    color: blue;
    font-weight: bold;
  }
`;
