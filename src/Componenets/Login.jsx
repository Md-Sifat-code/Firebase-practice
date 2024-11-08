import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.init";
export default function Login() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="w-[400px] border-2 h-auto shadow-lg shadow-purple-400">
      <div>
        <h1 className="text-6xl font-bold text-purple-500 text-center mt-6 mb-6">
          Login
        </h1>
      </div>
      <div className="p-6">
        <h1 className="font-bold text-black mb-1">Email</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
        />
        <h1 className="font-bold text-black mb-1 mt-2">Password</h1>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <button className="w-full text-center mt-4 btn btn-primary bg-purple-500 text-white font-bold border-none">
          Login
        </button>
        <p className="grid grid-cols-3 w-full  ">
          <p className="border-b"></p>
          <p className="text-center mt-3 font-bold">or</p>
          <p className="border-b"></p>
        </p>

        <button
          className="w-full  flex flex-row  gap-2 font-semibold btn border text-black btn-outline border-purple-500 hover:bg-purple-100 hover:text-black"
          onClick={handleGoogleSignin}
        >
          <img
            className="w-[30px] h-[30px]"
            src="/icons8-google-100.png"
            alt=""
          />
          Google
        </button>
      </div>
    </div>
  );
}
