import Button from "../Button";
import ModalHeader from "../modalHeader";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, MenuButton } from "./styles";

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const [modal, setModal] = useState(false);

  const historico = useHistory();

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/registro");
  };

  useEffect(() => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  }, []);

  window.addEventListener("resize", () => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  });

  return (
    <Box>
      <section>
        <img src={Logo} alt="Logo Motors-Shop" />
      </section>
      {mobile ? (
        <div>
          <MenuButton onClick={() => setModal(!modal)}>
            {modal === false ? <FaBars /> : <GrClose />}
          </MenuButton>
          {modal === false ? <></> : <ModalHeader />}
        </div>
      ) : (
        <section className="container">
          <div className="vehicles">
            <Button>Carros</Button>
            <Button>Motos</Button>
            <Button>Leilão</Button>
          </div>
          <p className="division">|</p>
          <div className="options">
            <Button onClick={login} className="options-button1">
              Login
            </Button>
            <Button onClick={register} className="options-button2">
              Cadastrar
            </Button>
          </div>
        </section>
      )}
    </Box>
  );
};

export default Header;
