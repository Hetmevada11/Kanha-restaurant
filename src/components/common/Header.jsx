import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToBooking = () => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById("table-booking");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg border-b border-yellow-500/20">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="text-3xl font-extrabold text-yellow-400 tracking-wide cursor-pointer"
        >
          Kanha <span className="text-white">Restaurant</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-yellow-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#menu"
              className="hover:text-yellow-400 transition"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-yellow-400 transition"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Book Button */}
        <button
          type="button"
          onClick={scrollToBooking}
          className="hidden md:block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
        >
          🍽️ Book Table
        </button>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-400 text-3xl"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500/30">

          <ul className="flex flex-col items-center py-6 gap-6 text-white">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#menu"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Menu
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Contact
              </a>
            </li>

            <li>
              <button
                type="button"
                onClick={scrollToBooking}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold"
              >
                🍽️ Book Table
              </button>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;