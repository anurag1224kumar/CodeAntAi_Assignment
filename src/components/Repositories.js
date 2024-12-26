import { HiRefresh } from "react-icons/hi";
import { RiAddLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/repositories.css";
import Repository from "./Repository";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  filterdRepository,
  toggleAddRepositoryPage,
} from "../utils/githubDataSlice";

const Repositories = () => {
  const index = useSelector((store) => store.githubData.selectedIndex);
  const repoList = useSelector((store) => store.githubData.userData[index]);
  const filteredRepoList = useSelector(
    (store) => store.githubData.filteredUserData[index]
  );
  const [searchText, setSearchText] = useState(" ");
  const dispatch = useDispatch();

  const handleButtonCkick = () => {
    dispatch(toggleAddRepositoryPage());
  };

  const handleFilter = () => {
    if (!repoList) return;

    const filteredRepo = repoList.filter((repo) =>
      repo.name.toLowerCase().includes(searchText.toLowerCase())
    );

    dispatch(filterdRepository(filteredRepo));
  };

  return (
    <div className="repositories-main-container">
      <div className="repositories-secondary-container">
        <div className="repositories-tertiary-container">
          <div>
            <h1 className="repositories-container-title">Repositories</h1>
            <p className="repositories-repository-count">
              {repoList && repoList.length} total repositories
            </p>
          </div>
          <div className="repositories-btn-container">
            <button className="repositories-refresh-btn">
              <span className="mr-2">
                <HiRefresh size={24} />
              </span>
              Refresh All
            </button>
            <button
              className="repositories-add-repo-btn bg-blue-600 text-white"
              onClick={handleButtonCkick}
            >
              <span className="mr-2">
                <RiAddLine size={24} />
              </span>
              Add Repository
            </button>
          </div>
        </div>
        <div className="repositories-search-container">
          <div className=" repositories-search-wrapper">
            <input
              className="repositories-search-container-input"
              type="text"
              placeholder="Search Repositories"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button
              className="repositories-search-icon-btn "
              onClick={handleFilter}
            >
              <AiOutlineSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-16">
        {filteredRepoList && filteredRepoList.length > 0 ? (
          filteredRepoList.map((repo) => (
            <Repository key={repo.id} repo={repo} />
          ))
        ) : (
          <div className="items-center p-5 text-lg">
            No repositories detected. Please change the user from the top left
            corner or add repositories from the top right.
          </div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
