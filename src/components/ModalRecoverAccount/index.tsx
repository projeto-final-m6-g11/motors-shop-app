import { useHistory } from "react-router-dom";
import { ButtonClosed, TitleForm, TitleP } from "../FormAnuncio/styles"
import { ModalBackground, ModalDiv } from "./styles"

interface IProps {
    handleOpen: Function
    onUpdate: boolean
}

const ModalRecoverEmailSuccess = ({ handleOpen, onUpdate }: IProps) => {
    const history = useHistory();

    const login = () => {
        history.push("/login");
    };

    return(
        <ModalBackground title="modalBackgroundDiv" onClick={(e) => {handleOpen(e)}}>
            <ModalDiv>
                <div className="divRow">
                    <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={(e) => {handleOpen(e)}}>X</ButtonClosed>
                </div>
                <TitleForm className="subtitle">{onUpdate ? "Senha alterada com sucesso!" : "Email Enviado com sucesso!"}</TitleForm>
                {onUpdate ? <span>Senha alterada com sucesso! Clique no botão abaixo para ser redirecionado a tela de login</span> 
                : <span>Cheque seu email para confirmar sua identidade e continuar a recuperação de conta</span>}
                {onUpdate ? <button className="goToLoginBtn" title='goToLoginBtn' onClick={login}>Ir para o login</button> :
                <button className="goToLoginBtn" title='closeBtn' onClick={(e) => {handleOpen(e)}}>Ok</button>}
            </ModalDiv>
        </ModalBackground>
    )
}


export default ModalRecoverEmailSuccess
