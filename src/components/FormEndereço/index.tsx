import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../api";
import { User } from "../../contexts/announcements";
import { UserContext } from "../../contexts/user";
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
interface contextUser {
  user: User;
  token: string;
}
const FormEndereco = ({ handleOpen }: IProps) => {
  const { user, token }: contextUser = useContext<any>(UserContext);

  const [cep, setCep] = useState(user.address.cep);
  const [estado, setEstado] = useState(user.address.state);
  const [cidade, setCidade] = useState(user.address.city);
  const [rua, setRua] = useState(user.address.street);
  const [numero, setNumero] = useState(user.address.number);
  const [complemento, setComplemento] = useState(user.address.complement);

  const history = useHistory();

  useEffect(() => {
    if (!user && token) {
      return history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendDataPatchAddress = () => {
    const updateAdress = new Promise((resolve, reject) =>
      API.patch(
        `/users/addresses/${user.address.id}`,
        {
          cep: cep,
          state: estado,
          city: cidade,
          street: rua,
          number: numero,
          complement: complemento,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    );
    return toast.promise(updateAdress, {
      pending: "Atualizando",
      success: "Endereço atualizado com sucesso",
      error: "Algo deu errado",
    });
  };

  return (
    <FormPattern onSubmit={(e) => e.preventDefault()}>
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
      <InputPattern
        type="text"
        defaultValue={user.address.cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <BoxAddress>
        <LabelForm htmlFor="">Estado</LabelForm>
        <LabelForm htmlFor="">Cidade</LabelForm>
      </BoxAddress>
      <BoxAddress2>
        <InputPattern
          type="text"
          defaultValue={user.address.state}
          onChange={(e) => setEstado(e.target.value)}
        />
        <InputPattern
          type="text"
          defaultValue={user.address.city}
          onChange={(e) => setCidade(e.target.value)}
        />
      </BoxAddress2>

      <LabelForm htmlFor="">Rua</LabelForm>
      <InputPattern
        type="text"
        defaultValue={user.address.street}
        onChange={(e) => setRua(e.target.value)}
      />

      <BoxAddress>
        <LabelForm htmlFor="">Número</LabelForm>
        <LabelForm htmlFor="">Complemento</LabelForm>
      </BoxAddress>
      <BoxAddress2>
        <InputPattern
          type="text"
          defaultValue={user.address.number}
          onChange={(e) => setNumero(Number(e.target.value))}
        />
        <InputPattern
          type="text"
          defaultValue={user.address.complement}
          onChange={(e) => setComplemento(e.target.value)}
        />
      </BoxAddress2>

      <FooterForm>
        <ButtonFooter color="color">Cancelar</ButtonFooter>
        <ButtonFooter onClick={sendDataPatchAddress}>
          Salvar Alterações
        </ButtonFooter>
      </FooterForm>
    </FormPattern>
  );
};

export default FormEndereco;
