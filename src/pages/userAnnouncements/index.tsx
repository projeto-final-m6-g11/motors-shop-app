import CardFixo from "../../components/CardFixo";
import UserInfoDisplay from "../../components/UserInfoDisplay";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import MainDashboard from "./styles";

const Dashboard = () => {
  return (
    <MainDashboard>
      <Header type="owner" />
            <div className="pageContent">
            <CardFixo type="default" />
            <div className="space"></div>
            <UserInfoDisplay profile={true} />
      </div>
      <Footer />
    </MainDashboard>
  );
};

export default Dashboard;