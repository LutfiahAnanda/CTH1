import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import MainPage from "./path/MainPage";
import TrendingPage from "./path/CreatePlaylistPage";
import PageNotFoundPage from "./path/PageNotFoundPage";
import TrendingTopPage from "./path/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/CreatePlaylist">Create Playlist</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/Create/playlist" component={CreatePlaylistPage} />
        <Route path="/login" component={loginPage} />
        <Route exact path="/" component={MainPage} />
        <Route component={PageNotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}