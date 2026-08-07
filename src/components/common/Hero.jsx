import heroFood from "../../assets/hero-food.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div>
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
            ⭐ 4.9 Rating | 1000+ Happy Customers
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            Taste The <span className="text-yellow-400">Luxury</span> <br />
            In Every Bite
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Experience delicious food made with premium ingredients,
            exceptional service, and a warm atmosphere for unforgettable
            moments with your loved ones.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#table-booking"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
            >
              🍽 Book Table
            </a>

            <a
              href="#menu"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              📖 View Menu
            </a>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">15+</h2>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">50+</h2>
              <p className="text-gray-400">Delicious Dishes</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">1000+</h2>
              <p className="text-gray-400">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={heroFood}
            alt="Hero Food"
            className="w-full max-w-xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg">
            👨‍🍳 Fresh • Hygienic • Delicious
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;