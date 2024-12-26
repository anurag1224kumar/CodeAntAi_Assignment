import React, { useState } from "react";
import {
  AZURE_LOGO,
  BIGBUCKET_LOGO,
  GITHUB_LOGO,
  GITLAB_LOGO,
  LOGO,
  SSO_KEY_LOGO,
} from "../utils/constant";
import "../style/signInForm.css";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="signIn-container">
      <div className="signIn-container-form">
        <div className="flex items-center justify-center mt-4">
          <img className="w-10 md:w-11" alt="logo" src={LOGO} />
          <h1 className="text-2xl md:text-3xl text-gray-700 ml-2">
            CodeAnt AI
          </h1>
        </div>

        <div className="welcome-text-container">
          <h1 className="welcome-text-font">Welcome to CodeAnt AI</h1>
        </div>

        <div className="btn-container flex mt-7 justify-center">
          <button
            className={isSignIn ? "btn2" : "btn1"}
            onClick={() => {
              setIsSignIn(true);
            }}
          >
            SAAS
          </button>
          <button
            className={!isSignIn ? "btn2" : "btn1"}
            onClick={() => {
              setIsSignIn(false);
            }}
          >
            Self Hosted
          </button>
        </div>
      </div>
      {isSignIn ? (
        <div className="btn-container-saas">
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-github" alt="" src={GITHUB_LOGO} />
            </span>
            <div>Sign in with Github</div>
          </button>
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-bigbucket" alt="" src={BIGBUCKET_LOGO} />
            </span>
            Sign in with Bitbucket
          </button>
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-azure-devops" alt="" src={AZURE_LOGO} />
            </span>
            Sign in with Azure devops
          </button>
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-gitlab" alt="" src={GITLAB_LOGO} />
            </span>
            Sign in with Gitlab
          </button>
        </div>
      ) : (
        <div className="btn-container-self-hosted">
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-gitlab" alt="" src={GITLAB_LOGO} />
            </span>
            Self Hosted GitLab
          </button>
          <button className="btn" onClick={() => navigate("home")}>
            <span>
              <img className="btn-sso-key" alt="" src={SSO_KEY_LOGO} />
            </span>
            Sign in with SSO
          </button>
        </div>
      )}
      <div className="justify-items-center my-8 ">
        <h2>
          By Signing up you agree to the{" "}
          <span className="font-bold md:font-semibold">Privacy Policy.</span>
        </h2>
      </div>
    </div>
  );
};

export default SignInForm;
