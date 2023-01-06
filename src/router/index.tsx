import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import Dashboard from "../pages/userAnnouncements";
import AnnouncementsDetail from "../pages/announcementDetail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RecoverAccount from "../pages/recoverAccount";
import UpdatePasswordRecover from "../pages/UpdatePasswordRecover";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/createaccount">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/announcementDetail">
        <AnnouncementsDetail />
      </Route>
      <Route exact path='/recoveraccount'>
        <RecoverAccount />
      </Route>
      <Route exact path='/recoveraccount/:token'>
        <UpdatePasswordRecover />
      </Route>
    </Switch>
  );
};
export default Routes;
