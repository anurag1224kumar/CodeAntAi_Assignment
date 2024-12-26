import { CARD_IMG, LOGO_IMG } from "../utils/constant";
import SignInForm from "./SignInForm";
import "../style/signInPage.css";

const SignInPage = () => {
  return (
    <div className="signin-main-conatiner">
      <div className="signin-image-container">
        <div className="card-img-container ">
          <div className="">
            <img className="img-card" alt="img-card" src={CARD_IMG} />
          </div>
        </div>
        <div className="">
          <img className="img-rabbit" alt="img" src={LOGO_IMG} />
        </div>
      </div>

      <div className="signin-form-container">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
