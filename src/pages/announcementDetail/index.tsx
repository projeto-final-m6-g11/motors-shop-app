import Header from "../../components/header";
import CardFixo from "../../components/CardFixo";
import CardAnnouncement from "../../components/CardAnnouncementDetail";
import Footer from "../../components/Footer";
import { Main } from "./styles";
import CommentAnnouncement from "../../components/ComentAnnouncement";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user";
import jwtDecode from "jwt-decode";
import API from "../../api";

const AnnouncementsDetail = () => {
  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  useEffect(() => {
    let tokenExists = false

    token !== "" && (tokenExists = true)

    const decoded:any = tokenExists && (jwtDecode(token))
    
    token !== "" && API.get(`/users/${decoded.id}`).then((res) => {setUser(res.data)}).catch((err) => {console.log(err)})

  }, [])

  return (
    <Main>
      <Header type="owner" />
      <section>
        <CardFixo type="default" />
        <CardAnnouncement />
      </section>
      <Footer />
    </Main>
  );
};

export default AnnouncementsDetail;
