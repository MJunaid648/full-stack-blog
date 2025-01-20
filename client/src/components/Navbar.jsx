import { useEffect, useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then(
      (token) => {
        console.log(token);
      },
      [getToken]
    );
  });

  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="blog logo" w={32} h={32} />
        <span>Lama logo</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE MENU BUTTON */}
        <div className="text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {" "}
          {open ? "✖" : "☰"}
        </div>
        <div
          className={`bg-[#e6e6ff] w-full h-screen flex flex-col gap-8 items-center justify-center absolute top-16
          ${open ? "-right-0" : "-right-[100%]"}
          transition-all ease-in-out
          font-medium text-lg`}
        >
          <Link to="">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE LINKS LIST */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
