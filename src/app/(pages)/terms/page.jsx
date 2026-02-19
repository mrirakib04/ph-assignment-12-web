import Link from "next/link";
import {
  FaFileContract,
  FaUserCheck,
  FaBalanceScale,
  FaBan,
  FaExclamationTriangle,
  FaHandshake,
} from "react-icons/fa";

export const metadata = {
  title: "Terms & Conditions || Care.io",
  description:
    "Please read our terms and conditions carefully before using our services.",
};

const TermsPage = () => {
  const lastUpdated = "October 24, 2025";

  const terms = [
    {
      id: "acceptance",
      icon: <FaUserCheck className="text-blue-500" />,
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using Care.io, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.",
        "If you do not agree with any part of these terms, you must not use our website or services.",
        "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the platform constitutes acceptance of the revised terms.",
      ],
    },
    {
      id: "services",
      icon: <FaHandshake className="text-indigo-500" />,
      title: "2. Service Provision & Bookings",
      content: [
        "Care.io acts as a platform connecting users with qualified caregivers. We strive for excellence but do not guarantee 100% availability at all times.",
        "Users must provide accurate, current, and complete information during the booking process.",
        "Any medical requirements must be disclosed upfront to ensure the safety of both the client and the caregiver.",
        "We reserve the right to refuse service to anyone for any reason at any time.",
      ],
    },
    {
      id: "payments",
      icon: <FaBalanceScale className="text-purple-500" />,
      title: "3. Payments, Refunds & Cancellations",
      content: [
        "All payments must be made through our authorized payment gateways. We do not store your credit card information.",
        "Cancellation Policy: Cancellations made 24 hours prior to the scheduled service are eligible for a full refund.",
        "Late Cancellations: Cancellations within 12 hours of the service may incur a 50% service fee.",
        "Refunds are processed within 7-10 working days depending on your bank's policy.",
      ],
    },
    {
      id: "conduct",
      icon: <FaBan className="text-red-500" />,
      title: "4. User Conduct & Prohibitions",
      content: [
        "You agree not to use the platform for any unlawful purpose or to solicit others to perform or participate in any unlawful acts.",
        "Harassment, abuse, or discrimination against caregivers or Care.io staff will lead to immediate account termination.",
        "You must not upload viruses, malware, or any other type of malicious code that will or may be used in any way that will affect the functionality of the service.",
      ],
    },
    {
      id: "liability",
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      title: "5. Limitation of Liability",
      content: [
        "Care.io shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.",
        "While we verify caregivers, users are encouraged to take standard safety precautions when welcoming a professional into their home.",
        "Our total liability to you for any claim arising out of these terms shall not exceed the amount paid by you for the specific service in question.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4">
            <FaFileContract className="text-4xl text-blue-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
            Terms & Conditions
          </h1>
          <p className="text-slate-400">Last Updated: {lastUpdated}</p>
        </div>

        {/* Introduction / Summary */}
        <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Agreement Overview</h2>
          <p className="text-slate-400 leading-relaxed">
            Welcome to Care.io. These Terms & Conditions govern your use of our
            website and the purchase of any care services from us. By using our
            platform, you enter into a legally binding contract with us. Please
            read each section carefully to understand your rights and
            responsibilities as a user of our community.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12 mb-16">
          {terms.map((term) => (
            <div key={term.id} className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-blue-500 transition-colors">
                  {term.icon}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-slate-100">
                  {term.title}
                </h3>
              </div>
              <div className="pl-16">
                <ul className="space-y-4">
                  {term.content.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-slate-400 leading-relaxed"
                    >
                      <span className="text-blue-500 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Termination Section (Extra Data) */}
        <div className="bg-linear-to-b from-[#0f172a] to-transparent p-5 md:p-10 rounded-3xl border border-slate-800 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <FaBan className="text-3xl text-red-500" />
            <h2 className="md:text-3xl text-2xl font-bold">
              Account Termination
            </h2>
          </div>
          <p className="text-slate-400 mb-6">
            We reserve the right to suspend or terminate your access to the
            platform without prior notice if we believe you have breached these
            terms. Upon termination, your right to use the service will
            immediately cease.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <h4 className="font-bold mb-2 text-slate-200">
                Violation of Rules
              </h4>
              <p className="text-sm text-slate-500">
                Any illegal activity or breach of conduct leads to permanent
                ban.
              </p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <h4 className="font-bold mb-2 text-slate-200">Payment Default</h4>
              <p className="text-sm text-slate-500">
                Failure to settle outstanding balances may result in temporary
                suspension.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Support Box */}
        <div className="bg-blue-600 p-1 rounded-3xl">
          <div className="bg-[#030712] p-5 md:p-10 rounded-[calc(1.5rem-4px)] text-center">
            <h2 className="md:text-3xl text-2xl font-bold mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              If you have any questions regarding these Terms & Conditions or
              any other legal matters, please feel free to reach out to our
              legal team.
            </p>
            <Link
              href={"/help"}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 md:px-10 py-4 rounded-full transition-all"
            >
              Contact Legal Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
