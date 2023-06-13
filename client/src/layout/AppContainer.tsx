import { Navbar } from '../components/Navbar';
import Homepage from '../pages/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import Upcoming from '../pages/Upcoming/Upcoming';
import UpcomingMatches from './../components/UpcomingMatches/UpcomingMatches';

import { AppContainerFull } from './AppContainer.styled';
import Login from '../pages/Login/Login';

const AppContainer = () => {
  return (
    <AppContainerFull>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/upcoming' element={<Upcoming />} />
      </Routes>
      <UpcomingMatches />
    </AppContainerFull>
  );
};

export default AppContainer;
