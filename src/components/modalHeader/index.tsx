import Button from "../Button";
import { useHistory } from "react-router-dom";
import { Modal } from "./styles";

const ModalHeader = () => {
  const historico = useHistory();

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/registro");
  };
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
};

export default ModalHeader;
