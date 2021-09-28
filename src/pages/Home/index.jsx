import { DivBtn, Main, Btn1, Btn2 } from "./style";
import logo from "../../assets/img/logo.svg";

function Home({ nextPage }) {
  return (
    <>
      <Main>
        <div>
          <img src={logo} alt="logo KenzieHub" />
        </div>
        <DivBtn>
          <Btn1 onClick={() => nextPage("/register")}>Cadastrar</Btn1>
          <Btn2 onClick={() => nextPage("/login")}>Login</Btn2>
        </DivBtn>
      </Main>
    </>
  );
}
export default Home;
