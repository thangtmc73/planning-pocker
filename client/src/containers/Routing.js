import React from "react";
import { Switch, Route } from "react-router-dom";
import { APP_PATH } from "../constants";
import HomePage from "./home-page/HomePage";
import RoomPage from "./room-page/RoomPage";

function Routing() {
  return (
    <Switch>
      <Route path={APP_PATH.HomePage} component={HomePage} exact={true} />
      <Route path={APP_PATH.RoomPage} component={RoomPage} exact={true} />
    </Switch>
  );
}

export default Routing;
