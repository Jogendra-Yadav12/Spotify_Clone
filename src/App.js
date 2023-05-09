import './App.css'
import { useEffect } from 'react'
import Login from './components/Login';
import Spotify from './components/Spotify.js';
import {useStateProvider} from './utils/StateProvider.js';
import {reducerCases} from './utils/Constants';

function App() {
  const [{token},dispatch] = useStateProvider();
    useEffect(()=>{
      const hash = window.location.hash;
      if (hash){
        const token = hash.substring(1).split("&")[0].split('=')[1];
        
        dispatch({type:reducerCases.SET_TOKEN,token})
      }
    },[token,dispatch])
  return (
    <div className='full'>
    {
      token ? <Spotify />:
      <Login />
    }
    </div>
  );
}

export default App;
