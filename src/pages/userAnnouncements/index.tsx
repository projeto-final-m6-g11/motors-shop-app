import CardFixo from "../../components/CardFixo";
import UserInfoDisplay from "../../components/UserInfoDisplay";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import MainDashboard from "./styles";
import { CardsList } from "../../components/renderCards";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const { id } = useParams<any>()

  return (
    <>
    {token && user ? 
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={user} />
    <CardsList />
    <Footer />
    </MainDashboard> 
    :
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={user} />
    <CardsList />
    <Footer />
    </MainDashboard> 
    }
    </>
  );
};

export default Dashboard;
