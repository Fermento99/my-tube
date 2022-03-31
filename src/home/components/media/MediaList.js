import React from 'react';
import styled from 'styled-components';
import MediaElement from './MediaElement';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  background-color: #FDFCFF;
  overflow-x: visible;
`;

const ScrollBox = styled.div`
  overflow-x: scroll;
  scrollbar-width: thin;
  margin: -.5em 2em 4em 2em;
`;

const Title = styled.h2`
  margin-left: 5em;
  font-family: sans-serif;
`

function MediaList({ media, title }) {
  return (<div>
    <Title>{title}</Title>
    <ScrollBox>
      <Row>
        {media.Entities.map((e, index) => <MediaElement media={e} key={index} />)}
      </Row>
    </ScrollBox>
  </div>
  );
}

export default MediaList;