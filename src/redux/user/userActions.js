import {APP_URL} from '../../configs/appConfigs';

export const SET_CREDENTIALS = 'SET_CREDENTIALS';

//login
export const loginStudent = (email, password) =>{
    return async (dispatch) =>{
        const response  = await fetch(APP_URL + 'login-user', {
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const responseData = await response.json();

        if(responseData.status){
            dispatch({
                type: SET_CREDENTIALS, 
                Token: responseData.token,
                UserInfo: responseData.information
            });

            throw new Error(true)

        }else{

            throw new Error(false)
        }
    }
}


