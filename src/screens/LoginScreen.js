import React from 'react'
import  './LoginScreen.css';

function LoginScreen() {
    return (
        <div className = 'loginscreen'>
            <div className = 'loginscreen__background'>
                <img
                className = 'loginscreen__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
                />
                <button className = 'loginscreen__button'>Sign In</button>
            </div>
        </div>
    )
}

export default LoginScreen
