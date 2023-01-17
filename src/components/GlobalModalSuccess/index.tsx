import { ButtonClosed, TitleForm } from "../FormPerfil/styles"
import { ModalBackground, ModalDivSuccess } from "./styles"

interface IModalProps {
    context: string
    setOpenSuccess: Function
    openSuccess: boolean
}

const GlobalModalSuccess = ({ context, setOpenSuccess, openSuccess }: IModalProps) => {

    return (
        <>
        {context === "CREATE_ANNOUNCEMENT" &&
        <ModalBackground>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={() => {setOpenSuccess(!openSuccess)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">Anúncio criado com sucesso!</TitleForm>
            <span>Agora você podera ver seus negócios crescendo em grande escala</span>
        </ModalDivSuccess>
        </ModalBackground>
        }

        {context === "EDIT_ANNOUNCEMENT" &&
        <ModalBackground title="modalBackgroundDiv" onClick={() => {setOpenSuccess(!openSuccess)}}>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={() => {setOpenSuccess(!openSuccess)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">Anúncio alterado com sucesso!</TitleForm>
            <span>Agora você podera ver seus negócios crescendo em grande escala</span>
        </ModalDivSuccess>
        </ModalBackground>
        }

        {context === "EDIT_PROFILE" &&
        <ModalBackground title="modalBackgroundDiv" onClick={() => {setOpenSuccess(!openSuccess)}}>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={() => {setOpenSuccess(!openSuccess)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">suas informações foram alteradas com sucesso!</TitleForm>
            <span>Agora você podera ver seus negócios crescendo em grande escala</span>
        </ModalDivSuccess>
        </ModalBackground>}

        {context === "EDIT_ADDRESS" &&
        <ModalBackground title="modalBackgroundDiv" onClick={() => {setOpenSuccess(!openSuccess)}}>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={() => {setOpenSuccess(!openSuccess)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">Endereço alterado com sucesso!</TitleForm>
            <span>Agora você podera ver seus negócios crescendo em grande escala</span>
        </ModalDivSuccess>
        </ModalBackground>}

        {context === "DELETE_ANNOUNCEMENT" &&
        <ModalBackground title="modalBackgroundDiv" onClick={() => {setOpenSuccess(!openSuccess)}}>
        <ModalDivSuccess>
            <div className="divRow">
                <h3 className="title">Sucesso</h3><ButtonClosed title="closed" onClick={() => {setOpenSuccess(!openSuccess)}}>X</ButtonClosed>
            </div>
            <TitleForm className="subtitle">seu anúncio foi alterado para inativo!</TitleForm>
            <span>Você pode reativa-lo na opção de editar anúncio.</span>
        </ModalDivSuccess>
        </ModalBackground>}
        </>
    )

}

export default GlobalModalSuccess;
