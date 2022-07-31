import React from 'react'
import styled from 'styled-components';
const Header = () => {
  return (
    <Nav>
        <Logo src="./images/logo.svg" />
        <NavMenu>
            <a href="/">
                <img src="./images/home-icon.svg" alt="" />
                <span>Home</span>
            </a>
            <a href="#">
                <img src="./images/search-icon.svg" alt="" />
                <span>Search</span>
            </a>
            <a href="#">
                <img src="./images/watchlist-icon.svg" alt="" />
                <span>Watchlist</span>
            </a>
            <a href="#">
                <img src="./images/original-icon.svg" alt="" />
                <span>original</span>
            </a>
            <a href="/detail">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>movie</span>
            </a>
            <a href="#">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>series</span>
            </a>
        </NavMenu>
        <UserImg src="/images/comment_2.png" />
    </Nav>
  )
}

export default Header


const Nav = styled.nav`
  min-height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.22px;
        text-transform: uppercase;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
    span:after {
        transform: scaleX(1);
        opacity: 1;
    }
    }
  }
`;

const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer; 
`;