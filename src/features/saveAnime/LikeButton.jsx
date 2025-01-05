import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { selectLikedAnimes, addLike, removeLike } from "./likeSlice";

function LikeButton({ Anime }) {
  const likedAnimes = useSelector(selectLikedAnimes);
  const dispatch = useDispatch();
  const isAnimeIn = likedAnimes
    ? likedAnimes.some((anime) => anime.id === Anime.id)
    : "";
  return (
    <>
      {isAnimeIn ? (
        <IoHeartSharp
          size={24}
          className="inline mr-2 text-neutral-400 hover:text-white"
          onClick={() => dispatch(removeLike(Anime))}
        />
      ) : (
        <IoHeartOutline
          size={24}
          className="inline mr-2 text-neutral-400 hover:text-white"
          onClick={() => dispatch(addLike(Anime))}
        />
      )}
    </>
  );
}

export default LikeButton;
