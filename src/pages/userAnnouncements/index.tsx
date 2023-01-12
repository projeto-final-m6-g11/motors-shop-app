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
import { DivSpace } from "../../styles";
import jwtDecode from "jwt-decode";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const { setUser, setToken, token, user, userProfileView, setUserProfileView, userProfileViewId, } = useContext<any>(UserContext);

  useEffect(() => {

    localStorage.setItem("USER_CONTEXT_PROFILE", userProfileViewId)

    API.get(`/users/${userProfileViewId}`)
    .then((res) => {
      setUserProfileView(res.data)
    })
    .catch((err) => {console.log(err)})

    let tokenExists = false

    token !== "" && (tokenExists = true)

    const decoded:any = tokenExists && (jwtDecode(token))
    
    token !== "" && API.get(`/users/${decoded.id}`).then((res) => {setUser(res.data)}).catch((err) => {console.log(err)})

  }, [])

  const { id } = useParams<any>()

  setTimeout(() => {
    setIsLoaded(true)
  }, 200)

  return (
    <>
    {isLoaded && token && user.id === id &&
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={user} userId={user.id} />
    <DivSpace height="160px" />
    <CardsList />
    <Footer />
    </MainDashboard>
    }
    {isLoaded && token && user.id !== id &&
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={userProfileView} userId={user.id} />
    <DivSpace height="160px" />
    <CardsList />
    <Footer />
    </MainDashboard> 
    }
    {isLoaded && token === "" &&
    <MainDashboard>
    <Header type="owner" />
    <CardFixo type="default" />
    <UserInfoDisplay profile user={userProfileView} userId={user.id} />
    <DivSpace height="160px" />
    <CardsList />
    <Footer />
    </MainDashboard> 
    }
    </>
  );
};

export default Dashboard;
