import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import { CardsList } from "../components/renderCards";
import Dashboard from "../pages/userAnnouncements";
import AnnouncementsDetail from "../pages/announcementDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">login</Route>
      <Route path="/register">register</Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/announcementDetail">
        <AnnouncementsDetail />
      </Route>
    </Switch>
  );
};
export default Routes;
