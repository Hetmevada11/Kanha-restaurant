import heroFood from "../../assets/hero-food.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-100 py-20"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        <div>
          <p className="text-orange-500 font-semibold">
            Welcome to Kanha Restaurant
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Delicious Food For Every Mood
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl">
            Enjoy fresh, delicious meals made with premium ingredients in a warm
            and elegant atmosphere.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-center hover:bg-orange-600 transition"
            >
              Book a Table
            </a>

            <a
              href="#menu"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg text-center hover:bg-orange-500 hover:text-white transition"
            >
              View Menu
            </a>
          </div>
        </div>

        <div>
          <img
            src={heroFood}
            alt="Hero Food"
            className="w-full max-w-lg mx-auto rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;