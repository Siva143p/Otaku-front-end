// import React, { useEffect } from "react";

// function Add_aniData() {
//   useEffect(() => {
//     const fetchData = async () => {
//       const url =
//         "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=lookism&sortBy=ranking&sortOrder=asc";

//       const options = {
//         method: "GET",
//         headers: {
//           "x-rapidapi-key":
//             "2d761a7077mshdff3971e1ecb95dp146b30jsn64dc1ee53cc1",
//           "x-rapidapi-host": "anime-db.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//         addToLocalStore(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     (async () => await fetchData())();
//   }, []);

//   const addToLocalStore = (Data) => {
//     console.log(Data);
//     const tempArray = JSON.parse(localStorage.getItem("aniData")) || [];

//     Data.data.map((item) => tempArray.push(item));

//     console.log("tempArray : ", tempArray);

//     localStorage.setItem("aniData", JSON.stringify(tempArray));
//   };

//   return <div></div>;
// }

// export default Add_aniData;
