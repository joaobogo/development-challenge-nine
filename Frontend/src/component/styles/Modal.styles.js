import styled from "styled-components";

const ModalContainer = styled.div`
  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  
  label {
    color: var(--secondary-color);
  }

  input {
    border: solid 1px var(--secondary-color);
  }

  .submit {
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
  }

  .submit:disabled{
    opacity: .6;
  }
  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: white;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  
  }

 

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: NONE;
    color: red;
    font-weight: bold;
  }

  .close-modal:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 780px) {
  }

  @media screen and (max-width: 385px) {
  }

  @media screen and (max-width: 330px) {
  }
`;

export default ModalContainer;
