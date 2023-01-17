import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import API from "../../api";
import { UserContext } from "../../contexts/user";
import { BuyerBtn } from "../../pages/Register/styles";
import { FormPattern } from "../FormPadrão/styles";
import GlobalModalSuccess from "../GlobalModalSuccess";
import { ModalFundo } from "../ModalFundo/styles";
import ModalSuccessRegister from "../ModalSuccessRegister";
import {
  TitleForm,
  ButtonAddImg,
  ButtonFooter,
  InputPattern,
  ButtonClosed,
  LabelForm,
  InputButton,
  LabelButtonForm,
  TitleP,
} from "./styles";

interface IProps {
  open: boolean
  setOpen: Function
}

const FormAnuncio = ({ open, setOpen }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const [isSale, setIsSale] = useState(true)
  const [isCar, setIsCar] = useState(true)
  const [openSuccess, setOpenSuccess] = useState(false)

  const onSubmit = (data: any) => {
    data.published = true
    data.images = [data.coverImage, data.imageOne]

    delete data.coverImage
    delete data.imageOne

    isSale ? data.announcementType = "SALE" : data.announcementType = "AUCTION"
    isCar ? data.vehicleType = "CAR" : data.vehicleType = "MOTORCYCLE"

    API.post('/announcements', data, {
      headers: {
        "Authorization" : `Bearer ${token}` 
      }
    })
    .then((res) => {
      setOpenSuccess(true)
      setOpen(!open)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  return (
    <FormPattern onSubmit={handleSubmit(onSubmit)}>
      <div className="divRow">
        <TitleForm>Criar anuncio</TitleForm>
        <ButtonClosed type='button' onClick={() => {setOpen(!open)}}>X</ButtonClosed>
      </div>
      <LabelButtonForm htmlFor="">Tipo de anuncio</LabelButtonForm>
      <div className="divRow">
      {isSale ? (
        <>
          <BuyerBtn
            type="button"
            value={"Venda"}
            onClick={() => {
              setIsSale(true);
            }}
          />
          <BuyerBtn
            type="button"
            value={"Leilão"}
            color="color"
            onClick={() => {
              setIsSale(false);
            }}
          />
        </>
      ) : (
        <>
          <BuyerBtn
            type="button"
            value={"Venda"}
            color="color"
            onClick={() => {
              setIsSale(true);
            }}
          />
          <BuyerBtn
            type="button"
            value={"Leilão"}
            onClick={() => {
              setIsSale(false);
            }}
          />
        </>
      )}
      </div>
      <TitleP>Informações do veículo</TitleP>
      <LabelForm htmlFor="">Título</LabelForm>
      <InputPattern type="text" placeholder="Digitar título" {...register("title", { required: true })} />

      <div className="divRow">
        <div className="divColumn">
          <LabelForm htmlFor="">Ano</LabelForm>
          <InputPattern type="text" placeholder="Digitar Ano" {...register("year", { required: true })}/>
        </div>

        <div className="divColumn">
          <LabelForm htmlFor="">Quilometragem</LabelForm>
          <InputPattern type="text" placeholder="0" {...register("km", { required: true })} />
        </div>

        <div className="divColumn">
          <LabelForm htmlFor="">Preço</LabelForm>
          <InputPattern type="text" placeholder="Digitar preço" {...register("price", { required: true })} />
        </div>
      </div>
      <LabelForm htmlFor="">Descrição</LabelForm>
      <InputPattern type="text" placeholder="Digitar descrição" {...register("description", { required: true })} />
      <LabelButtonForm>Tipo de Veículo</LabelButtonForm>
      <div className="divRow">
      {isCar ? (
        <>
          <BuyerBtn
            type="button"
            value={"Carro"}
            onClick={() => {
              setIsCar(true);
            }}
          />
          <BuyerBtn
            type="button"
            value={"Moto"}
            color="color"
            onClick={() => {
              setIsCar(false);
            }}
          />
        </>
      ) : (
        <>
          <BuyerBtn
            type="button"
            value={"Carro"}
            color="color"
            onClick={() => {
              setIsCar(true);
            }}
          />
          <BuyerBtn
            type="button"
            value={"Moto"}
            onClick={() => {
              setIsCar(false);
            }}
          />
        </>
      )}
      </div>
      <LabelForm htmlFor="">Imagem da capa</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" {...register("coverImage", { required: true })} />
      <LabelForm htmlFor="">1° Imagem da galeria</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" {...register("imageOne", { required: true })} />
      <ButtonAddImg type="button">Adicionar campo para imagem da galeria</ButtonAddImg>
      <div className="divRowEnd">
        <ButtonFooter type='button' onClick={() => {setOpen(!open)}} color="color">Cancelar </ButtonFooter>
        <ButtonFooter type="submit">Criar anúncio</ButtonFooter>
      </div>
      {openSuccess &&
      <GlobalModalSuccess context="CREATE_ANNOUNCEMENT" setOpenSuccess={setOpenSuccess} openSuccess={openSuccess} />}
    </FormPattern>
  );
};

export default FormAnuncio;
