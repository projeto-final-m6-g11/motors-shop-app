import { useState } from "react";
import Button from "../Button";
import { UserInfoDiv } from "./styles";
import { ModalFundo } from "../ModalFundo/styles";
import FormAnuncio from "../FormAnuncio";

interface UIDisplay {
  profile: boolean;
  user: any
}

const UserInfoDisplay = ({ profile, user }: UIDisplay) => {
  const [open, setOpen] = useState<boolean>(false);

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
      {user.isAdvertiser &&
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
          <FormAnuncio handleOpen={handleOpen} />
        </ModalFundo>
      ) : (
        ""
      )}
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
