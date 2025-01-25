import React, { useState } from "react";

const BappaFlourMill = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
        <div className="text-xl">Bappa Flour Mill</div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <img
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
                alt="Close Menu"
              />
            ) : (
              <img
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
                alt="Open Menu"
              />
            )}
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0`}
        >
          {["Home", "Services", "About Us", "Gallery", "Visit Us"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                className="block md:inline-block hover:text-blue-500 px-3 py-3"
              >
                {link}
              </a>
            )
          )}
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full text-end md:flex md:w-auto px-2 py-2 md:rounded`}
        >
          <a href="tel:+123">
            <div className="flex justify-end">
              <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call now
              </div>
            </div>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75LjTFN1ceqAx_6lEuWI7otvXrhxk8CHbAQ&s"
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-gray-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              One stop solution for flour grinding services
            </p>
            <a
              href="#contactus"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div> */}

      {/* Services Section */}
      <section className="py-10" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Flour Grinding</h3>
              <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75LjTFN1ceqAx_6lEuWI7otvXrhxk8CHbAQ&s"
            alt="Background"
            className="object-cover object-center w-full h-full"
          />
              <p>High-quality grinding services for all types of grains.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Orders</h3>
              <p>Personalized grinding solutions to meet your needs.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Packaging</h3>
              <p>Clean and efficient packaging for your products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-10 bg-[#f8f8f8]" id="aboutus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Bappa Flour Mill has been serving the community for over a decade,
            providing top-notch flour grinding services with a focus on quality
            and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Item"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Item"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Item"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Item"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Additional sections */}
    </div>
  );
};

export default BappaFlourMill;
