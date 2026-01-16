import {
  MessageCircle,
  Phone,
  Wifi,
  Droplets,
  UtensilsCrossed,
  Car,
  Bed,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundImage, FrontImage, GuestHouseImage } from "../assets";

export default function Home() {
  const rooms = [
    {
      name: "Single Room",
      price: "NPR 1,500",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Single bed", "Private bathroom", "Wi-Fi"],
    },
    {
      name: "Double Room",
      price: "NPR 2,500",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Queen bed", "Private bathroom", "Mountain view"],
    },
    {
      name: "Family Room",
      price: "NPR 4,000",
      image:
        "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["2 beds", "Private bathroom", "Extra space"],
    },
  ];

  const facilities = [
    { icon: Wifi, name: "Free Wi-Fi", desc: "High-speed internet" },
    { icon: Droplets, name: "Hot Shower", desc: "24/7 hot water" },
    {
      icon: UtensilsCrossed,
      name: "Home-cooked Food",
      desc: "Traditional meals",
    },
    { icon: Car, name: "Parking", desc: "Secure parking space" },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9771234567890?text=Hello, I would like to book a room",
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.location.href = "tel:+9771234567890";
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${FrontImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-lg md:text-xl mb-2 text-amber-200">
            A peaceful stay away from home
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to New Pathivara Hotel and Lodge
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience clean, comfortable rooms and warm Nepali hospitality in
            the heart of Hetauda. Your home away from home awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Book via WhatsApp</span>
            </button>
            <button
              onClick={handleCallClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                About Our New Pathivara Hotel and Lodge
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                New Pathivara Hotel and Lodge is a family-run establishment that
                has been welcoming travelers for over a decade. We pride
                ourselves on providing a homely atmosphere where guests feel
                like part of our family.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Located in the Bus park area, we offer easy access to shops,
                restaurants, and cultural sites, while maintaining a peaceful
                retreat from the bustling streets.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our rooms are kept spotlessly clean, and we take pride in
                offering genuine Nepali hospitality that makes every stay
                memorable.
              </p>
            </div>
            <div>
              <img
                src={GuestHouseImage}
                alt="Guest house exterior"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Comfortable Rooms
            </h2>
            <p className="text-gray-700 text-lg">
              Choose the perfect room for your stay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-3xl font-bold text-green-700 mb-4">
                    {room.price}
                    <span className="text-base font-normal text-gray-600">
                      /night
                    </span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700"
                      >
                        <span className="text-amber-700 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/rooms"
                    className="block w-full bg-amber-700 hover:bg-amber-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Guest Facilities
            </h2>
            <p className="text-gray-700 text-lg">
              Everything you need for a comfortable stay
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors"
              >
                <facility.icon className="h-12 w-12 text-amber-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {facility.name}
                </h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Contact us directly for the best rates and personalized service.
            We're here to make your stay unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </button>
            <button
              onClick={handleCallClick}
              className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
