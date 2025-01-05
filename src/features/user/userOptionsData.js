import { IoIosSwap } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { RiBookmarkLine } from "react-icons/ri";
import { IoListOutline } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { GrNotification } from "react-icons/gr";
import { LuGift } from "react-icons/lu";

export const ul1 = [
  { icon: <IoIosSwap size={24} />, pName: "Switch Profile", path: "#" },
  { icon: <IoIosSettings size={24} />, pName: "Settings", path: "/settings" },
];

export const ul2 = [
  { icon: <RiBookmarkLine size={24} />, pName: "Watchlist", path: "#" },
  { icon: <IoListOutline size={24} />, pName: "Crunchylists", path: "#" },
  { icon: <LuHistory size={24} />, pName: "History" },
];

export const ul3 = [
  { icon: <GrNotification size={24} />, pName: "Notifications", path: "#" },
  { icon: <LuGift size={24} />, pName: "Gift Card", path: "#" },
];
