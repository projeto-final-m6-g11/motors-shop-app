import { CardStyled } from "./styles";
export interface IVehicleProps {
  vehicle: {
    announcementType: string;
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    vehicleType: string;
    published: boolean;
    images: IMGS[];
  };
}
interface IMGS {
  id: string;
  imageUrl: string;
  type: string;
}

export const CardVehicle = ({ vehicle }: IVehicleProps) => {
  const activeImage = vehicle.images?.filter((image) => image.type === "COVER");
  return (
    <CardStyled>
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
        <span>usuario</span>
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
  );
};
