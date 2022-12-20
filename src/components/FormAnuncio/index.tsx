import { FormPattern } from "../FormPadrão/stydes"
import { TitleForm, ButtonAddImg, FooterForm, ButtonFooter, InputPattern, CampMultInput, DivLabelInput, HeaderForm, ButtonClosed, LabelForm, InputButton, LabelButtonForm, CampButtons, TitleP } from "./stydes";
 
const FormAnuncio = () => {

  return (
            
            <FormPattern>

                <HeaderForm>
                
                    <TitleForm>Criar anuncio</TitleForm> <ButtonClosed>X</ButtonClosed>
                    
                </HeaderForm>   

                <LabelButtonForm htmlFor="">Tipo de anuncio</LabelButtonForm>                
                <CampButtons>
            
                    <InputButton type="button" value={'Venda'}/>
                    <InputButton  type="button" value={'Leilão'} color='color'/>

                </CampButtons>

                <TitleP>Informações do veículo</TitleP>
                
                <LabelForm htmlFor="">Título</LabelForm>
                    <InputPattern type="text" placeholder="Digitar título"/>

                <CampMultInput>

                    <DivLabelInput>
                        <LabelForm htmlFor="">Ano</LabelForm>
                        <InputPattern type="text" placeholder="Digitar Ano"/>
                    </DivLabelInput>

                    <DivLabelInput>
                        <LabelForm htmlFor="">Quilometragem</LabelForm>
                        <InputPattern type="text" placeholder="0"/>
                    </DivLabelInput>

                    <DivLabelInput>
                        <LabelForm htmlFor="">Preço</LabelForm>
                        <InputPattern type="text" placeholder="Digitar preço"/>
                    </DivLabelInput>

                </CampMultInput>

                <LabelForm htmlFor="">Descrição</LabelForm>
                    <InputPattern type="text" placeholder="Digitar descrição"/>

                <LabelButtonForm>Tipo de Veículo</LabelButtonForm >
                <CampButtons>
                    <InputButton type="button" value={'Carros'}/>
                    <InputButton type="button" value={'Motos'} color='color'/>

                </CampButtons>

                <LabelForm htmlFor="">Imagem da capa</LabelForm>
                    <InputPattern type="text" placeholder="Inserir URL da imagem"/>

                    
                    <LabelForm htmlFor="">1° Imagem da galeria</LabelForm>
                    <InputPattern type="text" placeholder="Inserir URL da imagem"/>

                <ButtonAddImg>Adicionar campo para imagem da galeria</ButtonAddImg>
                <FooterForm>
                    <ButtonFooter color='color'>Cancelar </ButtonFooter>
                    <ButtonFooter>Criar anúncio</ButtonFooter>
                </FooterForm>
            </FormPattern> 
        );
};

export default FormAnuncio;