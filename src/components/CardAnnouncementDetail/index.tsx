import Button from "../Button";
import { CardComments } from "../CardComments";
import {
  Box,
  BoxAnuncio,
  BoxCarro,
  BoxDescrição,
  BoxInfo,
  BoxImgUl,
  BoxFotos,
  BoxPerfil,
  BoxComments,
  ListComments,
} from "./styles";
import API from "../../api";
import { useEffect, useState, useContext, useRef } from "react";
import { useHistory, useParams } from "react-router";
import CommentAnnouncement from "../ComentAnnouncement";
import { UserContext } from "../../contexts/user";
interface IImage {
  id: string;
  imageUrl: string;
  type: string;
}

const CardAnnouncement = () => {
  const [announcementDetail, setAnnouncementDetail] = useState<any>({});
  const {
    setUser,
    setToken,
    token,
    user,
    userProfileView,
    setUserProfileView,
  } = useContext<any>(UserContext);
  // const { title, year, km, price, description, vehicle_type, img }: any =
  //   announcementDetail;
  const ref = useRef<any>(null);
  const { id }: any = useParams();
  const history = useHistory();
  useEffect(() => {
    API.get(`/announcements/${id}`)
      .then((resp) => {
        setAnnouncementDetail(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      API.get(`/announcements/${id}`).then((resp) => {
        setAnnouncementDetail(resp.data);
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* setInterval(() => {
    API.get(`/announcements/${id}`).then((resp) => {
      setAnnouncementDetail(resp.data);
    });
  }, 2000); */

  const goToUserAnnouncement = () => {
    API.get(`/users/${announcementDetail.user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUserProfileView(res.data);
        history.push(`/profile/${announcementDetail.user.id}`);
      })
      .catch((err) => console.log(err));
  };

  if (announcementDetail.title) {
    const primeira = announcementDetail.user.name
      .split(" ")[0][0]
      .toUpperCase();
    const segunda =
      announcementDetail.user.name.split(" ")[1] &&
      announcementDetail.user.name.split(" ")[1][0].toUpperCase();

    return (
      <Box
        onMouseDown={(e) => {
          ref.current.style.width = "100%";
          ref.current.style.height = "auto";
          ref.current.style.position = "relative";
          ref.current.style.left = "0";
          ref.current.style.top = "0";
        }}
      >
        <BoxAnuncio>
          <div>
            <BoxCarro>
              <div>
                <img
                  src={announcementDetail.images[0].imageUrl}
                  alt="Imagem Principal do Veículo"
                />
              </div>
            </BoxCarro>
            <BoxInfo>
              <h1>{announcementDetail.title}</h1>
              <div>
                <div>
                  <p>{announcementDetail.year}</p>
                  <p>{announcementDetail.km}km</p>
                </div>
                <span>R$ {announcementDetail.price}</span>
              </div>
              <Button>Comprar</Button>
            </BoxInfo>
            <BoxDescrição>
              <h3>Descrição</h3>
              <p>{announcementDetail.description}</p>
            </BoxDescrição>
          </div>
          <div>
            <BoxFotos>
              <h3>Fotos</h3>
              <BoxImgUl>
                {announcementDetail.images
                  .filter(
                    (image: IImage) => image.type.toUpperCase() !== "COVER"
                  )
                  .map((image: IImage, index: number) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        ref.current.style.width = "90vw";
                        ref.current.style.height = "90vh";
                        ref.current.style.position = "absolute";
                        ref.current.style.left = "0";
                        ref.current.style.top = "0";
                      }}
                    >
                      <img
                        ref={ref}
                        src={image.imageUrl}
                        alt="Imagem Galeria do Veículo"
                      />
                    </li>
                  ))}
              </BoxImgUl>
            </BoxFotos>
            <BoxPerfil>
              <div>
                <p>
                  {announcementDetail.user.name.split(" ")[0][0].toUpperCase()}
                  {announcementDetail.user.name.split(" ")[1] &&
                    announcementDetail.user.name.split(" ")[1][0].toUpperCase()}
                </p>
              </div>
              <h3>{announcementDetail.user.name}</h3>
              <p>{announcementDetail.user.bio}</p>
              <Button onClick={goToUserAnnouncement}>Ver todos anúncios</Button>
            </BoxPerfil>
          </div>
        </BoxAnuncio>
        <BoxComments>
          <h2>Comentários</h2>
          <ListComments>
            {announcementDetail.review.map((comment: any) => (
              <CardComments
                iniciais={comment.user.name}
                nome={comment.user.name}
                key={comment.id}
                publicado={comment.createDate}
                comentario={comment.text}
              />
            ))}
          </ListComments>
        </BoxComments>
        <CommentAnnouncement id={id} />
      </Box>
    );
  } else {
    return <></>;
  }
};

export default CardAnnouncement;
