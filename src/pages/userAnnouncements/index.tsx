import CardFixo from "../../components/CardFixo";
import UserInfoDisplay from "../../components/UserInfoDisplay";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import MainDashboard from "./styles";
import { Vitrine } from "../../components/renderCards/styles";
import { useContext } from "react";
import { AnnouncementsContext } from "../../contexts/announcements";
import { CardsList } from "../../components/renderCards";

const Dashboard = () => {

  return (
    <MainDashboard>
      <Header type="owner" />
        <CardFixo type="default" />
        <UserInfoDisplay profile={true} />
        <CardsList />
      <Footer />
    </MainDashboard>
  );
};

export default Dashboard;