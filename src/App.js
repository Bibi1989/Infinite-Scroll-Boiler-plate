import React from "react";
import styled from "styled-components";
import "./App.css";
import InfiniteLoading from "./InfiniteLoading";

// const url = https://picsum.photos/v2/list?page=0&limit=10

function App() {
  return (
    <Container>
      <InfiniteLoading />
    </Container>
  );
}

export default App;

const Container = styled.div`
  .loader {
    text-align: center;
    padding: 1em 3em;
    background: orangered;
    color: white;
    border-radius: 30px;
    margin: 3em auto;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
  }
`;
