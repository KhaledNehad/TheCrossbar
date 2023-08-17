import { Settings, Home, CalendarToday, SportsSoccer } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';
import profileImage from './../../assets/images/profile2.jpeg';
import { AppNavbar, AppLogo, MainMenu, StyledLink, UserInfo, ProfileImage, AppSettingsBtn } from './Navbar.styled';

const Navbar = () => {
  return (
    <AppNavbar>
      <MainMenu>
        <Link to="/">
          <AppLogo src={logo} alt="logo" />
        </Link>
        <StyledLink to="/">
          <Home />
        </StyledLink>
        <StyledLink to="/upcoming">
          <CalendarToday />
        </StyledLink>
        <StyledLink to="/score">
          <SportsSoccer />
        </StyledLink>
      </MainMenu>
      <UserInfo>
        <AppSettingsBtn>
          <Settings />
        </AppSettingsBtn>
        <ProfileImage src={profileImage} alt="profile" />
      </UserInfo>
    </AppNavbar>
  );
};

export default Navbar;
