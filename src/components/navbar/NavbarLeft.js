import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
const NavbarLeft = () => {
  return (
    <>
      <Container>
        <Avatar />
        <Divider />
        <div className="d-flex">
          <h2>20° </h2>
          <FontAwesomeIcon
            icon={faWind}
            className="text-secondary mt-2 fs-4 "
          />
        </div>
        <Divider />
        <h3>Wed, 16 Aug 10:24PM</h3>
      </Container>
    </>
  );
};
//styled components
export const Container = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;

  & h2 {
    font-weight: 500;
    font-size: 30px;
  }
  & h3 {
    font-weight: 500;
    font-size: 25px;
  }
`;
const Avatar = styled.div`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #322252;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Divider = styled.div`
  width: 2px;
  height: 30px;
  background-color: #edeff2;
  margin-top: 5px;
  margin: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;
export default NavbarLeft;
