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
  return (<Container>
    <NavBar user={user} />
    <MediaList media={media} />
  </Container>
  );
}

export default Home;