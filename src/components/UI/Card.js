import React from "react";
import styled from "styled-components";
const Card = (props) => {
  return (
    <CardDiv
      background={props.backgroundcolor}
      radius={props.borderRadius}
      margin={props.cardMargin}
    >
      {props.children}
    </CardDiv>
  );
};
//styled components
export const CardDiv = styled.div`
     padding: 0.4rem ;
    margin:${(props) => (props.margin ? props.margin : "10px")};
    border-radius:${(props) => (props.radius ? props.radius : "20px")};
    background-color: ${(props) =>
      props.background ? props.background : "white"};
}
    
`;
export default Card;
