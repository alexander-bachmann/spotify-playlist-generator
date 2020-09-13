import React from 'react';



function AuthorizeButton() {

    function authorize() {
        console.log('authorize button pressed');
    }

    return (
        <button onClick={authorize}>      
        Login
        </button>
    )
}

export default AuthorizeButton;
