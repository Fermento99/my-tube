import React, { useState } from 'react';
import styled from 'styled-components';
import Video from './Video';

const Tile = styled.div`
  width: 25em;
  height: 20em;
  border: solid 2px #ccc;
  background-color: #ddd;
  padding: .3em;
  margin: .5em;

  > img {
    width: 100%;
    cursor: pointer;
  }

  > p {
    margin: .2em;
    text-overflow: ellipsis;
  }

  ::after {
    content: 'Play_Icon_PH';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    opacity: 0;
    background-color: #aaa ;
    transition: opacity .3s ease-out;
  }

  :hover::after {
    opacity: .7;
  }
`;

function MediaElement({ media }) {
  const [clicked, setClick] = useState(false);

  const url = media.Images.find(img => img.ImageTypeCode === 'FRAME')?.Url

  return (<>
    <Tile onClick={() => { setClick(true); }}>
      <img src={url} alt={media.title} ></img>
      <p>{media.Title}</p>
    </Tile>
    {clicked && <Video media={media} closing={() => setClick(false)} />}
  </>

  );
}

export default MediaElement;;