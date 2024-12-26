import "../style/repository.css";
import { GoDotFill } from "react-icons/go";
import { LuDatabase } from "react-icons/lu";

const Repository = ({ repo }) => {
  const { name, language, visibility, size, updated_at } = repo;

  if (!repo)
    return " No repositories detected. Please change the user from the top left corner or add repositories from the top right.";

  const updated_on = getRelativeTime(updated_at);

  function getRelativeTime(updatedAt) {
    const updatedDate = new Date(updatedAt);
    const now = new Date();
    const diff = now - updatedDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "Updated just now";
    if (minutes < 60) return `Updated ${minutes} minutes ago`;
    if (hours < 24) return `Updated ${hours} hours ago`;
    if (days < 30) return `Updated ${days} days ago`;
    if (months < 12) return `Updated ${months} months ago`;
    return `Updated ${years} years ago`;
  }

  const fileSize = getRelativefileSIze(size);

  function getRelativefileSIze(size) {
    if(size > 1024) return (Math.floor(size / 1024) + " mb");
    else return size + " kb" ;
  }; 

  return (
    <div className="repository-main-container ">
      <div className="repository-primary-container">
        <h1 className="repository-heading "> {name} </h1>
        <h2 className="repository-type">
          {visibility === "public" ? "Public" : "Private"}
        </h2>
      </div>
      <div className="repository-secondary-container">
        <p className="repository-language flex">
          {language}
          <span className="text-blue-600 mt-[3px]">
            {language && <GoDotFill />}
          </span>
        </p>
        <p className="repository-file-size flex">
          <span className="mt-[3px]">
            <LuDatabase size={13} />
          </span>
          {fileSize}
        </p>
        <p className="repository-last-updated">{updated_on}</p>
      </div>
    </div>
  );
};

export default Repository;
