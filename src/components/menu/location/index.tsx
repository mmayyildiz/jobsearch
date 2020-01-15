import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.css";

interface LocationInterface {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFilter: () => void;
  locationNameShow: boolean;
  locationName: string;
}

export default (props: LocationInterface) => {
  const {
    onChangeInput,
    handleKeyPress,
    onFilter,
    locationNameShow,
    locationName
  } = props;

  return (
    <div>
      <strong>Location : </strong>
      <br /> <br />
      <div className={styles.locationStyle}>
        <input
          type="text"
          name="locationName"
          className={styles.locationInput}
          onChange={event => onChangeInput(event)}
          onKeyDown={event => handleKeyPress(event)}
          value={locationName}
        />
        <FilterButton isShow={locationNameShow} onClick={onFilter}>
          Filter
        </FilterButton>
      </div>
    </div>
  );
};
