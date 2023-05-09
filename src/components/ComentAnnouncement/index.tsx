import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../api";
import { UserContext } from "../../contexts/user";
import {
  Box,
  ContainerTextArea,
  StyledTextArea,
  ContainerFastButtons,
  FastButton,
  Container,
  ContainerButtonLogin,
} from "./styles";

interface Props {
  id: string;
  reloadPage: boolean
  setReloadPage: Function
}
const CommentAnnouncement = ({ id, reloadPage, setReloadPage }: Props) => {
  const [comment, setComment] = useState("");
  const [color, setColor] = useState(0);

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const arrayOfRandomColors = [
    "brand1",
    "brand3",
    "grey0",
    "grey3",
    "random2",
    "random3",
    "random5",
    "random6",
    "random7",
    "random8",
    "random9",
    "random10",
    "random11",
  ];

  useEffect(() => {
    setColor(Math.floor(Math.random() * arrayOfRandomColors.length) + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendComment = () => {
    const textArea: any = document.getElementById('comment--textArea')
    textArea.value = ""

    if (comment !== "") {
      const createComment = new Promise((resolve, reject) =>
        API.post(
          `/announcements/${id}/comments`,
          { text: comment },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          setReloadPage(!reloadPage)
          resolve(res);
        })
        .catch((err) => reject(err))
      );
      return toast.promise(createComment, {
        error: "Algo deu errado",
      });
    }
    return toast.warning("Escreva um comentário");
  };

  const sendCommentFastButton = (e: any) => {
    const message = e.target.innerText;
    const createComment = new Promise((resolve, reject) =>
      API.post(
        `/announcements/${id}/comments`,
        {
          text: message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err))
    );
    return toast.promise(createComment, {
      error: "Algo deu errado",
    });
  };
  const history = useHistory();
  const sendToLogin = () => {
    return history.push("/login");
  };

  return (
    <>
      {user.name ? (
        <Box>
          <Container color={arrayOfRandomColors[color]}>
            <div className="User__data">
              <figure>
                {user.name.split(" ")[0][0].toUpperCase()}
                {user.name.split(" ")[1] &&
                  user.name.split(" ")[1][0].toUpperCase()}
              </figure>
              <p>{user.name}</p>
            </div>
            <ContainerTextArea>
              <StyledTextArea
                name=""
                id="comment--textArea"
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></StyledTextArea>
              <button type="submit" onClick={sendComment}>Comentar</button>
            </ContainerTextArea>
            <ContainerFastButtons>
              <FastButton onClick={(e) => {sendCommentFastButton(e)}}>
                Gostei muito!
              </FastButton>
              <FastButton onClick={(e) => sendCommentFastButton(e)}>
                Incrível
              </FastButton>
              <FastButton onClick={(e) => sendCommentFastButton(e)}>
                Recomendarei para meus amigos!
              </FastButton>
            </ContainerFastButtons>
          </Container>
        </Box>
      ) : (
        <ContainerButtonLogin>
          <button
            onClick={(e) => {
              sendToLogin();
            }}
          >
            Faça Login para comentar
          </button>
        </ContainerButtonLogin>
      )}
    </>
  );
};
export default CommentAnnouncement;
