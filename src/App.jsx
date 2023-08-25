import "./App.css";
import image from "./components/image";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      {/* first page  */}
      <div className=" w-full h-[100vh] relative text-white">
        {/* background image  */}
        <div className="pg1 w-full h-full z-[1]">
          <img src={image.gridpng2} alt="" />
        </div>
        {/* navbar  */}
        <Navbar />
        {/* text content of first page  */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-9">
          <h1 className="font-bold text-6xl w-[48.625rem]">
            Hire world-class engineers for a fraction of the price
          </h1>
          <div className="flex flex-col font-normal text-xl">
            <p>Global Engineering Solutions Tailored for Startups,</p>
            <p>Introducing Tekalent's Risk-Free Talent Onboarding.</p>
          </div>
          <button className=" flex justify-center items-center w-52 h-16 bg-white text-black gap-2 rounded-xl font-bold text-lg">
            <span>Access Top Talent</span>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.106 13.8125C7.994 13.8125 7.87267 13.7868 7.742 13.7355C7.61133 13.6842 7.49933 13.6072 7.406 13.5045C7.24733 13.2992 7.175 13.0798 7.189 12.8465C7.203 12.6132 7.308 12.4032 7.504 12.2165L12.404 7.8065H0.91C0.658 7.8065 0.443333 7.72017 0.266 7.5475C0.0886667 7.37483 0 7.1625 0 6.9105C0 6.6585 0.0886667 6.44617 0.266 6.2735C0.443333 6.10083 0.658 6.0145 0.91 6.0145H12.404L7.504 1.6045C7.41067 1.51117 7.33833 1.39917 7.287 1.2685C7.23567 1.13783 7.21 1.0165 7.21 0.9045C7.21 0.820499 7.22867 0.7225 7.266 0.610499C7.294 0.545166 7.34067 0.447166 7.406 0.3165C7.546 0.1205 7.74433 0.0154991 8.001 0.00149918C8.25767 -0.0125008 8.49333 0.0551662 8.708 0.204499L15.302 6.2105C15.33 6.2385 15.3603 6.27817 15.393 6.3295C15.4257 6.38083 15.4607 6.4065 15.498 6.4065V6.5045C15.498 6.57917 15.505 6.63283 15.519 6.6655C15.533 6.69817 15.5633 6.7145 15.61 6.7145V6.8125V6.9105C15.61 6.97583 15.603 7.02483 15.589 7.0575C15.575 7.09017 15.5447 7.1065 15.498 7.1065V7.2045C15.498 7.2605 15.477 7.3095 15.435 7.3515C15.393 7.3935 15.3487 7.4145 15.302 7.4145L8.708 13.4065C8.52133 13.6772 8.32067 13.8125 8.106 13.8125Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* images div  */}
        <div className="  flex justify-center items-center -mt-24">
          <img
            src={image.wholepage1imgframe}
            alt=""
            className="opacity-100 z-10 w-[75%]"
          />
        </div>
      </div>

      <div className="bg-white rounded-t-[99px]">
        {/* second page  */}
        <div className="w-full h-[100vh] mt-96 text-black bg-white rounded-t-[99px] flex justify-center items-center ">
          <div className=" w-[90%] h-[80%] bg-gradient-to-r from-white to-[#9597AA] border-r-2 rounded-3xl flex justify-between">
            {/* left section  */}
            <div className="w-[50%] h-full flex flex-col items-center py-24">
              <div className="grid gap-9">
                <h1 className=" w-[20.7rem] font-bold text-4xl">
                  Tekalent's Premier Talent Solutions
                </h1>
                <p className=" w-[31.938rem] font-medium text-xl">
                  Tekalent brings you the best talent from across the globe. For
                  early stage startups that want to get their product off the
                  ground, we provide highly vetted and experienced software
                  engineers.
                </p>
                <button className=" w-48 h-14 bg-black flex justify-center items-center text-white gap-2 rounded-xl font-bold text-base">
                  <span>Access Top Talent</span>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.87826 12.2471C7.7791 12.2471 7.67168 12.2243 7.556 12.1789C7.44032 12.1335 7.34116 12.0653 7.25853 11.9744C7.11806 11.7926 7.05402 11.5984 7.06642 11.3919C7.07881 11.1853 7.17177 10.9994 7.34529 10.8341L11.6834 6.92983H1.50749C1.28438 6.92983 1.09434 6.8534 0.937339 6.70053C0.780342 6.54767 0.701843 6.35968 0.701843 6.13658C0.701843 5.91348 0.780342 5.7255 0.937339 5.57263C1.09434 5.41977 1.28438 5.34334 1.50749 5.34334H11.6834L7.34529 1.43907C7.26266 1.35644 7.19863 1.25728 7.15318 1.1416C7.10773 1.02592 7.08501 0.918502 7.08501 0.819345C7.08501 0.744979 7.10153 0.658217 7.13459 0.559061C7.15938 0.501221 7.20069 0.414459 7.25853 0.298777C7.38248 0.125254 7.55807 0.0322952 7.7853 0.0199003C8.01253 0.00750637 8.22117 0.0674133 8.41122 0.199621L14.249 5.51686C14.2738 5.54165 14.3007 5.57677 14.3296 5.62221C14.3585 5.66766 14.3895 5.69038 14.4226 5.69038V5.77714C14.4226 5.84325 14.4287 5.89076 14.4411 5.91968C14.4535 5.9486 14.4804 5.96306 14.5217 5.96306V6.04982V6.13658C14.5217 6.19443 14.5155 6.23781 14.5031 6.26673C14.4907 6.29565 14.4639 6.31011 14.4226 6.31011V6.39687C14.4226 6.44645 14.404 6.48983 14.3668 6.52701C14.3296 6.56419 14.2903 6.58279 14.249 6.58279L8.41122 11.8876C8.24596 12.1273 8.06831 12.2471 7.87826 12.2471Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* right section  */}
            <div className="w-[50%] h-full z-30 mt-24 flex justify-center">
              <img
                src={image.finalpage2group}
                alt=""
                className="z-30 h-full shadow rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* third page  */}
        <div className="w-full h-[100vh] bg-white">
          <div className="w-full h-full mt-32 text-black bg-white rounded-t-[99px] flex justify-center items-center">
            <div className=" w-[90%] h-[80%] bg-gradient-to-l from-white to-[#9597AA] border-l-2 rounded-3xl flex justify-between">
              {/* left section  */}
              <div className="w-[50%] h-full z-30 -mt-24 flex items-center justify-center">
                <img
                  src={image.page3left}
                  alt=""
                  className="z-30 h-full shadow rounded-2xl"
                />
              </div>
              {/* right section  */}
              <div className="w-[50%] h-full flex flex-col items-center justify-center">
                <div className="grid gap-9">
                  <h1 className=" w-[24.8rem] font-bold text-4xl">
                    Tekalent's Exceptional Software Engineers
                  </h1>
                  <div className="w-[31.938rem] font-medium text-xl flex flex-col gap-8">
                    <p>
                      Our accomplished software engineers, hailing from diverse
                      backgrounds, bring proven expertise to amplify your
                      project's success. Partner with us for unmatched
                      proficiency in execution.
                    </p>
                    <p>
                      Try our services, and if you're not satisfied with our
                      engineers within the first 3 days, we'll cover the cost -
                      no questions asked.
                    </p>
                  </div>
                  <button className=" w-48 h-14 bg-white flex justify-center items-center text-black gap-2 rounded-xl font-bold text-base">
                    <span>Access Top Talent</span>
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.87826 12.2471C7.7791 12.2471 7.67168 12.2243 7.556 12.1789C7.44032 12.1335 7.34116 12.0653 7.25853 11.9744C7.11806 11.7926 7.05402 11.5984 7.06642 11.3919C7.07881 11.1853 7.17177 10.9994 7.34529 10.8341L11.6834 6.92983H1.50749C1.28438 6.92983 1.09434 6.8534 0.937339 6.70053C0.780342 6.54767 0.701843 6.35968 0.701843 6.13658C0.701843 5.91348 0.780342 5.7255 0.937339 5.57263C1.09434 5.41977 1.28438 5.34334 1.50749 5.34334H11.6834L7.34529 1.43907C7.26266 1.35644 7.19863 1.25728 7.15318 1.1416C7.10773 1.02592 7.08501 0.918502 7.08501 0.819345C7.08501 0.744979 7.10153 0.658217 7.13459 0.559061C7.15938 0.501221 7.20069 0.414459 7.25853 0.298777C7.38248 0.125254 7.55807 0.0322952 7.7853 0.0199003C8.01253 0.00750637 8.22117 0.0674133 8.41122 0.199621L14.249 5.51686C14.2738 5.54165 14.3007 5.57677 14.3296 5.62221C14.3585 5.66766 14.3895 5.69038 14.4226 5.69038V5.77714C14.4226 5.84325 14.4287 5.89076 14.4411 5.91968C14.4535 5.9486 14.4804 5.96306 14.5217 5.96306V6.04982V6.13658C14.5217 6.19443 14.5155 6.23781 14.5031 6.26673C14.4907 6.29565 14.4639 6.31011 14.4226 6.31011V6.39687C14.4226 6.44645 14.404 6.48983 14.3668 6.52701C14.3296 6.56419 14.2903 6.58279 14.249 6.58279L8.41122 11.8876C8.24596 12.1273 8.06831 12.2471 7.87826 12.2471Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth page  */}
        <div className="w-full text-black bg-gradient-to-b from-white to-[#F8F8F8] rounded-t-[99px] flex justify-center items-center ">
          <div className=" w-[90%] py-[4.75rem] bg-gradient-to-r from-white to-[#9597AA] border-r-2 rounded-3xl flex flex-col justify-between">
            {/* top fourth page  */}
            <div className="flex justify-center items-center gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 bg-white rounded-3xl ">
                <img src={image.iconlogotop} alt="" />
                <div className="grid gap-9">
                  <h1 className="  font-bold text-2xl">
                    Vetting and Verification
                  </h1>
                  <div className="w-[34rem] flex flex-col gap-12">
                    <p className=" font-normal text-lg">
                      We only accept the top 1% of our applicants through a
                      rigorous series of assessments designed to test for both
                      hard and soft skills:
                    </p>
                    <p className=" font-semibold text-lg">
                      These include psychometric tests, coding challenges and
                      pair programming exercises.
                    </p>
                  </div>
                </div>
              </div>
              {/* right section  */}
              <div className="w-[30rem] h-[33rem] z-30 block p-12 bg-white rounded-3xl">
                <img src={image.iconlogotop2} alt="" />
                <div className="grid gap-9">
                  <h1 className="  font-bold text-2xl">Global Perspective</h1>
                  <div className="w-[24.063rem] flex flex-col gap-12">
                    <p className=" font-normal text-lg">
                      Our engineers come from diverse cultural and professional
                      backgrounds, offering a rich blend of perspectives that
                      can drive innovation.
                    </p>
                    <p className=" font-semibold text-lg">
                      This global perspective is harnessed to deliver solutions
                      tailored to your local market, giving your startup a
                      competitive edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom fourth page  */}
            <div className="flex justify-center items-center gap-7 px-[2%] mt-[2.688rem]">
              {/* left section  */}
              <div className="w-[30rem] h-[33rem] z-30 block p-12 bg-white rounded-3xl">
                <img src={image.iconlogotop2} alt="" />
                <div className="grid gap-9">
                  <h1 className=" font-bold text-2xl">
                    Technologies & experience
                  </h1>
                  <div className="w-[24.063rem] flex flex-col gap-12">
                    <p className=" font-normal text-lg">
                      We have engineers with production experience across
                      several technologies (e.g. Javascript, Python, Go, Swift,
                      Java, Rust).
                    </p>
                    <p className=" font-semibold text-lg">
                      They have worked at several Fortune 500 companies and
                      coveted startups like ChipperCash and Andela.
                    </p>
                  </div>
                </div>
              </div>
              {/* right section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 bg-white rounded-3xl ">
                <img src={image.iconlogotop} alt="" />
                <div className="grid gap-9">
                  <h1 className=" font-bold text-2xl">
                    Proven Results, Rapid Integration
                  </h1>
                  <div className="w-[34rem] flex flex-col gap-12">
                    <p className=" font-normal text-lg">
                      We know that startups need to hit the ground running. Our
                      engineers don't just bring impressive resumes; they're
                      adept at quickly integrating into teams and projects.
                    </p>
                    <p className=" font-semibold text-lg">
                      You'll be amazed at how seamlessly they become an
                      extension of your startup's mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] w-full h-28"></div>

        {/* fifth page  */}
        <div className=" bg-[#F8F8F8] w-full">
          <div className="rounded-t-[99px] rounded-b-[99px] bg-white ">
            {/* first one for this guy  */}
            <div className="flex justify-center items-center h-full w-full gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 rounded-3xl">
                <div className="flex flex-col gap-9 justify-center w-full h-full">
                  <h1 className="  font-bold text-[3.25rem]">Pricing</h1>
                  <p className=" font-medium text-2xl w-[34rem]">
                    We have engineers at a variety of price points, dependent on
                    their level of experience. Our most experienced engineers
                    work out to less than £2,000 a month.
                  </p>
                </div>
              </div>
              {/* right section  */}
              <div className="w-[30rem] h-[33rem] z-30  p-12 flex items-center bg-white rounded-3xl">
                <img src={image.glassmorphism1} alt="" />
              </div>
            </div>

            {/* second one for this guy  */}
            <div className="flex justify-center items-center h-full w-full gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 rounded-3xl">
                <div className="flex flex-col gap-9 justify-center w-full h-full">
                  <h1 className="  font-bold text-[3.25rem]">UK based hire</h1>
                  <p className=" font-medium text-2xl w-[21rem]">
                    Lots of time, money and extra fees involved.
                  </p>
                  <button className=" w-48 h-14 bg-black flex justify-center items-center text-white gap-2 rounded-xl font-bold text-base">
                    <span>Access Top Talent</span>
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.87826 12.2471C7.7791 12.2471 7.67168 12.2243 7.556 12.1789C7.44032 12.1335 7.34116 12.0653 7.25853 11.9744C7.11806 11.7926 7.05402 11.5984 7.06642 11.3919C7.07881 11.1853 7.17177 10.9994 7.34529 10.8341L11.6834 6.92983H1.50749C1.28438 6.92983 1.09434 6.8534 0.937339 6.70053C0.780342 6.54767 0.701843 6.35968 0.701843 6.13658C0.701843 5.91348 0.780342 5.7255 0.937339 5.57263C1.09434 5.41977 1.28438 5.34334 1.50749 5.34334H11.6834L7.34529 1.43907C7.26266 1.35644 7.19863 1.25728 7.15318 1.1416C7.10773 1.02592 7.08501 0.918502 7.08501 0.819345C7.08501 0.744979 7.10153 0.658217 7.13459 0.559061C7.15938 0.501221 7.20069 0.414459 7.25853 0.298777C7.38248 0.125254 7.55807 0.0322952 7.7853 0.0199003C8.01253 0.00750637 8.22117 0.0674133 8.41122 0.199621L14.249 5.51686C14.2738 5.54165 14.3007 5.57677 14.3296 5.62221C14.3585 5.66766 14.3895 5.69038 14.4226 5.69038V5.77714C14.4226 5.84325 14.4287 5.89076 14.4411 5.91968C14.4535 5.9486 14.4804 5.96306 14.5217 5.96306V6.04982V6.13658C14.5217 6.19443 14.5155 6.23781 14.5031 6.26673C14.4907 6.29565 14.4639 6.31011 14.4226 6.31011V6.39687C14.4226 6.44645 14.404 6.48983 14.3668 6.52701C14.3296 6.56419 14.2903 6.58279 14.249 6.58279L8.41122 11.8876C8.24596 12.1273 8.06831 12.2471 7.87826 12.2471Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* right section  */}
              <div className="w-[30rem] h-[33rem] z-30  p-12 flex items-center bg-white rounded-3xl">
                <img src={image.glassmorphism2} alt="" />
              </div>
            </div>
            <div className="h-20"></div>
          </div>

          {/* sixth page  */}
          <div className="w-full flex flex-col items-center mt-4 gap-[17rem] min-h-[150vh]">
            <h1 className=" w-60 font-bold text-4xl text-center">
              Customer testimonial
            </h1>

            <div className="w-full h-[22.95rem] bg-gradient-to-r from-[#F7F7F8] to-[#9597AA] rounded-r-[2.5rem] mr-7 flex justify-center items-center gap-[50.688rem] relative">
              {/* Previous button  */}
              <button className=" bg-[#1A1B1E] w-[4.318rem] h-[4.318rem] rounded-full flex justify-center items-center">
                <svg
                  width="21"
                  height="32"
                  viewBox="0 0 21 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 3L4 16L18.5 29"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              {/* next button  */}
              <button className=" bg-[#1A1B1E] w-[4.318rem] h-[4.318rem] rounded-full flex justify-center items-center">
                <svg
                  width="21"
                  height="32"
                  viewBox="0 0 21 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.49999 3L17 16L2.49999 29"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              {/* review popup  */}
              <div className="absolute w-[42.5rem] h-[49.125rem] bg-white rounded-3xl py-10 flex flex-col items-center justify-center ">
                <div className="w-[36.625rem] h-full flex flex-col gap-9 justify-center">
                  <div className="flex gap-16 justify-between items-center">
                    <span className=" font-semibold text-2xl">
                      Nnaemeka Obodoekwe - CTO Lenkie
                    </span>
                    <img src={image.bitmojict} alt="" />
                  </div>
                  <p className="w-full font-normal text-lg">
                    I was initially skeptical when introduced to Tekalent as a
                    solution to accelerate my product development timeline, but
                    taking the plunge turned out to be a game-changer. The
                    top-notch team of engineers I had the pleasure of working
                    with not only helped me launch my product on time but also
                    on budget, delivering exceptional results. Their expertise
                    and efficient processes enabled us to save an impressive
                    three months of development time, giving us a significant
                    competitive advantage and allowing us to capture a
                    substantial market share ahead of schedule. Additionally,
                    the affordability of Tekalent's engineers, being five times
                    cheaper compared to the UK, ensured we stayed well within
                    our budget. The professionalism, attention to detail, and
                    proactive problem-solving approach of Tekalent's engineers
                    were instrumental in overcoming challenges and providing
                    valuable insights for enhancing product quality and
                    efficiency. I wholeheartedly recommend Tekalent to anyone
                    seeking to accelerate their product development while
                    maintaining cost- effectiveness.
                  </p>
                  <div className="w-full">
                    <img src={image.fivestars} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* seventh page  */}
          
        </div>
      </div>
    </>
  );
}

export default App;
