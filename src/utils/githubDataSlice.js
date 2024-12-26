import { createSlice } from "@reduxjs/toolkit";

const githubDataSlice = createSlice({
    name: "githubUserData",
    initialState:{
        name:[],
        userData:[],
        filteredUserData:[],
        showAddRepositoryPage: false,
        selectedIndex: 0,
    },
    reducers:{
       addgithubProfileName:(state, action)=>{
        state.name.push(action.payload);
       },

       addUserData:(state, action) => {
        state.userData.push(action.payload);
       },
       searchQuery:(state,action)=>{
        
       },
       toggleAddRepositoryPage:(state) => {
        state.showAddRepositoryPage = !state.showAddRepositoryPage;
       },
       getSelectedUserIndex:(state, action) => {
        state.selectedIndex = action.payload;
       },
       filterdRepository:(state, action) => {
        state.filteredUserData.push(action.payload);
        
       },

    }
});

export const {addgithubProfileName,addUserData,toggleAddRepositoryPage, getSelectedUserIndex,filterdRepository} =  githubDataSlice.actions;
export default githubDataSlice.reducer;