import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import Error from '../../../components/Error';
import Sheet from '../../../components/Sheet';
import Splash from '../../../splash/Splash';
import { watch } from '../../../utils/api';



function Video({ media, closing }) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    watch(media, setLoaded);
    return (
      <Dialog closing={closing}>
        <Sheet>
          <Splash fullscreen={false} />
        </Sheet>
      </Dialog>
    );
  }

  if (loaded.err) { 
    return (<Dialog closing={closing}>
      <Sheet>
        <Splash fullscreen={false} disapear={true} />
        <Error>{loaded.data.Message}</Error>
      </Sheet>
    </Dialog>);
  }

  return (
    <Dialog closing={closing}>
      <Sheet>
        <Splash fullscreen={false} disapear={true} />
        <video width='100%' height='100%' controls>
          <source src={loaded.ContentUrl} />
        </video>
      </Sheet>
    </Dialog>
  );
}

export default Video;