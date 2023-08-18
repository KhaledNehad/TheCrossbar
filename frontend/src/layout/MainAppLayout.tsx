import { Route, Routes } from 'react-router-dom';

import { Nav, Main, RightSide, Footer, Layout } from '.';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import HomeFeed from '../pages/HomeFeeds/HomeFeed';

function MainAppLayout() {
  return (
    <Layout
      sidebar={<Nav />}
      mainContent={
        <Main>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Main>
      }
      rightSidebar={<RightSide />}
      footer={<Footer />}
    />
  );
}

export default MainAppLayout;
