import { useState } from "react"
import { useForm } from "react-hook-form"
import { TitleP } from "../../components/FormAnuncio/styles"
import { InputPattern, LabelForm, TitleForm } from "../../components/FormPerfil/styles"
import Header from "../../components/header"
import { AccountButton, Main, StyledForm, StyledSection } from "./styles"
import ModalRecoverEmailSuccess from "../../components/ModalRecoverAccount"
import API from "../../api"
import Footer from "../../components/Footer"

const RecoverAccount = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [openModalSuccess, setOpenModalSuccess] = useState(false)

    const handleOpen = (e: any) => {
        if (e.target.title === "modalBackgroundDiv" || e.target.title === "closed" || e.requestSuccess === true || e.target.title === "closeBtn"){
            setOpenModalSuccess(!openModalSuccess)
        }
    }

    const requestSuccessOpen = () => {
        setOpenModalSuccess(!openModalSuccess)
    }

    const onSubmit = (data: any) => {
        API.post("/login/passwordrecover", data)
        .then((res) => {
                requestSuccessOpen()
        })
        .catch((err) => {console.log(err)})
    };

    return (
        <Main>
            <Header type='anonymous' />
            <StyledSection>
                {openModalSuccess ? <ModalRecoverEmailSuccess onUpdate={false} handleOpen={handleOpen} /> : ""}
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <TitleForm>Recuperação de conta</TitleForm>
                    <TitleP>Nos informe o email em que a conta foi cadastrada abaixo:</TitleP>
                    <LabelForm htmlFor="">Email</LabelForm>
                    <InputPattern type="text" {...register("email", {required: true})} />
                    <AccountButton type="submit">Enviar</AccountButton>
                </StyledForm>
            </StyledSection>
            <Footer />
        </Main>
    )
}


export default RecoverAccount
