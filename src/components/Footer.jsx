import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070b14] border-t border-blue-900/30 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Care<span className="text-blue-500">.xyz</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Providing professional care and support services tailored to your
            needs. Experience excellence with our dedicated team of experts.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/MRI.Rakib04"
              className="hover:text-blue-400 transition-colors text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/mrirakib04"
              className="hover:text-blue-400 transition-colors text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/webdev-rakib"
              className="hover:text-blue-400 transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mrirakib04"
              className="hover:text-blue-400 transition-colors text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/career"
                className="hover:text-blue-400 transition-colors"
              >
                Join Us
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Support</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                Team Members
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-blue-500 text-xl shrink-0" />
              <span>123 Care Street, Medical District, Dhaka 1212</span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-blue-500 text-lg shrink-0" />
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-blue-500 text-lg shrink-0" />
              <span>support@care.xyz</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-blue-900/20 text-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Care.xyz</span>. All rights reserved.
          Developed with ❤️ by Rakib.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
