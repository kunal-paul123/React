import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 2rem;

    li {
      list-style: none;

      .navbar-link {
        text-decoration: none;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`;

export default Navbar;
