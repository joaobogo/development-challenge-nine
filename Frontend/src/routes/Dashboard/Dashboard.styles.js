import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .right {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .date {
    text-align: left;
  }

  .miniheader {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;
    border-left: none;
    margin-left: 5px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.49);
  }

  .patients {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .patientcard {
    margin-left: 2.5%;
    width: 95%;
    padding: 5px;
    border: solid 1px var(--secondary-color);
    border-radius: 20px;
    text-align: center;
  }

  .patientcard tbody {
    font-size: 13px;
    text-align: justify;
  }

  .patientcard td {
    padding: 5px;
  }

  .logo {
    width: 40%;
  }

  .profilepic {
    width: 40%;
    border: solid lightgreen 1px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    animation: cssAnimation_0 5000ms infinite linear;
    margin-bottom: 5px;
  }

  @keyframes cssAnimation_0 {
  from {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  }

  to {
    box-shadow: 0px 0px 30px 0px rgba(29, 224, 68, 1);
  }
}

.profilepic2 {
    width: 40%;
    border: solid red 1px;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    animation: cssAnimation_1 5000ms infinite linear;
    margin-bottom: 5px;
  }

  @keyframes cssAnimation_1 {
  from {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  }

  to {
    box-shadow: 0px 0px 30px 0px rgba(235, 14, 14, 1);
  }
}

.dropdown{
border: none;
}

.dropdown:hover{
cursor: pointer;
}


  .admininfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .admininfo p {
    padding: 3px;
    margin: 0;
    font-size: 12px;
  }

  .admininfo .main {
    font-weight: bold;
  }


  .menuoptions {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: 40%;
    text-align: left;
  }

  .icon {
    color: var(--primary-color);
  }

  .selectors {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 20vw;
    text-decoration: none;
    color: white;
    background-color: var(--secondary-color);
    gap: 5px;
    border-bottom: solid 1px white;
  }

  .selectors:hover {
    cursor: pointer;
    background-color: rgb(0, 38, 57, 0.8);
  }

  .greet {
    text-align: left;
    font-size: 22px;
    color: var(--secondary-color);
  }

  .addpatients {
    margin-left: 72%;
    width: 20vw;
    margin-bottom: 5px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 10px;
    border: solid var(--primary-color);
    height: 8vh;
  }

  .addpatients:hover {
    cursor: pointer;
    border: solid black;
  }

  .editpatients {
    background-color: var(--tertiary-color);
    color: var(--secondary-color);
    border-radius: 10px;
    border: solid var(--primary-color);
    height: 6vh;
    width: 100%;
    text-align: center;
  }

  .editpatients:hover {
    cursor: pointer;
    border: solid black;
  }

  .date {
    font-size: 14px;
  }

  h2 {
    color: var(--secondary-color);
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 5px;
  }

  form input {
    border-radius: 10px;
    height: 6vh;
    border: solid 1px var(--secondary-color);
  }

  form button {
    background-color: var(--primary-color);
    color: var(--tertiary-color);
    border-radius: 10px;
    border: solid var(--primary-color);
    height: 6vh;
    width: 50%;
    margin-left: 25%;
  }

  form button:hover {
    cursor: pointer;
    border: solid black;
  }

  .deletepatients {
    background: none;
    border: solid 1px red;
    color: red;
    font-weight: bold;
    border-radius: 50%;
  }

  .deletepatients:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }

  .mobileheader {
    display: none;
  }

  .mobilebuttons {
    display: none;
  }

  @media screen and (max-width: 780px) {
    .mobileheader {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2vh;
      width: 100vw;
    }

    .mobileright p {
      margin: 0;
      text-align: left;
      padding-left: 3vw;
      font-weight: bold;
    }
    .profilepic {
      width: 20%;
    }

    .mobilebuttons {
      display: flex;
      width: 80%;
      margin-top: 1vh;
      gap: 5px;
    }

    .selectors {
      height: 100%;
      width: 50%;
      font-size: 16px;
      padding: 2px;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 10px;
    }

    .left {
      display: none;
    }

    .right {
      width: 100vw;
    }

    .miniheader {
      width: 100vw;
      margin: 0;
      flex-direction: column;
    }

    .greetings {
      width: 100vw;
      display: flex;
      flex-direction: column;
    }

    .greet {
      font-size: 14px;
      padding-left: 1vh;
      text-align: center;
    }

    .date {
      padding-left: 1vh;
      text-align: center;
      margin-top: 0;
    }

    .patients {
      align-items: center;
    }
    .addpatients {
      width: 50vw;
      font-size: 16px;
      margin-left: 0;
      height: 5vh;
    }

    .editpatients {
      width: 90%;
      height: 7vh;
      margin-bottom: 1vh;
    }

    .deletepatients {
      font-size: 20px;
    }

    .patientcard {
      word-break: break-all;
    }
    td {
      flex-wrap: wrap;
    }

    th{
      font-size: 13px;
    }
  }

  @media screen and (max-width: 385px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default DashboardContainer;
