import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail as giveEmail } from "./formSlice";

function ForgetPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true); // Initially disabled
  const navigate = useNavigate();

  const validateEmail = (email) => {
    setEmail(email);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setSubmitDisabled(!regex.test(email)); // Enable if email is valid
  };

  const submit = async () => {
    const obj = {
      userEmail: email,
      sub: "Request for Reset Password",
    };
    const url = "http://localhost:5500/reset/request-email";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    console.log(obj);

    try {
      const response = await fetch(url, options);

      if (!response.ok)
        throw new Error(`http error! status: ${response.status}`);

      if (response.ok) {
        dispatch(giveEmail(email));
        navigate("/success");
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl h-lvh text-white mx-auto flex flex-col items-center max-sm:mt-0 mt-20">
      <h1 className="text-4xl max-sm:text-2xl mb-10">Reset Password</h1>
      <p className="text-center text-base mb-0 max-sm:text-sm">
        A link will be sent to your email address to reset your password.
      </p>
      <p className="text-center text-base mt-0 max-sm:text-sm">
        Your IP address may be logged for security purposes.
      </p>
      <div
        className="px-12 w-7/12 max-sm:w-11/12 bg-neutral-800 shadow-md relative mt-4 py-10"
        // style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onInput={(e) => validateEmail(e.target.value)}
          required
          className="w-full mt-4 py-1 bg-transparent outline-none border-b-2 border-gray-400 text-lg max-sm:text-base font-semibold"
        />
      </div>

      <div className="mt-6 flex flex-col items-center">
        <button
          className={`py-2 px-10 mb-3 text-sm font-bold ${
            submitDisabled
              ? "border-2 border-gray-500 text-gray-500 cursor-not-allowed"
              : "text-black bg-orange-600 cursor-pointer"
          }`}
          disabled={submitDisabled}
          onClick={submit}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

export default ForgetPassword;
