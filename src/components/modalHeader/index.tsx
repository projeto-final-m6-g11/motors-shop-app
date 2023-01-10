import Button from "../Button";
import FormPerfil from "../FormPerfil";
import FormEndereco from "../FormEndereço";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Modal, ModalFundo } from "./styles";
import { UserContext } from "../../contexts/user";

interface IModalProps {
  type: string;
}

const ModalHeader = ({ type }: IModalProps) => {
  const historico = useHistory();
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const handleOpen = (e: any) => {
    if (
      e.target.title === "formEditProfile" ||
      e.target.title === "buttonOpenEditProfile"
    ) {
      setOpen(!open);
    }
  };

  const handleOpen2 = (e: any) => {
    if (
      e.target.title === "formEditAdress" ||
      e.target.title === "buttonOpenEditAdress"
    ) {
      setOpen2(!open2);
    }
  };

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/createaccount");
  };

  const goToDashboard = () => {
    token && user ? historico.push(`/profile/${user.id}`) : historico.push('/login')
  }

  const handleLogout = () => {
    setUser({})
    setToken('')
    historico.push('/')
  }

  switch (type) {
    case "anonymous":
      return (
        <Modal>
          <nav>
            <div>
              <a href="#Carros"><Button children="Carros" /></a>
              <a href="#Motos"><Button children="Motos" /></a>
              <Button children="Leilão" />
              
            </div>
            <div className="divisionNavModal">
              <Button onClick={login}>Fazer Login</Button>
              <Button onClick={register} className="button2">
                Cadastrar
              </Button>
            </div>
          </nav>
        </Modal>
      );
    case "owner":
      return (
        <Modal>
          <nav>
            <div>
              <Button children="Carros" />
              <Button children="Motos" />
              <Button children="Leilão" />
            </div>
            <div className="divisionNavModal">
              <Button
                title="buttonOpenEditProfile"
                onClick={(e: any) => {
                  handleOpen(e);
                }}
              >
                Editar Perfil
              </Button>
              {open ? (
                <ModalFundo
                  title="formEditProfile"
                  onClick={(e) => {
                    handleOpen(e);
                  }}
                >
                  <FormPerfil handleOpen={handleOpen} />
                </ModalFundo>
              ) : (
                ""
              )}
              <Button
                title="buttonOpenEditAdress"
                onClick={(e: any) => {
                  handleOpen2(e);
                }}
              >
                Editar Endereço
              </Button>
              {open2 ? (
                <ModalFundo
                  title="formEditAdress"
                  onClick={(e) => {
                    handleOpen2(e);
                  }}
                >
                  <FormEndereco handleOpen={handleOpen2} />
                </ModalFundo>
              ) : (
                ""
              )}
              <Button onClick={goToDashboard} >Meus Anúncios</Button>
              <Button onClick={handleLogout} >Sair</Button>
            </div>
          </nav>
        </Modal>
      );
    default:
      return (
        <Modal>
          <nav>
            <div>
              <Button children="Carros" />
              <Button children="Motos" />
              <Button children="Leilão" />
            </div>
            <div className="divisionNavModal">
              <Button>Editar Perfil</Button>
              <Button>Editar Endereço</Button>
              <Button onClick={handleLogout} >Sair</Button>
            </div>
          </nav>
        </Modal>
      );
  }
};

export default ModalHeader;
