import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(
      `https://wa.me/9779704459305?text=${whatsappMessage}`,
      "_blank"
    );

    setSubmitStatus("success");
    setFormData({ name: "", phone: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9779704459305?text=Hello, I would like to inquire about your guest house",
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.location.href = "tel:+9779704459305";
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-100">
            We're here to help with your booking
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Have questions or ready to book? Contact us directly through
              WhatsApp, phone, or fill out the form below.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <Phone className="h-6 w-6 text-amber-700 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+977 9704459305</p>
                  <button
                    onClick={handleCallClick}
                    className="text-amber-700 hover:text-amber-800 font-semibold mt-2"
                  >
                    Call Now →
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-700">Available 24/7</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-green-600 hover:text-green-700 font-semibold mt-2"
                  >
                    Message on WhatsApp →
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <Mail className="h-6 w-6 text-amber-700 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@mountainview.com</p>
                  <a
                    href="mailto:info@mountainview.com"
                    className="text-amber-700 hover:text-amber-800 font-semibold mt-2 inline-block"
                  >
                    Send Email →
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <MapPin className="h-6 w-6 text-amber-700 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    TCN Road, Hetauda 44100, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                <Clock className="h-6 w-6 text-amber-700 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">
                    Reception Hours
                  </h3>
                  <p className="text-gray-700">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Message sent via WhatsApp successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  This form will open WhatsApp with your message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
            Our Location
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1766499579582!6m8!1m7!1sr559tuIphSdnwsLocUkZcg!2m2!1d27.42779475806234!2d85.02830278171494!3f282.85962!4f0!5f0.7820865974627469"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Guest House Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
