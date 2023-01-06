import { useContext, useState } from "react";
import API from "../../api";
import Header from "../../components/header";
import { FormStyled, Container } from "./styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  // const { setUser } = useContext(UserContext);
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };
  const register = () => {
    history.push("/createaccount");
  };

  const sendData = () => {
    if (inputUser && inputPassword !== "") {
      // console.log(inputUser, inputPassword)
      const Login = new Promise((resolve, reject) =>
        API.post("/login", {
          email: inputUser,
          password: inputPassword,
        })
          .then((res) => {
            resolve(res);
            return history.push("/dashboard");
            // setUser(res.data)
          })
          .catch((err) => reject(err))
      );

      return toast.promise(Login, {
        pending: "Acessando",
        success: "Login efetuado",
        error: "Usuário ou senha inválida",
      });
    }
    return toast.warning("Preencha todos os campos corretamente");
  };
  return (
    <>
      <Header type="anonymous" />
      <Container>
        <FormStyled onSubmit={(e) => e.preventDefault()}>
          <h1>Login</h1>
          <label htmlFor="">Usuário</label>
          <input
            type="text"
            placeholder="Digitar usuário"
            required
            onChange={(e) => setInputUser(e.target.value)}
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digitar senha"
            required
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <span className="forget__password">Esqueci minha senha</span>
          <button className="enter__login" onClick={sendData}>
            Entrar
          </button>
          <span className="create__account">Ainda não possui conta?</span>
          <button onClick={register}>Cadastrar</button>
        </FormStyled>
      </Container>
    </>
  );
};
export default Login;
