import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="flex w-full flex-col md:w-1/12 md:flex-row">
      <div className="navbar flex flex-col items-center p-2 pt-14">
        <Link to="/" className="w-8 flex-none md:w-1/2">
          <div className="flex h-16 flex-col">
            <img className="min-w-full" src="src/assets/images/logo.svg" alt="Crossbar Logo" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
