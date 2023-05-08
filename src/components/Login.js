import React from 'react';
import '../styles/login.css';
import img from '../assets/login_logo.png'

export default function Login() {
  const handleClick = () =>{
    const clientId = "8b54746a87d347c196ab50a3ad7aac94";
    const redirect_Url = "https://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scopes = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirect_Url}&scope=${scope.join(
      " "
     )}&response_type=token&show_dailog=true`;
  };
  return (
    <container className='login'>
      <img src={img} alt=''/>
      <button onClick={handleClick}>Connect Spotify</button>
    </container>
  )
}
