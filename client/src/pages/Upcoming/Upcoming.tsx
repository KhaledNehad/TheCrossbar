import { useEffect, useState } from 'react';

import Container from '../../layout/Container';

const Upcoming = () => {
  const [authenticated, setAuthenticated] = useState('');
  useEffect(() => {
    const loggedInUser = localStorage.getItem('authenticated');
    if (loggedInUser === 'true') {
      setAuthenticated('true');
    }
  }, []);
  if (!authenticated) {
    <>Not login</>;
  } else {
    <Container>
      <h1>Upcoming</h1>
    </Container>;
  }
};

export default Upcoming;
