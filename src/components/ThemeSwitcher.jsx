import { useState } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = ({
  themeColor,
  setThemeColor,
  darkMode,
  setDarkMode,
}) => {
  const [showColors, setShowColors] = useState(false);

  const colors = [
    "#ff4d4d",
    "#1e90ff",
    "#32cd32",
    "#ffb400",
    "#ff1493",
    "#8a2be2",
  ];

  return (
    <div className="fixed right-4 top-24 z-50 flex flex-col gap-3">

      {/* COLOR BUTTON */}
      <div className="flex items-start">

        {showColors && (
          <div
            className={`p-4 rounded-lg mr-2 shadow-lg ${
              darkMode ? "bg-[#222]" : "bg-gray-200"
            }`}
          >
            <h3 className="font-bold mb-3 text-sm">
              THEME COLORS
            </h3>

            <div className="flex gap-3">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setThemeColor(color)}
                  className="w-8 h-8 rounded-full"
                  style={{ background: color }}
                ></button>
              ))}
            </div>
          </div>
        )}
      <div className="  ">
        <button
          onClick={() => setShowColors(!showColors)}
          className="w-12 h-12 flex items-center justify-center bg-gray-700 text-white rounded"
        >
          <FaCog />
        </button>
        {/* DARK LIGHT BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-12 h-12  mt-2 flex  items-center justify-center bg-gray-700 text-white rounded"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button></div>
      </div>

      
    </div>
  );
};

export default ThemeSwitcher;