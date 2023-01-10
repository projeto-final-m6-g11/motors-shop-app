import { CardStyled } from "./styles";
import { useHistory } from "react-router-dom";
import { Review, User } from "../../contexts/announcements";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
export interface IVehicleProps {
  vehicle: {
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
  };
  onOwnProfile: boolean;
  onHome: boolean;
}
interface IMGS {
  id: string;
  imageUrl: string;
  type: string;
}

export const CardVehicle = ({
  vehicle,
  onOwnProfile,
  onHome,
}: IVehicleProps) => {
  console.log(onOwnProfile, onHome);
  const activeImage = vehicle.images?.filter((image) => image.type === "COVER");
  const historico = useHistory();
  const { userProfileView } = useContext<any>(UserContext);
  return (
    <>
      {onHome && (
        <CardStyled
          onClick={() => {
            historico.push(`/announcementDetail/${vehicle.id}`);
          }}
        >
          <div
            className={
              vehicle.published ? "flutuante__active" : "flutuante__inactive"
            }
          >
            {vehicle.published ? "Ativo" : "Inativo"}
          </div>
          <figure>
            <img
              src={activeImage[0].imageUrl}
              alt={"Foto do veiculo " + vehicle.title}
            />
          </figure>
          <article>
            <h1>{vehicle.title}</h1>
            <p>{vehicle.description}</p>
            <span className="user__data">
              <figure>
                {vehicle.user.name.split(" ")[0][0].toUpperCase()}
                {vehicle.user.name?.split(" ")[1] &&
                  vehicle.user.name?.split(" ")[1][0].toUpperCase()}
              </figure>
              <p>{vehicle.user.name}</p>
            </span>
            <div>
              <div className="km__year__car">
                <span>{vehicle.km} KM</span>
                <span>{vehicle.year}</span>
              </div>
              <p>
                {Number(vehicle.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </article>
        </CardStyled>
      )}

      {onHome === false && onOwnProfile === true && (
        <CardStyled
          onClick={() => {
            historico.push(`/announcementDetail/${vehicle.id}`);
          }}
        >
          <div
            className={
              vehicle.published ? "flutuante__active" : "flutuante__inactive"
            }
          >
            {vehicle.published ? "Ativo" : "Inativo"}
          </div>
          <figure>
            <img
              src={activeImage[0].imageUrl}
              alt={"Foto do veiculo " + vehicle.title}
            />
          </figure>
          <article>
            <h1>{vehicle.title}</h1>
            <p>{vehicle.description}</p>
            <div>
              <div className="km__year__car">
                <span>{vehicle.km} KM</span>
                <span>{vehicle.year}</span>
              </div>
              <p>
                {Number(vehicle.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </article>
        </CardStyled>
      )}
      {!onHome && !onOwnProfile && (
        <CardStyled
          onClick={() => {
            historico.push(`/announcementDetail/${vehicle.id}`);
          }}
        >
          <div
            className={
              vehicle.published ? "flutuante__active" : "flutuante__inactive"
            }
          >
            {vehicle.published ? "Ativo" : "Inativo"}
          </div>
          <figure>
            <img
              src={activeImage[0].imageUrl}
              alt={"Foto do veiculo " + vehicle.title}
            />
          </figure>
          <article>
            <h1>{vehicle.title}</h1>
            <p>{vehicle.description}</p>
            <span className="user__data">
              <figure>
                {userProfileView?.name.split(" ")[0][0].toUpperCase()}
                {userProfileView.name?.split(" ")[1] &&
                userProfileView.name?.split(" ")[1][0].toUpperCase()}
              </figure>
              <p>{userProfileView.name}</p>
            </span>
            <div>
              <div className="km__year__car">
                <span>{vehicle.km} KM</span>
                <span>{vehicle.year}</span>
              </div>
              <p>
                {Number(vehicle.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </article>
        </CardStyled>
      )}
    </>
  );
};
