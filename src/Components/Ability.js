import React, { useState } from "react";
import styled from "styled-components";
import gifone from "../images/gifone.gif";
import technologies from "../images/technologies.gif";
import myskills from "../images/myskills.gif";
import linksApi from "./linksApi";

const Ability = () => {
  // console.log(linksApi);

  return (
    <Main>
      <Capablities id="capablities">
        {/* heading */}
        <Heading>
          <p>
            Okay... it's time to show what can i do for you, what Technologies
            to be used TO MAKE YOUR Webapp / Website / Webproject &
            <a href="#important">IMPORTANT</a>
            click to see what is most important to read...
          </p>
        </Heading>

        <ResponsiveandTech>
          {/* responsive */}
          <Responsive>
            <ResponsiveAnother>
              <span>Fully Responsive Website</span>
              <img src={gifone} alt="gif" />
            </ResponsiveAnother>
          </Responsive>

          {/* Technologies */}
          <Technologies>
            <ResponsiveAnother>
              <span>Technologies to be used</span>
              <img src={technologies} alt="tech" />
            </ResponsiveAnother>
          </Technologies>
        </ResponsiveandTech>

        {/* prosolver */}
        <ProSolver id="important">
          <p>
            <span>IMPORTANT</span>
            There are no limitations to make new things.. I look forward to
            solving new problems and making new things. Learning new things may
            take some time, but there is no chance to giveup!!!
          </p>
        </ProSolver>

        <PercentagendProjectButton>
          {/* percentage */}
          <Percentage>
            <ResponsiveAnother>
              <span>My Skillset</span>
              <img src={myskills} alt="gif" />
            </ResponsiveAnother>
          </Percentage>

          {/* myprojects */}
          <Myprojects>
            <ResponsiveAnother id="mywork">
              <span>Some of my project Links</span>

              <Links>
                {/* we can pass props to get each value 
                 but we have to write too much to get each value
                 so use map method to loop througn each value stored in array */}
                {/* what map method says,
                 > currElm : means which is the first element */}
                {/* linksapi.map(() => {})
                 because i want to render map method as a function */}
                {linksApi.map(
                  /* returned a fat arrow function*/
                  (currElm) => {
                    /**destructure names from linksApi.js 
                    declare each property = currElm*/

                    /*  EITHER use object desuructuring like this to set 
                    properties(props) like links and linkname 
                    const { link, linkname } = currElm; 
                      <a href={currElm.link} target="_blank">
                          {currElm.linkname}
                        </a>
                        or get value by passing props
                       */

                    return (
                      <>
                        <a href={currElm.link} target="_blank">
                          {currElm.linkname}
                        </a>
                      </>
                    );
                  }
                )}
              </Links>
            </ResponsiveAnother>
          </Myprojects>
        </PercentagendProjectButton>

        <FunandPro>
          {/* functions */}
          <Functions>
            <span>Functionalities</span>

            <p>Dark mode</p>
            <p>User authentication</p>
            <p>Crazy UI/UX website designs</p>
            <p>Full responsive websites</p>
            <p>Automated chat bots</p>
            <p>Payment methods</p>
            <p>
              Update/upload your new poducts, get data of your customers. Many
              Functions available. No need to hire website manager
            </p>
            <h2>OR TELL ME WHAT DO YOU WANT</h2>
          </Functions>

          {/* projects */}
          <Projects>
            <span>What I can Make</span>
            <p>Chat systems</p>
            <p>Bots</p>
            <p>Ecommerce Site</p>
            <p>Restaurant site</p>
            <p>Crazy big Blogs</p>
            <p>question/answer site</p>
            <p>Crazy Webapps</p>
            <MainHd>
              <h2>OR WEBSITES / WEBAPPS AS YOU NEED</h2>
            </MainHd>
          </Projects>
        </FunandPro>
      </Capablities>
    </Main>
  );
};

export default Ability;

const Main = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin: 10px;
`;

const Capablities = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  a {
    width: fit-content;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    color: red;
    margin: 0px 10px;
    border-radius: 4px;
    text-decoration: none;
    :hover {
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
      color: black;
    }
    ::before {
      content: " ";
    }
    ::after {
      content: " ";
    }
  }

  p {
    line-height: 1.2;
    letter-spacing: 1px;
    padding: 8px;
    font-size: 22px;
    color: #2a2e4d;
    font-weight: 500;
    border-radius: 8px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
  }
`;

const FunandPro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }

  span {
    width: fit-content;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 500;
    padding: 6px;
    margin: 10px;
    color: #31344b;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
  }

  p {
    ::before {
      content: "> ";
    }

    font-size: 24px;
    color: #2a2e4d;
    border-radius: 12px;
    padding: 4px 8px;
    margin: 10px;
    text-align: center;
  }

  h2 {
    font-weight: 500;
    margin: 10px;
    padding: 8px;
    font-size: 26px;
    box-shadow: inset -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    color: orange;
    border-radius: 8px;
  }
`;

const Functions = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
  border-radius: 16px;
  margin: 10px;
`;

const Projects = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
  border-radius: 16px;
  margin: 10px;
`;

const MainHd = styled.div`
  display: flex;
  margin-top: 56px;
  h2 {
    font-weight: 500;
    margin: 10px;
    padding: 8px;
    font-size: 26px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    color: orange;
    border-radius: 8px;
  }
`;

const ResponsiveandTech = styled(FunandPro)`
  justify-content: center;
`;

const ResponsiveAnother = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Responsive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 940px) {
    margin: 10px;
  }

  img {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin: 8px 0px;
  }
`;

const Technologies = styled(Responsive)``;
//
//
//
const PercentagendProjectButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

const Percentage = styled.div`
  span {
    border-radius: 10px;
    font-size: 30px;
    font-weight: 500;
    padding: 6px;
    margin: 10px;
    color: #31344b;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
  }
  max-width: 600px;
  width: 100%;

  img {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 320px;
    object-fit: cover;
    border-radius: 10px;
    margin: 8px 0px;
  }
`;

const Myprojects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  @media screen and (min-width: 940px) {
    margin: 0px 20px;
  }
  span {
    border-radius: 10px;
    font-size: 30px;
    font-weight: 500;
    padding: 6px;
    margin: 10px;
    color: #31344b;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 270px;
  overflow-y: scroll;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  margin: 8px 0px;
  box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;

  a {
    font-size: 26px;
    color: blue;
    border-radius: 8px;
    padding: 8px;
    margin: 10px;
    max-width: 200px;
    width: 100%;
    font-weight: 500;
    text-align: center;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    text-decoration: none;

    :active {
      color: black;
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 16px;
    margin: 10px 0px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;

//
//
//
const ProSolver = styled(Heading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    width: fit-content;
    font-size: 30px;
    padding: 6px;
    margin: 10px;
    border-radius: 10px;
    color: red;
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
  }

  p {
    text-align: justify;
  }
`;
