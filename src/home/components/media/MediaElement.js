import React, { useState } from 'react';
import styled from 'styled-components';
import Video from './Video';

const Tile = styled.div`
  font-family: sans-serif;
  width: 24em;
  height: 17em;
  border: solid 2px #8D818C;
  background-color: #ECEAEC;
  padding: .3em;
  margin: 1em;
  text-align: center;
  font-weight: bolder ;
  border-radius: 4px;

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
    background-color: #fff ;
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