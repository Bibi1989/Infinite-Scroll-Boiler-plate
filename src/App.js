import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loaders from "react-loader-spinner";
// import InfiniteScroll from "react-infinite-scroller";
import styled from "styled-components";
import "./App.css";
import InfiniteLoading from "./InfiniteLoading";

// const url = https://picsum.photos/v2/list?page=0&limit=10

function App() {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState(`https://picsum.photos/v2/list`);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(`${url}?page=${page}&limit=10`);
      setImages(images.concat(res.data));
    };
    fetchImage();
  }, []);
  const loadMore = async () => {
    setLoading(true);
    setTimeout(async () => {
      const res = await axios.get(`${url}?page=${page}&limit=10`);
      setImages(images.concat(res.data));
      setLoading(false);
      setPage(page + 1);
    }, 2000);
  };

  console.log(page);
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
const Row = styled.div`
  padding: 5% 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5em;
`;
const Col = styled.div``;
const Image = styled.div`
  img {
    width: 100%;
  }
`;
