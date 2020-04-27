import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <Link className='link' to='loadmore'>
          <li>Load More</li>
        </Link>
        <Link className='link' to='infinite'>
          <li>Infinite Scroll</li>
        </Link>
      </ul>
    </NavBar>
  );
};

const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  li {
    padding: 0.8em 1em;
  }
  .link {
    text-decoration: none;
    color: #777;
  }
`;

export default Nav;
