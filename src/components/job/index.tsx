import * as React from "react";
import Employer from "./employer";
import JobDetail from "./jobDetail";
import JobHeader from "./jobHeader";
import JobFooter from "./jobFooter";
import JobMeasure from "./jobMeasure";
import EmployerInterface from "../../interfaces/EmployerInterface";
import JobDetailInterface from "../../interfaces/JobDetailInterface";
import JobInterface from "../../interfaces/JobInterface";
import JobHeaderInterface from "../../interfaces/JobHeaderInterface";
import JobMeasureInterface from "../../interfaces/JobMeasureInterface";
import * as styles from "./index.css";

export default class Job extends React.Component<JobInterface, {}> {
  render() {
    const employer: EmployerInterface = {
      employerId: this.props.employerId,
      employerProfileId: this.props.employerProfileId,
      employerProfileName: this.props.employerProfileName
    };

    const jobDetail: JobDetailInterface = {
      jobId: this.props.jobId,
      jobDescription: this.props.jobDescription,
      jobUrl: this.props.jobUrl
    };

    const jobHeader: JobHeaderInterface = {
      jobtitle: this.props.jobTitle,
      employerName: this.props.employerName,
      date: this.props.date,
      expirationDate: this.props.expirationDate
    };

    const jobMeasure: JobMeasureInterface = {
      applications: this.props.applications,
      locationName: this.props.locationName,
      currency: this.props.currency,
      maximumSalary: this.props.maximumSalary,
      minimumSalary: this.props.minimumSalary
    };

    // employerId: 589026
    // employerProfileId: null
    // employerProfileName: null

    // employerName: "Jefferson Frank "
    // jobDescription: " Company This is a brilliant opportunity to join an AWS partnered company who operate primarily in Cambridgeshire. They are looking for a developer with a strong background in JavaScript and specialises in Node.JS. You will be joining the company just in the midst  of them securing a huge contract for a global cloud computing provider and will be working on the product long term. Benefits: <... "
    // jobId: 39393066
    // jobTitle: "Senior Developer, Cambridge, Node.JS, £70,000 - 2 Days Remote"
    // jobUrl: "https://www.reed.co.uk/jobs/senior-developer-cambridge-nodejs-70000-2-days-remote/39393066"
    // expirationDate: "30/12/2019"
    // date: "18/11/2019"

    // applications: 1
    // locationName: "Cambridge"
    // maximumSalary: 70000
    // minimumSalary: 60000
    // currency: "GBP"

    return (
      <div className={styles.jobStyle}>
        <JobHeader {...jobHeader} />
        <JobMeasure {...jobMeasure} />
        <Employer {...employer} />
        <JobDetail {...jobDetail} />
        <JobFooter jobUrl={this.props.jobUrl} />
      </div>
    );
  }
}
