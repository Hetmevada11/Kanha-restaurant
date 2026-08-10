import { useState } from "react";

import pizza from "../../assets/pizza.jpg";
import panir from "../../assets/panir.jpg";
import sandwich from "../../assets/sandwich.jpg";
import gallery6 from "../../assets/Gallery6.jpg";
import burger from "../../assets/burger.jpg";
import pasta from "../../assets/pasta.jpg";

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Cheese Pizza",
      image: pizza,
      price: 299,
      rating: "4.9",
      badge: "Best Seller",
      category: "Pizza",
    },
    {
      id: 2,
      name: "Veg Burger",
      image: burger,
      price: 149,
      rating: "4.8",
      badge: "Popular",
      category: "Burger",
    },
    {
      id: 3,
      name: "White Sauce Pasta",
      image: pasta,
      price: 249,
      rating: "4.9",
      badge: "Chef Special",
      category: "Pasta",
    },
    {
      id: 4,
      name: "Grilled Sandwich",
      image: sandwich,
      price: 179,
      rating: "4.7",
      badge: "Fresh",
      category: "Sandwich",
    },
    {
      id: 5,
      name: "Paneer Tikka",
      image: panir,
      price: 149,
      rating: "4.8",
      badge: "Hot",
      category: "Indian",
    },
    {
      id: 6,
      name: "Masala Dosa",
      image: gallery6,
      price: 140,
      rating: "4.9",
      badge: "Special",
      category: "Indian",
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Pasta",
    "Sandwich",
    "Indian",
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((itemId) => itemId !== id)
        : [...currentFavorites, id]
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // WhatsApp Order
  const orderOnWhatsApp = () => {
    if (cart.length === 0) {
      alert("Please add some food to your cart first.");
      return;
    }

    const orderDetails = cart
      .map(
        (item) =>
          `🍽️ ${item.name} × ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `Hello Kanha Restaurant 👋

I would like to place an order:

${orderDetails}

💰 Total: ₹${cartTotal}

Please confirm my order.

Thank you! 😊`;

    const whatsappURL = `https://wa.me/918160815662?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase">
            Delicious Choices
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-2">
            Our Special Menu
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Fresh • Delicious • Premium Taste
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="🔍 Search your favourite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-yellow-500/30 text-white px-6 py-4 rounded-full outline-none focus:border-yellow-400 transition placeholder-gray-400"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                category === item
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-white border border-yellow-500/20 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className="mb-12 bg-gray-900 border border-yellow-500/30 rounded-3xl p-6 shadow-xl">

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">
                  🛒 Your Cart
                </h3>

                <p className="text-gray-400">
                  {cartCount} item{cartCount !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-gray-400">Total</p>

                <p className="text-3xl font-bold text-yellow-400">
                  ₹{cartTotal}
                </p>
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-800 rounded-2xl p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />

                    <div>
                      <h4 className="font-bold text-white">
                        {item.name}
                      </h4>

                      <p className="text-yellow-400">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-9 h-9 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black transition font-bold"
                    >
                      −
                    </button>

                    <span className="font-bold min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-9 h-9 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black transition font-bold"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-400 hover:text-red-300 transition"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Order */}
            <button
              onClick={orderOnWhatsApp}
              className="mt-6 w-full bg-green-500 text-white py-4 rounded-full font-bold text-lg hover:bg-green-400 transition"
            >
              📱 Order on WhatsApp →
            </button>

          </div>
        )}

        {/* Menu Cards */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-3xl overflow-hidden border border-yellow-500/20 shadow-xl hover:scale-105 hover:shadow-yellow-500/30 transition duration-300"
              >

                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-2 rounded-full font-bold">
                    {item.badge}
                  </span>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition ${
                      favorites.includes(item.id)
                        ? "bg-red-500 text-white"
                        : "bg-black/70 text-white hover:bg-red-500"
                    }`}
                  >
                    {favorites.includes(item.id) ? "♥" : "♡"}
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex justify-between items-start gap-3">
                    <h3 className="text-2xl font-bold text-white">
                      {item.name}
                    </h3>

                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                      VEG
                    </span>
                  </div>

                  <p className="text-yellow-400 mt-3">
                    ⭐ {item.rating}
                  </p>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.category}
                  </p>

                  <p className="text-yellow-400 text-3xl font-bold mt-3">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                    className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-full font-bold hover:bg-yellow-300 transition"
                  >
                    🛒 Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🍽️</p>

            <h3 className="text-2xl font-bold text-white">
              No Food Found
            </h3>

            <p className="text-gray-400 mt-2">
              Try another food name or category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Menu;