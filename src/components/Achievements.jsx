// src/components/Achievements.jsx

import {
  FaExternalLinkAlt,
} from "react-icons/fa";

const Achievements = ({ themeColor, darkMode }) => {

  const certificates = [

    {
      title: "ICPC Preparation Bootcamp in C++",
      organization: "Shohoj Coding",
      image: "/certificates/icpc.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

    {
      title: "Dev & DevOps",
      organization: "Professional Training",
      image: "/certificates/devops.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

    {
      title: "App Development Crash Course",
      organization: "Crash Course Program",
      image: "/certificates/appdev.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

    {
      title: "Kickstart Your Programming Journey",
      organization: "Programming Learning Program",
      image: "/certificates/programming.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

    {
      title: "21 Days of Coding",
      organization: "Coding Challenge",
      image: "/certificates/coding.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

    {
      title: "Digital Marketing",
      organization: "Leading Light IT",
      image: "/certificates/digitalmarketing.jpg",
      link: "https://drive.google.com/drive/folders/1p35soJ_BKoul5_4ZnCOnlgL7k_ZU8FjI",
    },

  ];

  return (

    <section
      id="achievements"
      className={`min-h-screen px-6 md:px-12 lg:px-16 py-20 transition-all duration-300

      ${
        darkMode
          ? "bg-black text-white"
          : "bg-[#f5f5f5] text-black"
      }`}
    >

      {/* TITLE */}

      <div className="mb-16">

        <h1 className="text-4xl md:text-5xl font-bold">
          Achievements
        </h1>

        <div
          className="w-20 h-1 mt-3 rounded-full"
          style={{ backgroundColor: themeColor }}
        ></div>

      </div>

      {/* CERTIFICATE GRID */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
      >

        {certificates.map((item, index) => (

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
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover hover:scale-105 transition-all duration-500"
              />

            </div>

            {/* CONTENT */}

            <div className="p-6">

              {/* TITLE */}

              <h2 className="text-2xl font-bold mb-3 leading-snug">

                {item.title}

              </h2>

              {/* ORGANIZATION */}

              <p
                className={`text-base leading-7 mb-6

                ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >

                {item.organization}

              </p>

              {/* BUTTON */}

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: themeColor,
                  color: "white",
                }}
              >

                <FaExternalLinkAlt />

                View Certificate

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Achievements;