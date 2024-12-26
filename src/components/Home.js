import SideBar from "./SideBar";
import "../style/home.css";
import { Outlet } from "react-router-dom";
import AddRepository from "./AddRepository";
import { useSelector } from "react-redux";

const Home = () => {
  const { showAddRepositoryPage } = useSelector((store) => store.githubData);

  return (
    <div className="home-main-container">
       
        <>
          <div className="home-sideBar-container">
            <SideBar />
          </div>

          <div className="home-secondary-container">
            <Outlet /> 
          </div>
        </>
        {showAddRepositoryPage && <AddRepository  />}
    </div>
  );
};

export default Home;
