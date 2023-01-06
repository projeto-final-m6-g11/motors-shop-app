import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import CardAnnouncement from "../../components/CardAnnouncementDetail";
import Footer from "../../components/Footer";
import { Main } from "./styles";
import CommentAnnouncement from "../../components/ComentAnnouncement";

const AnnouncementsDetail = () => {
  return (
    <Main>
      <Header type="owner" />
      <section>
        <CardFixo type="default" />
        <CardAnnouncement />
      </section>
      <Footer />
    </Main>
  );
};

export default AnnouncementsDetail;
