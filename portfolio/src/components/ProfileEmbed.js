import React, { useState } from "react";
import AlbumLineItem from "./AlbumLineItem";
import axios from "axios";

function ProfileEmbed() {
  const [albumState, setAlbumState] = useState([]);

  function getChart() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=thenewblueblood&api_key=c94621ecb26f194d333023d806785d53&format=json"
      )
      .then((response) => {
        console.log(response);
        const albumList = [];
        albumList.push(
          response.data.weeklyalbumchart.album[0],
          response.data.weeklyalbumchart.album[1],
          response.data.weeklyalbumchart.album[2],
          response.data.weeklyalbumchart.album[3],
          response.data.weeklyalbumchart.album[4]
        );
        console.log("albumlist!", albumList);
        setAlbumState(albumList);
        console.log("album state!!!", albumState);
      });
  }

  getChart();

  return (
    <div className="col-md-4 section-row">
      <div className="row">
        <h3 className="list-header">What I'm listening to this week</h3>
      </div>
      <ul className="list-content">
        {albumState.map((album) => {
          return (
            <AlbumLineItem
              artist={album.artist["#text"]}
              album={album.name}
              url={album.url}
              count={album.playcount}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProfileEmbed;
