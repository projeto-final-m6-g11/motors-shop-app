import Footer from "../../components/Footer";
import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";
import UserInfoDisplay from "../../components/UserInfoDisplay";

const Home = () => {
  return (
    <Main>
      <Header type="anonymous" />
      <CardFixo type="home" />
      <Footer />
    </Main>
  );
};

export default Home;
