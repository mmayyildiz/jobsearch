import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.css";

interface JobTypeInterface {
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFilter: () => void;
  jobTypeShow: boolean;
  jobType: string;
}

export default (props: JobTypeInterface) => {
  const { onChangeSelect, onFilter, jobTypeShow, jobType } = props;

  return (
    <div>
      <strong>Job Type : </strong>
      <br /> <br />
      <div className={styles.jobTypeStyle}>
        <select
          name="jobType"
          className={styles.jobTypeSelect}
          onChange={event => onChangeSelect(event)}
          value={jobType}
        >
          <option value="-">Seçiniz</option>
          <option value="permanent">Permanent</option>
          <option value="contract">Contract</option>
          <option value="temp">Temp</option>
          <option value="partTime">Part Time</option>
          <option value="fullTime">Full Time</option>
        </select>
        <FilterButton isShow={jobTypeShow} onClick={onFilter}>
          Filter
        </FilterButton>
      </div>
    </div>
  );
};
