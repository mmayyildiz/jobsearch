import * as React from "react";
import PLinkButton from "../../../styleComponents/paginationLinkButton";

interface PaginationLinkButtonInterface {
  onPaginationChange: (
    start: boolean,
    previous: boolean,
    next: boolean,
    end: boolean
  ) => void;
  start?: boolean;
  previous?: boolean;
  next?: boolean;
  end?: boolean;
}

type ClickType = () => void;

const paginationLinkButton: React.FunctionComponent<PaginationLinkButtonInterface> = props => {
  const { start, previous, next, end } = props;

  const onClick: ClickType = () => {
    props.onPaginationChange(start, previous, next, end);
  };

  let value = "";
  if (start) {
    value = "<<";
  } else if (previous) {
    value = "<";
  } else if (next) {
    value = ">";
  } else if (end) {
    value = ">>";
  }

  return <PLinkButton onClick={onClick}>{value}</PLinkButton>;
};

export default paginationLinkButton;
