import Footer from "../../components/Footer";
import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import Main from "./styles";
import UserInfoDisplay from "../../components/UserInfoDisplay";

const Home = () => {
  return (
    <div className="page">
    <Header type="owner" />
    <Main>
      <CardFixo type="default" />
      <UserInfoDisplay />
    </Main>
    <Footer />
    </div>
    
  );
};

export default Home;
