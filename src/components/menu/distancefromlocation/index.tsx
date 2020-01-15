import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.css";

interface DistanceFromLocationInterface {
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onFilter: () => void;
  distanceFromLocationShow: boolean;
  distanceFromLocation: number;
}

export default (props: DistanceFromLocationInterface) => {
  const {
    onChangeSelect,
    onFilter,
    distanceFromLocationShow,
    distanceFromLocation
  } = props;

  return (
    <div className={styles.distanceFromLocationStyle}>
      <strong>Distance from location : </strong>
      <br />
      <br />
      <select
        name="distanceFromLocation"
        className={styles.distanceFromLocationSelect}
        onChange={event => onChangeSelect(event)}
        value={distanceFromLocation}
      >
        <option value={0}>Seçiniz</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </select>
      <FilterButton isShow={distanceFromLocationShow} onClick={onFilter}>
        Filter
      </FilterButton>
    </div>
  );
};
