import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Hero = ({ themeColor, darkMode }) => {

  return (

    <section
      id="home"
      className="min-h-screen pt-24 md:pt-0 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 gap-12"
    >

      {/* ================= LEFT ================= */}

      <div className="max-w-2xl text-center md:text-left">

        {/* NAME */}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">

          Hello, My name is{" "}

          <span style={{ color: themeColor }}>
            Farzana Yeasmin
          </span>

        </h2>

        {/* TYPING TEXT */}

        <div className="min-h-25 md:min-h-35">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

            I'm into{" "}

            <span style={{ color: themeColor }}>

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,

                  "Frontend Developer",
                  1500,

                  "React Developer",
                  1500,

                  "AI Enthusiast",
                  1500,

                  "Freelancer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </span>

          </h1>

        </div>

        {/* ================= SOCIAL ICONS ================= */}

        <div className="flex gap-4 justify-center md:justify-start mb-8">

          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/farzana-yeasminn"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
            style={{
              borderColor: themeColor,
              color: themeColor,
            }}
          >
            <FaLinkedin />
          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/farzana-yeasmin-etuu"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
            style={{
              borderColor: themeColor,
              color: themeColor,
            }}
          >
            <FaGithub />
          </a>

          {/* FACEBOOK */}

          <a
            href="https://www.facebook.com/far.zana.yeasmin28"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
            style={{
              borderColor: themeColor,
              color: themeColor,
            }}
          >
            <FaFacebook />
          </a>

          {/* YOUTUBE */}

          <a
            href="https://www.youtube.com/@Itss___Lilyyy345"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full border flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
            style={{
              borderColor: themeColor,
              color: themeColor,
            }}
          >
            <FaYoutube />
          </a>

        </div>

        {/* ================= BUTTONS ================= */}

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">

          {/* HIRE ME */}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
          >

            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: themeColor,
                color: "white",
              }}
            >
              Hire Me
            </button>

          </Link>

          {/* DOWNLOAD CV */}

          <a
            href="/Farzana_Yeasmin_Resume.pdf"
            download
          >

            <button
              className="px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                borderColor: themeColor,
                color: themeColor,
              }}
            >
              Download CV
            </button>

          </a>

        </div>

      </div>

      {/* ================= IMAGE ================= */}

      <div className="relative flex justify-center">

        {/* TOP BORDER */}

        <div
          className="absolute -top-5 -left-5 w-20 h-20 border-t-8 border-l-8"
          style={{ borderColor: themeColor }}
        ></div>

        {/* IMAGE */}

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-64 sm:w-72 md:w-105 object-cover rounded-2xl"
        />

        {/* BOTTOM BORDER */}

        <div
          className="absolute -bottom-5 -right-5 w-20 h-20 border-b-8 border-r-8"
          style={{ borderColor: themeColor }}
        ></div>

      </div>

    </section>
  );
};

export default Hero;