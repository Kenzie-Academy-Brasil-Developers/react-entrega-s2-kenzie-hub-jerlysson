import FormLogin from "../../components/FormLogin";
import { Main } from "../../components/FormLogin/style";
import logo3 from "../../assets/img/logo3.svg";

function Login({ setOn, setMember, nextPage }) {
  return (
    <>
      <Main>
        <img src={logo3} alt="Logo Kenzie Login" />;
        <FormLogin setOn={setOn} setMember={setMember} nextPage={nextPage} />
      </Main>
    </>
  );
}
export default Login;
