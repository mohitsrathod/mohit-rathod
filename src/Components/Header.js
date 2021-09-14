import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";
import arrowtwo from "../images/arrowtwo.png";

const Header = () => {
  const [clicked, setClicked] = useState(false); //while reload don't show anything

  return (
    <Main>
      <HomeLink>
        <Link to="/">Home</Link>
      </HomeLink>

      {/* right */}
      <Right>
        <EachLink>
          <a href="/#capablities">My Power</a>
        </EachLink>

        <EachLink>
          <a href="/#mywork">My Work</a>
        </EachLink>

        <EachLink>
          <Link to="/contact">Hire Me</Link>
        </EachLink>

        <EachLink>
          <Link to="/contact">Contact Me</Link>
        </EachLink>
      </Right>

      {clicked ? (
        <>
          <Another>
            <Close onClick={() => setClicked(false)}>
              <img src={arrowtwo} alt="" />
            </Close>

            <InsideItems>
              <EachItem>
                <a href="/#capablities">My Power</a>
              </EachItem>

              <EachItem>
                <a href="/#mywork">My Work</a>
              </EachItem>

              <EachItem>
                <Link to="/contact">Hire Me</Link>
              </EachItem>

              <EachItem>
                <Link to="/contact">Contact Me</Link>
              </EachItem>
            </InsideItems>
          </Another>
        </>
      ) : null}

      {clicked ? null : (
        <Menu onClick={() => setClicked(true)}>
          <img src={arrow} alt="" />
        </Menu>
      )}
    </Main>
  );
};

export default Header;

/**Main */
const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  user-select: none;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;

  position: sticky;
  top: 0;

  a {
    -webkit-tap-highlight-color: transparent;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: left;
  justify-content: left;
`;

const HomeLink = styled.div`
  display: flex;

  margin: 4px 10px;
  flex: 1;

  a {
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    color: #31344b;

    /**The optional third value adds a blur effect to the shadow. 
    -6px -6px top and left and blur it 8px color #ffffff
    */
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    background: e0e5ec;
    border-radius: 10px;
    transition: 0.2s;

    :active {
      color: orange;
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    }
  }
`;

/**Each Link */
const EachLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 4px 10px;

  @media screen and (max-width: 779px) {
    display: none;
  }

  a {
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    color: #31344b;

    /**The optional third value adds a blur effect to the shadow. */
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    background: e0e5ec;
    border-radius: 10px;
    transition: 0.2s;

    :hover {
      transition: 0.2s;
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    }

    :active {
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
      color: orange;
    }
  }
`;

/**RESPONSIVE */

const Menu = styled.div`
  display: flex;

  border: none;
  outline: none;
  user-select: none;
  margin: 10px 18px 10px 18px;
  padding: 10px;
  font-size: 22px;
  color: #31344b;

  /**The optional third value adds a blur effect to the shadow. */
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

  background: e0e5ec;
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;

  :active {
    transition: 0.4s;
    transform: rotateZ(180deg);
  }

  :active {
    transition: 0.4s;
    box-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #a3b1c6;
  }

  img {
    width: 28px;
    height: 26px;
  }

  @media screen and (min-width: 780px) {
    display: none;
  }

  button {
    height: 26px;

    margin: 0px;
    padding: 0px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const Close = styled.div`
  display: flex;

  border: none;
  outline: none;
  user-select: none;
  margin: 10px 18px 10px 18px;
  padding: 10px;
  font-size: 22px;
  color: #31344b;

  /**The optional third value adds a blur effect to the shadow. */
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

  background: e0e5ec;
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;

  width: 28px;

  :active {
    transform: rotateZ(180deg);
    transition: 0.4s;
  }

  :active {
    transition: 0.4s;
    box-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #a3b1c6;
  }

  img {
    width: 28px;
    height: 26px;
    user-select: none;
  }

  @media screen and (min-width: 780px) {
    display: none;
  }

  button {
    height: 26px;

    margin: 0px;
    padding: 0px;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

/**INSIDE MENU */
const Another = styled.div`
  display: flex;
  flex-direction: column;
`;

const InsideItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e0e5ec;
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

  margin: 8px 10px;
  padding: 8px;
  width: 140px;
  height: fit-content;
  border-radius: 16px;

  position: fixed;
  right: 8px;
  top: 60px;

  @media screen and (min-width: 780px) {
    display: none;
  }
`;
const EachItem = styled.div`
  display: flex;
  margin: 8px;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;

  a {
    padding: 10px;
    border-radius: 30px;
    font-size: 20px;
    text-decoration: none;
    user-select: none;
    font-weight: 500;
    color: #31344b;
    width: 110px;

    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

    :active {
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
      color: orange;
    }
  }
`;
