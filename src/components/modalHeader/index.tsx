import Button from "./../Button";
import FormPerfil from "../FormPerfil";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Modal, ModalFundo } from "./styles";

interface IModalProps {
  type: string;
}

const ModalHeader = ({ type }: IModalProps) => {
  const historico = useHistory();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (e: any) => {
    if (
      e.target.title === "formEditProfile" ||
      e.target.title === "buttonOpenEditProfile"
    ) {
      setOpen(!open);
    }
  };

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/registro");
  };

  switch (type) {
    case "anonymous":
      return (
        <Modal>
          <nav>
            <div>
              <Button children="Carros" />
              <Button children="Motos" />
              <Button children="Leilão" />
            </div>
            <div className="divisionNavModal">
              <Button onClick={login}>Login</Button>
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
              <p>Usuário X</p>
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
              <Button>Editar Endereço</Button>
              <Button>Meus Anúncios</Button>
              <Button>Sair</Button>
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
              <p>Usuário X</p>
              <Button>Editar Perfil</Button>
              <Button>Editar Endereço</Button>
              <Button>Sair</Button>
            </div>
          </nav>
        </Modal>
      );
  }
};

export default ModalHeader;
