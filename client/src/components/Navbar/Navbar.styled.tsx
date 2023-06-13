import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #fff;
  box-shadow: 2px 0 10px #d7e5f6;
`;
export const AppLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
export const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-bottom: 1rem;
  font-size: 0.7rem;
`;
export const StyledLink = styled(NavLink)`
  border-radius: 50%;
  border: 1px solid #c1d2f8;
  padding: 0.5rem;
  margin: 1rem 0;
  color: #c1d2f8;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-image: linear-gradient(to right, #5843be, #497de4);
    color: #fff;
  }

  &.active {
    background-image: linear-gradient(to right, #5843be, #497de4);
    color: #fff;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-bottom: 1rem;
  border-top: 1px solid #c1d2f8;
  padding-top: 1.5rem;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const AppSettingsBtn = styled.a`
  margin-bottom: 1rem;
`;
