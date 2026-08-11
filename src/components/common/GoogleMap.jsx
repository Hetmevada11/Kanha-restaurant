function FindUs() {
  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase">
            Visit Us
          </p>

          <h2 className="text-5xl font-bold text-white mt-2">
            Find <span className="text-yellow-400">Us</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Visit Kanha Restaurant
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-gray-900 border border-yellow-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10">

          {/* Top Info */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                📍 Kanha Restaurant
              </h3>

              <p className="text-gray-300 mt-2">
                Palanpur, Gujarat 385001, India
              </p>

              <p className="text-gray-400 mt-2">
                🕒 Mon - Sun : 10:00 AM - 11:00 PM
              </p>
            </div>

            {/* Get Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Palanpur,Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
            >
              📍 Get Directions →
            </a>

          </div>

          {/* Map */}
          <div className="relative border-t border-yellow-500/20">

            <iframe
              title="Kanha Restaurant Location"
              src="https://www.google.com/maps?q=Palanpur,Gujarat&output=embed"
              className="w-full h-[450px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Yellow Border */}
            <div className="pointer-events-none absolute inset-0 border-2 border-yellow-500/20 rounded-b-3xl"></div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FindUs;