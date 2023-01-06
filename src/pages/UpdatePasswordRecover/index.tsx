import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import API from "../../api"
import Footer from "../../components/Footer"
import { TitleP } from "../../components/FormAnuncio/styles"
import { InputPattern, LabelForm, TitleForm } from "../../components/FormPerfil/styles"
import Header from "../../components/header"
import ModalRecoverEmailSuccess from "../../components/ModalRecoverAccount"
import { AccountButton, Main, StyledForm, StyledSection } from "./styles"

const UpdatePasswordRecover = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isExpired, setIsExpired] = useState(true)
    const [openModalSuccess, setOpenModalSuccess] = useState(false)

    const { token } = useParams<any>()

    const handleOpen = (e: any) => {
        if (e.target.title === "modalBackgroundDiv" || e.target.title === "closed" || e.requestSuccess === true || e.target.title === "closeBtn"){
            setOpenModalSuccess(!openModalSuccess)
        }
    }

    const requestSuccessOpen = () => {
        setOpenModalSuccess(!openModalSuccess)
    }

    const onSubmit = (data: any) => {
        API.patch('/login/passwordrecover', data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {requestSuccessOpen()})
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
        const decoded: any = jwtDecode(token)

        const expirationTime = parseInt(decoded.exp) * 1000;

        const dateNow = new Date();

        const timestampNow = dateNow.getTime();

        if (timestampNow < expirationTime) {
            setIsExpired(false)
        }

    }, [isExpired])

    return (
        <>
        {isExpired ? <></> : 
        <Main>
        <Header type='anonymous' />
        <StyledSection>
            {openModalSuccess ? <ModalRecoverEmailSuccess onUpdate handleOpen={handleOpen} /> : ""}
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <TitleForm>Atualização de senha</TitleForm>
                <TitleP>Digite sua nova senha abaixo:</TitleP>
                <LabelForm htmlFor="">Nova senha</LabelForm>
                <InputPattern type="text" {...register("newPassword", {required: true})} />
                <AccountButton type="submit">Alterar senha</AccountButton>
            </StyledForm>
        </StyledSection>
        <Footer />
        </Main>}
        </>
    )
}


export default UpdatePasswordRecover
