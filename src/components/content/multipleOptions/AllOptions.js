import React from "react";
import styled from "styled-components";
import Top10Movies from "./Top10Movies";
import Social from "./Social";
import FavoriteMusic from "./FavoriteMusic";
const AllOptions = () => {
  return (
    <>
      <OptionsContainer>
        <div className="row">
          <div className=" col-md-4 col-sm-12 col-xs-12">
            <Top10Movies />
          </div>
          <div className=" col-md-4 col-sm-12 col-xs-12">
            <Social />
          </div>
          <div className=" col-md-4 col-sm-12 col-xs-12">
            <FavoriteMusic />
          </div>
        </div>
      </OptionsContainer>
    </>
  );
};
//styled components
const OptionsContainer = styled.div`
  margin: 50px 50px 0px 50px;
  @media (min-width: 1900px) {
    margin: 0px;
  }
`;

export default AllOptions;
