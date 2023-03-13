import React from "react";
import "./Sidebar.css";
import SidebarOption from "./partials/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ExploreIcon from "@mui/icons-material/Explore";
import { useStateValue } from "../../StateProvider";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import { screen } from "../../Data";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      {screen.map((view) => {
        const { image } = view;
        return (
          <div className="sidebar__item">
            <img className="sidebar__logo" src={image} alt="Beelogo" />
            <span className="sidebar__text">
              <span className="sidebar__bee">Bee</span>Music
            </span>
          </div>
        );
      })}
      ;
      <br />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Trends" Icon={WhatshotIcon} />
      <SidebarOption title="Feeds" Icon={ExploreIcon} />
      <br />
      <strong className="sidebar__title">Discover</strong>
      <br />
      <SidebarOption title="New and Notable" Icon={GridViewOutlinedIcon} />
      <SidebarOption
        title="Release Calender"
        Icon={CalendarMonthOutlinedIcon}
      />
      <SidebarOption title="Events" Icon={ConfirmationNumberOutlinedIcon} />
      <br />
      <strong className="sidebar__title">Your Collection</strong>
      <br />
      <SidebarOption title="Favorite Songs" Icon={FavoriteBorderIcon} />
      <SidebarOption title="Artist" Icon={Groups3Icon} />
      <SidebarOption title="Albums" Icon={StarOutlineIcon} />
      <br />
      <hr />
      <div className="footer__left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Alone</h4>
          <p>Burna Boy</p>
        </div>
        <ChevronRightOutlinedIcon className="left" />
      </div>
    </div>
  );
}

export default Sidebar;
