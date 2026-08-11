import { useState } from "react";

function TableBooking() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    guests: "2",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.date ||
      !formData.time ||
      !formData.address
    ) {
      alert("Please fill all required details.");
      return;
    }

    alert(
      `Table booking request submitted successfully!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nAddress: ${formData.address}`
    );

    setFormData({
      name: "",
      mobile: "",
      date: "",
      time: "",
      guests: "2",
      address: "",
    });
  };

  return (
    <section
      id="table-booking"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      data-aos="zoom-in"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-yellow-400 font-semibold uppercase tracking-[4px]">
            Reservation
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-3">
            Book Your Table
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-5 text-lg">
            Reserve your table and enjoy a delicious experience at Kanha
            Restaurant.
          </p>

        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto">

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-yellow-500/30 rounded-3xl shadow-2xl p-6 md:p-10"
          >

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder-gray-500"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  maxLength="10"
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder-gray-500"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Time *
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Number of Guests
                </label>

                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10 Guests</option>
                  <option value="10+">10+ Guests</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Address *
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full bg-black border border-gray-700 text-white px-5 py-4 rounded-xl outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition placeholder-gray-500"
                />
              </div>

            </div>

            {/* Confirm Button */}
            <button
              type="submit"
              className="mt-8 w-full bg-yellow-400 text-black py-4 rounded-full font-extrabold text-lg hover:bg-yellow-300 hover:scale-[1.02] transition duration-300 shadow-lg shadow-yellow-400/20"
            >
              📅 Confirm Table Booking
            </button>

            {/* Bottom Text */}
            <p className="text-center text-gray-500 text-sm mt-5">
              Please fill in all details to reserve your table.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}

export default TableBooking;