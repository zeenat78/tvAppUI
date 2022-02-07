import React from "react";
import Card from "../../UI/Card";
import { top10Movies } from "../../../util";
import "../../../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Top10Movies = () => {
  return (
    <>
      <div>
        <MoviesContainer>
          <div className="d-flex justify-content-around">
            <div>
              <h4>Top 10 From this Week</h4>
              <p>Based on your preferences</p>
            </div>
            <div className="w-10">
              <Card backgroundcolor="#f2f7f4" borderRadius="5px">
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="text-secondary fs-12"
                ></FontAwesomeIcon>
              </Card>
            </div>
          </div>
        </MoviesContainer>
        <div>
          {top10Movies.map((movie) => {
            return (
              <Card key={movie.id}>
                <img src={movie["image_url"]} className="img" alt="lol"></img>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
//styled components
const MoviesContainer = styled.div`
  & h4 {
    font-weight: bold;
    font-size: 25px;
  }
  & p {
    color: #d8dfeb;
  }
`;

export default Top10Movies;
