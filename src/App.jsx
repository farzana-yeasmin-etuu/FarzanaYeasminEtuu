import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import ThemeSwitcher from "./components/ThemeSwitcher";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {

  const [open, setOpen] = useState(false);

  // Theme Color
  const [themeColor, setThemeColor] = useState("#ffb400");

  // Dark Mode
  const [darkMode, setDarkMode] = useState(true);
  

  

  return (
     

    
    

    <div
      className={`min-h-screen transition-all duration-300
      ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Navbar */}
      <Navbar
        setOpen={setOpen}
        themeColor={themeColor}
        darkMode={darkMode}
      />

      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        themeColor={themeColor}
        darkMode={darkMode}
      />

      {/* Main Content */}
      <div className="md:ml-64 pt-24">

        {/* Theme Switcher */}
        <ThemeSwitcher
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Hero */}
        <Hero
          themeColor={themeColor}
          darkMode={darkMode}
        />

        {/* About */}
        <About
          themeColor={themeColor}
          darkMode={darkMode}
        />

        {/* Skills */}
        <Skills
          themeColor={themeColor}
          darkMode={darkMode}
        />

        {/* Projects */}
        <Projects
          themeColor={themeColor}
          darkMode={darkMode}
        />

        {/* Achievements */}
        <Achievements
  themeColor={themeColor}
  darkMode={darkMode}
/>   


        {/* Contact */}

        <Contact
  themeColor={themeColor}
  darkMode={darkMode}
/>
        

      </div>

    </div> 

  );
}

export default App;