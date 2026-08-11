import offer from "../../assets/offer.jpg";

function SpecialOffer() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="fade-left"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Offer Box */}
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-gray-900 shadow-2xl">

          {/* Yellow Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12">

            {/* Left Side */}
            <div className="md:w-1/2">

              {/* Badge */}
              <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                🔥 LIMITED TIME OFFER
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-6">
                Today's Special Offer
              </h2>

              <p className="mt-5 text-xl text-gray-300 leading-8">
                Get <span className="text-yellow-400 font-bold">30% OFF</span>{" "}
                on all Pizza & Burger Orders.
              </p>

              <p className="mt-3 text-gray-400">
                Enjoy your favourite dishes at an amazing price.
              </p>

              {/* Price */}
              <div className="flex items-center gap-5 mt-7">

                <span className="text-gray-500 text-xl line-through">
                  ₹399
                </span>

                <span className="text-yellow-400 text-4xl font-extrabold">
                  ₹279
                </span>

                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SAVE ₹120
                </span>

              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition duration-300 shadow-lg"
              >
                🛒 Order Now →
              </button>

            </div>

            {/* Right Side */}
            <div className="md:w-1/2 flex flex-col items-center">

              {/* Image */}
              <div className="relative">

                <img
                  src={offer}
                  alt="Today's Special Offer"
                  className="w-full max-w-[500px] h-[300px] md:h-[350px] object-cover rounded-3xl border-2 border-yellow-400/30 shadow-2xl hover:scale-105 transition duration-500"
                />

                {/* Discount Circle */}
                <div className="absolute -top-5 -right-5 w-24 h-24 bg-yellow-400 text-black rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-black">

                  <span className="text-2xl font-extrabold">
                    30%
                  </span>

                  <span className="text-xs font-bold">
                    OFF
                  </span>

                </div>

              </div>

              {/* Bottom Text */}
              <div className="text-center mt-5">

                <p className="text-gray-400">
                  Original Price
                </p>

                <p className="text-gray-500 text-lg line-through">
                  ₹399
                </p>

                <p className="text-yellow-400 text-3xl font-extrabold mt-1">
                  ₹279
                </p>

                <p className="text-green-400 font-semibold mt-1">
                  🎉 Save ₹120
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SpecialOffer;