import { NavLink } from 'react-router-dom';

interface AppLinkProps {
  to: string;
  icon: React.ReactNode;
}

const AppLink: React.FC<AppLinkProps> = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className={(props) => {
        return `${
          props.isActive ? 'text-white bg-gradient-to-r from-primary to-appBlue-600' : 'border-gray-200 text-appBlue-400'
        } flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gradient-to-r hover:from-primary hover:to-appBlue-600 hover:text-white`;
      }}
    >
      {icon}
    </NavLink>
  );
};

export default AppLink;
