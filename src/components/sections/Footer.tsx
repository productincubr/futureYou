import Link from "next/link";
import {
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
  } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#E9EAEB] bg-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand */}

          <div className="md:col-span-1">

            <div className="flex items-center gap-2 mb-5">

              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] flex items-center justify-center text-white text-sm">
                ✦
              </div>

              <span className="font-medium text-[#101828]">
                Future You
              </span>

            </div>

            <p className="text-sm text-[#667085] leading-7 max-w-[240px]">
              An AI-powered future-self visualization platform
              for the people who refuse to stay the same.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <div className="w-8 h-8 rounded-full border border-[#EAECF0] flex items-center justify-center">
                <FaXTwitter size={14} />
              </div>

              <div className="w-8 h-8 rounded-full border border-[#EAECF0] flex items-center justify-center">
                <FaInstagram size={14} />
              </div>

              <div className="w-8 h-8 rounded-full border border-[#EAECF0] flex items-center justify-center">
                <FaYoutube size={14} />
              </div>

              <div className="w-8 h-8 rounded-full border border-[#EAECF0] flex items-center justify-center">
                <FaLinkedinIn size={14} />
              </div>

            </div>

          </div>

          {/* Product */}

          <div>
            <h4 className="font-medium text-[#101828] mb-5">
              Product
            </h4>

            <ul className="space-y-4 text-sm text-[#667085]">
              <li><Link href="#">How It Works</Link></li>
              <li><Link href="#">Transformations</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Science</Link></li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h4 className="font-medium text-[#101828] mb-5">
              Company
            </h4>

            <ul className="space-y-4 text-sm text-[#667085]">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Manifesto</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h4 className="font-medium text-[#101828] mb-5">
              Resources
            </h4>

            <ul className="space-y-4 text-sm text-[#667085]">
              <li><Link href="#">Success Stories</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}

          <div>
            <h4 className="font-medium text-[#101828] mb-5">
              Legal
            </h4>

            <ul className="space-y-4 text-sm text-[#667085]">
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
              <li><Link href="#">Data & AI</Link></li>
              <li><Link href="#">Cookies</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}

        <div className="border-t border-[#EAECF0] mt-16 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-xs text-[#98A2B3]">
            © 2026 Future You, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2 mt-4 md:mt-0">

            <div className="w-2 h-2 rounded-full bg-[#00D3F3]" />

            <span className="text-xs text-[#98A2B3]">
              Built for the person you're becoming.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}