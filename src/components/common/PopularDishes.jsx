import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import pasta from "../../assets/pasta.jpg";
import sandwich from "../../assets/sandwich.jpg";

function PopularDishes() {
  const dishes = [
    {
      image: burger,
      name: "Cheese Burger",
      description: "Juicy beef patty with cheese & veggies",
      price: "₹249",
      rating: "4.9",
    },
    {
      image: pizza,
      name: "Margherita Pizza",
      description: "Fresh cheese with tomato sauce",
      price: "₹299",
      rating: "4.9",
    },
    {
      image: pasta,
      name: "Creamy Pasta",
      description: "Creamy white sauce pasta with herbs",
      price: "₹279",
      rating: "4.8",
    },
    {
      image: sandwich,
      name: "Veg Sandwich",
      description: "Crispy grilled sandwich with fresh veggies",
      price: "₹199",
      rating: "4.8",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Customer Favorites
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-2">
            Popular Dishes
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 text-lg mt-5">
            Our most loved dishes
          </p>

        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-3xl overflow-hidden border border-yellow-500/20 shadow-xl hover:border-yellow-400/60 hover:shadow-yellow-500/20 hover:-translate-y-2 transition duration-500"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition duration-500"></div>

                {/* Popular Badge */}
                <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Popular
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-start gap-3">

                  <h3 className="text-xl font-bold text-white">
                    {dish.name}
                  </h3>

                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                    VEG
                  </span>

                </div>

                {/* Rating */}
                <p className="text-yellow-400 mt-3">
                  ⭐ {dish.rating}
                </p>

                {/* Description */}
                <p className="text-gray-400 mt-3 text-sm leading-6">
                  {dish.description}
                </p>

                {/* Price + Button */}
                <div className="flex justify-between items-center mt-6">

                  <span className="text-yellow-400 text-2xl font-extrabold">
                    {dish.price}
                  </span>

                  <button
                    type="button"
                    className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition duration-300"
                  >
                    🛒 Order
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDishes;