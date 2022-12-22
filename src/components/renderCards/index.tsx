import { CardVehicle } from "../cardsVehicles";
import { Ulstyled, Vitrine, Carrousel } from "./styles";
import { useContext, useRef } from "react";
import { AnnouncementsContext } from "../../contexts/announcements";
import { IVehicle } from "../../contexts/announcements";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const CardsList = () => {
  const { cars, motocycles } = useContext<any>(AnnouncementsContext);
  const carousel1 = useRef<any>(null);
  const carousel2 = useRef<any>(null);

  const handleLeftCarrousel = () => {
    if (window.innerWidth >= 320) {
      return (carousel1.current.scrollLeft -= 250);
    }

    if (window.innerWidth >= 820) {
      return (carousel1.current.scrollLeft -= 300);
    }
    return (carousel1.current.scrollLeft -= 400);
  };

  const handleRightCarrousel = () => {
    if (window.innerWidth >= 320) {
      return (carousel1.current.scrollLeft += 250);
    }

    if (window.innerWidth >= 820) {
      return (carousel1.current.scrollLeft += 300);
    }
    return (carousel1.current.scrollLeft += 400);
  };

  const handleLeftCarrousel2 = () => {
    if (window.innerWidth >= 320) {
      return (carousel2.current.scrollLeft -= 250);
    }

    if (window.innerWidth >= 820) {
      return (carousel2.current.scrollLeft -= 300);
    }
    return (carousel2.current.scrollLeft -= 400);
  };

  const handleRightCarrousel2 = () => {
    if (window.innerWidth >= 320) {
      return (carousel2.current.scrollLeft += 250);
    }

    if (window.innerWidth >= 820) {
      return (carousel2.current.scrollLeft += 300);
    }
    return (carousel2.current.scrollLeft += 400);
  };

  return (
    <Vitrine>
      <h1>Carros</h1>
      <Ulstyled ref={carousel1}>
        {cars?.map((car: IVehicle, index: number) => (
          <CardVehicle key={index} vehicle={car} />
        ))}
      </Ulstyled>

      {/*<Carrousel>
        <button onClick={(e) => handleLeftCarrousel()}>
          {" "}
          <SlArrowLeft />{" "}
        </button>
        <button onClick={(e) => handleRightCarrousel()}>
          {" "}
          <SlArrowRight />{" "}
        </button>
        </Carrousel>*/}

      <h1>Motos</h1>
      <Ulstyled ref={carousel2}>
        {motocycles?.map((motocycle: IVehicle, index: number) => (
          <CardVehicle key={index} vehicle={motocycle} />
        ))}
        {motocycles?.map((motocycle: IVehicle, index: number) => (
          <CardVehicle key={index} vehicle={motocycle} />
        ))}
      </Ulstyled>

      {/*<Carrousel>
        <button onClick={(e) => handleLeftCarrousel2()}>
          {" "}
          <SlArrowLeft />{" "}
        </button>
        <button onClick={(e) => handleRightCarrousel2()}>
          {" "}
          <SlArrowRight />{" "}
        </button>
      </Carrousel>*/}
    </Vitrine>
  );
};
