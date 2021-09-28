import FormRegister from "../../components/FormRegister";
import { Main } from "../../components/FormRegister/style";
import logo2 from "../../assets/img/logo2.svg";

function Register({ on, nextPage }) {
  return (
    <>
      <Main>
        <img src={logo2} alt="logo kenzie Cadastro" />
        <FormRegister on={on} nextPage={nextPage} />
      </Main>
    </>
  );
}
export default Register;
