import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const BackgroundEffects = ({ themeColor }) => {
  const icons = [
    { icon: FaHtml5, top: "10%", left: "8%" },
    { icon: FaReact, top: "20%", left: "82%" },
    { icon: SiJavascript, top: "42%", left: "6%" },
    { icon: SiCplusplus, top: "65%", left: "88%" },
    { icon: FaPython, top: "78%", left: "12%" },
    { icon: FaCss3Alt, top: "88%", left: "55%" },
    { icon: FaNodeJs, top: "32%", left: "92%" },
    { icon: FaGitAlt, top: "58%", left: "18%" },
    { icon: FaGithub, top: "72%", left: "78%" },
    { icon: SiTailwindcss, top: "15%", left: "48%" },
    { icon: FaCode, top: "52%", left: "48%" },
   
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* Soft Background Glow */}
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-0"
        style={{
          backgroundColor: themeColor,
          top: "20%",
          left: "35%",
        }}
      />

      {/* Floating Tech Icons */}
      {icons.map((item, index) => {
        const Icon = item.icon;

        return (
          <Icon
            key={index}
            className="absolute text-2xl md:text-3xl animate-floating"
            style={{
              top: item.top,
              left: item.left,
              color: themeColor,
              opacity: 0.45,
              animationDelay: `${index * 0.8}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundEffects;