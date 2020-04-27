import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import axios from "axios";

const Slider = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  };

  const [images, setImages] = useState([]);
  const [url] = useState(`https://picsum.photos/v2/list`);
  //   const [page, setPage] = useState(0);
  //   const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    const res = await axios.get(`${url}?page=${0}&limit=3`);
    setImages(images.concat(res.data));
  };

  useEffect(() => {
    fetchImage();

    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      <Swiper {...params}>
        <Image>
          <img src='../assets/fashion5.jpg' alt='slides' />
        </Image>
        <Image>
          <img src='../assets/fashion6.jpg' alt='slides' />
        </Image>
        <Image>
          <img src='../assets/fashion7.jpg' alt='slides' />
        </Image>
        <Image>
          <img src='../assets/fashion8.jpg' alt='slides' />
        </Image>
        <Image>
          <img src='../assets/fashion5.jpg' alt='slides' />
        </Image>
      </Swiper>
    </Container>
  );
};

const Container = styled.div``;
const Image = styled.div`
  height: 80vh;

  img {
    width: 100%;
    min-height: 100%;
  }
`;

export default Slider;
