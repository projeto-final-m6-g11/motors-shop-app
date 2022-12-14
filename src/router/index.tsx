import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
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
