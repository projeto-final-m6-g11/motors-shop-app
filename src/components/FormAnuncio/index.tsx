import { FormPattern } from "../FormPadrão/styles";
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
  return (
    <FormPattern>
      <div className="divRow">
        <TitleForm>Criar anuncio</TitleForm>
        <ButtonClosed type='button' onClick={() => {setOpen(!open)}}>X</ButtonClosed>
      </div>
      <LabelButtonForm htmlFor="">Tipo de anuncio</LabelButtonForm>
      <div className="divRow">
      <InputButton type="button" value={"Venda"} />
      <InputButton type="button" value={"Leilão"} color="color" />
      </div>
      <TitleP>Informações do veículo</TitleP>
      <LabelForm htmlFor="">Título</LabelForm>
      <InputPattern type="text" placeholder="Digitar título" />

      <div className="divRow">
        <div className="divColumn">
          <LabelForm htmlFor="">Ano</LabelForm>
          <InputPattern type="text" placeholder="Digitar Ano" />
        </div>

        <div className="divColumn">
          <LabelForm htmlFor="">Quilometragem</LabelForm>
          <InputPattern type="text" placeholder="0" />
        </div>

        <div className="divColumn">
          <LabelForm htmlFor="">Preço</LabelForm>
          <InputPattern type="text" placeholder="Digitar preço" />
        </div>
      </div>
      <LabelForm htmlFor="">Descrição</LabelForm>
      <InputPattern type="text" placeholder="Digitar descrição" />
      <LabelButtonForm>Tipo de Veículo</LabelButtonForm>
      <div className="divRow">
        <InputButton type="button" value={"Carros"} />
        <InputButton type="button" value={"Motos"} color="color" />
      </div>
      <LabelForm htmlFor="">Imagem da capa</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" />
      <LabelForm htmlFor="">1° Imagem da galeria</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" />
      <ButtonAddImg type="button">Adicionar campo para imagem da galeria</ButtonAddImg>
      <div className="divRowEnd">
        <ButtonFooter type='button' onClick={() => {setOpen(!open)}} color="color">Cancelar </ButtonFooter>
        <ButtonFooter type="button">Criar anúncio</ButtonFooter>
      </div>
    </FormPattern>
  );
};

export default FormAnuncio;
