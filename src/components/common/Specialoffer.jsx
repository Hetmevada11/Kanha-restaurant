import offer from "../../assets/offer.jpg";

function SpecialOffer() {
  return (
    <section
      className="bg-orange-500 py-20"
      data-aos="fade-left"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-5xl font-bold">
            Today's Special Offer
          </h2>

          <p className="mt-4 text-xl">
            Get 30% OFF on all Pizza & Burger Orders.
          </p>

          <button className="mt-8 bg-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Order Now
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col items-center">

          <img
            src={offer}
            alt="Special Offer"
            className="w-[500px] h-[350px] object-cover rounded-xl shadow-xl hover:scale-105 transition duration-300"
          />

          <div className="mt-4 text-center">
            <p className="text-lg text-white line-through">
              ₹399
            </p>

            <p className="text-3xl font-bold text-yellow-300">
              ₹279
            </p>

            <p className="text-sm text-white">
              Save ₹120 (30% OFF)
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SpecialOffer;