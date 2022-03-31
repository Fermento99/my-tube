import React from 'react';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import MediaList from './components/media/MediaList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Home({ user, media }) {
  console.log(media)
  return (<Container>
    <NavBar user={user} />
    <MediaList media={media[0]} title='Media List 1' />
    <MediaList media={media[1]} title='Media List 2' />
    <MediaList media={media[2]} title='Media List 3' />
  </Container>
  );
}

export default Home;