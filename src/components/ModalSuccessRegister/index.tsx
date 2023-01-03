import { useHistory } from "react-router-dom";
import { ButtonClosed, TitleForm, TitleP } from "../FormAnuncio/styles"
import { ModalBackground, ModalDiv } from "./styles"

interface IProps {
    handleOpen: Function
}

const ModalSuccessRegister = ({ handleOpen }: IProps) => {
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
                <TitleForm className="subtitle">Sua conta foi criada com sucesso!</TitleForm>
                <span>Agora você podera ver seus negócios crescendo em grande escala</span>
                <button className="goToLoginBtn" onClick={login} >Ir para o login</button>
            </ModalDiv>
        </ModalBackground>
    )
}


export default ModalSuccessRegister
