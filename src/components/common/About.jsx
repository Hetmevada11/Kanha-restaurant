import AboutImg from "../../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white"
      data-aos="fade-right"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        <div className="md:w-1/2">
          <img
            src={AboutImg}
            alt="about"
            className="rounded-xl shadow-xl w-full h-[450px] object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold">
            About Kanha Restaurant
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Welcome to Kanha Restaurant. We serve fresh, delicious and
            hygienic food prepared with premium ingredients. Our goal is
            to provide the best dining experience with quality food,
            fast service and a comfortable atmosphere.
          </p>

          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;