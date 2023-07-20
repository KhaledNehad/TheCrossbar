import { Navbar } from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import UpcomingMatches from './../components/UpcomingMatches/UpcomingMatches';

import { AppContainerFull } from './AppContainer.styled';
import Login from '../pages/Login/Login';
import Homepage from '../pages/Homepage/Homepage';
import Upcoming from '../pages/Upcoming/Upcoming';
import Score from '../pages/Score/Score';

const AppContainer = () => {
  return (
    <AppContainerFull>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/score' element={<Score />} />
      </Routes>
      <UpcomingMatches />
    </AppContainerFull>
  );
};

export default AppContainer;
