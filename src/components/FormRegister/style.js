import styled from "styled-components";

export const Main = styled.div`
  min-width: 300px;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(10deg, #0e451e, #3a0e45);
  background-size: contain;
  p {
    margin: 0;
  }
  img {
    @media (max-width: 768px) {
      width: 150px;
    }
    width: 35%;
    position: absolute;
    left: 10px;
    top: 8px;
    max-width: 260px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-width: 280px;
  height: 400px;
  border-radius: 15px;
  background-color: rgba(128, 128, 128, 0.3);
`;

export const Form = styled.form`
  position: relative;
  width: 80%;
  span {
    position: absolute;
    cursor: pointer;
    margin-top: 1em;
    color: #38f3ff;
    left: calc(50% - 50px);
  }
`;

export const DivInput = styled.div`
  width: 100%;
  color: white;
  margin-bottom: 5px;
  select {
    width: 100%;
    font-size: 1em;
    padding: 3px;
    box-sizing: border-box;
  }
`;

export const DivPwd = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  div {
    width: 45%;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 3px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
`;

export const Btn1 = styled.button`
  margin-top: 2em;
  cursor: pointer;
  box-sizing: content-box;
  width: 12em;
  font-size: 1em;
  padding: 5px;
  border-radius: 7px;
  border: none;
  background: #e280f9;
  font-weight: bold;
  border: 2px solid #38ffd0;
  :hover {
    border: 2px solid white;
  }
  :active {
    border: 2px solid #e280f9;
  }
`;
