import React from "react";
import image from "./image";

function Review({ name, content }) {
  const reviewinfo = [
    {
      name: "Nnaemeka Obodoekwe - CTO Lenkie",
      content:
        "I was initially skeptical when introduced to Tekalent as a solution to accelerate my product development timeline, but taking the plunge turned out to be a game-changer. The top-notch team  engineers I had the pleasure of working with not only helped me laun my product on time but also on budget, delivering exception results. Their expertise and efficient processes enabled us to save  impressive three months of development time, giving us a significa competitive advantage and allowing us to capture a substantial market sha ahead of schedule. Additionally, the affordability of Tekalent's engineers, being five times cheaper compared to the UK, ensured  stayed well within our budget. The professionalism, attention to detai and proactive problem-solving approach of Tekalent's enginee were instrumental in overcoming challenges and providing valuab insights for enhancing product quality and efficiency. I wholeheartedly recommend Tekalent to anyone seeking to accelerate their product development while maintaining cost- effectiveness.",
      id: 1,
    },
  ];
  return (
    <div className="w-full mybp:h-[22.95rem] bg-gradient-to-r from-[#F7F7F8] to-[#9597AA] rounded-r-[2.5rem] mybp:mr-7 flex justify-center items-center gap-[50.688rem] relative">
      {/* Previous button  */}
      <button className=" hidden bg-[#1A1B1E] hover:bg-white text-white hover:text-black hover:border hover:border-black transition delay-150 duration-150 ease-in-out w-[4.318rem] h-[4.318rem] rounded-full mybp:flex justify-center items-center">
        <svg
          width="21"
          height="32"
          viewBox="0 0 21 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 3L4 16L18.5 29"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </button>

      {/* next button  */}
      <button className=" hidden bg-[#1A1B1E] hover:bg-white text-white hover:text-black hover:border hover:border-black transition delay-150 duration-150 ease-in-out w-[4.318rem] h-[4.318rem] rounded-full mybp:flex justify-center items-center">
        <svg
          width="21"
          height="32"
          viewBox="0 0 21 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.49999 3L17 16L2.49999 29"
            stroke="currentColor"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </button>

      {/* review popup  */}
      <div className="absolute mybp:w-[55%] w-full h-full mybp:h-[49.125rem] bg-white rounded-3xl py-10 flex flex-col items-center justify-center ">
        {reviewinfo.map((info) => (
          <div
            key={info.id}
            className="w-[90%] h-full flex flex-col gap-9 justify-center items-center mybp:items-start"
          >
            <div className="flex gap-16 justify-between items-center">
              <span className=" font-semibold text-lg mybp:text-2xl">
                {info.name}
              </span>
              <img src={image.bitmojict} alt="" />
            </div>
            <p className="w-full font-normal text-xs mybp:text-lg">
              {info.content}
            </p>
            <div className="w-full flex justify-center">
              <img src={image.fivestars} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
