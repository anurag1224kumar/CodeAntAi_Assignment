import { configureStore } from "@reduxjs/toolkit";
import githubDataReducer from "../utils/githubDataSlice";


const appStore = configureStore({
    
    reducer:{

        githubData: githubDataReducer,

    }
    
});

export default appStore;