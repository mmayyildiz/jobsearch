import * as React from "react";
import {
  SearchCriteriaInterface,
  SearchTopicInterface
} from "../../interfaces/SearchCriteriaInterface";
import ShowInterface from "../../interfaces/ShowInterface";
import * as styles from "./index.css";
import Keyword from "./keyword";
import Location from "./location";
import JobType from "./jobtype";
import DistanceFromLocation from "./distancefromlocation";
import PostedBy from "./postedBy";
import Salary from "./salary";
import ToogleButton from "../../styleComponents/toggleMenu";

interface MenuInterface {
  onSearch: (
    searchParams: SearchCriteriaInterface,
    resultsToSkip: number
  ) => void;
}

const jobTypes: Array<string> = [
  "permanent",
  "contract",
  "temp",
  "partTime",
  "fullTime"
];

const postedBys: Array<string> = [
  "postedByRecruitmentAgency",
  "postedByDirectEmployer"
];

let toggleContent = "<";

export default class Menu extends React.Component<
  MenuInterface,
  SearchTopicInterface
> {
  criteria: SearchCriteriaInterface = {};

  state: SearchTopicInterface = {
    distanceFromLocation: 0,
    graduate: false,
    jobType: "-",
    keywords: "",
    locationName: "",
    postedBy: "-",
    resultsToSkip: 0,
    resultsToTake: 10,
    minimumSalary: 0,
    maximumSalary: 0,
    distanceFromLocationShow: false,
    graduateShow: false,
    jobTypeShow: false,
    keywordsShow: false,
    locationNameShow: false,
    postedByShow: false,
    minimumSalaryShow: false,
    maximumSalaryShow: false,
    menuOpen: true
  };

  toggleMenu = () => {
    if (this.state.menuOpen) {
      toggleContent = ">";
    } else {
      toggleContent = "<";
    }

    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let newShowObj: ShowInterface = {};

    Object.keys(this.state)
      .filter(k => k.includes("Show") && this.state[k] === true)
      .forEach(k => {
        newShowObj[k] = false;
      });

    const objKey = (event.target as HTMLInputElement).name + "Show";
    newShowObj[objKey] = true;

    this.setState({
      ...this.state,
      ...newShowObj
    });
  };

  onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let newShowObj: ShowInterface = {};

    const objKey = event.target.name + "Show";

    Object.keys(this.state)
      .filter(k => k.includes("Show") && this.state[k] === true)
      .forEach(k => {
        newShowObj[k] = false;
      });

    newShowObj[objKey] = true;

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      ...newShowObj
    });

    if (event.target.name === "jobType") {
      jobTypes.forEach(item => (this.criteria[item] = false));
      this.criteria[event.target.value] = true;
    } else if (event.target.name === "postedBy") {
      postedBys.forEach(item => (this.criteria[item] = false));
      this.criteria[event.target.value] = true;
    } else {
      this.criteria[event.target.name] = +event.target.value;
    }
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.name === "minimumSalary" ||
      event.target.name === "maximumSalary"
    ) {
      if (
        event.target.name === "minimumSalary" &&
        +event.target.value > this.state.maximumSalary
      ) {
        this.setState({
          ...this.state,
          [event.target.name]: +event.target.value,
          maximumSalary: +event.target.value
        });
        this.criteria.minimumSalary = +event.target.value; //this.state doesn't work ?
        this.criteria.maximumSalary = +event.target.value; //this.state doesn't work ?
      } else if (
        event.target.name === "maximumSalary" &&
        +event.target.value < this.state.minimumSalary
      ) {
        this.setState({
          ...this.state,
          [event.target.name]: +event.target.value,
          minimumSalary: +event.target.value
        });
        this.criteria.minimumSalary = +event.target.value; //this.state doesn't work ?
        this.criteria.maximumSalary = +event.target.value; //this.state doesn't work ?
      } else {
        this.setState({
          ...this.state,
          [event.target.name]: +event.target.value
        });
        this.criteria[event.target.name] = +event.target.value;
      }
    } else {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      });
      this.criteria[event.target.name] = event.target.value;
    }
  };

  onFilter = () => {
    this.props.onSearch(this.criteria, 0);
  };

  render() {
    const {
      keywords,
      locationName,
      jobType,
      distanceFromLocation,
      postedBy,
      minimumSalary,
      maximumSalary,
      distanceFromLocationShow,
      graduateShow,
      jobTypeShow,
      keywordsShow,
      locationNameShow,
      postedByShow,
      minimumSalaryShow,
      maximumSalaryShow,
      menuOpen
    } = this.state;

    return (
      <React.Fragment>
        <ToogleButton onClick={this.toggleMenu}>{toggleContent}</ToogleButton>

        {menuOpen && (
          <div className={styles.menuStyle}>
            <Keyword
              onChangeInput={this.onChangeInput}
              onFilter={this.onFilter}
              handleKeyPress={this.handleKeyPress}
              keywords={keywords}
              keywordsShow={keywordsShow}
            />

            <Location
              onChangeInput={this.onChangeInput}
              onFilter={this.onFilter}
              handleKeyPress={this.handleKeyPress}
              locationName={locationName}
              locationNameShow={locationNameShow}
            />

            <JobType
              onChangeSelect={this.onChangeSelect}
              onFilter={this.onFilter}
              jobType={jobType}
              jobTypeShow={jobTypeShow}
            />

            <DistanceFromLocation
              onChangeSelect={this.onChangeSelect}
              onFilter={this.onFilter}
              distanceFromLocation={distanceFromLocation}
              distanceFromLocationShow={distanceFromLocationShow}
            />

            <PostedBy
              onChangeSelect={this.onChangeSelect}
              onFilter={this.onFilter}
              postedBy={postedBy}
              postedByShow={postedByShow}
            />

            <Salary
              onChangeInput={this.onChangeInput}
              onFilter={this.onFilter}
              handleKeyPress={this.handleKeyPress}
              minimumSalary={minimumSalary}
              minimumSalaryShow={minimumSalaryShow}
              maximumSalary={maximumSalary}
              maximumSalaryShow={maximumSalaryShow}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
