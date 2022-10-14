import React from "react";
import { useSelector } from "react-redux";

const Joke = () => {
  const { jokePicked } = useSelector((state) => state.joke);

  if (!jokePicked) {
    return (
      <div className="joke text-gray-500 w-3/5 my-10 mx-auto text-center h-28">
        That's all the jokes for today! Come back another day!
        <hr className="mt-10 w-2/3 mx-auto" />
      </div>
    );
  }

  return (
    <div className="joke text-gray-500 w-3/5 my-10 mx-auto text-center h-28">
      {jokePicked.content}
      <hr className="mt-10 w-2/3 mx-auto" />
    </div>
  );
};

export default Joke;
