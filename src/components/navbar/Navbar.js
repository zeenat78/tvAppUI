import React from "react";
import styled from "styled-components";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
const Navbar = () => {
  return (
    <>
      <NavbarConatiner>
        <div>
          <NavbarLeft />
        </div>
        <div>
          <NavbarRight />
        </div>
      </NavbarConatiner>
    </>
  );
};
//styled components
const NavbarConatiner = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 50px 0px 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default Navbar;
