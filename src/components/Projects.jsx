import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Projects = ({ themeColor, darkMode }) => {

  const projects = [

    {
      title: "Art Gallery",
      image: "/projects/artgallery.png",
      description:
        "Modern art gallery website with responsive UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://farzana-yeasmin-etuu.github.io/Art_Gallery_project/",
      code: "https://github.com/farzana-yeasmin-etuu/Art_Gallery_project",
    },

    {
      title: "Solar System Explorer",
      image: "/projects/solar_system.png",
      description:
        "Computer graphics project exploring planets and space.",
      tech: ["OpenGL", "C++", "Graphics"],
      live: "https://www.youtube.com/watch?v=1s5-pqOANuk",
      code: "https://github.com/farzana-yeasmin-etuu/Solar_System_Explorer-Computer_Graphics_Project-",
    },

    {
      title: "Eat & Split App",
      image: "/projects/eat&split.png",
      description:
        "Bill splitting application with interactive calculation.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://farzana-yeasmin-etuu.github.io/Eat-Split_JS_project/",
      code: "https://github.com/farzana-yeasmin-etuu/Eat-Split_JS_project",
    },

    {
      title: "E-Food Service",
      image: "/projects/foodapp.png",
      description:
        "Food ordering service website with responsive layout.",
      tech: ["HTML", "Tailwind", "JavaScript"],
      live: "https://farzana-yeasmin-etuu.github.io/E-Food_Service/",
      code: "https://github.com/farzana-yeasmin-etuu/E-Food_Service",
    },

    {
      title: "Quiz App",
      image: "/projects/quiz_app.png",
      description:
        "Interactive quiz application with dynamic questions.",
      tech: ["React", "JavaScript", "CSS"],
      live: "https://quiizappppp.netlify.app/",
      code: "https://github.com/farzana-yeasmin-etuu/Quiz_App/tree/main/Quiz-App",
    },

    {
      title: "Food App",
      image: "/projects/recipe.png",
      description:
        "Tailwind CSS based modern food delivery UI.",
      tech: ["Tailwind", "JavaScript", "HTML"],
      live: "https://farzana-yeasmin-etuu.github.io/FoodApp_Tailwind-CSS/",
      code: "https://github.com/farzana-yeasmin-etuu/FoodApp_Tailwind-CSS",
    },

    {
      title: "E-School",
      image: "/projects/E-school.png",
      description:
        "Educational landing page with clean responsive design.",
      tech: ["Bootstrap", "HTML", "CSS"],
      live: "https://farzana-yeasmin-etuu.github.io/E-School/",
      code: "https://github.com/farzana-yeasmin-etuu/E-School",
    },

    {
      title: "LaslesVPN",
      image: "/projects/vpn.png",
      description:
        "Modern VPN landing page inspired UI project.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://farzana-yeasmin-etuu.github.io/Landing-page-LaslesVPN/",
      code: "https://github.com/farzana-yeasmin-etuu/Landing-page-LaslesVPN",
    },

  ];

  return (

    <section
      id="projects"
      className={`min-h-screen px-6 md:px-12 lg:px-16 py-20 transition-all duration-300
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* TITLE */}

      <div className="mb-14">

        <h2 className="text-4xl md:text-5xl font-bold">
          Projects
        </h2>

        <div
          className="w-20 h-1 mt-3 rounded-full"
          style={{ backgroundColor: themeColor }}
        ></div>

      </div>

      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
            ${
              darkMode
                ? "bg-[#111] border-gray-800"
                : "bg-white border-gray-300"
            }`}
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover hover:scale-105 transition-all duration-500"
              />

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p
                className={`text-sm leading-7 mb-5
                ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                {project.description}
              </p>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${themeColor}20`,
                      color: themeColor,
                    }}
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full text-center font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: themeColor,
                    color: "white",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaExternalLinkAlt />
                    Live
                  </span>
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full text-center border-2 font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: themeColor,
                    color: themeColor,
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaGithub />
                    Code
                  </span>
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Projects;