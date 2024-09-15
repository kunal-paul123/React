import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 35%;
  }

  .btn {
    margin-top: 4rem;
  }
`;

export default Error;
