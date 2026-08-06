function Testimonials() {
  const reviews = [
    {
      name: "Rahul Patel",
      review: "Amazing food and excellent service. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Priya Shah",
      review: "Beautiful ambience and delicious pizza. Loved it!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Amit Mehta",
      review: "Best family restaurant in town. Will visit again.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section
      className="py-20 bg-white"
      data-aos="flip-left"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-12">
          Trusted by hundreds of happy customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <p className="text-yellow-500 text-xl">
                {item.rating}
              </p>

              <p className="text-gray-600 mt-4 italic">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-orange-500">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;