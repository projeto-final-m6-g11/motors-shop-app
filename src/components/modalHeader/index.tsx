import Button from "./../Button";
import { useHistory } from "react-router-dom";
import { Modal } from "./styles";

interface IModalProps {
  type: string;
}

const ModalHeader = ({ type }: IModalProps) => {
  const historico = useHistory();

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
              <Button>Editar Perfil</Button>
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
