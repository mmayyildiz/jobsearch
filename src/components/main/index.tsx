import * as React from "react";
import Header from "../header";
import Menu from "../menu";
import Job from "../job";
import Footer from "../footer";
import JobInterface from "../../interfaces/JobInterface";
import { SearchCriteriaInterface } from "../../interfaces/SearchCriteriaInterface";
import axios from "axios";
import * as styles from "./index.css";
import Pagination from "../pagination";
import LinkedinButton from "../../styleComponents/linkedinButton";
import FacebookButton from "../../styleComponents/facebookButton";
import TwitterButton from "../../styleComponents/twitterButton";
import Loading from "../loading";

interface HomeProps {
  name: string;
  age: number;
}

interface StateInterface {
  jobs: Array<JobInterface>;
  loading: boolean;
}

let totalResultCount: number = 0;
let lastSearch: SearchCriteriaInterface = null;

export const RESULTS_TO_TAKE = 10;

export default class Home extends React.Component<HomeProps, StateInterface> {
  state: StateInterface = {
    jobs: [],
    loading: false
  };

  componentDidMount = () => {
    this.onSearch({ keyword: "software developer" }, 0);
  };

  onSearch = async (
    searchParams: SearchCriteriaInterface,
    resultsToSkip: number
  ) => {
    console.log(searchParams);
    this.setState({ jobs: [], loading: true });

    if (searchParams) {
      lastSearch = searchParams;
    }

    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    console.log(searchParams);
    const res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search?",
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        auth: {
          username: "f8f43fdf-d20d-4bf1-8f4b-6e963f0a4bc9",
          password: ""
        },
        params: {
          ...lastSearch,
          resultsToTake: RESULTS_TO_TAKE,
          resultsToSkip
        }
      }
    );
    // .catch(err => {
    //   console.error(err.message); // "Request failed with status code 401"
    //   console.error(err.response.status); // 401 "Unauthorized"
    // });
    console.log(res);
    let { results, totalResults } = res.data;
    totalResultCount = totalResults;
    this.setState({ jobs: results, loading: false });
  };

  render() {
    const { jobs, loading } = this.state;
    const jobsComp = jobs.map((job: JobInterface, index: number) => {
      return <Job key={index} {...job} />;
    });

    return (
      <React.Fragment>
        <Header onSearch={this.onSearch} />
        <div className={styles.contentStyle}>
          <Menu onSearch={this.onSearch} />
          <TwitterButton>t</TwitterButton>
          <LinkedinButton>In</LinkedinButton>
          <FacebookButton>f</FacebookButton>
          <div className={styles.jobListStyle}>
            {loading && <Loading />}

            {!loading && (
              <React.Fragment>
                {jobsComp}
                <Pagination
                  onSearch={this.onSearch}
                  totalResultCount={totalResultCount}
                />
              </React.Fragment>
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
