import React from "react";
import p3 from "../../assets/p3.png";
import styled from "styled-components";
const Controler = () => {
  return (
    <div>
      <ImageDiv>
        <img src={p3} alt="lol"></img>
      </ImageDiv>
    </div>
  );
};
//styled components
const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 0px;
  }
`;

export default Controler;
