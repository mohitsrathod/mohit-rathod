import React, { useState } from "react";
import styled from "styled-components";
import fb from "../images/fb.webp";
import ig from "../images/ig.png";
import tw from "../images/tw.png";
import ln from "../images/ln.png";
import git from "../images/git.png";
import myimg from "../images/myimg.jpeg";
import Ability from "./Ability";
import follow from "../images/follow.png";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Main>
      <Head>
        <span>Make your Website / Webapp / Web Project with me</span>
      </Head>

      {/* header top */}

      {clicked ? null : (
        <Button>
          <button onClick={() => setClicked(true)}>
            Follow + <img src={follow} alt="follow" />
          </button>
        </Button>
      )}

      {clicked ? (
        <>
          <Button>
            <button onClick={() => setClicked(false)}>
              Follow + <img src={follow} alt="follow" />
            </button>
          </Button>
          <Icons>
            <EachIcon>
              <a
                href="https://www.facebook.com/mohit.rathod.319247/"
                target="_blank"
              >
                <img src={fb} alt="fb" />
              </a>
            </EachIcon>

            <EachIcon>
              <a href="https://www.instagram.com/mohitsrathod_" target="_blank">
                <img src={ig} alt="ig" />
              </a>
            </EachIcon>

            <EachIcon>
              <a href="https://twitter.com/mohitraathod" target="_blank">
                <img src={tw} alt="tw" />
              </a>
            </EachIcon>

            <EachIcon>
              <a href="" target="_blank">
                <img src={ln} alt="ln" />
              </a>
            </EachIcon>

            <EachIcon>
              <a href="https://github.com/mohitsrathod" target="_blank">
                <img src={git} alt="git" />
              </a>
            </EachIcon>
          </Icons>
        </>
      ) : null}

      {/* main bottom */}
      <Homee>
        {/* about */}
        <About>
          <p>
            Hi, I am Mohit Rathod. I love to create new things with programming.
            <span>
              {" "}
              I love Programming, Physics, Electronics, Mechanics and Electrical
              stuff.{" "}
            </span>
            I am learning to combine these all things together and make
            automated machines or anything i want(as a side Hustle). But right
            now my main focus is programming, so that i can improve my logic to{" "}
            <span> Build anything i want...</span>
          </p>
          <img src={myimg} alt="img" />
        </About>

        <Ability />
      </Homee>

      <Footer>
        <span>
          Copyright © 2021, portfoilo website designed & managed by mohit rathod
        </span>
      </Footer>
    </Main>
  );
};

export default Home;

const Footer = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 22px;
  font-weight: 500;
  margin: 10px;
  user-select: none;

  span {
    padding: 10px;
    border-radius: 10px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
  }
`;

/**Main */
const Main = styled.div`
  -webkit-tap-highlight-color: transparent;
`;

/**HEAD */
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 0px 0px;

  span {
    user-select: none;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

    @media screen and (max-width: 779px) {
      font-size: 24px;
    }

    font-size: 30px;
    font-weight: 500;
    color: red;
    text-align: center;

    :hover {
      box-shadow: -1px -1px 2px #ffffff, 1px 1px 2px #a3b1c6;
    }
  }
`;

/**HOME */
const Homee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**About */
const About = styled.div`
  display: flex;
  margin: 40px 10px 20px 10px;
  justify-content: center;
  align-items: center;

  padding: 0px 160px;
  @media screen and (max-width: 1125px) {
    padding: 0px;
  }

  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  span {
    color: blue;
    word-spacing: 2px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
  }

  p {
    word-spacing: 2px;
    font-size: 22px;
    font-weight: 500;
    padding: 20px 40px 20px 20px;
    margin-right: -20px;
    letter-spacing: 1px;
    border-radius: 16px;
    text-align: center;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    user-select: none;

    @media screen and (max-width: 700px) {
      margin-right: 0px;
      padding: 36px 10px 10px 10px;
    }
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 16px;
    padding: 10px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

    user-select: none;

    @media screen and (max-width: 700px) {
      margin-bottom: -40px;
    }

    @media screen and (max-width: 860px) {
      width: 200px;
      height: 200px;
    }
  }
`;

//
//
//
/**icons */
const Icons = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: 26px;
  bottom: 76px;
  padding: 4px;
  border-radius: 16px;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
`;

/**socialicons */
const EachIcon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;

  a {
    margin: 10px;
    padding: 10px;
    box-shadow: 4px 4px 6px #a3b1c6, 4px -4px 6px #ffffff;
    -webkit-tap-highlight-color: transparent;
    border-radius: 16px;

    :hover {
      box-shadow: -1px -1px 2px #ffffff, 1px 1px 2px #a3b1c6;
    }
  }

  img {
    width: 40px;
    height: 36px;
    border-radius: 16px;
    box-shadow: none;
  }
`;

/**two buttons */

const Button = styled.div`
  padding: 8px;
  background: #eceef3;

  img {
    height: 22px;
    width: 24px;
  }

  button {
    padding: 10px;
    margin: 10px;
    color: red;
    font-size: 22px;
    font-weight: 800;
    border-radius: 16px;
    cursor: pointer;
    border: none;
    user-select: none;
    outline: none;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

    position: fixed;
    bottom: 10px;

    :active {
      color: black;
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    }
  }
`;
