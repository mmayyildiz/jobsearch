import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.css";

interface PostedByInterface {
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFilter: () => void;
  postedByShow: boolean;
  postedBy: string;
}

export default (props: PostedByInterface) => {
  const { onChangeSelect, onFilter, postedByShow, postedBy } = props;

  return (
    <div className={styles.postedByStyle}>
      <strong>Posted By : </strong>
      <br />
      <br />
      <select
        name="postedBy"
        onChange={event => onChangeSelect(event)}
        className={styles.postedBySelect}
        value={postedBy}
      >
        <option value="-">Seçiniz</option>
        <option value="postedByRecruitmentAgency">Recruitment Agency</option>
        <option value="postedByDirectEmployer">Direct Employer</option>
      </select>
      <FilterButton isShow={postedByShow} onClick={onFilter}>
        Filter
      </FilterButton>
    </div>
  );
};
