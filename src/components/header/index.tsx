import Logo from "../../assets/logo.png";
import Button from "../Button";
import ModalHeader from "../modalHeader";
import { ModalFundo } from "../ModalFundo/styles";
import FormPerfil from "../FormPerfil";
import FormEndereco from "../FormEndereço";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, MenuButton, MenuModal, Modal } from "./styles";
import { UserContext } from "../../contexts/user";
import { StyledHeaderButton, StyledHeaderLoginButton } from "../Button/styles";
import { BuyerBtn } from "../../pages/Register/styles";

interface IHeaderProps {
  type: string;
}

const Header = ({ type }: IHeaderProps) => {
  const [mobile, setMobile] = useState(true);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const historico = useHistory();

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/createaccount");
  };

  const home = () => {
    historico.push("")
  }

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

  const handleLogout = () => {
    setUser({})
    setToken('')
    historico.push('/')
  }

  useEffect(() => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  }, []);

  window.addEventListener("resize", () => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  });

  const goToDashboard = () => {
    token && user ? historico.push(`/profile/${user.id}`) : historico.push('/login')
  }

      return (
        <>
        {token === "" ?
        <Box>
          <section>
            <img src={Logo} alt="Logo Motors-Shop" onClick={home} />
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
                <a href="#Carros"><StyledHeaderButton >Carros</StyledHeaderButton></a>
                <a href="#Motos"><StyledHeaderButton>Motos</StyledHeaderButton></a>
                <StyledHeaderButton>Leilão</StyledHeaderButton>
              </div>
              <div className="options">
                <StyledHeaderLoginButton onClick={login} >
                  Fazer Login
                </StyledHeaderLoginButton>
                <Button onClick={register} className="options-button2">
                  Cadastrar
                </Button>
              </div>
            </section>
          )}
        </Box> :
        <Box>
        <section>
          <img src={Logo} alt="Logo Motors-Shop" onClick={home} />
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
              <StyledHeaderButton>Carros</StyledHeaderButton>
              <StyledHeaderButton>Motos</StyledHeaderButton>
              <StyledHeaderButton>Leilão</StyledHeaderButton>
            </div>

            <div onClick={goToDashboard} className="profile">{user?.name?.length > 0 && user.name[0].toUpperCase()}</div>
            <MenuModal onClick={() => setModal(!modal)}>
              {modal === false ? <p>{user.name}</p> : <p>{user.name}</p>}
            </MenuModal>
            {modal === false ? (
              <></>
            ) : (
              <Modal>
                <nav>
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
                    <Button onClick={goToDashboard}>{user.isAdvertiser && "Meus Anúncios"}</Button>
                    <Button onClick={handleLogout}>Sair</Button>
                  </div>
                </nav>
              </Modal>
            )}
          </section>
        )}
      </Box>
      }
      </>
    );
  }

export default Header;
