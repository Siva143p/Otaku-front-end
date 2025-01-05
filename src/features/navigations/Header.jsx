import { Route, Routes, Link } from "react-router-dom";
// import "../../css/Header.css";

import React from "react";
import Home from "../../Home";
import Browse from "./Browse/Browse";
import SavedList from "../saveAnime/SavedList";
import Profile from "../../Profile";
import { navItemsLeft, navItemsRight } from "./NavItems";
import { useState } from "react";
import BrowseDropdown from "./Browse/BrowseDropdown";
import StreamingPage from "../../StreamingPage";
import Search from "../../Search";
import News from "../../News";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdAccountCircle } from "react-icons/md";
import CreateAccount from "../forms/CreateAccount";
import Login from "../forms/Login";
import Success from "../forms/Success";
import ForgetPassword from "../forms/ForgetPassword";
import UserOptions from "../user/UserOptions";
import Settings from "../settings/Settings";
// import MemberShip from "../settings/setingsSubComponents/MemberShip";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ aniData, user, islogged }) {
  const [browseDropdown, setBrowseDropdown] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  console.log("Browse DropDown : ", browseDropdown);
  console.log("Use in the header : ", user);
  console.log(isLinkClicked, islogged);

  return (
    <>
      {isLinkClicked && islogged ? <UserOptions /> : ""}
      <Disclosure as="nav" className="bg-neutral-800 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="home" className="flex justify-center items-center">
                  <img
                    alt="Your Company"
                    src="https://lens-storage.storage.googleapis.com/png/8f8cd432d6e048aea2dc675a96aab6e3"
                    className="h-8 w-auto"
                  />
                  Otaku
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navItemsLeft.map((item) => {
                    if (item.title === "Browse") {
                      return (
                        <Link
                          key={item.id}
                          href={item.path}
                          onClick={() => setBrowseDropdown(!browseDropdown)}
                          className={classNames(
                            "text-gray-300 hover:bg-black hover:text-white",
                            "px-4 py-3 text-m font-medium no-underline relative"
                          )}
                        >
                          {item.title}
                          {item.icon ? item.icon : ""}
                          {browseDropdown && <BrowseDropdown />}
                        </Link>
                      );
                    }

                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        // aria-current={item.current ? "page" : undefined}
                        //item.current ? "bg-gray-900 text-white" :
                        className={classNames(
                          "text-gray-300 hover:bg-black hover:text-white",
                          "px-4 py-3 text-m font-medium no-underline relative"
                        )}
                      >
                        {item.title}
                        {item.icon ? item.icon : ""}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button> */}

              <div className="flex space-x-4">
                {navItemsRight.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    // aria-current={item.current ? "page" : undefined}
                    //item.current ? "bg-gray-900 text-white" :
                    className={classNames(
                      "text-gray-300 hover:bg-black hover:text-white",
                      "px-3 py-3 text-m font-medium no-underline relative"
                    )}
                  >
                    {item.title}
                    {item.icon ? item.icon : ""}
                  </Link>
                ))}
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex hover:bg-black px-3 py-3">
                    <span
                      className="absolute -inset-1.5"
                      onClick={() => setIsLinkClicked(!isLinkClicked)}
                    />
                    <span className="sr-only">Open user menu</span>
                    <MdAccountCircle size={24} style={{ color: "white" }} />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className={
                    islogged
                      ? "hidden"
                      : !isLinkClicked
                      ? "hidden"
                      : "absolute z-10 top-12 mt-2 w-96 text-left origin-top-right bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  }
                  style={{ right: "-3.5rem" }}
                >
                  <MenuItem>
                    <Link
                      to="/createaccount"
                      className="block px-4 py-2 no-underline data-[focus]:bg-zinc-700"
                      onClick={() => setIsLinkClicked(true)}
                    >
                      <p className="text-gray-200 text-lg m-0">
                        Create Account
                      </p>
                      <p className="text-neutral-500 font-semibold text-sm">
                        Join for free or go Premium
                      </p>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/login"
                      className="block px-4 py-2 no-underline data-[focus]:bg-zinc-700"
                      onClick={() => setIsLinkClicked(true)}
                    >
                      <p className="text-gray-200 text-lg m-0">Log In</p>
                      <p className="text-neutral-500 text-sm font-semibold">
                        Already joined Otaku? Welcome back
                      </p>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 no-underline data-[focus]:bg-zinc-700"
                    >
                      <p className="text-gray-200 text-lg m-0">Gift Card</p>
                      <p className="text-neutral-500 text-sm font-semibold">
                        Have a gift card? Redeem it here
                      </p>
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 text-left">
            {navItemsLeft.map((item) => (
              <DisclosureButton
                key={item.id}
                as="a"
                href={item.path}
                // aria-current={item.current ? "page" : undefined}
                className={classNames(
                  "text-gray-300 hover:bg-black hover:text-white block",
                  "px-3 py-3 text-m font-medium no-underline relative"
                )}
              >
                {item.title}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Routes>
        <Route path="/home" element={<Home AnimeData={aniData} />}></Route>

        <Route path="/browse" element={<Browse AnimeData={aniData} />}>
          {/* <Browse /> */}
        </Route>

        <Route path="/news" element={<News AnimeData={aniData} />}></Route>

        <Route path="/saved" element={<SavedList />}>
          {/* <SavedList /> */}
        </Route>

        <Route path="/acc" element={<Profile />}>
          {/* <Profile /> */}
        </Route>

        <Route
          path="/searchbar"
          element={<Search AnimeData={aniData} />}
        ></Route>

        <Route
          path="/stream"
          element={<StreamingPage AnimeData={aniData} />}
        ></Route>

        <Route path="/createaccount" element={<CreateAccount />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>

        <Route path="/success" element={<Success />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  );
}
