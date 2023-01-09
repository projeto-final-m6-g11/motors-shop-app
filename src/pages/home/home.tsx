import Footer from "../../components/Footer";
import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";
import UserInfoDisplay from "../../components/UserInfoDisplay";
import { CardsList } from "../../components/renderCards";
import FormEdit from "../../components/FormEdit";
import { ModalFundo } from "../../components/ModalFundo/styles";

const Home = () => {
  return (
    <Main>
      <Header type="anonymous" />
      <div className="pageContent">
        <CardFixo type="home" />
        <CardsList />
      </div>
      
      <Footer />
    </Main>
  );
};

export default Home;
