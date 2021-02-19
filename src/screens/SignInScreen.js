import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignInScreen.css'

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const register = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser)=> {
            console.log(authuser);
        }).catch((err)=>{
            alert(err.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authuser)=> {
            console.log(authuser);
        }).catch((err)=>{
            alert(err.message);
        })
    }

    return (
        <div className='signup__screen'>
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type="email" className="email_field" autoComplete="email" placeholder='Email address' />
                <input ref={passwordRef} type="password" className="password_field" autoComplete="password" placeholder='Password'/>
                <button type="submit" className='submit_button' onClick = {signIn}>
                    Sign In
                </button>
                <h4>
                    <span className='new_netflix'>New to Netflixx?  </span>
                    <span className='signp_link' onClick = {register}>Sign Up now</span>
                    
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen
