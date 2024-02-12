Technology Used:-React,Firebase
React for frontend and Firebase for authetication,database and image storage;

Problem Statement: Create a simple web application that allows users to sign up, 
                    log in, and upload images. Implement basic authentication and 
                    authorization mechanisms to ensure secure access to user data. 

#Components :- dashboard of user after successfull log in/sign up
               Can upload images in this section 
               Images are stored in Firesbase storage;


#Context ;- contains login,signup,signout,signInWithGoogle context;
            This file essentially sets up a context and provider for user authentication, 
            making it easier to manage authentication state and provide authentication 
            functions throughout your React application.

#firebase :- contains firebase config file;

#hooks:- contains custom created react hooks for code reusability
        useLogin:-for login
        useLogout:-for logout
        useSignup:-for signup
        useFirestore:-adding data to firebase firestore
        useAuthContext:- manage context
        ProtectedRoute:- to protect unwanted routing

#login:-contains login page UI and functionalities and CSS file

#signup:-contains signup page UI and functionalities and CSS file


