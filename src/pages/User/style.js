import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(10deg, #0e451e, #3a0e45);
`;
export const Header = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  h1 {
    color: white;
    margin: 0;
    align-self: flex-end;
  }
`;

export const DivContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  width: 90%;
  height: 75vh;
  border-radius: 15px;
  background-color: rgba(128, 128, 128, 0.3);
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 90%;
  border-radius: 15px;
  background-color: rgba(128, 128, 128, 0.7);
  p {
    text-align: center;
  }
  button {
    width: 10em;
    margin: 0 auto;
  }
`;

export const AvatarBox = styled.div`
  margin: 10px auto;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: silver;
`;

export const DescList = styled.ul`
  margin: 0 auto;
  max-width: 80%;
  padding: 0;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    height: 2em;
    align-items: center;
  }
  h3 {
    text-align: center;
  }
`;
