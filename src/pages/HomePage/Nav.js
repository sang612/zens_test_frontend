import React from "react";
import logo from "../../assets/img/HLLOGO.png";
import sunflower from "../../assets/img/sunflower.png";

const Nav = () => {
  return (
    <div className="nav ">
      <div className="container w-3/5 mx-auto flex flex-row items-center justify-between py-3">
        <div>
          <img src={logo} alt="logo" className="h-16" />
        </div>

        <div className="flex flex-row ">
          <div className="name text-right ">
            <span className="text-zinc-400 italic text-sm">
              Handicrafted by
            </span>
            <h3 className="text-sm">Jim HLS</h3>
          </div>
          <div className="avatar ml-3">
            <img src={sunflower} alt="sunflower" className="h-14" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
