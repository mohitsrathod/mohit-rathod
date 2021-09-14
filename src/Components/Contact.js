import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  /*const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [message, setMessage] = useState("") 
  BUT WE CAN USE OBJECTS
  */

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    //see in console that returns these values
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name; //store what user writes means target if i am writing name then target name and store values
    value = event.target.value;

    /**...user means previous data as it is in db store new in following*/
    setUser({ ...user, [name]: value });
    /**now watch in react component in browser, components*/
  };

  /*now i have to get final values and upload it to firebase*/
  const postDataondb = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;

    /**FORM VALIDATION FINAL STEP */
    if (name && email && phone && message) {
      /**IF THESE ARE FILLED? ONLY I WANT DATA */
      //
      /**created a realtime db on firebase and paste link here and created a json file
       * named clientcontacts.json > .json because firebase wants data in only json format
       */
      const res = await fetch(
        "https://mohit-rathod-portfolio-default-rtdb.firebaseio.com/clientcontacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", //app in json format
          },
          //now pass data
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }), //> convert data in string
        }
      );

      /**now empty all fields if it is submitted */
      if (res) {
        /**jo response mali gyo hoy to */
        setUser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        alert("Submitted Succesfully");
        /**data firebase ma submit thase e pachhi alert message aavse */
      }
    } else {
      alert("please fill all the data");
    }
  };

  return (
    <>
      <Main>
        <ContactResume>
          <ContactUs>
            <span>Contact me / Hire me</span>
          </ContactUs>
          <Resume>
            <button>Download My Resume</button>
          </Resume>
        </ContactResume>

        <form method="POST">
          <AllInput>
            <NameMail>
              <Name>
                <span>Your Name</span>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  autoComplete="off"
                  onChange={getUserData} //don't show previous user data
                  name="name"
                  value={user.name}
                  required
                />
              </Name>

              <Email>
                <span>Your Email</span>
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  autoComplete="off"
                  onChange={getUserData}
                  name="email"
                  value={user.email}
                  required
                />
              </Email>
            </NameMail>

            <NoMessage>
              <MobileNo>
                <span>Your Mobile Number</span>
                <input
                  placeholder="Your Number"
                  type="text"
                  autoComplete="off"
                  onChange={getUserData}
                  value={user.phone}
                  name="phone"
                  required
                />
              </MobileNo>

              <Message>
                <span>Any Message?</span>
                <textarea
                  placeholder="Write Here"
                  autoComplete="off"
                  onChange={getUserData}
                  value={user.message}
                  name="message"
                  required
                />
              </Message>
            </NoMessage>
          </AllInput>
          <Submit>
            <button onClick={postDataondb}> Submit</button>
          </Submit>
        </form>
      </Main>
    </>
  );
};

export default Contact;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-tap-highlight-color: transparent;

  user-select: none;
  input,
  textarea {
    ::placeholder {
      color: #414141;
    }
  }
`;
/**HEADING */
const ContactUs = styled.div`
  display: flex;
  span {
    padding: 8px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    border-radius: 10px;
    color: orangered;
    font-size: 30px;
    margin: 20px;
  }
`;

const AllInput = styled.div`
  display: flex;
  flex-direction: column;

  span,
  input,
  textarea {
    max-width: 260px;
    width: 100%;
    @media screen and (max-width: 330px) {
      max-width: 200px;
      width: 100%;
    }

    font-size: 22px;
    padding: 8px;
    margin: 6px;
    border-radius: 10px;
    box-shadow: -1px -1px 2px #ffffff, 1px 1px 2px #a3b1c6;
  }

  input {
    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
    outline: none;
    border: none;
  }

  textarea {
    max-height: 50px;

    box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;

    border: none;
    outline: none;
  }
`;

const NameMail = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const NoMessage = styled(NameMail)``;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */

  margin: 8px;
  padding: 8px;
  border-radius: 10px;
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;

  :hover {
    box-shadow: -1px -1px 2px #ffffff, 1px 1px 2px #a3b1c6;
  }
`;

const Email = styled(Name)``;

const MobileNo = styled(Name)``;

const Message = styled(Name)``;

const ContactResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Resume = styled.div`
  display: flex;

  button {
    padding: 8px;
    box-shadow: -2px -2px 4px #ffffff, 2px 2px 4px #a3b1c6;
    border-radius: 10px;
    color: blue;
    font-weight: 500;
    font-size: 22px;
    margin: 10px;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: none;
    cursor: pointer;

    :active {
      box-shadow: -1px -1px 2px #ffffff, 1px 1px 2px #a3b1c6;
      color: black;
    }
  }
`;

const Submit = styled(Resume)`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 300px;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    :active {
      box-shadow: inset -2px -2px 4px #ffffff, inset 2px 2px 4px #a3b1c6;
      color: black;
    }
  }
`;
