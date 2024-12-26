# Instructions
    - install react-icon package to use the icons

# Getting Started with Create React App


# Steps I have followed to build this app

    - remove unnecessary files which are not of use  
    - install tailwind CSS and configure it
    - created the folder structure
    - installed react router dom for routing
    - created routing configuration on App.js file and used Outlet for child route
    - created folder with name images inside utils to store all the images used in this project
    - created constant.js to keep all the constant there
    - Completed SignInPage and signInForm with toggle feature in SAAS and Self hosted button
    - Created all the signin buttons and fixed the issue of icon-images of the buttons and make it
      responsive and display perfectly on all devices.
    - configured settings.json to use tailwind CSS to all .css file for this project.
    - Done with SignInPage solved all the issues of css
    - Started working for HomePage and build the basic layout
    - Build sidebar menu it's working smoothly for max devices 
    - In Repositories component build the header and made it responsive and now working on Repository component 
    - Designing part of Home component is done including sidebar and Repositories component.
    - Installed react-redux and redux toolkit for managing the states
    - setup redux store and created a githubDataSlice to store the user data  
    - created useGithubUserData custom hook to fetch the user github data
    - rendered the data from user's github profile in Sidebar select and to list the repositories.
    - implemented different dom node using ReactDOM.createPortal method to solve the issue of during concurrent rendering 
    - made the add repository button functional
    - fixed the issue of unnecessary call of useGithubUserData hook and adding the value again and again while clicking on add repository  button 
    - also fixed the issue of state variable as it is mapped to useEffect hook in useGithubUserData custom hook on each key press which violated the rules of dependancy array there as it is changing concurrently 
    
      


# Folder Structure for this app
    - App.js it is the root label component
    
    - SignInPage
            - SignInForm

    - Home  [it will be accessable after authentication but for now i am using useNavigate hook foe navigating to home page]
            - SideBar Menu (i.e SideBar.js)
            - Repositories
                - Repository 
                - AddRepository
            - AiCodeReview
            - CloudSecurity
            - HowToUse
            - Settings
            - Support

# You can access the preview of assignment via the drive link  
    Link : https://drive.google.com/drive/folders/1orKtkT9-bpskVeYJR5VbpzjNj0fF6m9P?usp=sharing


         