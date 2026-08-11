function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Patel",
      review:
        "Amazing food and excellent service. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Shah",
      review:
        "Beautiful ambience and delicious pizza. Loved it!",
      rating: 5,
    },
    {
      name: "Amit Mehta",
      review:
        "Best family restaurant in town. Will definitely visit again.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-950 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-yellow-400 font-semibold tracking-widest uppercase">
            Customer Reviews
          </p>

          <h2 className="text-5xl font-bold text-white mt-2">
            What Our{" "}
            <span className="text-yellow-400">
              Customers Say
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Trusted by hundreds of happy customers.
          </p>

        </div>

        {/* Rating Badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg shadow-yellow-500/20">
            ⭐ 4.9 Rating&nbsp; | &nbsp;1000+ Happy Customers
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-yellow-500/20 rounded-3xl p-8 shadow-xl hover:shadow-yellow-500/20 hover:border-yellow-400/50 hover:-translate-y-2 transition duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({
                  length: testimonial.rating,
                }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-7 italic text-lg">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="border-t border-yellow-500/20 my-6"></div>

              {/* Customer */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-yellow-400 font-bold text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Verified Customer
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;