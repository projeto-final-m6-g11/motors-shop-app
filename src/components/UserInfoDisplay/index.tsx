import Button from "../Button"
import { UserInfoDiv } from "./styledUserInfoDiv"

interface UIDisplay {
    profile: boolean
}

const UserInfoDisplay = ({ profile }: UIDisplay) => {
    return (
        profile ? 
        <UserInfoDiv>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXFwGsNN1oiyI2VlFqhqtX8KdeDmV6vRt3A&usqp=CAU" alt="imagem perfil user" />
            <div>
                <span>User</span><span className="advertiser">Anunciante</span>
            </div>
            <p>eu sou um usuário da aplicação motors shop!</p>
            <Button>Criar anúncio</Button>
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
