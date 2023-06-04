"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseApp } from './firebase';

export default function LoginButton() {

  const login = async ()=>{
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(res);
    console.log(res);
  }

  return (
    <button
        className={" rounded-3xl font-bold text-black text-4xl border-black border-[3px] py-4 px-8 "}
        onClick={()=>{
          console.log("hi");
          login();
        }}
      >Login</button>
  )
}
