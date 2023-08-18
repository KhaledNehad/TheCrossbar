import { AiFillHome, AiFillSetting, AiOutlineSearch } from 'react-icons/ai';
import { BsNewspaper } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppLink from './AppLink';

const Nav: React.FC = () => {
  return (
    <nav className="z-50 flex w-16 flex-col justify-between gap-8 overflow-hidden bg-white shadow-md shadow-blue-200">
      <div className=" mt-16 flex flex-col items-center">
        {/* <Link to="/" className="mt-14 w-3/5">
          <div className="flex h-16 flex-col">
            <img className="min-w-full" src="src/assets/images/logo.svg" alt="Crossbar Logo" />
          </div>
        </Link> */}
        <div className="mt-2 flex flex-col items-center gap-5 ">
          <AppLink to="/" icon={<AiFillHome />} />
          <AppLink to="/news" icon={<BsNewspaper />} />
        </div>
      </div>
      <div className="my-5 flex flex-col items-center gap-8 py-5">
        <span className="w-3/5 border-t text-center"></span>
        <Link to="/" className="text-appBlue-400">
          <AiOutlineSearch />
        </Link>
        <Link to="/" className="text-appBlue-400">
          <AiFillSetting />
        </Link>
        <div className="rounded-full bg-gray-200">
          <img className="h-10 w-10  min-w-full rounded-full" src="src/assets/images/profile2.jpeg" alt="Profile Pic" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
