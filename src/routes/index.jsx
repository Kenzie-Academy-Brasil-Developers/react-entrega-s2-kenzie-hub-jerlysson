import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

function Rotas() {
  const [on, setOn] = useState(false);
  const [Member, setMember] = useState([]);

  useEffect(() => {
    setMember(JSON.parse(localStorage.getItem("@knz:user")) || []);
  }, [on]);

  const history = useHistory();

  const nextPage = (path) => {
    history.push(path);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home nextPage={nextPage} />
        </Route>
        <Route path="/register">
          <Register on={on} nextPage={nextPage} />
        </Route>
        <Route path="/login">
          <Login setOn={setOn} nextPage={nextPage} />
        </Route>
        <Route path="/user">
          <User
            on={on}
            Member={Member}
            setMember={setMember}
            nextPage={nextPage}
          />
        </Route>
      </Switch>
    </>
  );
}
export default Rotas;
