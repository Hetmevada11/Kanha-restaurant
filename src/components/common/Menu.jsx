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
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Veg Burger",
      image: burger,
      price: "₹149",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "White Sauce Pasta",
      image: pasta,
      price: "₹249",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Grilled Sandwich",
      image: sandwich,
      price: "₹179",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Paneer Tikka",
      image: panir,
      price: "₹149",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Masala Dosa",
      image: gallery6,
      price: "₹140",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Our Menu
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-12">
          Fresh & Delicious Dishes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-yellow-500 mt-2">
                  {item.rating}
                </p>

                <p className="text-orange-500 text-2xl font-bold mt-2">
                  {item.price}
                </p>

                <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                  Order Now
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