import {
  FaBaby,
  FaWheelchair,
  FaHeartbeat,
  FaUserShield,
} from "react-icons/fa";

const categories = [
  {
    name: "Baby Care",
    icon: FaBaby,
    description: "Professional caregivers for your little ones.",
    bgColor: "bg-pink-900/30",
    iconColor: "text-pink-400",
  },
  {
    name: "Elderly Care",
    icon: FaWheelchair,
    description: "Compassionate support for seniors at home.",
    bgColor: "bg-blue-900/30",
    iconColor: "text-blue-400",
  },
  {
    name: "Sick Person Care",
    icon: FaHeartbeat,
    description: "Dedicated nursing for quick recovery.",
    bgColor: "bg-red-900/30",
    iconColor: "text-red-400",
  },
  {
    name: "Special Care",
    icon: FaUserShield,
    description: "Tailored assistance for special needs.",
    bgColor: "bg-purple-900/30",
    iconColor: "text-purple-400",
  },
];

const ServiceCategory = () => {
  return (
    <div className="bg-[#030712] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            What We Offer
          </h2>
          <p className="text-4xl font-bold text-white">Our Care Services</p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We provide a wide range of specialized services tailored to meet
            your unique needs with care and professionalism.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-[#0f172a] p-8 rounded-3xl border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 group flex flex-col items-center text-center shadow-lg"
            >
              <div className={`p-5 rounded-full ${category.bgColor} mb-6`}>
                <category.icon className={`text-4xl ${category.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {category.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {category.description}
              </p>

              <a
                href="/services"
                className="mt-6 text-blue-400 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Explore Services →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
