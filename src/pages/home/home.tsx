import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";
import UserInfoDisplay from "../../components/UserInfoDisplay";

const Home = () => {
  return (
    <Main>
      <Header type="owner" />
      <CardFixo type="default" />
      <UserInfoDisplay profile={true} />
      <Footer />
    </Main>
  );
};

export default Home;
