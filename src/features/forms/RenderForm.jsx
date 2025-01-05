import React, { useState } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import ErrorComponent from "./ErrorComponent";
import { Link, useNavigate } from "react-router-dom";
// import { response } from "express";
// import { json } from "react-router-dom";

function RenderForm({ type, data }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setShow] = useState(false);
  const [nxtDisabled, setNxtDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (isError) {
    setTimeout(() => {
      setIsError(false);
    }, 5000);
  }

  const nextBtn = () => {
    setIsClicked(true);
  };

  const validateEmail = (email) => {
    setEmail(email);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regex.test(email) ? setNxtDisabled(false) : setNxtDisabled(true);
  };

  const validatePassword = (password) => {
    setPassword(password);
    const regex = /^\S{6,}$/;
    regex.test(password) ? setSubmitDisabled(false) : setSubmitDisabled(true);
  };

  const createAccount = async () => {
    const AccountObj = {};
    AccountObj.email = email;
    AccountObj.password = password;

    const url = "http://localhost:5500/api/createAccount";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AccountObj),
    };

    try {
      const response = await fetch(url, options);
      console.log("status : ", response.status);

      if (response.status === 400) {
        setIsError(true);
        setError("User Already Exists");
      }

      if (!response.ok) {
        setIsError(true);
        // setError(response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      localStorage.setItem("accessToken", JSON.stringify(result.accessToken));
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const login = async () => {
    const AccountObj = {};
    AccountObj.email = email;
    AccountObj.password = password;
    const url = "http://localhost:5500/api/login";
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AccountObj),
    };

    try {
      const response = await fetch(url, options);

      if (response.status === 400) {
        setIsError(true);
        setError(`Incorrect Password`);
      }

      if (response.status === 401) {
        setIsError(true);
        setError(`User doesn't exists`);
      }

      if (!response.ok) {
        throw new Error(`http error! status: ${response.status}`);
      }

      const result = await response.json();
      localStorage.setItem("accessToken", JSON.stringify(result.accessToken));
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const submit = () => {
    if (type === "create") {
      createAccount();
    } else {
      login();
    }
  };

  const forgetPass = () => {
    navigate("/forgetPassword");
  };

  return (
    <>
      {isError && <ErrorComponent errorMsg={error} active={setIsError} />}
      <div className="max-w-4xl h-lvh text-white mx-auto flex flex-col items-center mt-9 max-sm:mt-0">
        <h1 className="text-4xl max-sm:text-2xl">{data.heading}</h1>
        <div
          className="px-12 w-7/12 max-sm:w-11/12 bg-neutral-800 shadow-md relative mt-4"
          style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        >
          {isClicked ? (
            <>
              {data.Card2_p ? (
                <p className="text-center text-lg mb-0 ">{data.Card2_p}</p>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <p className="text-center text-lg mb-0 max-sm:text-base">
                {data.Card1_p[0]}
              </p>
              <p className="text-center text-lg mt-0 max-sm:text-base">
                {data.Card1_p[1]}
              </p>
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onInput={(e) => validateEmail(e.target.value)}
            required
            className="w-full mt-4 py-1 bg-transparent outline-none border-b-2 border-gray-400 text-lg max-sm:text-base font-semibold"
          />
          {isClicked ? (
            <section className="relative">
              <input
                type={!isShow ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={password}
                onInput={(e) => validatePassword(e.target.value)}
                required
                className="w-full mt-4 py-1 bg-transparent outline-none border-b-2 border-gray-400 text-lg max-sm:text-base font-semibold"
              />
              <span
                className="absolute top-8 right-4 hover:cursor-pointer"
                onClick={() => setShow(!isShow)}
              >
                {isShow ? <RiEyeFill size={19} /> : <RiEyeCloseFill />}
              </span>
            </section>
          ) : (
            ""
          )}

          {isClicked ? (
            <>
              {type === "create" ? (
                <p className="text-xs text-gray-400 mt-1">
                  Use at least 6 characters, do not use empty spaces
                </p>
              ) : (
                <p
                  className="text-base font-semibold text-gray-500 hover:text-white cursor-pointer"
                  onClick={() => forgetPass()}
                >
                  Forgot Password?
                </p>
              )}
            </>
          ) : type === "create" ? (
            <div className="mt-3 text-gray-400 hover:text-white font-semibold flex gap-2 cursor-pointer">
              <input type="checkbox" className="w-10 bg-transparent" />
              <span className="text-sm block">
                I want all the latest Crunchyroll info, offers, and news. All
                communications are subject to our{" "}
                <a
                  href="#"
                  className="no-underline font-extrabold text-orange-600"
                >
                  Privacy Policy
                </a>
                . Opt out anytime.
              </span>
            </div>
          ) : (
            ""
          )}
          {/* cat image */}
          <div
            className="absolute w-28"
            style={{ top: "-2.1rem", right: "-1.69rem" }}
          >
            <img
              src="https://sso.crunchyroll.com/assets/images/register-yuzu.png"
              alt=""
            />
          </div>
          {/* anime girl image */}
          <div
            className={
              type === "create"
                ? "absolute -top-14 -left-32 max-sm:hidden"
                : "hidden"
            }
            style={{ width: "9.5rem" }}
          >
            <img
              src="https://sso.crunchyroll.com/assets/images/register-hime.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          {isClicked ? (
            <button
              className={
                submitDisabled
                  ? "border-2 border-gray-500 py-2 px-10 mb-3 text-sm font-semibold text-gray-500 cursor-pointer"
                  : "py-2 px-10 mb-3 text-sm font-bold text-black bg-orange-600 cursor-pointer"
              }
              disabled={submitDisabled}
              onClick={() => submit()}
            >
              {data.submitBtn}
            </button>
          ) : (
            <button
              className={
                nxtDisabled
                  ? "border-2 border-gray-500 py-2 px-10 mb-3 text-sm font-semibold text-gray-500 cursor-pointer"
                  : "py-2 px-10 mb-3 text-sm font-bold text-black bg-orange-600 cursor-pointer"
              }
              disabled={nxtDisabled}
              onClick={() => nextBtn()}
            >
              NEXT
            </button>
          )}
          {isClicked ? (
            <button
              className="text-sm text-orange-600 font-extrabold"
              onClick={() => setIsClicked(false)}
            >
              BACK
            </button>
          ) : (
            <p className="text-sm">
              {data.account}
              <Link
                to={data.btn_link}
                className="no-underline font-extrabold text-orange-600 ml-1"
              >
                {data.btn_txt}
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default RenderForm;

//https://sso.crunchyroll.com/assets/images/register-yuzu.png

//  <section className="relative">
//    <input
//      type={isShow ? "password" : "text"}
//      name="password"
//      placeholder="Password"
//      value={password}
//      onInput={(e) => setPassword(e.target.value)}
//      required
//      className="w-full px-3 py-2 border border-gray-300 rounded-md"
//    />
//    <span
//      className="absolute top-3 right-4 hover:cursor-pointer"
//      onClick={() => setShow(!isShow)}
//    >
//      {isShow ? <RiEyeFill size={19} /> : <RiEyeCloseFill />}
//    </span>
//  </section>;
