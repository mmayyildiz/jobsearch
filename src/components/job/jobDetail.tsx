import * as React from "react";
import JobDetailInterface from "../../interfaces/JobDetailInterface";
import axios from "axios";
import * as styles from "./index.css";
import ReactHtmlParser from "react-html-parser";

type stateType = { description: string };

export default class jobDetail extends React.Component<
  JobDetailInterface,
  stateType
> {
  state: stateType = {
    description: ""
  };

  static getDerivedStateFromProps(props: JobDetailInterface, state: stateType) {
    let newState = {
      description: props.jobDescription
    };

    return newState;
  }

  onClick = async () => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/jobs/${this.props.jobId}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        auth: {
          username: "f8f43fdf-d20d-4bf1-8f4b-6e963f0a4bc9",
          password: ""
        }
      }
    );
    console.log(res);
    let { jobDescription } = res.data;
    this.setState({ description: jobDescription });
  };

  render() {
    let { description } = this.state;
    let result = ReactHtmlParser(description);
    console.log(result);
    return (
      <div style={{ marginTop: 40 }}>
        <span>{result}</span>
        <a className={styles.seeMoreDetail} onClick={this.onClick}>
          see more
        </a>
      </div>
    );
  }
}
