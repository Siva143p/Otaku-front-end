import React from "react";
import { selectEmail } from "./formSlice";
import { useSelector } from "react-redux";

function Success() {
  const email = useSelector(selectEmail);

  return (
    <div className="w-full bg-black h-full">
      <div className="max-w-72 mx-auto text-white flex flex-col content-center items-center mt-20">
        <div className="border-orange-600 border-3 my-3 py-2 px-4">
          <h2 className="text-orange-600 text-2xl font-semibold">Sankyu!</h2>
        </div>
        <div className="w-4/6">
          <img
            src="https://sso.crunchyroll.com/assets/images/success-hime.png"
            alt="Success confirmation character"
          />
        </div>
        <div className="my-3">
          <p className="text-center font-semibold text-xl">
            Reset link has been sent
          </p>
          <p className="text-center text-gray-400">
            {email
              ? `Please check your ${email} inbox.`
              : "Please check your inbox."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
