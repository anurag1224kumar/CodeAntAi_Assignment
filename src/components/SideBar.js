import { useState } from "react";
import { LOGO } from "../utils/constant";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { FaCode, FaBook } from "react-icons/fa6";
import { MdCloudQueue, MdLogout } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedUserIndex } from "../utils/githubDataSlice";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const users = useSelector((store) => store.githubData.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const index = event.target.selectedIndex; 
    setSelectedIndex(index);
    dispatch(getSelectedUserIndex(index));
  };

  return (
    <div className="pt-2 ">
      <div className="flex justify-between">
        <div className=" flex flex-wrap">
          <img className="w-9 md:w-11" alt="logo" src={LOGO} />
          <h1 className="text-2xl md:text-3xl text-gray-700 ml-2">
            CodeAnt AI
          </h1>
        </div>
        <div className="flex items-center -mt-2 mr-2 md:hidden">
          {isMenuOpen ? (
            <VscChromeClose
              size={28}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            />
          ) : (
            <VscMenu
              size={28}
              onClick={() => {
                setIsMenuOpen(true);
              }}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col user-list my-6 px-1 ">
          <div className="sideBar-select-container">
            <select className="dropdown-section" onChange={handleChange}>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>

            <span className="select-up-down-arrow z-50">
              <IoChevronDownOutline size={22} />
            </span>
          </div>

          <Link to="">
            
            <div className="sidebar-btn bg-blue-600">
              <span className="mr-2 text-white">
                <AiOutlineHome size={20} />
              </span>
              <span className="text-white">Repositories</span>
            </div>
          </Link>
          <Link to="aicodereview">
           
            <div className="sidebar-btn">
              <span className="mr-2">
                <FaCode size={20} />
              </span>
              <span>AI Code Review</span>
            </div>
          </Link>
          <Link to="cloudsecurity">
            
            <div className="sidebar-btn">
              <span className="mr-2">
                <MdCloudQueue size={20} />
              </span>
              <span>Cloud Security</span>
            </div>
          </Link>
          <Link to="howtouse">
           
            <div className="sidebar-btn">
              <span className="mr-2">
                <FaBook size={20} />
              </span>
              <span>How to Use</span>
            </div>
          </Link>
          <Link to="settings">
          
            <div className="sidebar-btn">
              <span className="mr-2">
                <LuSettings size={20} />
              </span>
              <span>Settings</span>
            </div>
          </Link>
          <Link to="support">
           
            <div className="sidebar-btn md:absolute md:bottom-12 md:w-[254px] ">
              <span className="mr-2">
                <IoCallOutline size={20} />
              </span>
              <span>Support</span>
            </div>
          </Link>
          <Link to="/">
           
            <div className="sidebar-btn md:absolute md:bottom-2 md:w-[254px]">
              <span className="mr-2">
                <MdLogout size={20} />
              </span>
              <span>Logout</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;
