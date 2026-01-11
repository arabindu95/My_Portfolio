import React from "react";

import { Briefcase, GraduationCap, Award, Rocket, Server } from "lucide-react";

const experiences = [
  {
    year: "2025 – Present",
    title: "Full Stack Developer (MERN)",
    company: "Personal Projects & Freelance Practice",
    description:
      "Building full-stack web applications using React, Node.js, Express, and MongoDB. Focused on clean architecture, JWT authentication, REST APIs, and scalable UI development.",
    icon: Rocket,
    color: "bg-rose-200 text-primary",
  },
  {
    year: "2024",
    title: "Frontend Developer (React)",
    company: "Learning & Portfolio Projects",
    description:
      "Designed and developed responsive user interfaces using React, Tailwind CSS, and React Router with a strong focus on UI/UX and component reusability.",
    icon: Briefcase,
    color: "bg-slate-200 text-secondary-foreground",
  },
  {
    year: "2024",
    title: "Backend Development (Node.js)",
    company: "Learning Phase",
    description:
      "Learned backend fundamentals including Express.js, MongoDB, REST APIs, authentication, and middleware while building real-world practice projects.",
    icon: Server,
    color: "bg-sky-100 text-accent-foreground",
  },
  {
    year: "2023",
    title: "Started Web Development Journey",
    company: "Self-Taught Developer",
    description:
      "Began my web development journey with HTML, CSS, and JavaScript, gradually moving into React and full-stack development through consistent practice.",
    icon: GraduationCap,
    color: "bg-teal-100 text-foreground",
  },
  {
    year: "2019 – 2023",
    title: "Technical Assistant",
    company: "WBSETCL (West Bengal State Electricity Transmission Company)",
    description:
      "Worked in a real-world technical environment, assisting in electrical maintenance operations, following safety protocols, and developing discipline and problem-solving skills.",
    icon: Award,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    year: "2014 – 2017",
    title: "Bachelor’s Degree",
    company: "College / University",
    description:
      "Completed undergraduate studies and built a strong academic foundation that shaped my analytical thinking.",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    year: "2013",
    title: "Higher Secondary Education (HS)",
    company: "West Bengal Council of Higher Secondary Education",
    description:
      "Completed Higher Secondary education with a focus on science and technical subjects.",
    icon: GraduationCap,
    color: "bg-emerald-100 text-emerald-700",
  },
];

const Experience = () => {
  return (
    <section id="experience " className="mb-15">
      <div className="p-4">
        {/* HEADER */}
        <div className="flex flex-col justify-center items-center mt-20 mb-20">
          <h1 className="font-bold text-2xl md:text-5xl text-center">
            <span className="text-slate-700">
              My{" "}
              <span className="pl-3 bg-linear-to-l bg-pink-400 to-red-400 bg-clip-text text-transparent">
                Journy{" "}
              </span>
            </span>
          </h1>
          <p className="text-slate-700 text-lg mt-4">
            The path that led me here
          </p>
        </div>
        {/* MIAN CONTAINER */}
        <div className="max-w-3xl mx-auto">
          <div className="relative ">
            {/* Line */}
            <div className="absolute left-8 mt-15 top-0 bottom-0 w-0.5 bg-linear-to-b from-red-100 via-blue-600 to-yellow-400" />
            {/* Line items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-8 group">
                  <div
                    className={`relative z-10 w-16 h-16 rounded-2xl mt-15 ${exp.color} flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-300`}
                  >
                    <exp.icon className="w-7 h-7" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-violet-50 rounded-3xl p-6 shadow-card border border-slate-100 shadow-lg group-hover:shadow-hover transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-red-200 text-pink-400  font-bold rounded-full">
                        {exp.year}
                      </span>
                      <span className="text-slate-600 text-md font-bold">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2 text-teal-700">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
