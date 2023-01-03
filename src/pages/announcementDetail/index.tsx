import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import CardAnnouncement from "../../components/CardAnnouncementDetail";
import Footer from "../../components/Footer";
import { Main } from "./styles";

const AnnouncementsDetail = () => {
  return (
    <Main>
      <Header type="anonymous" />
      <section>
        <CardFixo type="default" />
        <CardAnnouncement />
      </section>
      <Footer />
    </Main>
  );
};

export default AnnouncementsDetail;
