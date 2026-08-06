function Footer() {
  return (
    <footer
      className="bg-black text-white mt-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Restaurant Info */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            Kanha Restaurant
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Serving delicious food with love and quality.
            Visit us with your family and friends for an
            unforgettable dining experience.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Contact Us
          </h3>

          <p>📍 Palanpur, Gujarat</p>
          <p className="mt-2">📞 +91 8160815662</p>
          <p className="mt-2">📧 info@kanharestaurant.com</p>
          <p className="mt-2">🕒 10:00 AM - 11:00 PM</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-orange-500 transition">
                Menu
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-orange-500 transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400">
        © 2026 Kanha Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;