import { MessageCircle, Bed, Bath, Wifi, Wind, Users, Mountain } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Single Room',
      price: 'NPR 1,500',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Perfect for solo travelers seeking comfort and privacy. Our single rooms are cozy, clean, and equipped with everything you need.',
      amenities: [
        { icon: Bed, text: 'Single bed' },
        { icon: Bath, text: 'Private bathroom' },
        { icon: Wifi, text: 'Free Wi-Fi' },
        { icon: Wind, text: 'Air ventilation' },
      ],
    },
    {
      name: 'Double Room',
      price: 'NPR 2,500',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Spacious room with a comfortable queen bed, perfect for couples or solo travelers who prefer more space.',
      amenities: [
        { icon: Bed, text: 'Queen bed' },
        { icon: Bath, text: 'Private bathroom with hot shower' },
        { icon: Wifi, text: 'Free Wi-Fi' },
        { icon: Mountain, text: 'Mountain view' },
      ],
    },
    {
      name: 'Family Room',
      price: 'NPR 4,000',
      image: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Our largest room, ideal for families or groups. Enjoy extra space and comfort with multiple beds.',
      amenities: [
        { icon: Bed, text: '2 double beds' },
        { icon: Bath, text: 'Large private bathroom' },
        { icon: Wifi, text: 'Free Wi-Fi' },
        { icon: Users, text: 'Accommodates up to 4 guests' },
      ],
    },
  ];

  const handleWhatsAppBooking = (roomName: string) => {
    const message = `Hello, I would like to book the ${roomName}`;
    window.open(`https://wa.me/9771234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl text-amber-100">Choose your perfect accommodation</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`bg-white rounded-lg shadow-xl overflow-hidden ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex`}
            >
              <div className="md:w-1/2">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-3">{room.name}</h2>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-700">{room.price}</span>
                  <span className="text-gray-600 text-lg">/night</span>
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{room.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Amenities</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {room.amenities.map((amenity) => (
                      <div key={amenity.text} className="flex items-center space-x-3">
                        <amenity.icon className="h-5 w-5 text-amber-700" />
                        <span className="text-gray-700">{amenity.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(room.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-amber-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">All Rooms Include</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-gray-700">
              <p className="font-semibold">Clean Linens</p>
              <p className="text-sm">Fresh towels daily</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">24/7 Hot Water</p>
              <p className="text-sm">Unlimited supply</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Daily Cleaning</p>
              <p className="text-sm">Housekeeping service</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">Secure Storage</p>
              <p className="text-sm">Lockable rooms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
