import * as React from "react";
import EmployerInterface from "../../interfaces/EmployerInterface";

class employer extends React.Component<EmployerInterface, {}> {
  //static propTypes = {};

  render() {
    const { employerId, employerProfileId, employerProfileName } = this.props;

    return (
      <React.Fragment>
        <span>{employerProfileName}</span>
      </React.Fragment>
    );
  }
}

export default employer;
