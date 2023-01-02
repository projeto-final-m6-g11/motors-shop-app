import { FormPattern } from "../FormPadrão/stydes";
import {
  TitleForm,
  FooterForm,
  ButtonFooter,
  InputDescription,
  InputPattern,
  HeaderForm,
  ButtonClosed,
  LabelForm,
  LabelButtonForm,
} from "./styles";

interface IProps {
  handleOpen: Function;
}

const FormPerfil = ({ handleOpen }: IProps) => {
  //useState para profile
  //useEffect para fazer um get no user

  return (
    <FormPattern>
      <HeaderForm>
        <TitleForm>Editar Perfil</TitleForm>
        <ButtonClosed
          onClick={(e) => {
            handleOpen(e);
          }}
        >
          X
        </ButtonClosed>
      </HeaderForm>

      <LabelButtonForm htmlFor="">Informações pessoais</LabelButtonForm>

      <LabelForm htmlFor="">Nome</LabelForm>
      <InputPattern
        type="text"
        value={"User name" /* substituir pelo profile.name*/}
      />

      <LabelForm htmlFor="">Email</LabelForm>
      <InputPattern type="text" value={"usuario@email.com"} />

      <LabelForm htmlFor="">CPF</LabelForm>
      <InputPattern type="text" value={"01234567890"} />

      <LabelForm htmlFor="">Celular</LabelForm>
      <InputPattern type="text" value={"9991929394"} />

      <LabelForm htmlFor="">Data de nascimento</LabelForm>
      <InputPattern type="date" value={"01/01/1990"} />

      <LabelForm htmlFor="">Descrição</LabelForm>
      <InputDescription
        cols={10}
        rows={10}
        placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora nisi natus maxime quam possimus adipisci eaque deserunt quos quod architecto modi, similique consequuntur libero. Mollitia distinctio optio veniam velit?"
      />
      <FooterForm>
        <ButtonFooter color="color">Cancelar</ButtonFooter>
        <ButtonFooter>Salvar Alterações</ButtonFooter>
      </FooterForm>
    </FormPattern>
  );
};

export default FormPerfil;
