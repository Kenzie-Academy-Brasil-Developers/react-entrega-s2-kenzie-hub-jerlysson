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
  p {
    margin: 0;
  }
  a {
    cursor: pointer;
    margin-top: 1.2em;
    color: #38f3ff;
  }
  img {
    width: 250px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 200px;
  border-radius: 15px;
  background-color: rgba(128, 128, 128, 0.3);
`;
export const Form = styled.form`
  width: 80%;
`;

export const DivInput = styled.div`
  color: white;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: 3px;
  box-sizing: border-box;
`;
export const Btn2 = styled.button`
  cursor: pointer;
  box-sizing: content-box;
  width: 12em;
  font-size: 1em;
  padding: 5px;
  border-radius: 7px;
  border: none;
  background: #e280f9;
  font-weight: bold;
  border: 2px solid #e280f9;
  margin-top: 2em;
  :hover {
    border: 2px solid white;
  }
  :active {
    border: 2px solid #38ffd0;
  }
`;
