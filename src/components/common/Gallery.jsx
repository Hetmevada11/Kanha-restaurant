import gallery1 from "../../assets/Gallery1.jpg";
import gallery2 from "../../assets/Gallery2.jpg";
import gallery3 from "../../assets/Gallery3.jpg";
import gallery4 from "../../assets/Gallery4.jpg";
import gallery5 from "../../assets/Gallery5.jpg";
import gallery6 from "../../assets/Gallery6.jpg";

function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gray-100"
      data-aos="zoom-in"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Our Gallery
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-12">
          Delicious Food & Beautiful Moments
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <img
            src={gallery1}
            alt="Gallery 1"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

          <img
            src={gallery2}
            alt="Gallery 2"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

          <img
            src={gallery3}
            alt="Gallery 3"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

          <img
            src={gallery4}
            alt="Gallery 4"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

          <img
            src={gallery5}
            alt="Gallery 5"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

          <img
            src={gallery6}
            alt="Gallery 6"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300 h-72 w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}

export default Gallery;