import React from "react";
import { Server, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-rose-100 to-rose-300",
    iconColor: "text-primary",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "JavaScript", icon: "💛" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-amber-50 to-amber-200",
    iconColor: "text-secondary-foreground",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "Tools & More",
    icon: Wrench,
    color: "from-sky-500- to-sky-700",
    iconColor: "text-accent-foreground",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎯" },
      { name: "CLOUDINARY", icon: "☁️" },
      { name: "Windows", icon: "🖱️💻" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-20 pb-10">
      <div>
        {/* Heading */}
        <div>
          <div className="flex flex-col justify-center items-center mt-20 mb-20">
            <h1 className="font-bold text-2xl md:text-5xl text-center">
              <span className="text-slate-700">
                My{" "}
                <span className="pl-3 bg-linear-to-l bg-pink-400 to-red-400 bg-clip-text text-transparent">
                  Skills{" "}
                </span>
              </span>
            </h1>
            <p className="text-slate-700 text-lg mt-4 text-center">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </div>
        {/* Boxes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center p-4 md:p-0">
          {skillCategories.map((item) => (
            <div
              key={item.title}
              className=" rounded-3xl p-8 bg-slate-200 shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* box Header */}
              <div className="flex items-center gap-4 ">
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center`}
                >
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold font-display">{item.title}</h3>
              </div>
              {/* skills grid */}
              <div className="grid grid-cols-2 gap-3 ">
                {item.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-red-50 hover:bg-amber-100 transition-colors group-hover:scale-[1.02] cursor-default"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
