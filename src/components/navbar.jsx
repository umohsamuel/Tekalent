import React, { useState } from "react";
import image from "./image";

function Navbar() {
  const [menuburger, setMenuburger] = useState(false);

  const handlenavclick = () => {
    setMenuburger((prev) => !prev);
  };
  return (
    <div className="w-[90%] flex justify-center items-center navmorph fixed z-[9999] top-[3.5%] rounded-xl">
      <nav className="flex justify-between items-center w-full h-12 mybp:h-[4.25rem] border rounded-xl mybp:px-9 px-3 bg-gradient-to-r from-[#1A1A1A] to-[#838383] bg-opacity-100 opacity-80 ">
        <div className="flex gap-4 items-center">
          <svg
            width="43"
            height="47"
            viewBox="0 0 43 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.3275 34.3691C29.1357 34.1525 29.8588 33.7939 30.4827 33.3301C32.5219 31.8142 33.5183 29.173 32.8309 26.6077C31.9304 23.2468 28.459 21.2244 25.0501 22.1378L23.3727 15.8775C30.191 14.0505 37.2288 18.0856 39.0647 24.9373C40.4684 30.1758 38.4123 35.5065 34.332 38.5397C33.067 39.4801 31.609 40.1995 30.0049 40.6294C23.1866 42.4563 16.1488 38.4213 14.3129 31.5695C13.9263 30.1265 13.8016 28.6684 13.9131 27.2498L20.3486 27.7727C20.2943 28.465 20.3542 29.181 20.5467 29.8992C21.4472 33.2601 24.9186 35.2825 28.3275 34.3691Z"
              fill="white"
            />
            <circle
              cx="9.58653"
              cy="9.58653"
              r="9.58653"
              transform="matrix(0.977851 -0.2093 -0.2093 -0.977851 5.0127 27.7614)"
              fill="white"
            />
          </svg>
          <span className="text-white font-bold mybp:text-2xl text-xs">
            Tekalent
          </span>
        </div>

        <button className="hidden max-w-[13rem] p-3 max-h-[2.75rem] bg-[#1A1B1E] text-white hover:bg-white hover:text-[#1A1B1E] transition delay-150 duration-150 ease-in-out hover:border hover:border-black font-bold text-lg mybp:flex justify-center items-center gap-2 rounded-[10px]">
          <span>Access Top Talent</span>{" "}
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.106 11.5741C7.994 11.5741 7.87267 11.5531 7.742 11.5111C7.61133 11.4691 7.49933 11.4061 7.406 11.3221C7.24733 11.1541 7.175 10.9746 7.189 10.7837C7.203 10.5928 7.308 10.421 7.504 10.2682L12.404 6.66007H0.91C0.658 6.66007 0.443333 6.58943 0.266 6.44816C0.0886667 6.30688 0 6.13316 0 5.92698C0 5.72079 0.0886667 5.54707 0.266 5.40579C0.443333 5.26452 0.658 5.19388 0.91 5.19388H12.404L7.504 1.5857C7.41067 1.50934 7.33833 1.4177 7.287 1.31079C7.23567 1.20389 7.21 1.10461 7.21 1.01298C7.21 0.944248 7.22867 0.864067 7.266 0.77243C7.294 0.718976 7.34067 0.638794 7.406 0.531885C7.546 0.371521 7.74433 0.285612 8.001 0.274158C8.25767 0.262703 8.49333 0.318067 8.708 0.440248L15.302 5.35425C15.33 5.37716 15.3603 5.40961 15.393 5.45161C15.4257 5.49361 15.4607 5.51461 15.498 5.51461V5.59479C15.498 5.65588 15.505 5.69979 15.519 5.72652C15.533 5.75325 15.5633 5.76661 15.61 5.76661V5.84679V5.92698C15.61 5.98043 15.603 6.02052 15.589 6.04725C15.575 6.07398 15.5447 6.08734 15.498 6.08734V6.16752C15.498 6.21334 15.477 6.25343 15.435 6.28779C15.393 6.32216 15.3487 6.33934 15.302 6.33934L8.708 11.2419C8.52133 11.4633 8.32067 11.5741 8.106 11.5741Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="relative mybp:hidden">
          <button onClick={handlenavclick}>
            <img src={image.menuburger} alt="" />
          </button>
          {menuburger ? (
            <div className=" w-[17vw] h-16 centering absolute bg-black z-50 text-black flex justify-center">
              <a href="/" className=" text-xs text-blue-300 font-bold">
                Access top talent
              </a>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
