import React from "react";
import error from "../images/error.gif";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Main>
      <Info>
        <span> We can't find what you are looking for...</span>
      </Info>

      <Homepage>
        <a href="/">Go Back to Homepage</a>
      </Homepage>

      <Gif>
        <img src={error} alt="img"></img>
      </Gif>
    </Main>
  );
};

export default ErrorPage;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: white;
`;

const Info = styled.div`
  margin: 20px;

  background: white;

  span {
    margin: 10px;
    padding: 10px;
    font-size: 30px;
    font-weight: 500;
    background: white;
  }
`;

const Gif = styled.div`
  background: white;

  display: flex;
  img {
    width: 100%;
    height: 100%;
    user-select: none;
  }
`;

const Homepage = styled.div`
  background: white;

  display: flex;
  flex-wrap: wrap;
  a {
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
    font-size: 26px;
    font-weight: 500;

    color: black;
    border-radius: 8px;
    text-decoration: none;
    background: white;

    :hover {
      border: 2px solid blue;
      background-color: white;
      color: black;
    }
  }
`;
