import { Box } from "./styles";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addDefaultLocale(pt);

export const CardComments = ({
  iniciais,
  nome,
  publicado,
  comentario,
}: any) => {
  const timeago = new TimeAgo("pt");

  const primeira = iniciais.split(" ")[0][0].toUpperCase();
  const segunda = iniciais.split(" ")[1][0].toUpperCase();
  return (
    <Box>
      <div>
        <div className="iniciais">
          {primeira}
          {segunda}{" "}
        </div>
        <p>{nome}</p>
        <span>{timeago.format(new Date(publicado))}</span>
      </div>
      <div>
        <p className="comentario">{comentario}</p>
      </div>
    </Box>
  );
};
