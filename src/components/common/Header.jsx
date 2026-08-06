import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500">
          Kanha Restaurant
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-orange-500">
              Home
            </a>
          </li>

          <li>
            <a href="#menu" className="hover:text-orange-500">
              Menu
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-orange-500">
              About
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-orange-500">
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Book Table Button */}
        <a
          href="#table-booking"
          className="hidden md:block bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Book Table
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col text-center py-4 space-y-4">

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
                className="inline-block bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition"
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