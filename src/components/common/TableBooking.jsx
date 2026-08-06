function TableBooking() {
  return (
    <section
      id="table-booking"
      className="py-20 bg-orange-100"
      data-aos="zoom-in-up"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Book Your Table
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Reserve your table in just a few seconds.
        </p>

        <form className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-lg outline-none focus:border-orange-500"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="border p-3 rounded-lg outline-none focus:border-orange-500"
          />

          <input
            type="date"
            className="border p-3 rounded-lg outline-none focus:border-orange-500"
          />

          <input
            type="time"
            className="border p-3 rounded-lg outline-none focus:border-orange-500"
          />

          <select className="border p-3 rounded-lg outline-none focus:border-orange-500">
            <option>2 Persons</option>
            <option>4 Persons</option>
            <option>6 Persons</option>
            <option>8 Persons</option>
            <option>10+ Persons</option>
          </select>

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg outline-none focus:border-orange-500"
          />

          <textarea
            rows="4"
            placeholder="Special Request"
            className="border p-3 rounded-lg outline-none focus:border-orange-500 md:col-span-2"
          ></textarea>

          <button
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition md:col-span-2"
          >
            Book Table
          </button>

        </form>

      </div>
    </section>
  );
}

export default TableBooking;