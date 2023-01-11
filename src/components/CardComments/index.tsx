import { Box } from "./styles";
import Button from "../Button";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";
import { UserContext } from "../../contexts/user";
import { useContext, useState } from "react";
import API from "../../api";
import { toast } from "react-toastify";

TimeAgo.addDefaultLocale(pt);

export const CardComments = ({
  iniciais,
  nome,
  publicado,
  comentario,
  id,
  commentOwner,
}: any) => {
  const [disabled, setDisabled] = useState(true);
  const timeago = new TimeAgo("pt");
  const { token, user } = useContext<any>(UserContext);

  const ableEdit = (event: any) => {
    event?.preventDefault();

    if (disabled) {
      setDisabled(false);
    } else {
      const newComent = { text: event.target.comentarioNovo.value };
      editComment(newComent);
      setDisabled(true);
    }
  };

  const editComment = (data: any) => {
    API.patch(`/comments/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        toast.success("Atualizado com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = () => {
    API.delete(`/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => {
        toast.success("Excluído com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const primeira = iniciais?.split(" ")[0][0].toUpperCase();
  const segunda =
    iniciais?.split(" ")[1] && iniciais?.split(" ")[1][0].toUpperCase();
  return (
    <Box>
      <div className="usuario">
        <div className="iniciais">
          {primeira}
          {segunda}{" "}
        </div>
        <p>{nome}</p>
        <span>{timeago.format(new Date(publicado))}</span>
      </div>
      <div className="usuario_comentario">
        <form onSubmit={ableEdit}>
          <input
            type="text"
            id="comentarioNovo"
            defaultValue={comentario}
            disabled={disabled}
          />
          <div>
            {(user?.isAdm || user?.id === commentOwner) && (
              <Button type="submit">{<CiEdit color="green" />}</Button>
            )}
            {(user?.isAdm || user?.id === commentOwner) && (
              <Button onClick={deleteComment}>{<CiTrash color="red" />}</Button>
            )}
          </div>
        </form>
      </div>
    </Box>
  );
};
