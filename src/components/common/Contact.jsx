function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-2">
            Contact Us
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-5 text-lg">
            We would love to hear from you
          </p>

        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-gray-900 border border-yellow-500/20 p-8 md:p-10 rounded-3xl shadow-xl hover:border-yellow-400/50 hover:shadow-yellow-500/10 transition duration-300">

            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              Get in Touch
            </h3>

            {/* Location */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl">
                📍
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Address
                </h4>

                <p className="text-gray-400 mt-1">
                  Palanpur, Gujarat
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl">
                📞
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Phone
                </h4>

                <a
                  href="tel:+918160815662"
                  className="text-gray-400 mt-1 block hover:text-yellow-400 transition"
                >
                  +91 8160815662
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl">
                📧
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Email
                </h4>

                <a
                  href="mailto:info@kanharestaurant.com"
                  className="text-gray-400 mt-1 block hover:text-yellow-400 transition"
                >
                  info@kanharestaurant.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black text-xl">
                🕒
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Opening Hours
                </h4>

                <p className="text-gray-400 mt-1">
                  Mon - Sun : 10:00 AM - 11:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="bg-gray-900 border border-yellow-500/20 p-8 md:p-10 rounded-3xl shadow-xl hover:border-yellow-400/50 hover:shadow-yellow-500/10 transition duration-300"
          >

            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              Send Us a Message
            </h3>

            {/* Name */}
            <div className="mb-5">
              <label className="block text-gray-300 font-medium mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-300 font-medium mb-2">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition placeholder-gray-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-300 font-medium mb-2">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              📩 Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;