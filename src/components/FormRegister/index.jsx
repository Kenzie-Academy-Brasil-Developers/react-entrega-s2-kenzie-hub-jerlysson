import { Link } from "react-router-dom";
import {
  DivPwd,
  DivForm,
  DivInput,
  Form,
  Input,
  TextArea,
  Btn1,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../assets/Services/api";

function FormRegister({ on, nextPage }) {
  if (on) {
    nextPage("/user");
  }
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio"),
    email: yup.string().required("Campo Obrigatorio").email("Email Invalido"),
    contact: yup.string().required("Campo Obrigatorio"),
    password: yup.string().min(6, "minimo 6 characters"),
    rePwd: yup.string().oneOf([yup.ref("password")], "Senhas Diferentes"),
    course_module: yup.string().required("Campo Obrigatorio"),
    bio: yup.string().required("Campo Obrigatorio"),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const AddUser = ({ name, email, contact, password, course_module, bio }) => {
    const newUser = { name, email, contact, password, course_module, bio };
    api
      .post("/users", newUser)
      .then((_) => nextPage("/login"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <DivForm>
        <h1>Faça Seu Cadastro</h1>
        <Form id="rgst" onSubmit={handleSubmit(AddUser)}>
          <DivInput>
            <p>Nome</p>
            <Input placeholder="Seu Nome..." {...register("name")} />
          </DivInput>
          <DivInput>
            <p>Email</p>
            <Input placeholder="Seu Melhor email" {...register("email")} />
          </DivInput>
          <DivInput>
            <p>Contato</p>
            <Input placeholder="Seu Melhor Contato" {...register("contact")} />
          </DivInput>
          <DivPwd>
            <div>
              <p>Senha</p>
              <Input
                placeholder="aquela Senha confiavel"
                {...register("password")}
              />
            </div>
            <div>
              <p>Comfirme a Senha</p>
              <Input placeholder="Qual é a senha??" {...register("rePwd")} />
            </div>
          </DivPwd>
          <DivInput>
            <p>Cursando</p>
            <select {...register("course_module")}>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
            </select>
          </DivInput>
          <DivInput>
            <p>Bio</p>
            <TextArea
              rows="5"
              placeholder="Fale um pouco sobre você..."
              {...register("bio")}
            />
          </DivInput>
          <Link to="/login">
            <span>Já sou Cadastrado!</span>
          </Link>
        </Form>
      </DivForm>
      <Btn1 type="submit" form="rgst">
        Cadastrar
      </Btn1>
    </>
  );
}
export default FormRegister;
