import { useState } from 'react';
import './App.css';
import Home from './home/Home';
import Splash from './splash/Splash';
import { loginAnon } from './utils/api';

const getMedia = (setter, token) => {
  const fetch1 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 2,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())

  const fetch2 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 3,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())

  const fetch3 = fetch('https://thebetter.bsgroup.eu/Media/GetMediaList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      "MediaListId": 3,
      "IncludeCategories": false,
      "IncludeImages": true,
      "IncludeMedia": false,
      "PageNumber": 1,
      "PageSize": 15
    })
  }).then(res => res.json())
  
  Promise.all([fetch1, fetch2, fetch3]).then((data) => setter(data)).catch(err => console.log(err))
};

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
