import { BoxProfile } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import api from "../../assets/Services/api";
import { useHistory } from "react-router";

function EditPerfil({ Member, setMember, nextPage }) {
  const [token] = useState(JSON.parse(localStorage.getItem("@knz:token")));
  const GetUser = () => {
    api
      .get(`/users/${Member.id}`)
      .then((res) => setMember(res.data))
      .catch((err) => console.log(err));
  };
  const history = useHistory();
  const Logout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    GetUser();
  }, [Member]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatorio"),
    status: yup.string(),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const AddTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => GetUser())
      .catch((err) => console.log(err));
  };
  return (
    <>
      <BoxProfile>
        <form onSubmit={handleSubmit(AddTech)}>
          <span>Curso</span>
          <input placeholder="Nome do Curso" {...register("title")} />
          <span>Se ja tem o curso, digite o nome e atualize o nivel</span>
          <select name="status" {...register("status")}>
            <option>Nivel ?</option>
            <option>Iniciante</option>
            <option>Intermediario</option>
            <option>Acançado</option>
          </select>
          <button type="submit">Salvar</button>
          <button onClick={() => Logout}>Sair</button>
        </form>
      </BoxProfile>
    </>
  );
}
export default EditPerfil;
