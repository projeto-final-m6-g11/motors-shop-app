import { useState } from "react";
import Button from "../Button";
import { UserInfoDiv } from "./styles";
import { ModalFundo } from "../ModalFundo/styles";
import FormAnuncio from "../FormAnuncio";
import { useParams } from "react-router-dom";
import GlobalModalSuccess from "../GlobalModalSuccess";

interface UIDisplay {
  profile: boolean;
  user: any;
  userId: string
}

const UserInfoDisplay = ({ profile, user, userId }: UIDisplay) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSuccess, setOpenSuccess] = useState(false)

  const {id} = useParams<any>()
  

  const handleOpen = (e: any) => {
    if (
      e.target.title === "formCreateAnnouncement" ||
      e.target.title === "buttonOpenCreateAnnouncement"
    ) {
      setOpen(!open);
    }
  };

  return profile ? (
    <UserInfoDiv>

      <div className="iniciais">
        {user.name[0].toUpperCase()}
      </div>
      <div>
        <span>{user.name}</span>
        {user.isAdvertiser && <span className="advertiser">Anunciante</span>}
      </div>
      <p>{user.bio}</p>
      {user.isAdvertiser && userId === id &&
      <button
      className="createAnnouncementBtn"
      title="buttonOpenCreateAnnouncement"
      onClick={(e: any) => {
        handleOpen(e);
      }}
      >
        Criar anúncio
      </button>}
      {open ? (
        <ModalFundo
          title="formCreateAnnouncement"
          onClick={(e) => {
            handleOpen(e);
          }}
        >
          <FormAnuncio open={open} setOpen={setOpen} setOpenSuccess={setOpenSuccess} openSuccess={openSuccess} />
        </ModalFundo>
      ) : (
        ""
      )}
    {openSuccess &&
    <GlobalModalSuccess context="CREATE_ANNOUNCEMENT" setOpenSuccess={setOpenSuccess} openSuccess={openSuccess} />}
    </UserInfoDiv>
  ) : (
    <UserInfoDiv>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXFwGsNN1oiyI2VlFqhqtX8KdeDmV6vRt3A&usqp=CAU"
        alt="imagem perfil user"
      />
      <span>User</span>
      <p>eu sou um usuário da aplicação motors shop!</p>
      <Button>Ver todos anúncios</Button>
    </UserInfoDiv>
  );
};

export default UserInfoDisplay;
