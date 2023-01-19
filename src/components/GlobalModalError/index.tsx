import { ButtonClosed, TitleForm } from "../FormPerfil/styles"
import { ModalBackground, ModalDivSuccess } from "./styles"

interface IModalProps {
    setOpenError: Function
    openError: boolean
}

const GlobalModalError = ({ setOpenError, openError }: IModalProps) => {

    return (
        <ModalBackground>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Oops</h3><ButtonClosed title="closed" onClick={() => {setOpenError(!openError)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">Alguma coisa deu errado</TitleForm>
            <span>Verifique as informações e tente novamente.</span>
        </ModalDivSuccess>
        </ModalBackground>
    )
}

export default GlobalModalError
