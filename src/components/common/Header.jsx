import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-yellow-500/20">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-yellow-400 tracking-wide cursor-pointer">
          Kanha <span className="text-white">Restaurant</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <a href="#home" className="hover:text-yellow-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-yellow-400 duration-300">
              Menu
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-yellow-400 duration-300">
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

        {/* Book Button */}
        <a
          href="#booking"
          className="hidden md:block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 duration-300 shadow-lg"
        >
          Book Table
        </a>

        {/* Mobile Menu Button */}
        <button
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
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#menu" onClick={() => setMenuOpen(false)}>
                Menu
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

            <li>
              <a
                href="#table-booking"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold"
              >
                Book Table
              </a>
            </li>

          </ul>

        </div>
      )}
    </header>
  );
}

export default Header;