import React, { useState, useEffect } from "react";
import AlbumLineItem from "./AlbumLineItem";
import axios from "axios";

function ProfileEmbed() {
  // My playlist info will populate into an array, so we initially set this state as an empty one
  const [albumState, setAlbumState] = useState([]);

  // last.fm api request to retrieve my weekly listening history
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
        // Setting the album state to the array in which my top albums were pushed
        setAlbumState(albumList);
      });
  }

  // UseEffect prevents axios from repeatedly making this API call
  useEffect(() => {
    getChart();
  }, []);

  return (
    <div className="col-md-4 section-row list-container">
      <div className="row">
        <h3 className="list-header">
          <strong>What I'm listening to this week</strong>
        </h3>
      </div>
      <ul className="list-content">
        {/* Rendering each album info */}
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
      <p className="credit-line">
        Powered by{" "}
        <a href="http://last.fm" target="_blank" rel="noreferrer">
          Last.fm
        </a>
      </p>
    </div>
  );
}

export default ProfileEmbed;
