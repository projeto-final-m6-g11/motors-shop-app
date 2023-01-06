import { useContext } from "react";
import { LogicFilterContext } from "../../contexts/logicfilter";
import Button from "../Button";
import { Box, ContainerButtons, Title } from "./styles";

interface ICardProps {
  type: string;
}

const CardFixo = ({ type }: ICardProps) => {
  const { setCar,motocyclesFilter,car,setmotocyclesFilter } = useContext(LogicFilterContext)


  const filterCar = ()=>{

    setCar(true);
    if(motocyclesFilter){
      setmotocyclesFilter(false)
    }

  }
  const filterMoto = ()=>{

    setmotocyclesFilter(true)
    if(car){
      setCar(false)
    }

  }

  switch (type) {
    case "home":
      return (
        <Box>
          <Title>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </Title>
          <ContainerButtons>
            <Button onClick={() => filterCar()}>Carros</Button>
            <Button onClick={()=> filterMoto()}>Motos</Button>
          </ContainerButtons>
        </Box>
      );
    default:
      return <Box />;
  }
};

export default CardFixo;
