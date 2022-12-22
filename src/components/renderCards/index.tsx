import { useState, useEffect } from "react";
import axios from "axios";
import { CardVehicle } from "../cardsVehicles";
import { Ulstyled, Vitrine } from "./styles";
interface IVehicle {
  announcementType: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicleType: string;
  published: boolean;
  images: IMGS[];
}
interface IMGS {
  id: string;
  imageUrl: string;
  type: string;
}

export const CardsList = () => {
  const [cars, setCars] = useState<IVehicle[]>([]);
  const [motocycles, setMotocycles] = useState<IVehicle[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/announcements")
      .then((res) => {
        setMotocycles(
          res.data.filter(
            (motocycle: IVehicle) => motocycle.vehicleType !== "CARRO"
          )
        );
        setCars(
          res.data.filter((car: IVehicle) => car.vehicleType === "CARRO")
        );
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(cars, motocycles);
  return (
    <Vitrine>
      <h1>Carros</h1>
      <Ulstyled>
        {cars?.map((car, index) => (
          <CardVehicle key={index}vehicle={car} />
        ))}
      </Ulstyled>
      <h1>Motos</h1>
      <Ulstyled>
        {motocycles?.map((motocycle, index) => (
          <CardVehicle key={index}vehicle={motocycle} />
        ))}
      </Ulstyled>
    </Vitrine>
  );
};
