const About = ({ themeColor, darkMode }) => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-20 py-16 transition-all duration-300"
    >
      {/* TITLE */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          About Me
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

      {/* INTRO */}
      <div className="max-w-5xl">

        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          I'm{" "}
          <span style={{ color: themeColor }}>
            Farzana Yeasmin
          </span>
        </h2>

        <h3
          className="text-xl md:text-2xl font-semibold mb-8"
          style={{ color: themeColor }}
        >
          Aspiring Software Engineer
        </h3>

        <p
          className={`text-lg leading-10 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I'm a CSE student passionate about software engineering,
          web development, and problem solving. I enjoy building
          modern responsive applications using React, Tailwind CSS,
          and JavaScript. Alongside my studies, I continuously learn
          new technologies and work on creative projects to improve
          my skills.
        </p>
      </div>

      {/* EDUCATION + EXPERIENCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

        {/* EDUCATION */}
        <div>

          <h2 className="text-3xl font-bold mb-10">
            Education
          </h2>

          <div
            className={`rounded-2xl p-8 border relative overflow-hidden
            ${
              darkMode
                ? "bg-[#1a1a1a] border-gray-800"
                : "bg-gray-100 border-gray-300"
            }`}
          >

            {/* LINE */}
            <div
              className="absolute left-10 top-10 bottom-10 w-0.5"
              style={{ background: themeColor }}
            ></div>

            {/* ITEM 1 */}
            <div className="relative pl-16 mb-14">

              <div
                className="absolute left-7.5 top-2 w-5 h-5 rounded-full"
                style={{ background: themeColor }}
              ></div>

              <p
                className="mb-2 font-medium"
                style={{ color: themeColor }}
              >
                2022 - Present
              </p>

              <h3 className="text-2xl font-bold mb-3">
                B.Sc. in Computer Science & Engineering
              </h3>

              <p
                className={`leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Currently pursuing undergraduate studies in CSE,
                focusing on software engineering, web development,
                and competitive programming.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="relative pl-16">

              <div
                className="absolute left-7.5 top-2 w-5 h-5 rounded-full"
                style={{ background: themeColor }}
              ></div>

              <p
                className="mb-2 font-medium"
                style={{ color: themeColor }}
              >
                2018 - 2020
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Higher Secondary Certificate (HSC)
              </h3>

              <p
                className={`leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Completed HSC in Science background with a strong
                foundation in mathematics, ICT, and logical thinking.
              </p>
            </div>

          </div>
        </div>

        {/* EXPERIENCE */}
        <div>

          <h2 className="text-3xl font-bold mb-10">
            Experience
          </h2>

          <div
            className={`rounded-2xl p-8 border relative overflow-hidden
            ${
              darkMode
                ? "bg-[#1a1a1a] border-gray-800"
                : "bg-gray-100 border-gray-300"
            }`}
          >

            {/* LINE */}
            <div
              className="absolute left-10 top-10 bottom-10 w-0.5"
              style={{ background: themeColor }}
            ></div>

            {/* ITEM 1 */}
            <div className="relative pl-16 mb-14">

              <div
                className="absolute left-7.5 top-2 w-5 h-5 rounded-full"
                style={{ background: themeColor }}
              ></div>

              <p
                className="mb-2 font-medium"
                style={{ color: themeColor }}
              >
                2025 - Present
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Frontend Developer
              </h3>

              <p
                className={`leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Building responsive and modern user interfaces using
                React, Tailwind CSS, and JavaScript.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="relative pl-16">

              <div
                className="absolute left-7.5 top-2 w-5 h-5 rounded-full"
                style={{ background: themeColor }}
              ></div>

              <p
                className="mb-2 font-medium"
                style={{ color: themeColor }}
              >
                2024 - Present
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Content Creator
              </h3>

              <p
                className={`leading-8 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sharing programming and web development learning
                content through social media and online platforms.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;