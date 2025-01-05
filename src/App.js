import "./Assets/css/App.css";
import { useEffect, useState } from "react";
import Header from "./features/navigations/Header";
import { BrowserRouter as Router } from "react-router-dom";
import {
  fetchSavedAnimes,
  setUserIdSaved,
} from "./features/saveAnime/savedSlice";
import { useDispatch } from "react-redux";

function App() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("accessToken")) || ""
  );
  const [user, setUser] = useState("");
  const [isloggedin, setIsloggedin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/findAllAnime");
        if (!response.ok) throw new Error("Data not received");
        const result = await response.json();
        console.log("Fetched animes : ", result);
        setData(result);
      } catch (error) {
        console.error("Fetch error: ", error.message);
      }
    };

    fetchData(); // Fetch anime data once on component mount
  }, []);

  useEffect(() => {
    if (token) {
      const getAccountDetails = async () => {
        try {
          const url = "http://localhost:5500/api/accounts";
          const options = {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await fetch(url, options);

          if (response.status === 403) {
            console.log("Token expired or invalid. Refreshing token...");
            await getAccessToken();
            return; // Retry fetch after token is refreshed
          }

          if (!response.ok) {
            throw new Error(`HTTP error, status ${response.status}`);
          }

          const res = await response.json();
          setUser(res);
          dispatch(setUserIdSaved(res._id));
          dispatch(fetchSavedAnimes());
          setIsloggedin(true);
          console.log("userId", res._id);
        } catch (error) {
          console.error("Error fetching account details: ", error.message);
        }
      };

      getAccountDetails(); // Fetch account details on token change
    }
  }, [token]);

  const getAccessToken = async () => {
    const url = "http://localhost:5500/api/token";
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 403) {
        throw new Error(`Refresh Token expired, status ${response.status}`);
      }

      if (!response.ok) {
        throw new Error(`HTTP error, status ${response.status}`);
      }

      const result = await response.json();
      localStorage.setItem("accessToken", JSON.stringify(result.accessToken));
      setToken(result.accessToken);
    } catch (error) {
      console.error("Error refreshing token: ", error.message);
    }
  };

  // console.log("User Out : ", user._id);

  return (
    <div className="App">
      {data.length > 0 && (
        <Router>
          <Header
            aniData={data}
            user={user ? user : ""}
            islogged={isloggedin}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
