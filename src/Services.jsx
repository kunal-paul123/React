import React from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";

function Services() {
  // const { services } = useGlobalContext();
  // console.log(services);
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default Services;
