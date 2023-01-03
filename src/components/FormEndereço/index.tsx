import { FormPattern } from "../FormPadrão/styles";
import {
  TitleForm,
  FooterForm,
  ButtonFooter,
  InputPattern,
  HeaderForm,
  ButtonClosed,
  LabelForm,
  LabelButtonForm,
  BoxAddress,
  BoxAddress2,
} from "./styles";

interface IProps {
  handleOpen: Function;
}

const FormEndereco = ({ handleOpen }: IProps) => {
  //useState para profile
  //useEffect para fazer um get no user

  return (
    <FormPattern>
      <HeaderForm>
        <TitleForm>Editar Endereço</TitleForm>
        <ButtonClosed
          onClick={(e) => {
            handleOpen(e);
          }}
        >
          X
        </ButtonClosed>
      </HeaderForm>

      <LabelButtonForm htmlFor="">Informações de endereço</LabelButtonForm>

      <LabelForm htmlFor="">CEP</LabelForm>
      <InputPattern type="text" value={"88500000"} />

      <BoxAddress>
        <LabelForm htmlFor="">Estado</LabelForm>
        <LabelForm htmlFor="">Cidade</LabelForm>
      </BoxAddress>
      <BoxAddress2>
        <InputPattern type="text" value={"Minas Gerais"} />
        <InputPattern type="text" value={"Belo Horizonte"} />
      </BoxAddress2>

      <LabelForm htmlFor="">Rua</LabelForm>
      <InputPattern type="text" value={"Rua das Hortências"} />

      <BoxAddress>
        <LabelForm htmlFor="">Número</LabelForm>
        <LabelForm htmlFor="">Complemento</LabelForm>
      </BoxAddress>
      <BoxAddress2>
        <InputPattern type="text" value={"2050"} />
        <InputPattern type="text" value={"Apto 15"} />
      </BoxAddress2>

      <FooterForm>
        <ButtonFooter color="color">Cancelar</ButtonFooter>
        <ButtonFooter>Salvar Alterações</ButtonFooter>
      </FooterForm>
    </FormPattern>
  );
};

export default FormEndereco;
