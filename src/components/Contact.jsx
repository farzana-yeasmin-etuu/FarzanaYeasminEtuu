// src/components/Contact.jsx

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = ({ themeColor, darkMode }) => {

  const form = useRef();

  // ================= SEND EMAIL =================

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_zii6exd",
        "template_o2sjye4",
        form.current,
        "nxWnHulLjiK2V9mmu"
      )
      .then(
        () => {

          alert("Message Sent Successfully 😍");

          form.current.reset();

        },
        (error) => {

          console.log(error);

          alert("Failed to send message ❌");

        }
      );
  };

  return (

    <section
      id="contact"
      className={`ml-4 py-16 md:py-20 px-5 md:px-10 transition-all duration-300
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* ================= TITLE ================= */}

      <div className="mb-14 ">

        <h1 className="text-4xl md:text-6xl font-bold">
          Get In Touch
        </h1>

        <div
          className="w-20 h-1 mt-4 rounded-full"
          style={{ backgroundColor: themeColor }}
        ></div>

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* ================= LEFT SIDE ================= */}

        <div>

          <h2 className="  text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p
            className={`text-lg leading-8 mb-10
            ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >
            I'm always open to discussing
            freelance projects, collaborations,
            internships, or creative ideas.
            Feel free to contact me anytime!
          </p>

          {/* EMAIL CARD */}

          <div
            className={`flex items-center gap-5 p-5 rounded-2xl border mb-5 transition-all duration-300 hover:scale-[1.02]
            ${
              darkMode
                ? "bg-[#111] border-gray-800"
                : "bg-gray-100 border-gray-300"
            }`}
          >

            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl text-white"
              style={{ backgroundColor: themeColor }}
            >
              <FaEnvelope />
            </div>

            <div>

              <p className="text-sm text-gray-400">
                Email
              </p>

              <a
                href="mailto:farzanayeasmin111201@gmail.com"
                className="text-lg font-semibold break-all"
              >
                farzanayeasmin111201@gmail.com
              </a>

            </div>

          </div>

          {/* WHATSAPP CARD */}

          <a
            href="https://wa.me/8801861500571"
            target="_blank"
            rel="noreferrer"
          >

            <div
              className={`flex items-center gap-5 p-5 rounded-2xl border mb-5 cursor-pointer transition-all duration-300 hover:scale-[1.02]
              ${
                darkMode
                  ? "bg-[#111] border-gray-800"
                  : "bg-gray-100 border-gray-300"
              }`}
            >

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl text-white"
                style={{ backgroundColor: themeColor }}
              >
                <FaWhatsapp />
              </div>

              <div>

                <p className="text-sm text-gray-400">
                  WhatsApp
                </p>

                <h3 className="text-lg font-semibold">
                  Chat on WhatsApp
                </h3>

              </div>

            </div>

          </a>

          {/* LOCATION CARD */}

          <div
            className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02]
            ${
              darkMode
                ? "bg-[#111] border-gray-800"
                : "bg-gray-100 border-gray-300"
            }`}
          >

            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl text-white"
              style={{ backgroundColor: themeColor }}
            >
              <FaMapMarkerAlt />
            </div>

            <div>

              <p className="text-sm text-gray-400">
                Location
              </p>

              <h3 className="text-lg font-semibold">
                Chattogram, Bangladesh
              </h3>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className={`p-6 md:p-8 rounded-3xl border
          ${
            darkMode
              ? "bg-[#111] border-gray-800"
              : "bg-gray-100 border-gray-300"
          }`}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Send Message
          </h2>

          {/* ================= FORM ================= */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            {/* NAME */}

            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className={`w-full px-5 py-4 rounded-xl border outline-none transition-all duration-300
              ${
                darkMode
                  ? "bg-black border-gray-700 text-white placeholder:text-gray-500"
                  : "bg-white border-gray-300 text-black placeholder:text-gray-500"
              }`}
            />

            {/* EMAIL */}

            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className={`w-full px-5 py-4 rounded-xl border outline-none transition-all duration-300
              ${
                darkMode
                  ? "bg-black border-gray-700 text-white placeholder:text-gray-500"
                  : "bg-white border-gray-300 text-black placeholder:text-gray-500"
              }`}
            />

            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className={`w-full px-5 py-4 rounded-xl border outline-none transition-all duration-300
              ${
                darkMode
                  ? "bg-black border-gray-700 text-white placeholder:text-gray-500"
                  : "bg-white border-gray-300 text-black placeholder:text-gray-500"
              }`}
            />

            {/* MESSAGE */}

            <textarea
              rows="6"
              name="message"
              required
              placeholder="Write your message..."
              className={`w-full px-5 py-4 rounded-xl border outline-none resize-none transition-all duration-300
              ${
                darkMode
                  ? "bg-black border-gray-700 text-white placeholder:text-gray-500"
                  : "bg-white border-gray-300 text-black placeholder:text-gray-500"
              }`}
            ></textarea>

            {/* BUTTON */}

            <button
              type="submit"
              className="px-10 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: themeColor }}
            >
              Send Mail
            </button>

          </form>

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <footer
        className={` mt-10 border-t h-1   flex items-center justify-center text-center
        ${
          darkMode
            ? "border-gray-700 text-gray-400 bg-gray-800 "
            : "border-gray-300 text-gray-600 bg-blue-100"
        }`}
      >

        <p className="mt-6 pt-9 text-sm md:text-base">

          © 2026{" "}

          <span
            className="font-semibold"
            style={{ color: themeColor }}
          >
            Farzana Yeasmin
          </span>

          . All rights reserved.

        </p>

      </footer>

    </section>
  );
};

export default Contact;