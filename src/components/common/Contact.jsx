function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-orange-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="mb-4">📍 Palanpur, Gujarat</p>

            <p className="mb-4">
              📞 +91 8160815662
            </p>

            <p className="mb-4">
              📧 info@kanharestaurant.com
            </p>

            <p>
              🕒 Mon - Sun : 10:00 AM - 11:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg outline-none focus:border-orange-500"
            ></textarea>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;