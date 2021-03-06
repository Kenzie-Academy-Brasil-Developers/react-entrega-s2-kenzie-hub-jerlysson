import {
  AvatarBox,
  DescList,
  DivContainer,
  Header,
  Main,
  ProfileBox,
} from "./style";
import logo4 from "../../assets/img/KenzieHub.svg";
import EditPerfil from "../../components/EditPerfil";
import { useState } from "react";
import api from "../../assets/Services/api";

function User({ on, Member, setMember, nextPage }) {
  if (!on) {
    nextPage("/login");
  }
  const [token] = useState(
    JSON.parse(localStorage.getItem("@knz:token")) || ""
  );
  const handleDelete = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Main>
        <Header>
          <h1>Campo de Usuario</h1>
          <img src={logo4} alt="logo KenzieHub" />
        </Header>
        <DivContainer>
          <ProfileBox>
            <p>Suas infors</p>
            <AvatarBox />
            <DescList>
              <h3>Meus Cursos:</h3>

              {Member.techs?.map((elm) => (
                <div key={elm.id}>
                  <p>
                    {elm.title}: {elm.status}
                  </p>
                  <button onClick={() => handleDelete(elm.id)}>delete</button>
                </div>
              ))}
            </DescList>
          </ProfileBox>
          <ProfileBox>
            <p>Edite info</p>
            <AvatarBox />
            <button>Editar as infors</button>
            <EditPerfil
              Member={Member}
              setMember={setMember}
              nextPage={nextPage}
            />
          </ProfileBox>
        </DivContainer>
      </Main>
    </>
  );
}
export default User;
