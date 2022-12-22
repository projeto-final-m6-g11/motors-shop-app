import { createContext, useEffect, useState } from "react";
import API from "../api";

export interface IVehicle {
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

export const AnnouncementsContext = createContext({});

export const AnnouncementsProvider = ({ children }: any) => {
  const [cars, setCars] = useState<IVehicle[]>([]);
  const [motocycles, setMotocycles] = useState<IVehicle[]>([]);

  useEffect(() => {
    API.get("/announcements")
      .then((res) => {
        setMotocycles(
          res.data.filter(
            (motocycle: IVehicle) => motocycle.vehicleType !== "CAR"
          )
        );
        setCars(
          res.data.filter((car: IVehicle) => car.vehicleType === "CAR")
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <AnnouncementsContext.Provider value={{ cars, motocycles }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};
