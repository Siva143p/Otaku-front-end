export const getSavedAnimes = async (listType, userId, lang, media) => {
  const url = `http://localhost:5500/api/findSavedAni?listType=${listType}&userId=${userId}&lang=${lang}&media=${media}`;
  const options = { method: "GET" };
  console.log(
    "all detail for fetchin saved animes: ",
    listType,
    userId,
    lang,
    media,
  );

  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = [];
    result.push(await response.json());

    console.log(result);

    return result[0];
  } catch (err) {
    console.error(err);
  }
};

export const saveHandler = async (id, listType, userId) => {
  const obj = {
    listType: listType,
    animeId: id,
    userId: userId,
  };
  const url = "http://localhost:5500/api/saveAnime";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
