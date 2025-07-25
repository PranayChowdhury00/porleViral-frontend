import { useState } from "react";
import Swal from "sweetalert2";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/contact", formData);
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting us. We will reply soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5" /> pranaychowdhury00@gamil.com
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-5 h-5" /> +8801303572144
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Dhaka, Bangladesh
          </p>
          <p className="text-sm text-gray-500">
            Feel free to reach out to us for any help. We typically respond within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full border p-3 rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded h-32"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
