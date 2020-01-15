import * as React from "react";
import StyledHeader from "../../styleComponents/header";
import StyledButton from "../../styleComponents/button";
import StyledSearchText from "../../styleComponents/searchText";
import StyledLogo from "../../styleComponents/logo";
import StyledLink from "../../styleComponents/link";
import StyledDiv from "../../styleComponents/div";
import { SearchCriteriaInterface } from "../../interfaces/SearchCriteriaInterface";
//esModuleInterop

interface HeaderProp {
  onSearch: (
    searchParams: SearchCriteriaInterface,
    resultsToSkip: number
  ) => void;
}

export default class Header extends React.Component<HeaderProp, {}> {
  onClick = () => {
    this.props.onSearch({}, 0);
  };

  render() {
    return (
      <StyledHeader>
        <StyledLogo src="/public/img/logo.png" />
        <StyledSearchText
          defaultValue="Job Search..."
          type="text"
          inputColor="rebeccapurple"
        />
        <StyledButton onClick={this.onClick}>Search</StyledButton>
        <StyledDiv direction="column" display="inline" marginLeft="200px">
          <StyledLink>Login</StyledLink>
          <StyledLink style={{ marginLeft: "40px" }}>Signup</StyledLink>
          <StyledLink style={{ marginLeft: "40px" }}>Upload CV</StyledLink>
        </StyledDiv>
      </StyledHeader>
    );
  }
}
