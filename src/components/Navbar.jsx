import { useState } from "react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="blog logo" w={32} h={32} />
        <span>Lama logo</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE MENU BUTTON */}
        <div className="text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {" "}
          {open ? "✖" : "☰"}
        </div>
        <div
          className={`w-full h-screen flex flex-col gap-8 items-center justify-center absolute top-16
          ${open ? "-right-0" : "-right-[100%]"}
          transition-all ease-in-out
          font-medium text-lg`}
        >
          <a href="">Home</a>
          <a href="">Trending</a>
          <a href="">Most Popular</a>
          <a href="">About</a>
          <a href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </a>
        </div>
      </div>

      {/* MOBILE LINKS LIST */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login👋
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
