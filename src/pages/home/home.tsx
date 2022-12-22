import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";

const Home = () => {
  return (
    <Main>
      <Header type="owner" />
      <CardFixo type="home" />
      <Footer />
    </Main>
  );
};

export default Home;
