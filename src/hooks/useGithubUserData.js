import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addgithubProfileName, addUserData, filterdRepository } from "../utils/githubDataSlice";

const useGithubUserData = (githubUserName) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
  
     githubUserName && getGithubUserData();
    
  }, [githubUserName]);

  const getGithubUserData = async () => {
    const data = await fetch(
      "https://api.github.com/users/" + githubUserName + "/repos"
    );
    const json = await data.json();

    dispatch(addgithubProfileName(json[0].owner.login));
    dispatch(addUserData(json));
    dispatch(filterdRepository(json));

  };

  return null;
};

export default useGithubUserData;
