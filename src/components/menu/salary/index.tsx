import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.scss";

interface SalaryInterface {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFilter: () => void;
  minimumSalary: number;
  maximumSalary: number;
  minimumSalaryShow: boolean;
  maximumSalaryShow: boolean;
}

export default (props: SalaryInterface) => {
  const {
    onChangeInput,
    handleKeyPress,
    onFilter,
    minimumSalary,
    maximumSalary,
    minimumSalaryShow,
    maximumSalaryShow
  } = props;

  return (
    <div className={styles.salaryStyle}>
      <strong>Salary : </strong>
      <br />
      <br />
      <input
        type="number"
        name="minimumSalary"
        className={styles.minimumSalaryInput}
        onChange={event => onChangeInput(event)}
        onKeyDown={event => handleKeyPress(event)}
        value={minimumSalary}
        min="0"
        step="1000"
      ></input>
      <span> - </span>
      <input
        type="number"
        name="maximumSalary"
        className={styles.maximumSalaryInput}
        onChange={event => onChangeInput(event)}
        onKeyDown={event => handleKeyPress(event)}
        value={maximumSalary}
        min="0"
        step="1000"
      ></input>
      <FilterButton
        isShow={minimumSalaryShow || maximumSalaryShow}
        onClick={onFilter}
      >
        Filter
      </FilterButton>
    </div>
  );
};
