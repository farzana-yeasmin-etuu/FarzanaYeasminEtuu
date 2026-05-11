import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiCplusplus,
} from "react-icons/si";

import { TbBrandSocketIo } from "react-icons/tb";

const Skills = ({ themeColor, darkMode }) => {

  const developmentTools = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={55} className="text-orange-500" />,
    },

    {
      name: "CSS3",
      icon: <FaCss3Alt size={55} className="text-blue-500" />,
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss size={55} className="text-cyan-400" />,
    },

    {
      name: "Bootstrap",
      icon: <FaBootstrap size={55} className="text-purple-600" />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript size={55} className="text-yellow-400" />,
    },

    {
      name: "React",
      icon: <FaReact size={55} className="text-cyan-300" />,
    },

    {
      name: "MySQL",
      icon: <SiMysql size={55} className="text-blue-600" />,
    },

    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={55} className="text-blue-300" />,
    },

    {
      name: "Django",
      icon: <SiDjango size={55} className="text-green-900" />,
    },

    {
      name: "Git",
      icon: <FaGitAlt size={55} className="text-orange-600" />,
    },
  ];

  const problemSolving = [
    {
      name: "C++",
      icon: <SiCplusplus size={55} className="text-blue-500" />,
    },

    {
      name: "Python",
      icon: <FaPython size={55} className="text-yellow-400" />,
    },

    {
      name: "Data Structures",
      icon: <TbBrandSocketIo size={55} className="text-pink-500" />,
    },

    {
      name: "Algorithms",
      icon: <TbBrandSocketIo size={55} className="text-green-400" />,
    },
  ];

  const machineLearning = [
    {
      name: "Python",
      icon: <FaPython size={55} className="text-yellow-400" />,
    },

    {
      name: "NumPy",
      icon: <SiNumpy size={55} className="text-blue-400" />,
    },

    {
      name: "Pandas",
      icon: <SiPandas size={55} className="text-indigo-600" />,
    },

    {
      name: "Matplotlib",
      icon: <TbBrandSocketIo size={55} className="text-orange-400" />,
    },

    {
      name: "Seaborn",
      icon: <TbBrandSocketIo size={55} className="text-cyan-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-16"
    >

      {/* TITLE */}
      <div className="mb-16">

        <h1 className="text-4xl md:text-6xl font-bold">
          Skills
        </h1>

        <div
          className="w-16 h-1 mt-4"
          style={{ background: themeColor }}
        ></div>

        <div
          className="w-8 h-1 mt-2"
          style={{ background: themeColor }}
        ></div>

      </div>

      {/* DEVELOPMENT TOOLS */}
      <div className="mb-20">

        <div className="flex items-center gap-4 mb-10">

          <div
            className="w-1 h-10"
            style={{ background: themeColor }}
          ></div>

          <h2 className="text-2xl md:text-4xl font-bold">
            Development Tools
          </h2>

        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {developmentTools.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              
              ${
                darkMode
                  ? "bg-[#1a1a1a] border-gray-800"
                  : "bg-gray-100 border-gray-300"
              }`}
            >

              {skill.icon}

              <h3 className="text-lg font-bold text-center">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>
      </div>

      {/* PROBLEM SOLVING */}
      <div className="mb-20">

        <div className="flex items-center gap-4 mb-10">

          <div
            className="w-1 h-10"
            style={{ background: themeColor }}
          ></div>

          <h2 className="text-2xl md:text-4xl font-bold">
            Problem Solving
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {problemSolving.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              
              ${
                darkMode
                  ? "bg-[#1a1a1a] border-gray-800"
                  : "bg-gray-100 border-gray-300"
              }`}
            >

              {skill.icon}

              <h3 className="text-lg font-bold text-center">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>
      </div>

      {/* MACHINE LEARNING */}
      <div>

        <div className="flex items-center gap-4 mb-10">

          <div
            className="w-1 h-10"
            style={{ background: themeColor }}
          ></div>

          <h2 className="text-2xl md:text-4xl font-bold">
            Machine Learning
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {machineLearning.map((skill, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              
              ${
                darkMode
                  ? "bg-[#1a1a1a] border-gray-800"
                  : "bg-gray-100 border-gray-300"
              }`}
            >

              {skill.icon}

              <h3 className="text-lg font-bold text-center">
                {skill.name}
              </h3>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Skills;