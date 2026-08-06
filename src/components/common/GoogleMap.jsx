function GoogleMap() {
  return (
    <section
      className="py-20 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Find Us
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Visit Kanha Restaurant
        </p>

        <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Palanpur,Gujarat&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default GoogleMap;