import React from "react";
import Footer from "../player/footer/Footer";
import "./Player.css";
import Sidebar from "../player/sidebar/Sidebar";
import Body from "../player/Body/Body";
import Sidebarleft from "./sidebar/Sidebarleft";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
        <Sidebarleft />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}
export default Player;
