import React from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faComments as farComments,
  faUser as farUser,
  faBell as farBell,
} from "@fortawesome/free-regular-svg-icons";
const NavbarRight = () => {
  return (
    <>
      <div style={{ display: "flex", maxWidth: "35%", alignItems: "center" }}>
        <SearchIconDiv className="rounded-start">
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconDiv>

        <Search
          type="text"
          placeholder=" search a movie or song.."
          className="rounded-end"
        ></Search>

        <Card backgroundcolor="#1f0ee3" borderRadius="10px" cardMargin="2px">
          <FontAwesomeIcon
            icon={farComments}
            className="text-light fs-4 "
          ></FontAwesomeIcon>
        </Card>
        <Card backgroundcolor="#f2f7f4" borderRadius="5px">
          <FontAwesomeIcon
            icon={farUser}
            className="text-secondary fs-4"
          ></FontAwesomeIcon>
        </Card>

        <Card backgroundcolor="#f2f7f4" borderRadius="5px">
          <FontAwesomeIcon
            icon={farBell}
            className="text-secondary fs-4"
          ></FontAwesomeIcon>
        </Card>
      </div>
    </>
  );
};
//styled components
const SearchIconDiv = styled.span`
  background-color: #d8dfeb;
  padding: 9px 2px 5px 9px;
  color: #828587;
  height: 40px;
  @media (max-width: 1900px) {
    display: none;
  }
`;
const Search = styled.input`
  width: auto;
  border: none;
  background-color: #d8dfeb;
  padding: 0;
  height: 40px;
  margin-right: 2px;
  @media (max-width: 1900px) {
    display: none;
  }
`;

export default NavbarRight;
