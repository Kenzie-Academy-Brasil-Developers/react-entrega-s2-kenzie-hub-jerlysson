import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(10deg, #0e451e, #3a0e45);
  div {
    @media (max-width: 400px) {
      width: 100vw;
    }
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
export const DivBtn = styled.div`
  margin-top: 2em;
  display: flex;

  button + button {
    margin-left: 2em;
  }
`;
export const Btn1 = styled.button`
  cursor: pointer;
  width: 12em;
  font-size: 1em;
  padding: 5px;
  border-radius: 7px;
  border: none;
  background: #38ffd0;
  font-weight: bold;
  border: 2px solid #38ffd0;
  :hover {
    border: 2px solid white;
  }
  :active {
    border: 2px solid #e280f9;
  }
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
  :hover {
    border: 2px solid white;
  }
  :active {
    border: 2px solid #38ffd0;
  }
`;
