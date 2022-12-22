import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route exact path="/">
        default page
      </Route>
      <Route path="/login">login</Route>
      <Route path="/register">register</Route>
      <Route path="/dashboard">dashboard</Route>
    </Switch>
  );
};
export default Routes;
