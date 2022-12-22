import Footer from "../../components/Footer";
import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";
import { CardsList } from "../../components/renderCards";

const Home = () => {
  return (
    <Main>
      <Header type="anonymous" />
      <CardFixo type="home" />
      <CardsList />

      <Footer />
    </Main>
  );
};

export default Home;
