import { useContext , useState} from "react";
import { useForm } from "react-hook-form";
import API from "../../api";
import { Review, User } from "../../contexts/announcements";
import { UserContext } from "../../contexts/user";
import { FormPattern } from "../FormPadrão/styles";
import {
  TitleForm,
  ButtonAddImg,
  FooterForm,
  ButtonFooter,
  InputPattern,
  CampMultInput,
  DivLabelInput,
  HeaderForm,
  ButtonClosed,
  LabelForm,
  InputButton,
  LabelButtonForm,
  CampButtons,
  TitleP,
} from "./styles";

export interface IVehicleEdit{
  vehicle: {
    id: string              | undefined;
    announcementType: string| undefined;
    title: string           | undefined;
    year: number            | undefined;
    km: number              | undefined;
    price: number           | undefined;
    description: string     | undefined;
    vehicleType: string     | undefined;
    published: boolean      | undefined;
    images: IMGS[]          | undefined;
    user: User              | undefined;
    review: Review[]        | undefined;
  }
};


interface IMGS {
  id:       string| undefined;
  imageUrl: string| undefined;
  type:     string| undefined;
}

const FormEdit = ({vehicle}:IVehicleEdit) => {
  const { stateEdit, setEdit,token, setUser, setToken } = useContext<any>(UserContext);
  
  const { register, handleSubmit, formState: { errors },  } = useForm();

  const [isSale, setIsSale] = useState<boolean>(true)
  
  const [isCar, setIsCar] = useState<boolean>(true)

  const [ published , setPublished] = useState<boolean>(true);



  const onSubmit = (data: any) => {
    data.published = true
    data.images = [data.coverImage, data.imageOne]

    delete data.coverImage
    delete data.imageOne

    isSale ? data.announcementType = "SALE" : data.announcementType = "AUCTION"
    isCar ? data.vehicleType = "CAR" : data.vehicleType = "MOTORCYCLE"

     
      API.patch('/announcements/'+vehicle.id, data, {
        headers: {
          "Authorization" : `Bearer ${token}` 
        }
      })
      .then((res) => {
        setEdit(false)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  const excluidAnnouncement = ()=>{
    API.delete('/announcements/'+vehicle.id,{
      headers: {
        "Authorization" : `Bearer ${token}` 
      }
    })
    .then((res) => {
      setEdit(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <FormPattern onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm>
        <TitleForm>Editar anúncio</TitleForm>{" "}
        <ButtonClosed onClick={()=> setEdit(false)}>X
        </ButtonClosed>
      </HeaderForm>

      <LabelButtonForm htmlFor="">Tipo de anúncio </LabelButtonForm>
      
      {
        isSale?
          (<CampButtons>
            <InputButton  type="button" value={"Venda"} />
            <InputButton onClick={()=>setIsSale(!isSale)} type="button" value={"Leilão"} color="color" />
          </CampButtons>)
          :
          (<CampButtons>
            <InputButton onClick={()=>setIsSale(!isSale)} type="button" value={"Venda"} color="color"/>
            <InputButton  type="button" value={"Leilão"}  />
          </CampButtons>)
      }
      

      <TitleP>Informações do veículo</TitleP>

      <LabelForm htmlFor="">Título</LabelForm>
      <InputPattern type="text" placeholder="Digitar título" defaultValue={vehicle.title} {...register("title")}/>

      <CampMultInput>
        <DivLabelInput>
          <LabelForm htmlFor="">Ano</LabelForm>
          <InputPattern type="text" placeholder="Digitar Ano" defaultValue={vehicle.year} {...register("year")}/>
        </DivLabelInput>

        <DivLabelInput>
          <LabelForm htmlFor="">Quilometragem</LabelForm>
          <InputPattern type="text" placeholder="0" {...register("km")}/>
        </DivLabelInput>

        <DivLabelInput>
          <LabelForm htmlFor="">Preço</LabelForm>
          <InputPattern type="text" placeholder="Digitar preço"defaultValue={vehicle.price} {...register("price")}/>
        </DivLabelInput>
      </CampMultInput>

      <LabelForm htmlFor="">Descrição</LabelForm>
      <InputPattern type="text" placeholder="Digitar descrição"defaultValue={vehicle.description} {...register("description")}/>

      <LabelButtonForm>Tipo de Veículo</LabelButtonForm>
      
      {
        isCar?
          (
           <CampButtons>
            <InputButton type="button" value={"Carros"} />
            <InputButton onClick={()=>setIsCar(!isCar)}  type="button" value={"Motos"} color="color" />
           </CampButtons>
          )
          :
          (
           <CampButtons>
            <InputButton onClick={()=>setIsCar(!isCar)}  type="button" value={"Carros"} color="color" />
            <InputButton type="button" value={"Motos"}  />
           </CampButtons>
          )
      }
      <LabelButtonForm>Publicado</LabelButtonForm>
      
      {
        published?
          (
            <CampButtons>
              <InputButton type="button" value={"Sim"} />
              <InputButton onClick={()=>setPublished(!published)} type="button" value={"Não"} color="color" />
            </CampButtons>
          )
          :
          (
            <CampButtons>
              <InputButton onClick={()=>setPublished(!published)} type="button" value={"Sim"} color="color"/>
              <InputButton type="button" value={"Não"}  />
            </CampButtons>
          )
      }


      <LabelForm htmlFor="">Imagem da capa</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" defaultValue={''}{...register("coverImage")} />

      <LabelForm htmlFor="">1° Imagem da galeria</LabelForm>
      <InputPattern type="text" placeholder="Inserir URL da imagem" defaultValue={''}{...register("imageOne")} />

      <ButtonAddImg>Adicionar campo para imagem da galeria</ButtonAddImg>
      <FooterForm>
        <ButtonFooter type="button" color="color" onClick={()=>excluidAnnouncement()}>Excluir anúncio </ButtonFooter>
        <ButtonFooter type="submit">Salvar alteração</ButtonFooter>
      </FooterForm>
    </FormPattern>
  );
};

export default FormEdit;
