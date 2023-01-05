import { Box } from "./styles";
import TimeAgo from "javascript-time-ago";
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addDefaultLocale(pt);

export const CardComments = ({
  // iniciais,
  // nome,
  publicado,
  comentario,
}: any) => {
  const timeago = new TimeAgo("pt");
  return (
    <Box>
      <div>
        <div>
          {/* <h3>{iniciais}</h3>
          <p>{nome}</p> */}
          <span>{timeago.format(new Date(publicado))}</span>
        </div>
        <div>
          <p>{comentario}</p>
        </div>
      </div>
    </Box>
  );
};
