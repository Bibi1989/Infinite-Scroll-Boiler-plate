import React from "react";
import styled from "styled-components";
import "./App.css";
import InfiniteLoading from "./InfiniteLoading";
import LoadingMore from "./LoadingMore";
import Slider from "./Slider";
import "swiper/css/swiper.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// const url = https://picsum.photos/v2/list?page=0&limit=10

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Container>
          <Nav />
          <Slider />
          <Route exact path='/loadmore'>
            <LoadingMore />
          </Route>
          <Route exact path='/infinite'>
            <InfiniteLoading />
          </Route>
        </Container>
      </Switch>
    </BrowserRouter>
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
