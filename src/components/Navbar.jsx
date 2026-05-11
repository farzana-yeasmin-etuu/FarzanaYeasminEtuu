import { FaBars } from "react-icons/fa";

const Navbar = ({
  setOpen,
  themeColor,
  darkMode,
}) => {
  return (

    <div
      className={`md:hidden fixed top-0 left-0 w-full z-50
      flex items-center justify-between
      px-6 py-4
      backdrop-blur-xl border-b

      ${
        darkMode
          ? "bg-black/40 border-white/10"
          : "bg-white/40 border-black/10"
      }`}
    >

      {/* LOGO */}

      <h1
        className="text-2xl italic font-serif"
        style={{ color: themeColor }}
      >
        𝓕𝓪𝓻𝔃𝓪𝓷𝓪
      </h1>

      {/* BURGER MENU */}

      <button
        onClick={() => setOpen(true)}
        className="text-2xl"
        style={{ color: themeColor }}
      >
        <FaBars />
      </button>

    </div>
  );
};

export default Navbar;