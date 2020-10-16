import React from "react";
import './Login.css';
import {auth, provider} from "./firebase";

export default function Login(){
  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch((error) => alert(error.message))
  };
  return(
    <div className={'login'}>
      <div className="login__logo">
        <img src="https://i.redd.it/1qepg36lgyz41.png" alt="Discord logo"/>
      </div>
      <button onClick={signIn}>Login</button>
    </div>
  )
}
