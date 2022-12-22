import Car from "../../assets/car.png";
import Button from "../Button";
import {
  BoxAnuncio,
  BoxCarro,
  BoxDescrição,
  BoxInfo,
  BoxImgUl,
  BoxFotos,
  BoxPerfil,
} from "./styles";
/*import { useEffect, useState } from "react";
import { useParams } from "react-router";*/

const CardAnnouncement = () => {
  /*const [announcementDetail, setAnnouncementDetail] = useState({});
  const { title, year, km, price, description, vehicle_type, img }: any =
    announcementDetail;*/

  /*const { id }: any = useParams();*/

  /*useEffect(() => {
    api
      .get(`/announcements/${id}`)
      .then((resp) => {
        setAnnouncementDetail(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  return (
    <BoxAnuncio>
      <div>
        <BoxCarro>
          <div>
            <img src={Car} alt="Imagem Principal do Veículo" />
          </div>
        </BoxCarro>
        <BoxInfo>
          <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h1>
          <div>
            <div>
              <p>2013</p>
              <p>0km</p>
            </div>
            <span>R$ 00.000,00</span>
          </div>
          <Button>Comprar</Button>
        </BoxInfo>
        <BoxDescrição>
          <h3>Descrição</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolorum aliquid pariatur hic nostrum alias porro dolore ducimus
            corporis cumque.
          </p>
        </BoxDescrição>
      </div>
      <div>
        <BoxFotos>
          <h3>Fotos</h3>
          <BoxImgUl>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
            <li>
              <img src={Car} alt="Imagem Galeria do Veículo" />
            </li>
          </BoxImgUl>
        </BoxFotos>
        <BoxPerfil>
          <div>
            <p>UA</p>
          </div>
          <h3>Usuário Anunciante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem
            nostrum, eius commodi voluptates...
          </p>
          <Button>Ver todos anúncios</Button>
        </BoxPerfil>
      </div>
    </BoxAnuncio>
  );
};

export default CardAnnouncement;
