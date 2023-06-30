"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseApp } from './firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const authorisedUser = "ahan640@gmail.com";

export default function LoginButton() {

    const [errorFlag, setErrorFlag] = useState(false);
    const [loadingFlag, setLoadingFlag] = useState(false);
    const router = useRouter();


  const login = async ()=>{
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(res);
    const uid = credential?.accessToken;
    console.log(uid, res.user);
    if(res.user.email===authorisedUser) {
        setLoadingFlag(true);
        router.push("/dashboard");
    } else {
        setErrorFlag(true);
    }
  }

  return (
    <button
        className={" rounded-3xl font-bold text-black text-4xl border-black border-[3px] py-4 px-8 block relative "}
        onClick={()=>{
          console.log("hi");
          login();
        }}
      >
        Login
        {loadingFlag && <div
            className={` text-sm absolute bottom-0 `}
        >Loading...</div>}
        {errorFlag && <div
            className={` text-sm absolute bottom-0`}
        >Sorry, access blocked</div>}
      </button>
  )
}
