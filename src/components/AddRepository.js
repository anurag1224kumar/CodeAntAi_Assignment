import "../style/addRepository.css";
import { VscChromeClose } from "react-icons/vsc";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddRepositoryPage } from "../utils/githubDataSlice";
import { useState } from "react";
import useGithubUserData from "../hooks/useGithubUserData";

const AddRepository = ({ userName }) => {

  const [afterSubmission, setAfterSubmission] = useState();
  const [githubUserName, setGithubUserName] = useState("");
  const [inputText, setInputtext] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((store) => store.githubData.name);

  const userCount = users.length;

  const handleButtonCkick = () => {
    dispatch(toggleAddRepositoryPage());
  };

  useGithubUserData(githubUserName);

  const handleButtonSubmit = () => {
    const afterSubmitUserCount = users.length;
    if (afterSubmitUserCount >= userCount) {
      setAfterSubmission(true);
    } else {
      setAfterSubmission(false);
    }
    setGithubUserName(inputText);
  };

  // if (!githubUserName) return null;

  return ReactDOM.createPortal(
    <>
      <div className="addRepository-main-container">
        <div className="addRepository-secondary-container ">
          <div>
            <div className="addRepository-close-icon">
              <VscChromeClose size={22} onClick={handleButtonCkick} />
            </div>

            <div className="addRepository-message">
              {afterSubmission ? (
                <h1> Added Successfully !!</h1>
              ) : (
                <h1 className="text-red-600"> </h1>
              )}
            </div>

            <div className="addRepository-search-container">
              <input
                className="addRepository-search-input "
                type="text"
                placeholder="Enter Github user name"
                value={inputText}
                onChange={(e) => setInputtext(e.target.value)}
              ></input>
            </div>

            <div className="addRepository-submit-btn-container">
              <button
                className="addRepository-submit-btn"
                onClick={handleButtonSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.querySelector(".addRepositoryPortal")
  );
};

export default AddRepository;
