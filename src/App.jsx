import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";





const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>The Wild Oasis</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Input type="number" placeholder="Number of guest" />
        <Input type="number" placeholder="Number of guest" />
      </StyledApp>
    </>
  );
}

export default App;
