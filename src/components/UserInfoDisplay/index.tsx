import { useState } from "react"
import Button from "../Button"
import { UserInfoDiv } from "./styledUserInfoDiv"
import { ModalFundo } from "../ModalFundo/styled"
import FormAnuncio from "../FormAnuncio"

interface UIDisplay {
    profile: boolean
}

const UserInfoDisplay = ({ profile }: UIDisplay) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        profile ? 
        <UserInfoDiv>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXFwGsNN1oiyI2VlFqhqtX8KdeDmV6vRt3A&usqp=CAU" alt="imagem perfil user" />
            <div>
                <span>User</span><span className="advertiser">Anunciante</span>
            </div>
            <p>eu sou um usuário da aplicação motors shop!</p>
            <Button onClick={() => {handleOpen()}}>Criar anúncio</Button>
            {open ? 
            <ModalFundo>
                <FormAnuncio handleOpen={handleOpen}/>
            </ModalFundo> : ""}
        </UserInfoDiv>
        :
        <UserInfoDiv>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXFwGsNN1oiyI2VlFqhqtX8KdeDmV6vRt3A&usqp=CAU" alt="imagem perfil user" />
            <span>User</span>
            <p>eu sou um usuário da aplicação motors shop!</p>
            <Button>Ver todos anúncios</Button>
        </UserInfoDiv>
    )
}

export default UserInfoDisplay
