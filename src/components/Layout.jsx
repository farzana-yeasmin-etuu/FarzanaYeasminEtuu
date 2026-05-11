import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white">
      
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar (mobile) */}
        <div className="md:hidden p-4 flex justify-between items-center bg-black">
          <h1 className="text-xl font-bold text-yellow-400 sticky">Farzana <br /> Yeasmin</h1>
          <button onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;