/*
This file is used to dispatch any state actions that modify the current user of the app
 */

//Login request to the api b/e
export const USER_AUTH = 'USER_AUTH';
export const UserAuth = (username, password) =>{
    return async (dispatch)=>{
        //call api here
    }
};

//This action calls the API to see if the user can be
//resolved from any cookies available in the browser
export const GetUser = () =>{
    return async (dispatch)=>{
        //call api here
    }
};