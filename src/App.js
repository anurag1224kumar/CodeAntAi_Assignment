import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import Home from "./components/Home";
import AiCodeReview from "./components/AiCodeReview";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Repositories from "./components/Repositories";
import CloudSecurity from "./components/CloudSecurity";
import HowToUse from "./components/HowToUse";
import Support from "./components/Support";
import Settings from "./components/Settings";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <SignInPage />
  },
  {
    path:"/signin",
    element: <SignInPage />
  },
  {
    path:"/home",
    element: <Home />,
    children:[
      {
        path:"",
        element:<Repositories />,
      },
      {
        path:"aicodereview",
        element:<AiCodeReview />
      },
      {
        path:"cloudsecurity",
        element:<CloudSecurity />
      },
      {
        path:"howtouse",
        element:<HowToUse />
      },
      {
        path:"settings",
        element:<Settings />
      },
      {
        path:"support",
        element:<Support />
      },
      
    ]
  }
])
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
          <RouterProvider router = {appRouter} />
      </Provider>
    </div>
  );
}

export default App;
