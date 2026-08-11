import AboutImg from "../../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="fade-right"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-2">
            About Kanha Restaurant
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">

              <div className="absolute -inset-3 bg-yellow-400/20 blur-2xl rounded-3xl"></div>

              <img
                src={AboutImg}
                alt="Kanha Restaurant"
                className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover border border-yellow-500/30"
              />

            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2">

            <h3 className="text-3xl font-bold text-white">
              Delicious Food,{" "}
              <span className="text-yellow-400">
                Memorable Moments
              </span>
            </h3>

            <p className="text-gray-300 mt-6 leading-8 text-lg">
              Welcome to Kanha Restaurant. We serve fresh, delicious and
              hygienic food prepared with premium ingredients. Our goal is
              to provide the best dining experience with quality food,
              excellent service and a comfortable atmosphere.
            </p>

            <p className="text-gray-400 mt-5 leading-8">
              From delicious Indian favourites to tasty fast food, every
              dish is prepared with care and passion. We believe that good
              food brings people together and creates unforgettable memories.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
                <div className="text-3xl mb-2">🍽️</div>
                <h4 className="font-bold text-yellow-400">
                  Premium Food
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  Fresh & quality ingredients
                </p>
              </div>

              <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-5 hover:border-yellow-400 transition">
                <div className="text-3xl mb-2">👨‍🍳</div>
                <h4 className="font-bold text-yellow-400">
                  Expert Chefs
                </h4>
                <p className="text-gray-400 text-sm mt-1">
                  Prepared with passion
                </p>
              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-8 bg-yellow-400 text-black px-7 py-3 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-lg"
            >
              ✨ Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;