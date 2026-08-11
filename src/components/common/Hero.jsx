import heroFood from "../../assets/hero-food.jpg";

function Hero() {
  const handleBookTable = () => {
    const section = document.getElementById("table-booking");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div>

          <div className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-bold mb-6">
            ⭐ 4.9 Rating | 1000+ Happy Customers
          </div>

          <p className="text-yellow-400 font-semibold text-lg">
            Welcome to Kanha Restaurant
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            Taste The{" "}
            <span className="text-yellow-400">
              Luxury
            </span>
            <br />
            In Every Bite
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Experience delicious food made with premium ingredients,
            excellent service, and a warm atmosphere for unforgettable
            moments with your loved ones.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            {/* Book Table */}
            <button
              type="button"
              onClick={handleBookTable}
              className="bg-yellow-400 text-black px-7 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
            >
              🍽️ Book Table
            </button>

            {/* View Menu */}
            <a
              href="#menu"
              className="border-2 border-yellow-400 text-yellow-400 px-7 py-4 rounded-full font-bold text-lg text-center hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              🍴 View Menu
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                15+
              </h3>
              <p className="text-gray-400 mt-1">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                50+
              </h3>
              <p className="text-gray-400 mt-1">
                Delicious Dishes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                1000+
              </h3>
              <p className="text-gray-400 mt-1">
                Happy Customers
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl rounded-full"></div>

          <img
            src={heroFood}
            alt="Delicious Food"
            className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-yellow-500/20"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;