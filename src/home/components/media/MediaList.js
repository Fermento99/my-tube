import React from 'react';
import styled from 'styled-components';
import MediaElement from './MediaElement';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  margin: .4em 2em;
`;

const ScrollBox = styled.div`
  overflow-x: scroll;
`;

const Title = styled.h2`
  margin-left: 5em;
  font-family: sans-serif;
`

function MediaList({ media, title }) {
  console.log(media.Entities);

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