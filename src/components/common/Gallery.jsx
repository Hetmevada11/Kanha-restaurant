import gallery1 from "../../assets/Gallery1.jpg";
import gallery2 from "../../assets/Gallery2.jpg";
import gallery3 from "../../assets/Gallery3.jpg";
import gallery4 from "../../assets/Gallery4.jpg";
import gallery5 from "../../assets/Gallery5.jpg";
import gallery6 from "../../assets/Gallery6.jpg";

function Gallery() {
  const galleryImages = [
    { image: gallery1, title: "Delicious Pizza" },
    { image: gallery2, title: "Special Dishes" },
    { image: gallery3, title: "Chef Special" },
    { image: gallery4, title: "Fresh Food" },
    { image: gallery5, title: "Premium Taste" },
    { image: gallery6, title: "Indian Special" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="zoom-in"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Food & Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-2">
            Our Gallery
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-300 mt-5 text-lg">
            Delicious Food & Beautiful Moments
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gray-900 shadow-xl hover:border-yellow-400/60 hover:shadow-yellow-500/20 transition duration-500"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-2xl">
                    ✨
                  </span>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-yellow-400 text-sm mt-1">
                  Kanha Restaurant
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">

          <p className="text-gray-400">
            Experience the taste, atmosphere and moments of
          </p>

          <p className="text-yellow-400 font-bold text-xl mt-2">
            Kanha Restaurant ❤️
          </p>

        </div>

      </div>
    </section>
  );
}

export default Gallery;