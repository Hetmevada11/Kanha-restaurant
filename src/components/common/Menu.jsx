import pizza from "../../assets/pizza.jpg";
import panir from "../../assets/panir.jpg";
import sandwich from "../../assets/sandwich.jpg";
import gallery6 from "../../assets/Gallery6.jpg";
import burger from "../../assets/burger.jpg";
import pasta from "../../assets/pasta.jpg";

function Menu() {
  const menuItems = [
    {
      name: "Cheese Pizza",
      image: pizza,
      price: "₹299",
      rating: "4.9",
      badge: "Best Seller",
    },
    {
      name: "Veg Burger",
      image: burger,
      price: "₹149",
      rating: "4.8",
      badge: "Popular",
    },
    {
      name: "White Sauce Pasta",
      image: pasta,
      price: "₹249",
      rating: "4.9",
      badge: "Chef Special",
    },
    {
      name: "Grilled Sandwich",
      image: sandwich,
      price: "₹179",
      rating: "4.7",
      badge: "Fresh",
    },
    {
      name: "Paneer Tikka",
      image: panir,
      price: "₹149",
      rating: "4.8",
      badge: "Hot",
    },
    {
      name: "Masala Dosa",
      image: gallery6,
      price: "₹140",
      rating: "4.9",
      badge: "Special",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Special Menu
        </h2>

        <p className="text-center text-gray-300 mt-3 mb-14 text-lg">
          Fresh • Delicious • Premium Taste
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-yellow-500/20 shadow-xl hover:scale-105 hover:shadow-yellow-500/30 transition duration-300"
            >

              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                  {item.badge}
                </span>

                <span className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full">
                  ❤
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-400 mt-2">
                  ⭐ {item.rating}
                </p>

                <p className="text-yellow-400 text-3xl font-bold mt-3">
                  {item.price}
                </p>

                <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-300 transition">
                  🛒 Order Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Menu;