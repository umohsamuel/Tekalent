import { useInView } from 'react-intersection-observer';
import React, { useRef, useEffect } from 'react';

import "./App.css";
import image from "./components/image";
import Navbar from "./components/navbar";
import { Tilt } from "react-tilt";

function App() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.

    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };


  const { ref: ref1, inView: ref1visible } = useInView();
  const { ref: ref2, inView: ref2visible } = useInView();
  const { ref: ref3, inView: ref3visible } = useInView();
  const { ref: ref4, inView: ref4visible } = useInView();





  const tiltRef = useRef(null);
  const tilt2Ref = useRef(null);


  useEffect(() => {
    const tiltDiv = tiltRef.current;
    const tilt2Div = tilt2Ref.current;


    const handleMouseMove = (event) => {
      const rect = tiltDiv.getBoundingClientRect();
      const rect2 = tilt2Div.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const centerX2 = rect2.left + rect.width / 2;
      const centerY2 = rect2.top + rect.height / 2;

      const angleX = (event.clientY - centerY) * 0.008; // Adjust sensitivity
      const angleY = (event.clientX - centerX) * -0.02; // Adjust sensitivity

      const angleX2 = (event.clientY - centerY) * 0.0008; // Adjust sensitivity
      const angleY2 = (event.clientX - centerX) * -0.01; // Adjust sensitivity


      tiltDiv.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      tilt2Div.style.transform = `rotateX(${angleX2}deg) rotateY(${angleY2}deg)`;

    };

    const handleMouseLeave = () => {
      tiltDiv.style.transform = 'rotateX(0) rotateY(0)';
      tilt2Div.style.transform = 'rotateX(0) rotateY(0)';

    };

    tiltDiv.addEventListener('mousemove', handleMouseMove);
    tiltDiv.addEventListener('mouseleave', handleMouseLeave);



    tilt2Div.addEventListener('mousemove', handleMouseMove);
    tilt2Div.addEventListener('mouseleave', handleMouseLeave);





    return () => {
      tiltDiv.removeEventListener('mousemove', handleMouseMove);
      tiltDiv.removeEventListener('mouseleave', handleMouseLeave);


      tilt2Div.removeEventListener('mousemove', handleMouseMove);
      tilt2Div.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);



  




  return (
    <>
      {/* first page  */}
      <div className="firstpagebg w-full h-[100vh] relative text-white">
        {/* navbar  */}
        <Navbar />
        {/* text content of first page  */}
        <div className="w-full pt-40 flex flex-col justify-center items-center text-center gap-9">
          <h1 className="font-bold text-6xl w-[48.625rem]">
            Hire world-class engineers for a fraction of the price
          </h1>
          <div className="flex flex-col font-normal text-xl">
            <p>Global Engineering Solutions Tailored for Startups,</p>
            <p>Introducing Tekalent's Risk-Free Talent Onboarding.</p>
          </div>
          <button className=" flex justify-center items-center w-52 h-16 bg-white text-black gap-2 rounded-xl font-bold text-lg hover:bg-black hover:text-white">
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
        <div className="  flex justify-center items-center slide_inD">
          <img
            src={image.wholepage1imgframe}
            alt=""
            className="opacity-100 z-10 w-[75%]"
          />
        </div>
      </div>

      <div ref={ref2} className="bg-white rounded-t-[99px]">
        {/* second page  */}
        <div className={`${ref2visible ? 'slide_in' : ''} "w-full h-[100vh] mt-96 text-black bg-white rounded-t-[99px] flex justify-center items-center `}>
          <div className=" w-[90%] h-[80%] bg-gradient-to-r from-white to-[#9597AA] border-r-2 rounded-3xl flex justify-between">
            {/* left section  */}
            <div className="w-[50%] h-full flex flex-col items-center py-24">
              <div className="grid gap-9">
                <h1 className=" w-[20.7rem] font-bold text-4xl ">
                  Tekalent's Premier Talent Solutions
                </h1>
                <p className=" w-[31.938rem] font-medium text-xl">
                  Tekalent brings you the best talent from across the globe. For
                  early stage startups that want to get their product off the
                  ground, we provide highly vetted and experienced software
                  engineers.
                </p>
                <button className=" w-48 h-14 bg-black flex justify-center items-center text-white gap-2 rounded-xl font-bold text-base hover:bg-white hover:text-black">
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
            <div className="w-[50%] h-full bg- z-30 mt-24 flex justify-center tilt ">
              <img
                src={image.finalpage2group}
                alt=""
                className="z-30 h-full shadow rounded-2xl"
              />
            </div>
          </div>
        </div>

        </div>

        {/* third page  */}
        <div ref={ref1}  className={`w-full h-[100vh] bg-white`}>
          <div className={`${ref1visible ? 'slide_in' : ''} w-full h-full mt-32 text-black bg-white rounded-t-[99px] flex justify-center items-center`}>
        <div className="w-full h-[100vh] bg-white">
          <div className="w-full h-full mt-32 text-black bg-white  rounded-t-[99px] flex justify-center items-center">
            <div className=" w-[90%] h-[80%] bg-gradient-to-l from-white to-[#9597AA] border-l-2 rounded-3xl flex justify-between">
              {/* left section  */}
              <div className="w-[50%] h-full z-30 -mt-24 flex items-center justify-center tilt2 hover:tilt2">
                <img
                  src={image.page3left}
                  alt=""
                  className="z-30 h-full shadow rounded-2xl"
                />
              </div>
              {/* right section  */}
              <div className="w-[50%] h-full flex flex-col items-center justify-center ">
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
                  <button className=" w-48 h-14 bg-white flex justify-center items-center text-black gap-2 rounded-xl font-bold text-base hover:bg-black hover:text-white">
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

        </div>
        </div>

        {/* fourth page  */}
        <div className="w-full text-black bg-gradient-to-b from-white to-[#F8F8F8] rounded-t-[99px] flex justify-center items-center ">
          <div ref={tiltRef} className=" w-[90%] py-[4.75rem] bg-gradient-to-r from-white to-[#9597AA] border-r-2 rounded-3xl flex flex-col justify-between tilt_div">
            {/* top fourth page  */}
            <div className="flex justify-center items-center gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 bg-white rounded-3xl hover:drop-shaddow-2xl">
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
              <div className="w-[30rem] h-[33rem] z-30 block p-12 bg-white rounded-3xl hover:drop-shaddow-2xl">
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
              <div className="w-[30rem] h-[33rem] z-30 block p-12 bg-white rounded-3xl hover:drop-shaddow-2xl">
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
              <div className="w-[42.063rem] h-[33rem] block p-12 bg-white rounded-3xl hover:drop-shaddow-2xl">
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

        {/* fifth page  */}
        <div  ref={ref3} className=" bg-[#F8F8F8] w-full flex flex-col items-center slide_in">
          <div className="rounded-t-[99px] rounded-b-[99px] bg-white ">
            {/* first one for this guy  */}
            <div className="flex justify-center items-center h-full w-full gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 rounded-3xl bg-transparent">
                <div className="flex flex-col gap-9 justify-center w-full h-full">
                  <h1 className="  font-bold text-[3.25rem]">Pricing</h1>
                  <p className= {`${ref3visible ? 'slide_right' : ''} " font-medium text-2xl w-[34rem]"`}>
                    We have engineers at a variety of price points, dependent on
                    their level of experience. Our most experienced engineers
                    work out to less than £2,000 a month.
                  </p>
                </div>
              </div>
              {/* right section  */}
              <div className={`${ref3visible ? 'slide_right' : ''} "w-[30rem] h-[33rem] z-30  p-12 flex items-center bg-white rounded-3xl bg-transparent"`}>
                <img src={image.glassmorphism1} alt="" />
              <div className="w-[30rem] h-[33rem] z-30  p-12 flex items-center rounded-3xl bg-transparent">
                <Tilt
                  options={defaultOptions}
                  style={{
                    height: 528,
                    width: 480,
                    borderradius: 9999,
                  }}
                >
                  <img
                    src={image.glassmorphism1}
                    alt=""
                    className="w-full h-full"
                  />
                </Tilt>
              </div>
            </div>

            </div>

            {/* second one for this guy  */}
            <div className="flex justify-center items-center h-full w-full gap-7 px-[2%] ">
              {/* left section  */}
              <div className="w-[42.063rem] h-[33rem] block p-12 rounded-3xl bg-transparent">
                <div className="flex flex-col gap-9 justify-center w-full h-full">
                  <h1 className="  font-bold text-[3.25rem]">UK based hire</h1>
                  <p className= {`${ref3visible ? 'slide_right' : ''} font-medium text-2xl w-[21rem] "`}>
                    Lots of time, money and extra fees involved.
                  </p>
                  <button className=" w-48 h-14 bg-black flex justify-center items-center text-white gap-2 rounded-xl font-bold text-base hover:bg-white hover:text-black hover:drop-shadow-2xl">
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
              <div className= {`${ref3visible ? 'slide_inD' : ''} "w-[30rem] h-[33rem] z-30  p-12 flex items-center bg-white rounded-3xl bg-transparent "`}>
                <img src={image.glassmorphism2} alt="" />
              <div className="w-[30rem] h-[33rem] z-30  p-12 flex items-center rounded-3xl bg-transparent">
                <Tilt
                  options={defaultOptions}
                  style={{
                    height: 528,
                    width: 480,
                    borderradius: 9999,
                  }}
                >
                  <img src={image.glassmorphism2} alt="" />
                </Tilt>
              </div>
            </div>
            <div className="h-20"></div>
          </div>

          </div>
          </div>

          {/* sixth page  */}
          <div className="w-full flex flex-col items-center mt-4 gap-[17rem] min-h-[150vh]">
            <h1 className=" w-60 font-bold text-4xl text-center">
              Customer testimonial
            </h1>

            <div className="w-full h-[22.95rem] bg-gradient-to-r from-[#F7F7F8] to-[#9597AA] rounded-r-[2.5rem] mr-7 flex justify-center items-center gap-[50.688rem] relative">
              {/* Previous button  */}
              <button className=" bg-[#1A1B1E] w-[4.318rem] h-[4.318rem] rounded-full flex justify-center items-center ">
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
              <button className=" bg-[#1A1B1E] hover:bg-white text-white hover:text-black hover:border hover:border-black transition delay-150 duration-150 ease-in-out w-[4.318rem] h-[4.318rem] rounded-full flex justify-center items-center">
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
          <div ref={ref4} className={`${ref4visible ? 'spin' : ''} "w-[85%] h-[36.938rem] bg-[#1A1B1E] text-white flex justify-center items-center rounded-[40px] "`}>
            {/* left side  */}
            <div className=" w-[50%] flex flex-col gap-7 pl-24">
              <h1 className=" font-bold text-[2.47rem]">Founding members</h1>
              <p className=" w-[30.25rem] font-normal text-xl">
                Try our services, and if you're not satisfied with our engineers
                within the first 3 days, we'll cover the cost - no questions
                asked.
              </p>
              <button className="w-[16.188rem] h-[3.625rem] flex justify-center items-center bg-white text-black text-base font-bold gap-2 rounded-xl hover:bg-black hover:text-white">
                <span>Apply to become a member</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.63052 12.1387C9.49746 12.1387 9.35331 12.1161 9.19807 12.071C9.04282 12.0259 8.90976 11.9582 8.79887 11.868C8.61036 11.6876 8.52443 11.4948 8.54106 11.2898C8.55769 11.0847 8.68244 10.9002 8.9153 10.7361L14.7369 6.86067H1.08115C0.781752 6.86067 0.526713 6.7848 0.316028 6.63307C0.105343 6.48133 0 6.29473 0 6.07328C0 5.85182 0.105343 5.66523 0.316028 5.51349C0.526713 5.36175 0.781752 5.28588 1.08115 5.28588H14.7369L8.9153 1.41043C8.80442 1.32841 8.71848 1.22999 8.65749 1.11516C8.5965 1.00033 8.56601 0.893703 8.56601 0.795279C8.56601 0.72146 8.58819 0.635339 8.63254 0.536915C8.66581 0.479501 8.72125 0.393379 8.79887 0.278551C8.9652 0.106308 9.20084 0.0140352 9.50578 0.00173283C9.81072 -0.0105705 10.0907 0.0488939 10.3457 0.180126L18.1799 5.45813C18.2132 5.48273 18.2492 5.51759 18.288 5.5627C18.3268 5.60781 18.3684 5.63037 18.4128 5.63037V5.71649C18.4128 5.78211 18.4211 5.82927 18.4377 5.85798C18.4543 5.88668 18.4904 5.90104 18.5458 5.90104V5.98716V6.07328C18.5458 6.13069 18.5375 6.17375 18.5209 6.20246C18.5042 6.23117 18.4682 6.24552 18.4128 6.24552V6.33164C18.4128 6.38085 18.3878 6.42391 18.3379 6.46082C18.288 6.49773 18.2353 6.51619 18.1799 6.51619L10.3457 11.7819C10.124 12.0197 9.88556 12.1387 9.63052 12.1387Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* right side  */}
            <div className="w-[50%]">
              <img
                src={image.grid7thpageiguess}
                alt=""
                className="w-full h-[90%] ml-[5%] mb-[-34%]"
              />
            </div>
          </div>

          {/* 9th page  */}
          <div ref={tilt2Ref} className="w-full flex justify-center items-center relative">
            <div className="w-[80%] h-[80vh] bg-white rounded-3xl z-20 flex justify-center items-center gap-16">
              <div>
                <img src={image.bitmojiguy2} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl text-[#1A1B1E]">
                  “Learn more about me”
                </h1>
                <p className=" font-normal text-lg text-[#66666E] w-[34.5rem]">
                  I'm Ade, a Nigerian working in the tech space in the UK. After
                  using remote developers for my own project, Loma, and spending
                  a lot of time vetting engineers alongside various CTOs in the
                  UK, I was highly impressed by the engineering talent available
                  from across the world. After being asked by various other
                  founders to share this list of engineers, I've decided to open
                  up my vetted talent pool
                </p>
                <p className="font-bold text-lg text-[#1A1B1E] pt-8">Ade</p>
                <p className=" font-medium text-lg text-[#66666E]">
                  CEO & Co-Founder
                </p>
              </div>
            </div>
            <div className="absolute w-[50%] h-[90vh] bg-[#1B1C22] rounded-3xl right-[5%] z-10"></div>
          </div>

          {/* 10th page  */}
          <div className="w-[90%] h-[100vh] bg-[#1A1B1E] rounded-[84px] flex gap-64 text-white justify-center items-center">
            <div className="flex justify-between w-[80%]">
              {/* first rights  */}
              <div className=" flex flex-col gap-[90%]">
                <h1 className=" font-semibold text-xl">Tekalent</h1>
                <p className=" w-[9.7rem]">© 2023. All rights reserved</p>
              </div>

              {/* sencond sec  */}
              <div className="flex flex-col gap-10">
                <h1>Contact us</h1>
                <hr className="h-px my-8 w-80 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                {/* EMAIl  */}
                <div className="flex items-center">
                  <div className="h-full flex items-center gap-3">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.285 15.3481H3.085C2.67434 15.3481 2.27834 15.2711 1.897 15.1171C1.51567 14.9631 1.182 14.7395 0.896005 14.4461C0.610005 14.1528 0.390005 13.8191 0.236005 13.4451C0.0820049 13.0711 0.00500488 12.6788 0.00500488 12.2681V3.46814C0.00500488 3.23348 0.0930049 3.02814 0.269005 2.85214C0.445005 2.67614 0.650338 2.58814 0.885005 2.58814C1.11967 2.58814 1.325 2.67614 1.501 2.85214C1.677 3.02814 1.765 3.23348 1.765 3.46814V12.2681C1.765 12.6495 1.89334 12.9648 2.15 13.2141C2.40667 13.4635 2.71834 13.5881 3.085 13.5881H16.285C16.6517 13.5881 16.9633 13.4635 17.22 13.2141C17.4767 12.9648 17.605 12.6495 17.605 12.2681V3.46814C17.605 3.23348 17.693 3.02814 17.869 2.85214C18.045 2.67614 18.2503 2.58814 18.485 2.58814C18.7197 2.58814 18.925 2.67614 19.101 2.85214C19.277 3.02814 19.365 3.23348 19.365 3.46814V12.2681C19.365 12.6788 19.288 13.0711 19.134 13.4451C18.98 13.8191 18.76 14.1528 18.474 14.4461C18.188 14.7395 17.8543 14.9631 17.473 15.1171C17.0917 15.2711 16.6957 15.3481 16.285 15.3481ZM3.085 0.388144H16.285C16.6957 0.388144 17.088 0.465144 17.462 0.619144C17.836 0.773145 18.1697 0.996811 18.463 1.29014C18.7563 1.58348 18.98 1.91714 19.134 2.29114C19.288 2.66514 19.365 3.05748 19.365 3.46814C19.365 3.61481 19.3283 3.75781 19.255 3.89714C19.1817 4.03648 19.079 4.14281 18.947 4.21614L11.313 8.99014C10.829 9.29814 10.2863 9.45214 9.68501 9.45214C9.08367 9.45214 8.54101 9.29814 8.057 8.99014L0.423005 4.21614C0.291005 4.14281 0.188338 4.03648 0.115005 3.89714C0.0416716 3.75781 0.00500488 3.61481 0.00500488 3.46814C0.00500488 3.05748 0.0820049 2.66514 0.236005 2.29114C0.390005 1.91714 0.613672 1.58348 0.907005 1.29014C1.20034 0.996811 1.534 0.773145 1.908 0.619144C2.282 0.465144 2.67434 0.388144 3.085 0.388144ZM17.539 3.02814C17.451 2.79348 17.2897 2.58814 17.055 2.41214C16.8203 2.23615 16.5637 2.14814 16.285 2.14814H3.085C2.821 2.14814 2.56434 2.22881 2.315 2.39014C2.10967 2.55148 1.94834 2.76414 1.831 3.02814L8.981 7.49414C9.201 7.62614 9.43567 7.69214 9.68501 7.69214C9.93434 7.69214 10.169 7.62614 10.389 7.49414L17.539 3.02814Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      {" "}
                      <p>Email</p>
                      <p>ade@tekalent.com</p>
                    </div>
                  </div>
                </div>

                <hr className="h-px my-8 w-80 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                {/* phone  */}
                <div className="flex items-baseline">
                  <div className="h-full flex items-center gap-3">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.404 20.5479C13.3627 20.5479 12.4313 20.2765 11.61 19.7339L11.566 19.7119C9.46867 18.3039 7.518 16.6979 5.714 14.8939C3.91 13.0899 2.28934 11.1245 0.852005 8.99785L0.830005 8.95385C0.170005 7.91252 -0.0939951 6.79052 0.0380049 5.58785C0.111338 5.00119 0.276338 4.44019 0.533005 3.90485C0.789672 3.36952 1.12334 2.89652 1.534 2.48585L2.15 1.86985C2.37 1.64985 2.623 1.48119 2.909 1.36385C3.195 1.24652 3.492 1.18785 3.8 1.18785C4.43067 1.18785 4.97334 1.41519 5.428 1.86985L7.98 4.42185C8.2 4.64185 8.36867 4.89852 8.486 5.19185C8.60334 5.48518 8.662 5.78218 8.662 6.08285C8.662 6.38352 8.60701 6.67319 8.497 6.95185C8.387 7.23052 8.21467 7.48718 7.98 7.72185C7.87734 7.80985 7.826 7.93818 7.826 8.10685C7.826 8.27552 7.87734 8.41119 7.98 8.51385L12.072 12.5839C12.16 12.7012 12.292 12.7599 12.468 12.7599C12.4973 12.7599 12.556 12.7525 12.644 12.7379L12.688 12.7159L12.864 12.5839C13.0693 12.3785 13.3223 12.2135 13.623 12.0889C13.9237 11.9642 14.217 11.9019 14.503 11.9019C14.789 11.9019 15.0823 11.9642 15.383 12.0889C15.6837 12.2135 15.9367 12.3785 16.142 12.5839L18.694 15.1359C18.914 15.3559 19.0827 15.6125 19.2 15.9059C19.3173 16.1992 19.376 16.4889 19.376 16.7749C19.376 17.0609 19.3173 17.3542 19.2 17.6549C19.0827 17.9555 18.914 18.2085 18.694 18.4139L18.1 19.0299C17.5867 19.5432 17.022 19.9172 16.406 20.1519C15.7753 20.4159 15.108 20.5479 14.404 20.5479ZM12.578 18.2599C13.1353 18.6119 13.744 18.7879 14.404 18.7879C14.8733 18.7879 15.317 18.7035 15.735 18.5349C16.153 18.3662 16.5233 18.1132 16.846 17.7759L17.462 17.1819C17.5647 17.0499 17.616 16.9105 17.616 16.7639C17.616 16.6172 17.5647 16.4925 17.462 16.3899L14.91 13.8379C14.8513 13.7645 14.7817 13.7169 14.701 13.6949C14.6203 13.6729 14.5543 13.6619 14.503 13.6619C14.4517 13.6619 14.3893 13.6729 14.316 13.6949C14.2427 13.7169 14.1693 13.7645 14.096 13.8379C13.8907 14.0432 13.6377 14.2082 13.337 14.3329C13.0363 14.4575 12.743 14.5199 12.457 14.5199C12.171 14.5199 11.874 14.4612 11.566 14.3439C11.3167 14.2265 11.0673 14.0579 10.818 13.8379L6.748 9.74585C6.29334 9.29119 6.066 8.74852 6.066 8.11785C6.066 7.80985 6.12467 7.51285 6.242 7.22685C6.35934 6.94085 6.528 6.68785 6.748 6.46785C6.85067 6.33585 6.902 6.20385 6.902 6.07185C6.902 5.93985 6.85067 5.80785 6.748 5.67585L4.196 3.12385C4.07867 3.00652 3.93934 2.94785 3.778 2.94785C3.61667 2.94785 3.492 3.00652 3.404 3.12385L2.788 3.71785C2.50934 3.99652 2.28567 4.31552 2.117 4.67485C1.94834 5.03419 1.842 5.40452 1.798 5.78585C1.754 6.16718 1.77967 6.54852 1.875 6.92985C1.97034 7.31118 2.12067 7.67052 2.326 8.00785V8.02985C3.69 10.0392 5.23367 11.9055 6.95701 13.6289C8.68034 15.3522 10.5467 16.8959 12.556 18.2599H12.578Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      <p>Phone</p>
                      <p>(414) 687 - 5892</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* third guy  */}
              <div className="flex flex-col gap-12">
                <h1 className=" font-bold text-lg">Become a founding member</h1>
                <div className="flex flex-col gap-32">
                  <button className="w-[16.188rem] h-[3.625rem] flex justify-center items-center bg-white text-black text-base font-bold gap-2 rounded-xl hover:bg-black hover:text-white">
                    <span>Apply to become a member</span>
                    <svg
                      width="19"
                      height="13"
                      viewBox="0 0 19 13"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.63052 12.1387C9.49746 12.1387 9.35331 12.1161 9.19807 12.071C9.04282 12.0259 8.90976 11.9582 8.79887 11.868C8.61036 11.6876 8.52443 11.4948 8.54106 11.2898C8.55769 11.0847 8.68244 10.9002 8.9153 10.7361L14.7369 6.86067H1.08115C0.781752 6.86067 0.526713 6.7848 0.316028 6.63307C0.105343 6.48133 0 6.29473 0 6.07328C0 5.85182 0.105343 5.66523 0.316028 5.51349C0.526713 5.36175 0.781752 5.28588 1.08115 5.28588H14.7369L8.9153 1.41043C8.80442 1.32841 8.71848 1.22999 8.65749 1.11516C8.5965 1.00033 8.56601 0.893703 8.56601 0.795279C8.56601 0.72146 8.58819 0.635339 8.63254 0.536915C8.66581 0.479501 8.72125 0.393379 8.79887 0.278551C8.9652 0.106308 9.20084 0.0140352 9.50578 0.00173283C9.81072 -0.0105705 10.0907 0.0488939 10.3457 0.180126L18.1799 5.45813C18.2132 5.48273 18.2492 5.51759 18.288 5.5627C18.3268 5.60781 18.3684 5.63037 18.4128 5.63037V5.71649C18.4128 5.78211 18.4211 5.82927 18.4377 5.85798C18.4543 5.88668 18.4904 5.90104 18.5458 5.90104V5.98716V6.07328C18.5458 6.13069 18.5375 6.17375 18.5209 6.20246C18.5042 6.23117 18.4682 6.24552 18.4128 6.24552V6.33164C18.4128 6.38085 18.3878 6.42391 18.3379 6.46082C18.288 6.49773 18.2353 6.51619 18.1799 6.51619L10.3457 11.7819C10.124 12.0197 9.88556 12.1387 9.63052 12.1387Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className="flex gap-3">
                    {/* Facebook  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.305115"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          d="M15.6813 23.2466V15.5275H18.4026L18.8101 12.5192H15.6812V10.5985C15.6812 9.72758 15.9352 9.13406 17.2471 9.13406L18.9202 9.13331V6.44275C18.6308 6.40615 17.6376 6.32422 16.4822 6.32422C14.0698 6.32422 12.4182 7.72612 12.4182 10.3007V12.5192H9.68988V15.5275H12.4182V23.2465L15.6813 23.2466Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>

                    {/* twitter  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.936554"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          d="M17.4641 8.69021V8.6875H18.169L18.4264 8.73894C18.5982 8.77233 18.754 8.81609 18.894 8.87022C19.0341 8.92436 19.1696 8.98753 19.3006 9.05971C19.4316 9.13189 19.5505 9.20544 19.6571 9.28033C19.7628 9.35433 19.8577 9.43283 19.9417 9.51584C20.0248 9.59975 20.1545 9.62141 20.3307 9.58081C20.5069 9.5402 20.6966 9.4838 20.8999 9.41162C21.1032 9.33944 21.3043 9.25823 21.5031 9.16799C21.702 9.07775 21.823 9.02046 21.8663 8.9961C21.9088 8.97084 21.9314 8.95731 21.9341 8.95549L21.9368 8.95143L21.9503 8.94467L21.9639 8.9379L21.9775 8.93113L21.991 8.92436L21.9937 8.9203L21.9978 8.9176L22.0019 8.91489L22.0046 8.91083L22.0181 8.90677L22.0317 8.90406L22.029 8.92436L22.0249 8.94467L22.0181 8.96497L22.0113 8.98527L22.0046 8.99881L21.9978 9.01234L21.991 9.03264C21.9865 9.04618 21.982 9.06422 21.9775 9.08678C21.9729 9.10935 21.93 9.19957 21.8488 9.35748C21.7675 9.51539 21.6657 9.67555 21.5437 9.83797C21.4219 10.0004 21.3124 10.1231 21.2158 10.2061C21.1182 10.29 21.0536 10.3487 21.0219 10.3821C20.9903 10.4164 20.9519 10.4479 20.9067 10.4768L20.8389 10.5215L20.8254 10.5282L20.8118 10.535L20.8091 10.5391L20.8052 10.5418L20.801 10.5445L20.7983 10.5485L20.7847 10.5553L20.7712 10.5621L20.7685 10.5661L20.7644 10.5689L20.7603 10.5716L20.7576 10.5756L20.7549 10.5797L20.7509 10.5824L20.7469 10.5851L20.7441 10.5892H20.8118L21.1913 10.5079C21.4444 10.4538 21.6861 10.3884 21.9165 10.3117L22.2824 10.1899L22.3231 10.1763L22.3434 10.1696L22.357 10.1628L22.3705 10.156L22.3841 10.1493L22.3976 10.1425L22.4247 10.1384L22.4518 10.1357V10.1628L22.4451 10.1655L22.4383 10.1696L22.4356 10.1736L22.4316 10.1763L22.4274 10.1791L22.4247 10.1831L22.422 10.1872L22.4179 10.1899L22.4139 10.1926L22.4113 10.1966L22.4085 10.2007L22.4044 10.2034L22.3976 10.217L22.3908 10.2305L22.3868 10.2332C22.385 10.2359 22.3276 10.3126 22.2146 10.4633C22.1017 10.6149 22.0407 10.6916 22.0317 10.6934C22.0226 10.6961 22.01 10.7096 21.9937 10.734C21.9784 10.7592 21.8826 10.8599 21.7064 11.0358C21.5302 11.2118 21.3576 11.3683 21.1886 11.5055C21.0188 11.6436 20.9329 11.8132 20.9311 12.0144C20.9284 12.2147 20.918 12.4412 20.8999 12.6939C20.8819 12.9465 20.848 13.2195 20.7983 13.5127C20.7486 13.806 20.6718 14.1376 20.5679 14.5075C20.464 14.8775 20.3375 15.2384 20.1884 15.5903C20.0393 15.9422 19.8834 16.258 19.7208 16.5378C19.5581 16.8175 19.409 17.0544 19.2735 17.2484C19.138 17.4424 19.0002 17.6251 18.8601 17.7965C18.7201 17.968 18.543 18.1611 18.3288 18.3758C18.1138 18.5897 17.9963 18.707 17.9764 18.7277C17.9557 18.7476 17.8671 18.8216 17.7108 18.9497C17.5554 19.0787 17.3882 19.2077 17.2093 19.3368C17.0313 19.4649 16.8677 19.5718 16.7187 19.6576C16.5696 19.7433 16.3898 19.8412 16.1792 19.9513C15.9696 20.0623 15.7428 20.1651 15.4988 20.2599C15.2549 20.3546 14.9973 20.4426 14.7263 20.5238C14.4552 20.605 14.1932 20.6682 13.9402 20.7133C13.6872 20.7584 13.4003 20.7968 13.0795 20.8283L12.5984 20.8757V20.8825H11.7174V20.8757L11.6022 20.8689C11.5254 20.8644 11.4621 20.8599 11.4124 20.8554C11.3627 20.8509 11.1752 20.8261 10.85 20.781C10.5247 20.7358 10.2694 20.6907 10.0842 20.6456C9.89899 20.6005 9.62339 20.5148 9.25744 20.3884C8.89149 20.2621 8.5784 20.1344 8.31817 20.0054C8.05885 19.8773 7.89621 19.7961 7.83024 19.7618C7.76519 19.7284 7.692 19.6869 7.61068 19.6373L7.48869 19.5628L7.486 19.5588L7.48192 19.5561L7.47785 19.5533L7.47514 19.5493L7.46159 19.5425L7.44803 19.5358L7.44534 19.5317L7.44126 19.529L7.43719 19.5263L7.43448 19.5222L7.43178 19.5182L7.4277 19.5154H7.42093V19.4884L7.43448 19.4911L7.44803 19.4951L7.50902 19.5019C7.54968 19.5064 7.66038 19.5132 7.84109 19.5222C8.02181 19.5312 8.21381 19.5312 8.41712 19.5222C8.62042 19.5132 8.82825 19.4929 9.04058 19.4613C9.25293 19.4297 9.50367 19.3756 9.79281 19.2989C10.082 19.2222 10.3476 19.1311 10.5898 19.0255C10.831 18.919 11.0026 18.8396 11.1048 18.7873C11.206 18.7358 11.3605 18.6402 11.5683 18.5003L11.88 18.2905L11.8827 18.2865L11.8868 18.2838L11.8909 18.2811L11.8936 18.277L11.8963 18.2729L11.9003 18.2702L11.9044 18.2675L11.9071 18.2635L11.9207 18.2594L11.9342 18.2567L11.9369 18.2432L11.941 18.2296L11.9451 18.2269L11.9478 18.2229L11.8394 18.2161C11.7671 18.2116 11.697 18.2071 11.6293 18.2026C11.5615 18.1981 11.4553 18.1778 11.3108 18.1417C11.1662 18.1056 11.0103 18.0514 10.8432 17.9792C10.6761 17.9071 10.5134 17.8213 10.3553 17.7221C10.1972 17.6228 10.0828 17.5402 10.0124 17.4744C9.9428 17.4094 9.85244 17.3174 9.7413 17.1983C9.63107 17.0783 9.53529 16.9551 9.45397 16.8288C9.37264 16.7025 9.29494 16.5567 9.22086 16.3916L9.10835 16.1453L9.10157 16.125L9.0948 16.1047L9.09073 16.0911L9.08802 16.0776L9.10835 16.0803L9.12868 16.0844L9.27777 16.1047C9.37717 16.1182 9.53304 16.1227 9.74537 16.1182C9.95771 16.1137 10.1045 16.1047 10.1859 16.0911C10.2672 16.0776 10.3169 16.0686 10.3349 16.0641L10.3621 16.0573L10.3959 16.0505L10.4298 16.0438L10.4325 16.0397L10.4366 16.037L10.4407 16.0343L10.4434 16.0302L10.4163 16.0234L10.3892 16.0167L10.3621 16.0099L10.3349 16.0031L10.3078 15.9964C10.2898 15.9919 10.2582 15.9828 10.213 15.9693C10.1678 15.9558 10.0458 15.9061 9.84702 15.8204C9.64824 15.7347 9.49011 15.6512 9.37264 15.57C9.25488 15.4886 9.1426 15.3995 9.03652 15.3034C8.9308 15.2059 8.8147 15.0805 8.68819 14.9271C8.56169 14.7737 8.44875 14.5955 8.34935 14.3925C8.24996 14.1895 8.17541 13.9955 8.12571 13.8105C8.07621 13.6266 8.04355 13.4386 8.02814 13.2488L8.00373 12.9646L8.01728 12.9673L8.03084 12.9713L8.04439 12.9781L8.05794 12.9849L8.0715 12.9916L8.08505 12.9984L8.29513 13.0931C8.4352 13.1563 8.60913 13.2105 8.81695 13.2556C9.02478 13.3007 9.14901 13.3255 9.18967 13.33L9.25066 13.3368H9.37264L9.36995 13.3327L9.36587 13.33L9.3618 13.3273L9.35909 13.3232L9.35639 13.3192L9.35231 13.3165L9.34825 13.3138L9.34554 13.3097L9.33198 13.3029L9.31843 13.2962L9.31573 13.2921L9.31165 13.2894L9.30759 13.2867L9.30488 13.2826L9.29132 13.2759L9.27777 13.2691L9.27507 13.265C9.27236 13.2632 9.2335 13.2344 9.1585 13.1784C9.0844 13.1216 9.0067 13.048 8.92538 12.9578C8.84405 12.8676 8.76273 12.7728 8.68141 12.6736C8.59994 12.5741 8.52737 12.4677 8.46455 12.3555C8.40131 12.2427 8.33444 12.0992 8.26396 11.9251C8.19439 11.7518 8.14153 11.5772 8.10538 11.4013C8.06925 11.2253 8.04892 11.0516 8.04439 10.8802C8.03988 10.7087 8.04439 10.5621 8.05794 10.4403C8.0715 10.3185 8.09861 10.1809 8.13927 10.0275C8.17993 9.87407 8.23867 9.71165 8.31546 9.5402L8.43067 9.28304L8.43745 9.26274L8.44422 9.24243L8.4483 9.23973L8.451 9.23567L8.45371 9.23161L8.45778 9.2289L8.46186 9.23161L8.46455 9.23567L8.46726 9.23973L8.47133 9.24243L8.47541 9.24514L8.47811 9.2492L8.48082 9.25326L8.48488 9.25597L8.49166 9.2695L8.49844 9.28304L8.50252 9.28575L8.50521 9.28981L8.68819 9.49283C8.81017 9.62818 8.95475 9.77932 9.1219 9.94625C9.28907 10.1132 9.38169 10.1998 9.39975 10.2061C9.41783 10.2133 9.44041 10.2341 9.46752 10.2684C9.49463 10.3018 9.58499 10.3816 9.73859 10.5079C9.89221 10.6343 10.0932 10.7809 10.3417 10.9479C10.5902 11.1148 10.8658 11.2795 11.1684 11.4419C11.4712 11.6043 11.7964 11.7509 12.1443 11.8818C12.4922 12.0126 12.7362 12.0983 12.8762 12.1389C13.0163 12.1795 13.2557 12.2314 13.5945 12.2946C13.9334 12.3578 14.1887 12.3984 14.3603 12.4164C14.532 12.4344 14.6495 12.4448 14.7127 12.4475L14.8076 12.4502L14.8049 12.4299L14.8008 12.4096L14.7737 12.2404C14.7556 12.1277 14.7466 11.9698 14.7466 11.7667C14.7466 11.5637 14.7624 11.3765 14.794 11.205C14.8257 11.0336 14.8731 10.8599 14.9364 10.6839C14.9996 10.5079 15.0615 10.3667 15.122 10.2603C15.1835 10.1547 15.2639 10.0342 15.3633 9.89888C15.4627 9.76353 15.5915 9.62367 15.7496 9.47929C15.9077 9.33492 16.0884 9.20634 16.2917 9.09355C16.495 8.98076 16.6825 8.89503 16.8542 8.83639C17.0259 8.77774 17.1704 8.73938 17.2879 8.72134C17.4054 8.7033 17.4641 8.69292 17.4641 8.69021Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>

                    {/* Instagram  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.567993"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.15002 14.7849C7.15002 11.8218 7.15002 10.3403 7.85609 9.27316C8.17139 8.79665 8.57948 8.38856 9.05599 8.07326C10.1231 7.36719 11.6046 7.36719 14.5677 7.36719C17.5307 7.36719 19.0123 7.36719 20.0794 8.07326C20.5559 8.38856 20.964 8.79665 21.2793 9.27316C21.9853 10.3403 21.9853 11.8218 21.9853 14.7849C21.9853 17.7479 21.9853 19.2295 21.2793 20.2966C20.964 20.7731 20.5559 21.1812 20.0794 21.4965C19.0123 22.2025 17.5307 22.2025 14.5677 22.2025C11.6046 22.2025 10.1231 22.2025 9.05599 21.4965C8.57948 21.1812 8.17139 20.7731 7.85609 20.2966C7.15002 19.2295 7.15002 17.7479 7.15002 14.7849ZM18.4079 14.7846C18.4079 16.9055 16.6886 18.6248 14.5677 18.6248C12.4468 18.6248 10.7275 16.9055 10.7275 14.7846C10.7275 12.6637 12.4468 10.9444 14.5677 10.9444C16.6886 10.9444 18.4079 12.6637 18.4079 14.7846ZM14.5677 17.3256C15.971 17.3256 17.1087 16.188 17.1087 14.7846C17.1087 13.3813 15.971 12.2437 14.5677 12.2437C13.1644 12.2437 12.0267 13.3813 12.0267 14.7846C12.0267 16.188 13.1644 17.3256 14.5677 17.3256ZM18.5594 11.6538C19.0578 11.6538 19.4618 11.2498 19.4618 10.7514C19.4618 10.2531 19.0578 9.84909 18.5594 9.84909C18.0611 9.84909 17.6571 10.2531 17.6571 10.7514C17.6571 11.2498 18.0611 11.6538 18.5594 11.6538Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>

                    {/* LinkedIn  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.199463"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          d="M6.7522 9.34026C6.7522 8.86261 6.91995 8.46855 7.25543 8.15808C7.59091 7.84761 8.02705 7.69238 8.56381 7.69238C9.09101 7.69238 9.51754 7.84521 9.84344 8.15092C10.1789 8.46617 10.3467 8.87693 10.3467 9.38325C10.3467 9.84179 10.1837 10.2239 9.85782 10.5296C9.52234 10.8449 9.08142 11.0025 8.53506 11.0025H8.52068C7.99349 11.0025 7.56695 10.8449 7.24105 10.5296C6.91515 10.2144 6.7522 9.81791 6.7522 9.34026ZM6.93912 21.8786V12.3065H10.131V21.8786H6.93912ZM11.8995 21.8786H15.0914V16.5337C15.0914 16.1993 15.1297 15.9414 15.2064 15.7599C15.3406 15.4351 15.5443 15.1604 15.8175 14.936C16.0907 14.7115 16.4333 14.5992 16.8455 14.5992C17.919 14.5992 18.4558 15.3205 18.4558 16.763V21.8786H21.6477V16.3904C21.6477 14.9766 21.3122 13.9042 20.6412 13.1734C19.9703 12.4426 19.0836 12.0772 17.9813 12.0772C16.7448 12.0772 15.7815 12.6074 15.0914 13.6678V13.6965H15.077L15.0914 13.6678V12.3065H11.8995C11.9187 12.6122 11.9283 13.5627 11.9283 15.1581C11.9283 16.7534 11.9187 18.9936 11.8995 21.8786Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>

                    {/* Youtube  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.830902"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          d="M15.2339 21.1925L11.5048 21.1228C10.2974 21.0985 9.08702 21.1469 7.90329 20.8953C6.10257 20.5194 5.975 18.6761 5.84151 17.13C5.65757 14.9563 5.72878 12.7432 6.07589 10.5876C6.27184 9.3781 7.04299 8.65639 8.23555 8.57786C12.2613 8.29284 16.3139 8.32662 20.3307 8.45959C20.7549 8.47178 21.1821 8.5384 21.6004 8.61424C23.6653 8.98412 23.7156 11.073 23.8495 12.8314C23.983 14.6079 23.9266 16.3936 23.6715 18.158C23.4668 19.6189 23.0751 20.8441 21.4224 20.9623C19.3516 21.117 17.3283 21.2415 15.2517 21.2018C15.2518 21.1925 15.2399 21.1925 15.2339 21.1925ZM13.0416 17.4938C14.6021 16.5782 16.1328 15.6778 17.6844 14.7684C16.121 13.8527 14.5932 12.9524 13.0416 12.0429V17.4938Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>

                    {/* Whatsapp  */}
                    <a href="">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.462341"
                          y="0.785156"
                          width="28"
                          height="28"
                          rx="6"
                          fill="white"
                        />
                        <path
                          d="M14.616 6.3584C10.0469 6.3584 6.34255 10.0338 6.34255 14.5681C6.34255 16.1191 6.77637 17.5697 7.52976 18.8072L6.03656 23.2117L10.6171 21.7565C11.8024 22.4068 13.1656 22.7777 14.616 22.7777C19.1856 22.7777 22.8898 19.1018 22.8898 14.5681C22.8898 10.0338 19.1856 6.3584 14.616 6.3584ZM18.73 17.6859C18.5354 18.1684 17.6551 18.6088 17.2667 18.629C16.8787 18.6496 16.8676 18.9298 14.7522 18.0108C12.6371 17.0916 11.3646 14.8567 11.2643 14.7128C11.1639 14.5694 10.445 13.5448 10.4837 12.5138C10.5228 11.4825 11.0874 10.996 11.2889 10.7936C11.4902 10.5909 11.721 10.5546 11.8619 10.5523C12.0285 10.5496 12.1364 10.5474 12.2597 10.5519C12.3828 10.5566 12.5678 10.5262 12.728 10.9522C12.8881 11.3782 13.2713 12.4251 13.3204 12.5318C13.3693 12.6386 13.3997 12.7622 13.3242 12.8993C13.2485 13.0368 13.2098 13.1226 13.1 13.241C12.9895 13.3595 12.8677 13.506 12.7692 13.5965C12.6594 13.6968 12.5446 13.8061 12.6601 14.0204C12.7755 14.2346 13.1737 14.9367 13.7804 15.5153C14.56 16.259 15.2324 16.5057 15.4393 16.6181C15.6468 16.7311 15.7706 16.7186 15.8992 16.5832C16.0273 16.4478 16.4499 15.9908 16.5988 15.7868C16.7476 15.5823 16.887 15.6223 17.0781 15.6992C17.2691 15.7764 18.2878 16.322 18.4953 16.4347C18.7026 16.5471 18.8412 16.6051 18.8907 16.6943C18.9402 16.7838 18.9246 17.2033 18.73 17.6859Z"
                          fill="#1A1B1E"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
}


export default App;
