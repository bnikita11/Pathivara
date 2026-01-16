import { useState } from "react";
import { X } from "lucide-react";
import {
  CounterImage,
  FrontImage,
  BackgroundImage,
  DiningImage,
} from "../assets";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Rooms",
    },
    {
      url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Rooms",
    },
    {
      url: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Rooms",
    },
    {
      url: FrontImage,
      category: "Exterior",
    },
    {
      url: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Surroundings",
    },
    {
      url: CounterImage,
      category: "Common Areas",
    },
    {
      url: DiningImage,
      category: "Dining",
    },
    {
      url: "https://images.pexels.com/photos/1437930/pexels-photo-1437930.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Garden",
    },
    {
      url: "https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Bathrooms",
    },
    {
      url: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Surroundings",
    },
    {
      url: "https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Views",
    },
    {
      url: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Garden",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-amber-100">
            Explore our guest house through photos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
