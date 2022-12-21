import Button from "../Button";
import ModalHeader from "../ModalHeader";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, MenuButton, MenuModal, Modal } from "./styles";

interface IHeaderProps {
  type: string;
}

const Header = ({ type }: IHeaderProps) => {
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

  switch (type) {
    case "anonymous":
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
              {modal === false ? <></> : <ModalHeader type="anonymous" />}
            </div>
          ) : (
            <section className="container">
              <div className="vehicles">
                <Button>Carros</Button>
                <Button>Motos</Button>
                <Button>Leilão</Button>
              </div>
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
    case "owner":
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
              {modal === false ? <></> : <ModalHeader type="owner" />}
            </div>
          ) : (
            <section className="container">
              <div className="vehicles">
                <Button>Carros</Button>
                <Button>Motos</Button>
                <Button>Leilão</Button>
              </div>

              <div className="profile">UD</div>
              <MenuModal onClick={() => setModal(!modal)}>
                {modal === false ? <p>Usuário Dono</p> : <p>Usuário Dono</p>}
              </MenuModal>
              {modal === false ? (
                <></>
              ) : (
                <Modal>
                  <nav>
                    <div className="divisionNavModal">
                      <Button>Editar Perfil</Button>
                      <Button>Editar Endereço</Button>
                      <Button>Meus Anúncios</Button>
                      <Button>Sair</Button>
                    </div>
                  </nav>
                </Modal>
              )}
            </section>
          )}
        </Box>
      );
    default:
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
              {modal === false ? <></> : <ModalHeader type="owner" />}
            </div>
          ) : (
            <section className="container">
              <div className="vehicles">
                <Button>Carros</Button>
                <Button>Motos</Button>
                <Button>Leilão</Button>
              </div>
              <div className="profile">UC</div>
              <MenuModal onClick={() => setModal(!modal)}>
                {modal === false ? <p>Usuário</p> : <p>Usuário</p>}
              </MenuModal>
              {modal === false ? (
                <></>
              ) : (
                <Modal>
                  <nav>
                    <div className="divisionNavModal">
                      <Button>Editar Perfil</Button>
                      <Button>Editar Endereço</Button>
                      <Button>Sair</Button>
                    </div>
                  </nav>
                </Modal>
              )}
            </section>
          )}
        </Box>
      );
  }
};

export default Header;
