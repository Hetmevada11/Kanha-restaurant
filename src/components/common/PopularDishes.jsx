import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import pasta from "../../assets/pasta.jpg";
import sandwich from "../../assets/sandwich.jpg";

function PopularDishes() {
  return (
    <section
      className="py-20 bg-gray-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Popular Dishes
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Our most loved dishes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {/* Burger */}
          <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">
            <img
              src={burger}
              alt="Burger"
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-4">
              Cheese Burger
            </h3>

            <p className="text-gray-500 mt-2">
              Juicy beef patty with cheese & veggies
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-500 font-bold">
                ₹249
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Pizza */}
          <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">
            <img
              src={pizza}
              alt="Pizza"
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-4">
              Margherita Pizza
            </h3>

            <p className="text-gray-500 mt-2">
              Fresh cheese with tomato sauce
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-500 font-bold">
                ₹299
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Pasta */}
          <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">
            <img
              src={pasta}
              alt="Pasta"
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-4">
              Creamy Pasta
            </h3>

            <p className="text-gray-500 mt-2">
              Creamy white sauce pasta with herbs
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-500 font-bold">
                ₹279
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Sandwich */}
          <div className="bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition duration-300">
            <img
              src={sandwich}
              alt="Sandwich"
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-4">
              Veg Sandwich
            </h3>

            <p className="text-gray-500 mt-2">
              Crispy grilled sandwich with fresh veggies
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-orange-500 font-bold">
                ₹199
              </span>

              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PopularDishes;