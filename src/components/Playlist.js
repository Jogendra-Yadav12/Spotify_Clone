// import axios from 'axios';
import React,{useEffect} from 'react';
// import { useStateProvider } from '../utils/StateProvider';

export default function Playlist() {
    // const [{token,dispatch}] = useStateProvider();
    // useEffect(()=>{
    //     const getPlaylistData = async()=>{
    //         const response = await axios.get("https://api.spotify.com/v1/me/playlists",
    //          {
    //             header :{
    //                 Authorization: 'Bearer' + token,
    //                 "Content-Type" : "application/json",
    //             },
    //           }
    //         );
    //       const {item} = response.data;
    //       const playlists = item.map(({name,id})=>{
    //         return {name,id};
    //       })
    //       console.log(playlists);
    //     }
    //     getPlaylistData();
    // },[token,dispatch]);
  return (
    <div>
      <Playlist/>
    </div>
  )
}
