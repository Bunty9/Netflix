import React, { useState } from 'react'
import  './LoginScreen.css';
import  "../screens/SignInScreen";
import SignInScreen from '../screens/SignInScreen';
function LoginScreen() {
    const [signIn,setsignIn] = useState(false);
    
    return (
        <div className = 'loginscreen'>
            <div className = 'loginscreen__background'>
                <img
                className = 'loginscreen__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
                />
          
                <button className = 'loginscreen__button'>Sign In</button>
               <div className = 'loginscreen__gradient'/>
               <div className = 'loginscreen__body'>
               {signIn ? (
                   <SignInScreen/>
               ) : (
                   <>
                    <h1 className="our-story-card-title" >Unlimited movies, TV shows and more.</h1>
                    <h2 className="our-story-card-subtitle" >Watch anywhere. Cancel anytime.</h2>
                    <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginscreen__input">
                        <form>
                        <input type="email" className="nfTextField" autocomplete="email" placeholder='Email address'/>
                        <button type="submit" className='input_button' onClick={()=>setsignIn(true)}>
                            Get Started
                        </button>
                    </form>
                    </div>
               </>
               )}
               </div>         
            </div>
        </div>
    )
}

export default LoginScreen
