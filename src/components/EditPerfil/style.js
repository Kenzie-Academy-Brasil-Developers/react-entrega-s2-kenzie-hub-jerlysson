import styled from "styled-components";

export const BoxProfile = styled.div`
  form {
    margin: 15px auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10vh;
    align-items: center;
    p {
      text-align: start;
    }
  }
  select,
  input {
    width: 100%;
    font-size: 1em;
    padding: 2px;
  }
  button {
    margin: 10px;
  }
`;
