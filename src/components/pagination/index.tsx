import * as React from "react";
import PaginationButton from "../../styleComponents/paginationButton";
import PaginationLinkButton from "./paginationLinkButton";
import { SearchCriteriaInterface } from "../../interfaces/SearchCriteriaInterface";
import { RESULTS_TO_TAKE } from "../main";

interface PaginationProps {
  totalResultCount: number;
  onSearch: (
    searchParams: SearchCriteriaInterface,
    resultsToSkip: number
  ) => void;
}

interface PaginationState {
  startPageNumber: number;
  endPageNumber: number;
  newState: boolean;
}

let paginationCount: number = 0;

export default class Pagination extends React.PureComponent<
  PaginationProps,
  PaginationState
> {
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      startPageNumber: 1,
      endPageNumber: 1,
      newState: false
    };
  }

  static getDerivedStateFromProps(
    newProps: PaginationProps,
    prevState: PaginationState
  ) {
    if (!prevState.newState) {
      paginationCount = Math.floor(newProps.totalResultCount / RESULTS_TO_TAKE);
      return {
        startPageNumber: prevState.startPageNumber,
        endPageNumber:
          paginationCount > RESULTS_TO_TAKE ? RESULTS_TO_TAKE : paginationCount
      };
    }

    return null;
  }

  onPaginationChange = (
    start: boolean,
    previous: boolean,
    next: boolean,
    end: boolean
  ) => {
    let { startPageNumber, endPageNumber } = this.state;

    if (start) {
      this.setState({
        startPageNumber: 1,
        endPageNumber:
          paginationCount > RESULTS_TO_TAKE ? RESULTS_TO_TAKE : paginationCount,
        newState: true
      });
    } else if (previous) {
      this.setState({
        startPageNumber: startPageNumber - 1,
        endPageNumber: endPageNumber - 1,
        newState: true
      });
    } else if (next) {
      this.setState({
        startPageNumber: startPageNumber + 1,
        endPageNumber: endPageNumber + 1,
        newState: true
      });
    } else if (end) {
      this.setState({
        startPageNumber: paginationCount - RESULTS_TO_TAKE,
        endPageNumber: paginationCount,
        newState: true
      });
    }
  };

  onPageChange = async (pageNumber: number) => {
    this.props.onSearch(null, pageNumber * RESULTS_TO_TAKE - RESULTS_TO_TAKE);
  };

  render() {
    const comp: Array<any> = [];
    let { startPageNumber, endPageNumber } = this.state;

    console.log(`START : ${startPageNumber} --- END : ${endPageNumber}`);

    if (paginationCount > 0) {
      if (startPageNumber > 1) {
        if (startPageNumber > 2) {
          let startPageButton = (
            <PaginationLinkButton
              onPaginationChange={this.onPaginationChange}
              key={startPageNumber - 2}
              start={true}
            />
          );
          comp.push(startPageButton);
        }

        let previousButton = (
          <PaginationLinkButton
            onPaginationChange={this.onPaginationChange}
            key={startPageNumber - 1}
            previous={true}
          />
        );
        comp.push(previousButton);
      }

      for (let index = startPageNumber; index <= endPageNumber; index++) {
        const pageButton = (
          <PaginationButton
            onClick={() => this.onPageChange(index)}
            key={index}
          >
            {index}
          </PaginationButton>
        );
        comp.push(pageButton);
      }

      if (endPageNumber < paginationCount) {
        let nextButton = (
          <PaginationLinkButton
            onPaginationChange={this.onPaginationChange}
            key={endPageNumber + 1}
            next={true}
          />
        );
        comp.push(nextButton);

        if (endPageNumber + 1 < paginationCount) {
          let lastPageButton = (
            <PaginationLinkButton
              onPaginationChange={this.onPaginationChange}
              key={endPageNumber + 2}
              end={true}
            />
          );

          comp.push(lastPageButton);
        }
      }
    }

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "300px",
          justifyContent: "center"
        }}
      >
        {...comp}
      </div>
    );
  }
}
