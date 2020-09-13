import React from 'react';



function AuthorizeButton() {





    async function authorize() {
        console.log('authorize button pressed');

        // const res = await fetch(, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type":"application/json", 
        //         "Authorization": "Bearer " + userToken
        //     }
        // })
    }

    return (
        <button onClick={authorize}>      
        Login
        </button>
    )
}

export default AuthorizeButton;
