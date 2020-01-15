import * as React from "react";
import FilterButton from "../filterButton";
import * as styles from "./index.css";

interface KeywordInterface {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFilter: () => void;
  keywordsShow: boolean;
  keywords: string;
}

export default (props: KeywordInterface) => {
  const {
    onChangeInput,
    handleKeyPress,
    onFilter,
    keywordsShow,
    keywords
  } = props;

  return (
    <div>
      <strong>Keywords : </strong>
      <br /> <br />
      <div className={styles.keywordStyle}>
        <input
          type="text"
          name="keywords"
          className={styles.keywordInput}
          onChange={event => onChangeInput(event)}
          onKeyDown={event => handleKeyPress(event)}
          value={keywords}
        />
        <FilterButton isShow={keywordsShow} onClick={onFilter}>
          Filter
        </FilterButton>
      </div>
    </div>
  );
};
