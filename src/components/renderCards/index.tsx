import { CardVehicle } from "../cardsVehicles";
import { Ulstyled, Vitrine, Carrousel } from "./styles";
import { useContext, useRef, useState } from "react";
import { AnnouncementsContext } from "../../contexts/announcements";
import { IVehicle } from "../../contexts/announcements";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { UserContext } from "../../contexts/user";
import { useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export const CardsList = () => {
  const { cars, motocycles } = useContext<any>(AnnouncementsContext);
  const { setUser, setToken, token, user, userProfileView } =
    useContext<any>(UserContext);
  const carousel1 = useRef<any>(null);
  const carousel2 = useRef<any>(null);

  const { id } = useParams<any>();

  return (
    <>
      {id === undefined && (
        <Vitrine>
          <h1>Carros</h1>

          <Ulstyled ref={carousel1}>
            {cars?.map((car: IVehicle, index: number) => (
              <CardVehicle
                onHome={true}
                onOwnProfile={false}
                key={index}
                vehicle={car}
              />
            ))}
          </Ulstyled>
          <h1>Motos</h1>
          <Ulstyled ref={carousel2}>
            {motocycles?.map((motocycle: IVehicle, index: number) => (
              <CardVehicle
                onHome={true}
                onOwnProfile={false}
                key={index}
                vehicle={motocycle}
              />
            ))}
          </Ulstyled>
        </Vitrine>
      )}

      {id !== undefined && user.id === id && (
        <Vitrine>
          <h1 id="Carros">Carros</h1>

          <Ulstyled ref={carousel1}>
            {user.announcements?.map(
              (car: IVehicle, index: number) =>
                car.vehicleType.toUpperCase() === "CAR" && (
                  <CardVehicle
                    onHome={false}
                    onOwnProfile
                    key={index}
                    vehicle={car}
                  />
                )
            )}
          </Ulstyled>
          <h1 id="Motos">Motos</h1>
          <Ulstyled ref={carousel2}>
            {user.announcements?.map(
              (motocycle: IVehicle, index: number) =>
                motocycle.vehicleType.toUpperCase() === "MOTORCYCLE" && (
                  <CardVehicle
                    onHome={false}
                    onOwnProfile
                    key={index}
                    vehicle={motocycle}
                  />
                )
            )}
          </Ulstyled>
        </Vitrine>
      )}
      {id !== undefined && id !== user.id &&
      (
        <Vitrine>
          <h1 id="Carros">Carros</h1>
          <Ulstyled ref={carousel1}>
            {userProfileView.announcements?.map(
              (car: IVehicle, index: number) =>
                car.vehicleType.toUpperCase() === "CAR" && (
                  <CardVehicle
                    onHome={false}
                    onOwnProfile={false}
                    key={index}
                    vehicle={car}
                  />
                )
            )}
          </Ulstyled>
          <h1 id="Motos">Motos</h1>
          <Ulstyled ref={carousel2}>
            {userProfileView.announcements?.map(
              (motocycle: IVehicle, index: number) =>
                motocycle.vehicleType.toUpperCase() === "MOTORCYCLE" && (
                  <CardVehicle
                    onHome={false}
                    onOwnProfile={false}
                    key={index}
                    vehicle={motocycle}
                  />
                )
            )}
          </Ulstyled>
        </Vitrine>
      )}
    </>
  );
};
