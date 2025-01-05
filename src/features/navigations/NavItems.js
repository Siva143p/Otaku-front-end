import { RiBookmarkLine } from "react-icons/ri";
// import { MdAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

export const navItemsLeft = [
  { id: 1, title: "Home", path: "./home", ClassName: "menu" },
  {
    id: 2,
    title: "Browse",
    path: "#",
    icon: <FaCaretDown className="inline" />,
    ClassName: "menu",
  },
  {
    id: 3,
    title: "News",
    path: "/news",
    icon: <FaCaretDown className="inline" />,
    ClassName: "menu",
  },
];

export const navItemsRight = [
  {
    id: 4,
    title: <IoSearchSharp size={24} />,
    path: "/searchbar",
    ClassName: "menu",
  },
  {
    id: 5,
    title: <RiBookmarkLine size={24} />,
    path: "/saved",
    ClassName: "menu",
  },
  // {
  //   id: 6,
  //   title: <MdAccountCircle size={24} />,
  //   path: "/account",
  //   ClassName: "menu",
  // },
];

export const BrowseDropDownList1 = [
  {
    id: 1,
    title: "Popular",
    path: "./browse",
    ClassName: "submenu--item",
    data: "popular",
  },
  {
    id: 2,
    title: "New",
    path: "./browse",
    ClassName: "submenu--item",
    data: "New",
  },
  {
    id: 3,
    title: "Alphabetical",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Alphabetical",
  },
];

export const BrowseDropDownList2 = [
  {
    id: 1,
    title: "Action",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Action",
    quote: "For all your fist flying and huge explosion needs!",
  },
  {
    id: 2,
    title: "Adventure",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Adventure",
    quote: "Venture forth with heroes who hope to achieve their dreams!",
  },
  {
    id: 3,
    title: "Comedy",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Comedy",
    quote:
      "Find lots of laughs from classic slapstick to the in-too-deep cult classics.",
  },
  {
    id: 4,
    title: "Drama",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Drama",
    quote: "Enjoy these Dramas",
  },
  {
    id: 5,
    title: "Fantasy",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Fantasy",
    quote: "It's time to get deep and act one more time... with feeling!",
  },
];

export const BrowseDropDownList3 = [
  {
    id: 1,
    title: "Music",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Music",
    quote:
      "From classical to rock and everything in between, these shows are ready to perform!",
  },
  {
    id: 2,
    title: "Romance",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Romance",
    quote:
      "Want your heart to flutter and believe in love after love? This is for you romantics out there.",
  },
  {
    id: 3,
    title: "Sci-Fi",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Sci-fi",
    quote:
      "Get ready to launch and hack into the grid with these high-tech series.",
  },
  {
    id: 4,
    title: "Shojo",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Shojo",
    quote:
      "When you're feeling a little more adult, these might suit your tastes.",
  },
  {
    id: 5,
    title: "Seinen",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Seinen",
    quote:
      "The springtime of youth, that look you give your first crush, and that extra sense of fashion. These girls have it all.",
  },
];

export const BrowseDropDownList4 = [
  {
    id: 1,
    title: "Shonen",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Shonen",
    quote:
      "Teamwork, the power of friendship, and achieving your dreams: The fundamentals are all here!",
  },
  {
    id: 2,
    title: "Slice of Life",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Slice of life",
    quote: "Slow and steady? That's exactly my kind of vibe.",
  },
  {
    id: 3,
    title: "Sports",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Sports",
    quote: "Ball (and other forms of physical activity) is life!",
  },
  {
    id: 4,
    title: "Supernatural",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Supernatural",
    quote: "Ghouls, Ghosts, Goblins, and many more creatures abound!",
  },
  {
    id: 5,
    title: "Thriller",
    path: "./browse",
    ClassName: "submenu--item",
    data: "Thriller",
    quote: `A perfect selection of shows to feel that tingle down your spine and scream at the screen "Don't go that way!"`,
  },
];

export const AmimeNewsDropDown = [
  {
    id: 1,
    title: "Browse",
    path: "./browse",
    ClassName: "submenu--item",
    data: "popular",
  },
  {
    id: 2,
    title: "Browse",
    path: "./browse",
    ClassName: "submenu--item",
    data: "popular",
  },
  {
    id: 3,
    title: "Browse",
    path: "./browse",
    ClassName: "submenu--item",
    data: "popular",
  },
];

export const SavedPageNav = [
  {
    id: 1,
    title: "WATCHLIST",
    path: "/watchlist",
    className: "saved--ani--link",
  },
  {
    id: 2,
    title: "OTAKULIST",
    path: "/otakulist",
    className: "saved--ani--link",
  },
  { id: 3, title: "HISTORY", path: "/history", className: "saved--ani--link" },
];
