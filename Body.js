import React from "react";
import "./Body.css";
import Header from "./header/Header";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useStateValue } from "../../StateProvider";

import SongRow from "./Songrow/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, tracks, track }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="contain">
        <strong className="add">
          More
          <ChevronRightIcon />
        </strong>
        <strong className="hot">
          What's hot
          <LocalFireDepartmentIcon className="fire" />
        </strong>
        <h1>Trending</h1>
      </div>

      <div className="body__info">
        <div className="body__infoText">
          <strong>Artist</strong>
          <h2>On Top Of The World </h2>
          <button onClick={playPlaylist} class="play-button">
            Play
          </button>
          <button class="follow-button">Follow</button>
        </div>
      </div>

      <div className="body__songs">
        <h2 className="playlist_name">Discover Weekly Playlist</h2>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
