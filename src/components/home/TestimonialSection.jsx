import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Happy Daughter",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The caregiver provided to my mother was exceptional. Truly compassionate and professional.",
    rating: 5,
  },
  {
    name: "Rahim Uddin",
    role: "New Father",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Finding a reliable nanny was difficult, but this service made it so easy. Highly recommended!",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Patient's Wife",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Excellent post-surgery care. The nurse was very knowledgeable and patient.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-[#030712] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Testimonials
          </h2>
          <p className="text-4xl font-bold text-white">What Our Clients Say</p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Don't take our word for it. Hear what families have to say about
            their experience with our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-3xl border border-blue-900/30 flex flex-col hover:border-blue-700/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-500 text-3xl mb-6" />

              {/* Quote Text */}
              <p className="text-slate-300 text-sm leading-relaxed grow mb-8">
                {item.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-950"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>

                {/* Rating */}
                <div className="ml-auto flex items-center gap-1 text-yellow-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
