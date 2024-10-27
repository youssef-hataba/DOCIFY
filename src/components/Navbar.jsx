import {NavLink, Link, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets";
import {useState} from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32 lg:w-36 cursor-pointer" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-semibold">
        <li>
          <NavLink to="/" className="hover:text-primary">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className="hover:text-primary">
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-primary">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-primary">
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
              onMouseEnter={toggleDropdown}>
              <img
                className="w-8 h-8 rounded-full border border-gray-300"
                src={assets.profile_pic}
                alt="Profile"
              />
              <img className="w-4 ml-1" src={assets.dropdown_icon} alt="Dropdown" />
            </div>
            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
                onMouseLeave={toggleDropdown}>
                <div className="flex flex-col p-2">
                  <p
                    onClick={() => {
                      navigate("/my-profile");
                      setShowDropdown(false);
                    }}
                    className="hover:text-primary cursor-pointer py-1 px-2 rounded hover:bg-gray-100 transition duration-200">
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/my-appointments");
                      setShowDropdown(false);
                    }}
                    className="hover:text-primary cursor-pointer py-1 px-2 rounded hover:bg-gray-100 transition duration-200">
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      setShowDropdown(false);
                    }}
                    className="hover:text-primary cursor-pointer py-1 px-2 rounded hover:bg-gray-100 transition duration-200">
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white py-2 px-4 rounded-full hidden md:block transition duration-200 hover:bg-opacity-90">
            Create Account
          </button>
        )}
        <img
          src={assets.menu_icon}
          className="w-6 md:hidden cursor-pointer"
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-30 pb-8">
          <div className="flex items-center justify-between px-4 py-4">
            <img className="w-32 lg:w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7 cursor-pointer"
              src={assets.cross_icon}
              alt="Close Icon"
              onClick={() => toggleMenu()}
            />
          </div>
          <ul className="flex flex-col items-center gap-6 mt-4 text-lg font-medium">
            <NavLink to="/" onClick={() => toggleMenu()}>
              <p className="px-4 py-2 rounded  inline-block">HOME</p>
            </NavLink>
            <NavLink to="/doctors" onClick={() => toggleMenu()}>
              <p className="px-4 py-2 rounded  inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink to="/about" onClick={() => toggleMenu()}>
              <p className="px-4 py-2 rounded  inline-block">ABOUT</p>
            </NavLink>
            <NavLink to="/contact" onClick={() => toggleMenu()}>
              <p className="px-4 py-2 rounded  inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
