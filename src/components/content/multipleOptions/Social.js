import React from "react";
import Card from "../../UI/Card";
import "../../../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import p1 from "../../../../src/assets/p1.png";
const Top10Movies = () => {
  const image_url = p1;
  return (
    <>
      <div>
        <MoviesContainer>
          <div className="d-flex justify-content-between">
            <div>
              <h4>Social</h4>
              <p>Stay connected with friends</p>
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
          <Card backgroundcolor="#fadb93">
            <ImageDiv>
              <img src={image_url} alt="lol"></img>
            </ImageDiv>
          </Card>
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
const ImageDiv = styled.div`
  width: 100%;
  height: 52vh;
  /* padding:10px; */
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  & img {
    width: 100%;
    height: 52vh;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default Top10Movies;
