import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa6";
import DP from "../assets/Arabindu.jpg";
import { FaBriefcase } from "react-icons/fa";
import { DiProlog } from "react-icons/di";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="scroll-mt-20">
      <div className="min-height-60vh flex flex-col justify-center bg-linear-to-br bg-pink-200 from to-indigo-100">
        {/* ----------------Hero Section---------------- */}
        <section className="relative overflow-x-hidden pb-16">
          <div className="">
            {/* First */}
            <div className="flex items-center justify-center py-10">
              <div className="bg-white flex items-center justify-center w-72 p-2 rounded-full gap-2 ">
                <DiProlog className="text-2xl text-slate-500" />
                <p className="text-sm text-slate-500">
                  Available for freelance work
                </p>
              </div>
            </div>

            {/* Second */}
            <div className="flex flex-col justify-center text-center pt-5 md:text-xl text-gray-400 text-lg gap-6">
              <div className="flex flex-row items-center justify-center font-semibold ">
                <h1 className="text-4xl font-bold md:text-7xl text-black flex flex-col items-center">
                  <span className="flex flex-wrap justify-center items-center text-center">
                    <span className="pl-3 bg-linear-to-l from-pink-600 via-blue-500 to-red-400 py-3 bg-clip-text text-transparent">
                      <TypeAnimation
                        sequence={[
                          "Hi I'm Arabindu Chakraborty",
                          1500,
                          "Full Stack Developer",
                          1500,
                          "MERN Stack Developer",
                          1500,
                          "React & Node.js Developer",
                          1500,
                        ]}
                        speed={55}
                        deletionSpeed={40}
                        repeat={Infinity}
                        cursor={true}
                        wrapper="span"
                      />
                    </span>
                    <div className="flex justify-center">
                      <img
                        src={DP}
                        alt="My img"
                        className="mt-10 rounded-full border border-yellow-100 shadow-2xl w-1/7  md:w-1/7  my-5
                        hover:scale-105 duration-300 sm:ease-in "
                      />
                    </div>
                  </span>
                </h1>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-700">
                Full Stack / MERN Developer
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto leading-relaxed px-4">
                I build modern and user-friendly web applications that bring
                ideas to life with clean code and creative solutions
              </p>
            </div>

            {/* Third */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col md:flex-row justify-center gap-6 pb-16 py-10">
                <div className="flex ">
                  <Link
                    onClick={() => {
                      const projectSection =
                        document.getElementById("projects");
                      if (projectSection) {
                        projectSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex p-4 justify-center items-center md:w-56 gap-4 rounded-lg shadow-xs shadow-gray-600  hover:shadow-teal-500 font-semibold hover:scale-110 duration-1000 transition-all w-full bg-linear-to-bl bg-pink-300 to-red-300"
                  >
                    <h2>View Projects</h2>
                    <FaArrowRight />
                  </Link>
                </div>

                <div className="flex ">
                  <Link
                    onClick={() => {
                      const projectSection = document.getElementById("contact");
                      if (projectSection) {
                        projectSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="flex p-4 justify-center items-center md:w-64 border font-semibold border-red-300 hover:text-black hover:bg-red-300 hover:font-semibold hover:scale-110 duration-1000 rounded-lg transition-all w-full text-red-300 bg-red-100"
                  >
                    <h2>Hire Me</h2>
                    <FaBriefcase className="ml-2 text-black " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
