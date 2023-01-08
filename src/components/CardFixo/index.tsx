import Button from "../Button";
import { Box, ContainerButtons, Title } from "./styles";

interface ICardProps {
  type: string;
}

const CardFixo = ({ type }: ICardProps) => {
  switch (type) {
    case "home":
      return (
        <Box>
          <Title>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </Title>
          <ContainerButtons>
          <a href="#Carros"><Button >Carros</Button></a>
          <a href="#Motos"><Button >Motos</Button></a>
          </ContainerButtons>
        </Box>
      );
    default:
      return <Box />;
  }
};

export default CardFixo;
