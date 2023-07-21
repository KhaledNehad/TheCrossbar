import { Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import Homepage from '../pages/Homepage/Homepage'
import Login from '../pages/Login/Login'
import Score from '../pages/Score/Score'
import Upcoming from '../pages/Upcoming/Upcoming'
import UpcomingMatches from './../components/UpcomingMatches/UpcomingMatches'
import { AppContainerFull } from './AppContainer.styled'

const AppContainer = () => {
  return (
    <AppContainerFull>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/score" element={<Score />} />
      </Routes>
      <UpcomingMatches />
    </AppContainerFull>
  )
}

export default AppContainer
