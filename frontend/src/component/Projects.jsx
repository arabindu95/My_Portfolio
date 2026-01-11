import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SmartShop",
    description:
      "A full-featured e-commerce platform with cart, address, login and admin dashboard.",
    image: "🛒",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "vercel",
      "Netlify",
      "Cloudinary",
    ],
    color: "bg-rose-100",
    liveUrl: "https://smartshopfrontend-two.vercel.app/",
    githubUrl: "https://github.com/arabindu95/SmartShop_API",
  },
  {
    title: "Authentication",
    description:
      "Real-time chat application with rooms, emojis, and file sharing.",
    image: "🛂",
    tags: ["React", "Tailwind", "Nodejs", "Express", "MongoDB"],
    color: "bg-zinc-200",
    liveUrl: "#",
    githubUrl: "https://github.com/arabindu95/Login-ProtectedRoute",
  },
  {
    title: "DailyBusket",
    description:
      "A full-featured e-commerce platform with cart, payments, and admin dashboard",
    image: "🛒",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "vercel",
      "Netlify",
      "Cloudinary",
    ],
    color: "bg-violet-100",
    liveUrl: "https://visionary-florentine-e4ed9a.netlify.app/",
    githubUrl: "https://github.com/arabindu95/E-Comerce_Web",
  },
  {
    title: "WeatherNow",
    description:
      "It is a Weather application which shows temperatures of various cities across the globe ...",
    image: "🌤️",
    tags: ["HTML", "CSS", "javascript", "OpenWeather API"],
    color: "bg-cyan-100",
    liveUrl: "#",
    githubUrl: "https://github.com/arabindu95/Weather_App",
  },
  {
    title: "Clock",
    description:
      "Modern blogging platform with markdown support and SEO optimization.",
    image: "🕒",
    tags: ["HTML", "CSS", "javascript"],
    color: "bg-fuchsia-200",
    liveUrl: "file:///H:/WEB%20-%20DEVELOPEMENT/Watch/watch/index.html",
    githubUrl: "https://github.com/arabindu95/Clock_App",
  },
  {
    title: "Calculator",
    description: "Calculator Application built with HTML, Css and JavaScript",
    image: "🧮",
    tags: ["HTML", "CSS", "javascript"],
    color: "bg-lime-50",
    liveUrl: "file:///H:/WEB%20-%20DEVELOPEMENT/calculator%20project/index.htm",
    githubUrl: "https://github.com/arabindu95/Calculator_App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" ">
      <div className="bg-zinc-100">
        {/* heading */}
        <div className="flex flex-col justify-center items-center mt-30 mb-20 pt-20">
          <h1 className="font-bold text-2xl md:text-5xl text-center">
            <span className="text-slate-700">
              Fetaured{" "}
              <span className="pl-3 bg-linear-to-l bg-pink-400 to-red-400 bg-clip-text text-transparent">
                Projects{" "}
              </span>
            </span>
          </h1>
          <p className="text-slate-700 text-lg mt-4">
            A collection of projects I've built with love and dedication
          </p>
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
          {projects.map((item) => (
            <div
              key={item.title}
              className="group bg-card rounded-3xl overflow-hidden shadow-card border border-cyan-100 hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div
                className={`${item.color} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </span>
                {/* Decorative shapes */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-card/20 rounded-full blur-sm" />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-card/20 rounded-full blur-sm" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4 line-clamp-2 ">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-8">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-rose-100 rounded-full text-xs font-medium text-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 items-center justify-center ">
                  <a
                    href={item.liveUrl}
                    className="flex flex-1 hover:bg-rose-400 hover:text-black bg-rose-200 border border-rose-300 p-1 rounded-xl items-center justify-center text-rose-400 font-semibold gap-2 duration-500 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={item.githubUrl}
                    className="flex flex-1 hover:bg-rose-400 hover:text-black items-center border border-rose-300 p-1 rounded-xl justify-center text-rose-400 font-semibold gap-2 duration-500 cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
