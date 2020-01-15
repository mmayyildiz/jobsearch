import * as React from "react";
import JobHeaderInterface from "../../interfaces/JobHeaderInterface";
import * as styles from "./index.css";
import * as moment from "moment";

class jobHeader extends React.Component<JobHeaderInterface, {}> {
  render() {
    const { jobtitle, employerName, date, expirationDate } = this.props;

    let publishDate = moment(date, "YYYY-MM-DD").toDate();
    let endDate = moment(expirationDate, "YYYY-MM-DD").toDate();

    return (
      <React.Fragment>
        <h1 className={styles.jobTitle}>{jobtitle}</h1>
        <span className={styles.publishedDate}>
          Posted {moment(publishDate).format("D MMMM")} by{" "}
        </span>
        <span className={styles.employerName}>{employerName}</span>
        <span className={styles.expiredDate}>
          Expired at {moment(endDate).format("D MMMM")}
        </span>
      </React.Fragment>
    );
  }
}

export default jobHeader;
