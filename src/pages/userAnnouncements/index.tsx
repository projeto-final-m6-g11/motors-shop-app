import CardFixo from "../../components/CardFixo";
import UserInfoDisplay from "../../components/UserInfoDisplay";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import MainDashboard from "./styles";
import { CardsList } from "../../components/renderCards";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user";
import { useParams } from "react-router-dom";
import API from "../../api";

const Dashboard = () => {
  const { setUser, setToken, token, user, userProfileView, setUserProfileView } = useContext<any>(UserContext);

  const { id } = useParams<any>()
  return (
    <>
    {token && user.id === id ? 
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={user} userId={user.id} />
    <CardsList />
    <Footer />
    </MainDashboard> 
    :
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={userProfileView} userId={user.id} />
    <CardsList />
    <Footer />
    </MainDashboard> 
    }
    </>
  );
};

export default Dashboard;
