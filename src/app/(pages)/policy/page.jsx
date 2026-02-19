import Link from "next/link";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaCookieBite,
  FaFileContract,
} from "react-icons/fa";

export const metadata = {
  title: "Privacy Policy || Care.io",
  description: "Read our privacy policy to understand how we handle your data.",
};

const PolicyPage = () => {
  const lastUpdated = "October 24, 2025";

  const policies = [
    {
      id: "collection",
      icon: <FaShieldAlt className="text-blue-500" />,
      title: "1. Information We Collect",
      content: [
        "Personal Identification: Name, email address, phone number, and physical address when you register or book a service.",
        "Medical Information: Voluntary health data provided to caregivers to ensure specialized care.",
        "Usage Data: IP addresses, browser type, and interaction data collected via cookies.",
        "Payment Details: Transaction history and billing information (processed through secure third-party gateways).",
      ],
    },
    {
      id: "usage",
      icon: <FaLock className="text-indigo-500" />,
      title: "2. How We Use Your Information",
      content: [
        "To facilitate and manage your service bookings.",
        "To communicate service updates, security alerts, and support messages.",
        "To improve our platform through data analytics and user feedback.",
        "To comply with legal obligations and prevent fraudulent activities.",
      ],
    },
    {
      id: "sharing",
      icon: <FaUserShield className="text-purple-500" />,
      title: "3. Sharing of Information",
      content: [
        "Caregivers: Necessary details are shared with assigned caregivers to perform the requested service.",
        "Legal Requirements: We may disclose information if required by law or to protect our rights.",
        "Service Providers: Third-party vendors who assist in hosting, payments, and analytics.",
      ],
    },
    {
      id: "security",
      icon: <FaFileContract className="text-green-500" />,
      title: "4. Data Security",
      content: [
        "We implement industry-standard SSL encryption for all data transmissions.",
        "Regular security audits are conducted to identify and mitigate potential vulnerabilities.",
        "Access to sensitive data is restricted to authorized personnel only.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-2xl bg-blue-600/10 mb-4">
            <FaShieldAlt className="text-4xl text-blue-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
            Privacy Policy
          </h1>
          <p className="text-slate-400">Last Updated: {lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 mb-12">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-slate-400 leading-relaxed">
            At Care.io, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information when you use our website and services. By using
            Care.io, you agree to the terms outlined in this policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12 mb-16">
          {policies.map((policy) => (
            <div key={policy.id} className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-blue-500 transition-colors">
                  {policy.icon}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-slate-100">
                  {policy.title}
                </h3>
              </div>
              <div className="pl-16">
                <ul className="space-y-4">
                  {policy.content.map((item, index) => (
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

        {/* Cookies Section */}
        <div className="bg-linear-to-b from-[#0f172a] to-transparent p-5 md:p-10 rounded-3xl border border-slate-800 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <FaCookieBite className="text-3xl text-yellow-500" />
            <h2 className="md:text-3xl text-2xl font-bold">
              Cookies & Tracking
            </h2>
          </div>
          <p className="text-slate-400 mb-6">
            We use cookies to enhance your experience. These are small files
            stored on your device that help us remember your preferences and
            analyze site traffic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <h4 className="font-bold mb-2">Essential Cookies</h4>
              <p className="text-sm text-slate-500">
                Necessary for the website to function (e.g., login sessions).
              </p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <h4 className="font-bold mb-2">Analytical Cookies</h4>
              <p className="text-sm text-slate-500">
                Help us understand user behavior and improve performance.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Support Box */}
        <div className="bg-blue-600 p-1 rounded-3xl">
          <div className="bg-[#030712] p-5 md:p-10 rounded-[calc(1.5rem-4px)] text-center">
            <h2 className="md:text-3xl text-2xl font-bold mb-4">
              Questions about our Policy?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              If you have any concerns regarding your data or this policy,
              please reach out to our privacy officer.
            </p>
            <Link
              href={"/help"}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 md:px-10 py-4 rounded-full transition-all"
            >
              Contact Privacy Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
