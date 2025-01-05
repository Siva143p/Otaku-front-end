import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import { Account, General } from "./settingsData";
import MemberShip from "./setingsSubComponents/MemberShip";

function Settings() {
  return (
    <div className="flex bg-black h-screen justify-center gap-6">
      {/* Side Navbar */}
      <nav className="settings-navbar mt-10">
        <h2 className="text-white font-semibold text-3xl">Account Settings</h2>
        <ul className="mt-10 p-0">
          <p className="text-white text-xl pl-2 font-semibold">General</p>
          <li>
            {/* No need to use useResolvedPath here, the path works with relative linking */}
            {General.map((item) => {
              return (
                <Link
                  to={item.path}
                  className="block w-64 py-3 pl-2 hover:bg-zinc-900 text-zinc-400 text-base hover:text-white no-underline"
                >
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>

        <ul className="mt-10 p-0">
          <p className="text-white text-xl pl-2 font-semibold">Account</p>
          <li>
            {/* No need to use useResolvedPath here, the path works with relative linking */}
            {Account.map((item) => {
              return (
                <Link
                  to={item.path}
                  className="block w-64 py-3 pl-2 hover:bg-zinc-900 text-zinc-400 text-base hover:text-white no-underline"
                >
                  {item.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="w-5/12 mt-32 bg-zinc-800 flex flex-col justify-center px-36 text-white text-center">
        <Routes>
          {General.map((item) => {
            return <Route path={item.path} element={item.component} />;
          })}

          <Route path="/membership" element={<MemberShip />}></Route>

          {Account.map((item) => {
            return <Route path={item.path} element={item.component} />;
          })}
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default Settings;
