import React from 'react'
import styled from 'styled-components';
import { watch } from '../../../utils/utils';

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
`

function MediaElement({media}) {
  return (
    <Tile>
      <img src={media.Images.find(img => img.ImageTypeCode === 'FRAME').Url} alt={media.title} onClick={() => {watch(media)}}></img>
      <p>{media.Title}</p>
    </Tile>
  )
}

export default MediaElement