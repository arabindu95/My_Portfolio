import React from "react";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="scroll-mt-20">
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="font-bold text-2xl md:text-5xl text-center">
          <span className="text-slate-700">
            About{" "}
            <span className="pl-3 bg-linear-to-l bg-pink-400 to-red-400 bg-clip-text text-transparent">
              Me{" "}
            </span>
          </span>
        </h1>
        <p className="text-slate-700 text-lg mt-4">
          Get to know the person behind the code
        </p>
      </div>
      {/* *******BOXEX********* */}
      <div>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="relative flex justify-center items-center py-20 w-full overflow-x-hidden ">
            {/* Background div 1 */}
            <div
              className="absolute w-[90%] max-w-[440px] h-auto md:h-110
 h-110 bg-pink-100 rounded-2xl -rotate-6"
            ></div>

            {/* Background div 2 */}
            <div
              className="absolute w-[90%] max-w-[440px] h-auto md:h-110
 h-110 bg-purple-100 rounded-2xl rotate-6"
            ></div>

            {/* Main div */}
            <div
              className="flex relative z-10 w-[90%] max-w-[440px] h-auto md:h-110
 h-110 bg-white rounded-2xl flex-col items-center justify-center "
            >
              {/* img div */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br bg-purple-300 from-pink-300 flex items-center justify-center text-6xl">
                👩‍💻
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Arabindu Chakraborty</h1>
                <p className="text-xl text-teal-600">Full Stack Developer</p>
              </div>
              <div className="flex gap-6 mt-8 px-4 md:px-0">
                <div className="h-20 w-28 bg-blue-50 rounded-xl flex flex-col items-center justify-center">
                  <h1 className="text-pink-400 text-2xl font-bold">19+</h1>
                  <h2 className="text-[13px] text-slate-500">Months Exp</h2>
                </div>
                <div className="h-20 w-28 bg-green-50 rounded-xl flex flex-col items-center justify-center">
                  <h1 className=" text-2xl font-bold">15+</h1>
                  <h2 className="text-[13px] text-slate-500">Projects</h2>
                </div>
                <div className="h-20 w-28 bg-red-50 rounded-xl flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold">15+</h1>
                  <h2 className="text-[13px] text-slate-500">Clients</h2>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd box */}
          <div className=" flex flex-col gap-6 px-4 md:px-0">
            <div className="h-auto w-full md:w-110 bg-green-100 p-4 rounded-4xl border border-green-200 shadow-lg hover:scale-105 duration-500 transition-all">
              <h1 className="text-xl font-semibold mt-6">💖 Hello there</h1>
              <p className="py-4">
                I'm a passionate full-stack developer with a love for creating
                beautiful, user-friendly web applications. When I'm not coding,
                you'll find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee ☕
              </p>
            </div>
            <div className="h-auto w-full md:w-110 bg-yellow-50 p-4 rounded-4xl shadow-2xl">
              <h1 className="text-xl font-semibold mt-6">
                🛠️ Technologies I Love
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 cursor-pointer">
                <div className="flex bg-red-200  h-8 w-24 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  <h1>⚛️ React</h1>
                </div>
                <div className="flex bg-red-200  h-8 w-26 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  <h1>🟢 Node.js</h1>
                </div>
                <div className="flex bg-red-200  h-8 w-30 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  <h1>🍃 MongoDB</h1>
                </div>
                <div className="flex bg-red-200  h-8 w-24 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  <h1>⚡ Express</h1>
                </div>
                <div className="flex bg-red-200  h-8 w-24 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  💙 HTML
                </div>
                <div className="flex bg-red-200  h-8 w-26 items-center justify-center rounded-2xl hover:scale-105 duration-200">
                  <h1>🎨 Tailwind</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
