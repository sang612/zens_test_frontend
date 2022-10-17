import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeJoke, getCookieArr } from "../../slices/joke";
import { useCookies } from "react-cookie";

const Button = () => {
  const dispatch = useDispatch();
  const { jokePicked } = useSelector((state) => state.joke);
  const [cookies, setCookie] = useCookies([]);
  const [arrJokeState, setArrJokeState] = useState(
    cookies.jokeArrCookie ? cookies.jokeArrCookie : []
  );

  useEffect(() => {
    dispatch(getCookieArr(arrJokeState));
    dispatch(changeJoke());
  }, []);

  useEffect(() => {
    handleSaveJokeVoteHistory(JSON.stringify(arrJokeState));
  }, [arrJokeState]);

  const handleChangeJoke = (value) => {
    if (!jokePicked) {
      return;
    }
    setArrJokeState([...arrJokeState, value]);
    dispatch(getCookieArr([...arrJokeState, value]));
    dispatch(changeJoke(value));
  };

  const handleSaveJokeVoteHistory = (value) => {
    setCookie("jokeArrCookie", value, { path: "/" });
  };

  return (
    <div className="button w-full text-center pt-8">
      <button
        className="mr-3 bg-blue-500 px-16 py-2 text-white border-b-2 border-blue-600 border-solid hover:bg-blue-600 transition-all ease-in-out duration-150"
        onClick={() => {
          handleChangeJoke({
            id: jokePicked?.id,
            content: jokePicked?.content,
            like: true,
          });
        }}
      >
        This is Funny!
      </button>
      <button
        className="ml-3 bg-green-500 px-16 py-2 text-white border-b-2 border-green-600 border-solid hover:bg-green-600 transition-all ease-in-out duration-150"
        onClick={() => {
          handleChangeJoke({
            id: jokePicked?.id,
            content: jokePicked?.content,
            like: false,
          });
        }}
      >
        This is not funny.
      </button>
    </div>
  );
};

export default Button;
