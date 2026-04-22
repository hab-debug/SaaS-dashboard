import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#020617] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">AI SaaS</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Build smarter with AI-powered tools designed for modern creators and businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 text-xl">
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiGithub /></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AI SaaS. All rights reserved.
        </div>

      </div>
    </footer>
  );
}