import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/spotify.css";

export default function Spotify() {
  return (
    <container className="spotify">
      <div id="spotify_body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body_contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify_footer">
        <Footer />
      </div>
    </container>
  );
}
