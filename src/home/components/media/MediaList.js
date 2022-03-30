import React from 'react'
import MediaElement from './MediaElement';

function MediaList({media}) {
  console.log(media.Entities);

  return (
    <li>
      {media.Entities.map((e, index) => <MediaElement media={e} key={index} />)}
    </li>

  )
}

export default MediaList