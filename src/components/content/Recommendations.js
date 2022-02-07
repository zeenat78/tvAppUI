import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import MoviesCard from "./MoviesCard";

const Recommendations = () => {
  return (
    <>
      <RecommendationContainer>
        <RecommendationHeader>
          <div>
            <h2>Movies You Might Like</h2>
            <p>Based on your watch history</p>
          </div>
          <SliderIcons>
            <Card>
              <div className="bg-light rounded-2">
                <h3 className="text-secondary fs-2 mx-2 my-0 ">{`<`}</h3>
              </div>
            </Card>
            <Card>
              <div className="bg-light rounded-2 ">
                <h3 className="text-secondary fs-2 mx-2 my-0">{`>`}</h3>
              </div>
            </Card>
          </SliderIcons>
        </RecommendationHeader>
        <MoviesCard />
      </RecommendationContainer>
    </>
  );
};
//styled components
const RecommendationContainer = styled.div`
  margin: 50px 50px 0px 50px;
  & h2 {
    font-weight: bold;
    font-size: 30px;
    @media (max-width: 500px) {
      font-weight: 500;
    }
  }
  & p {
    color: #d8dfeb;
  }
  @media (min-width: 1900px) {
    margin: 0px;
  }
`;
const RecommendationHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SliderIcons = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 1900px) {
    display: none;
  }
`;
export default Recommendations;
