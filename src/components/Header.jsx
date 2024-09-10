import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="image" src="./images/photo.png" alt="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
`;

export default Header;
