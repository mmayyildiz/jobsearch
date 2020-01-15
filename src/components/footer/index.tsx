import * as React from "react";
import * as styles from "./footer.css";
import StyledFooter from "../../styleComponents/footer";

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <StyledFooter>Copyright &copy; {new Date().getFullYear()}</StyledFooter>
    );
  }
}
