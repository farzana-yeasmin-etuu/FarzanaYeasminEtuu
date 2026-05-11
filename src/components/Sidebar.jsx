import { Link } from "react-scroll";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = ({
  open,
  setOpen,
  themeColor,
  darkMode,
}) => {

  const menu = [
    { name: "Home", icon: <FaHome />, to: "home" },
    { name: "About", icon: <FaUser />, to: "about" },
    { name: "Skills", icon: <FaCode />, to: "skills" },
    { name: "Projects", icon: <FaProjectDiagram />, to: "projects" },
    { name: "Achievements", icon: <FaTrophy />, to: "achievements" },
    { name: "Contact", icon: <FaEnvelope />, to: "contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}

     <div
  className={`hidden md:flex flex-col
  w-72 min-h-screen fixed left-0 top-0
  px-8 py-10 border-r z-40

  ${
    darkMode
      ? "bg-[#111] border-gray-800 text-white"
      : "bg-white border-gray-300 text-black"
  }`}
>
{/* LOGO */}

<div className="mb-16">

  <h1
    className="text-xl font-extrabold tracking-wide"
    style={{ color: themeColor }}
  >
   ℱ𝒶𝓇𝓏𝒶𝓃𝒶 <br />  𝒴ℯ𝒶𝓈𝓂𝒾𝓃 
  </h1>

 
</div>
       
        

        {/* MENU */}

        <ul className="space-y-5">

          {menu.map((item, index) => (

            <li key={index}>

              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                activeClass="active-menu"
                className="group flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2"
              >

                {/* ICON */}

                <span
                  className="text-lg transition-all duration-300"
                  style={{ color: themeColor }}
                >
                  {item.icon}
                </span>

                {/* TEXT */}

                <span
                  className="text-lg font-medium transition-all duration-300 "
                  onMouseEnter={(e) =>
                    (e.target.style.color = themeColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "")
                  }
                >
                  {item.name}
                </span>

              </Link>

            </li>

          ))}

        </ul>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`fixed top-18.25 left-0 w-64 h-full z-50 p-6 transform transition-transform duration-300 md:hidden
        ${
          open ? "translate-x-0" : "-translate-x-full"
        }
        ${
          darkMode
            ? "bg-[#111] text-white"
            : "bg-white text-black"
        }`}
      >

        {/* CLOSE BUTTON */}

        <button
          onClick={() => setOpen(false)}
          className="text-2xl mb-8"
          style={{ color: themeColor }}
        >
          ✕
        </button>

       

        {/* MENU */}

        <ul className="space-y-8">

          {menu.map((item, index) => (

            <li key={index}>

              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-50}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-2"
              >

                {/* ICON */}

                <span
                  className="text-lg transition-all duration-300"
                  style={{ color: themeColor }}
                >
                  {item.icon}
                </span>

                {/* TEXT */}

                <span
                  className="text-lg font-medium transition-all duration-300"
                  onMouseEnter={(e) =>
                    (e.target.style.color = themeColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "")
                  }
                >
                  {item.name}
                </span>

              </Link>

            </li>

          ))}

        </ul>
      </div>
    </>
  );
};

export default Sidebar;