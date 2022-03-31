import { useState } from 'react';
import './App.css';
import Home from './home/Home';
import Splash from './splash/Splash';
import { loginAnon, getMedia } from './utils/api';


function App() {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState(null);

  if (!data) {
    loginAnon(setData);
    return (<Splash disapear={false} />);
  }

  if (!media) {
    getMedia(setMedia, data.token.Token);
    return (<Splash disapear={false} />);
  }

  return (<>
    <Splash disapear={true} />
    <Home user={data.user} media={media} />
  </>);
}

export default App;
