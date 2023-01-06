import { createContext, useEffect, useState } from "react";
import API from "../api";

export interface IVehicle {
  id: string;
  announcementType: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicleType: string;
  published: boolean;
  images: IMGS[];
  user: User;
  review: Review[];
}
interface IMGS {
  id: string;
  imageUrl: string;
  type: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  bio: string;
  isAdvertiser: false;
  isAdm: true;
  address: {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
}
export interface Review {
  id: string;
  text: string;
  createDate: string;
}
// interface Reviews {
//   text: string;
//   user: User;
//   announcement: IVehicle;
//   id: string;
//   createDate: string;
// }

export const AnnouncementsContext = createContext({});

export const AnnouncementsProvider = ({ children }: any) => {
  const [cars, setCars] = useState<IVehicle[]>([]);
  const [motocycles, setMotocycles] = useState<IVehicle[]>([]);

  useEffect(() => {
    API.get("/announcements")
      .then((res) => {
        setMotocycles(
          res.data.filter(
            (motocycle: IVehicle) => motocycle.vehicleType !== "car"
          )
        );
        setCars(res.data.filter((car: IVehicle) => car.vehicleType === "car"));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <AnnouncementsContext.Provider value={{ cars, motocycles }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};
