import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              New Pathivara Guest House
            </h3>
            <p className="text-amber-100">
              A peaceful stay away from home. Experience warm hospitality and
              comfortable rooms in the heart of Nepal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-amber-100">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/rooms" className="hover:text-white transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="/rules" className="hover:text-white transition-colors">
                  House Rules
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+977 9704459305</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Available</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@mountainview.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>TCN Road, Hetauda, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100">
          <p>
            &copy; {currentYear} New Pathivara Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
