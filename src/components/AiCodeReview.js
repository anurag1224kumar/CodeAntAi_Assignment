import { useSelector } from "react-redux";
import "../style/aiCodeReview.css";

const AiCodeReview = () => {
  const userData = useSelector(store => store.githubData.userData);

  return (
    <div className='aiCodeReview-main-container '>

      <h1 className='aiCodeReview-text-heading '>{userData? "Add Code To Review" : "No Code To Review"}</h1>
      
    </div>
  )
}

export default AiCodeReview;