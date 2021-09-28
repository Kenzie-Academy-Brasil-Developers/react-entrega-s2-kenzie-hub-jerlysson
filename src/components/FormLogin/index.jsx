import { Link } from "react-router-dom";
import { DivForm, DivInput, Form, Input, Btn2 } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../assets/Services/api";

function FormLogin({ on, setOn, nextPage }) {
  if (on) {
    nextPage("/user");
  }
  const schema = yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
  });

  const LoginUser = (data) => {
    localStorage.clear();
    api
      .post("/sessions", data)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("@knz:token", JSON.stringify(token));
        localStorage.setItem("@knz:user", JSON.stringify(user));
        setOn(true);
        nextPage("/user");
      })
      .catch((err) => console.log(err));
  };
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  return (
    <>
      <DivForm>
        <h1>Login</h1>
        <Form id="lgn" onSubmit={handleSubmit(LoginUser)}>
          <DivInput>
            <p>E-mail</p>
            <Input placeholder="Seu e-mail cadastrado" {...register("email")} />
          </DivInput>
          <DivInput>
            <p>Senha</p>
            <Input placeholder="Senha cadastrada" {...register("password")} />
          </DivInput>
        </Form>
        <Link to="/register">
          <span>Não tenho Cadastro!</span>
        </Link>
      </DivForm>
      <Btn2 type="submit" form="lgn">
        Logar
      </Btn2>
    </>
  );
}
export default FormLogin;
