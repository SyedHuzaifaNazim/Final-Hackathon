import { useState, useEffect } from "react";

export default function App() {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.pageYOffset <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section>
      <div
        className={`fixed z-50 w-full px-8 py-4 transition-all duration-1000 rounded-full mt-4 max-w-2xl inset-x-0 mx-auto ease-in-out transform ${
          atTop
            ? "max-w-2xl"
            : "bg-black bg-opacity-90 backdrop-blur-xl max-w-4xl"
        }`}
      >
        <div className="flex flex-col w-full p-2 mx-auto md:items-center md:justify-between md:flex-row">
          <div className="flex flex-row items-center justify-between">
            <span
              className={`font-bold tracking-tighter text-black uppercase ${
                atTop ? "text-black" : "text-white"
              }`}
            >
              MICROFINANCE
            </span>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* SVG for burger menu can go here */}
            </button>
          </div>

          <nav
            className={`flex-col flex-grow gap-8 hidden pb-4 md:pb-0 md:flex md:flex-row lg:ml-auto justify-end ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
            <a
              href="#_"
              className={`$text-black ${atTop ? "text-black" : "text-white"}`}
            >
              About
            </a>
            <a
              href="#_"
              className={`$text-black ${atTop ? "text-black" : "text-white"}`}
            >
              Work
            </a>
            <a
              href="#_"
              className={`$text-black ${atTop ? "text-black" : "text-white"}`}
            >
              Blog
            </a>
          </nav>
        </div>
      </div>

{/* 
      <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
        <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex w-0 flex-1 items-center p-4">
            <div className="w-full">
              <p className="text-sm font-medium text-neutral-900">Tutorial</p>
              <p className="mt-1 text-sm text-neutral-500">
                How to create an adaptable navigation with Astro, Tailwind CSS, and Alpine.js
              </p>
              <p className="mt-2 text-xs text-orange-500 underline">
                <a href="https://lexingtonthemes.com">by © Lexington Themes</a>
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col divide-y divide-neutral-200">
              <div className="flex h-0 flex-1">
                <a
                  href="https://lexingtonthemes.com/tutorials/how-to-create-an-animated-navigation-with-alpine-js"
                  type="button"
                  className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Tutorial
                </a>
              </div>
              <div className="flex h-0 flex-1">
                <a
                  href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/adaptable-navigation/index.astro"
                  className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Get the code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
    </>
  );
}
