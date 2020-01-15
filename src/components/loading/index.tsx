import * as React from "react";
import * as styles from "./index.scss";

const loading: React.FunctionComponent<{}> = props => {
  return (
    <div className={styles.ldsRipple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default loading;
