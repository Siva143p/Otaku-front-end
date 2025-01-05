export const fetchByAlphabets = async (lang, media) => {
  const url = `http://localhost:5500/api/animeByAlphabets?lang=${lang}&media=${media}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSaved = async (userId, lang, media) => {
  const url = `http://localhost:5500/api/findSavedAni?listType=WatchList&userId=${userId}&lang=${lang}&media=${media}`;
  console.log(userId, lang, media);

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
