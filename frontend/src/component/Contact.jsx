import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, Heart } from "lucide-react";
import toast from "react-hot-toast";
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/arabindu95",
    color: "hover:bg-amber-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/arabindu-chakraborty-90b341324/",
    color: "hover:bg-sky-200",
  },
  { name: "Twitter", icon: Twitter, url: "#", color: "hover:bg-teal-200" },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:arabinduchakraborty.921@gmail.com",
    color: "hover:bg-rose-200",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! 💌\nI'll get back to you soon!");

    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="scroll-mt-20 bg-indigo-50 py-6">
      <div>
        <div className="flex flex-col justify-center items-center mt-20 mb-20">
          <h1 className="font-bold text-2xl md:text-5xl text-center">
            <span className="text-slate-700">
              Let's{" "}
              <span className="pl-3 bg-linear-to-l bg-pink-400 to-red-400 bg-clip-text text-transparent">
                Connect{" "}
              </span>
            </span>
          </h1>
          <p className="text-slate-700 text-lg mt-4 text-center">
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>
        {/* BOXEX */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* contact info */}
          <div className="bg-card rounded-3xl p-8 bg-rose-50 border border-slate-200">
            <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
              <span className="text-2xl">💌</span> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-2xl bg-slate-200 border-border h-12 px-4 w-full focus:outline-none focus:ring-2 focus:ring-slate-300 "
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-2xl bg-slate-200 border-border h-12 px-4 w-full focus:outline-none focus:ring-2 focus:ring-slate-300 "
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-2xl bg-slate-200 h-40 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-300 "
                  required
                />
              </div>
              <div className="flex gap-3 items-center justify-center font-bold">
                <button className="flex w-full group bg-linear-to-r bg-violet-300 from-pink-300 p-4 rounded-2xl items-center justify-center gap-2 hover:scale-105 duration-500">
                  Send Message
                  <Send className=" w-5 h-5 " />
                </button>
              </div>
            </form>
          </div>
          {/* social */}
          <div className="space-y-8">
            <div className="rounded-3xl p-8 bg-rose-50 border border-slate-200">
              <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                <span className="text-2xl">🌐</span> Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`flex items-center gap-3 p-4 rounded-2xl bg-slate-200 ${social.color} transition-all duration-300 hover:scale-105 group`}
                  >
                    <social.icon className="w-6 h-6 group-hover:text-slate-400 transition-colors" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-br from-rose-100 via-lavender-100 to-sky-100 rounded-3xl p-8 shadow-card">
              <div className="text-center">
                <div className="text-5xl mb-4">☕</div>
                <h3 className="text-xl font-bold font-display mb-2">
                  Let's grab a virtual coffee!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Always open to discussing new projects, creative ideas, or
                  opportunities.
                </p>
                <div className="flex items-center justify-center gap-2 text-pink-500 font-bold">
                  <Heart className="w-4 h-4 animate-pulse" />
                  <span>Looking forward to connecting!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
