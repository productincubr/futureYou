import Link from "next/link";
import {
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
  } from "react-icons/fa6";

const socials = [FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn];

const columns = [
  { title: "Product", links: ["How It Works", "Transformations", "Pricing", "Science"] },
  { title: "Company", links: ["About", "Manifesto", "Careers", "Press"] },
  { title: "Resources", links: ["Success Stories", "Blog", "Help Center", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Data & AI", "Cookies"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E9EAEB] dark:border-white/10 bg-white dark:bg-ink-950">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-12">

          {/* Brand */}

          <div className="col-span-2 md:col-span-1">

            <div className="flex items-center gap-2 mb-5">

              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#AD46FF] via-[#E12AFB] to-[#00D3F3] flex items-center justify-center text-white text-sm">
                ✦
              </div>

              <span className="font-medium text-[#101828] dark:text-white">
                Future You
              </span>

            </div>

            <p className="text-sm text-[#667085] dark:text-gray-400 leading-7 max-w-[280px] md:max-w-[240px]">
              An AI-powered future-self visualization platform
              for the people who refuse to stay the same.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socials.map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border border-[#EAECF0] dark:border-white/10 text-[#101828] dark:text-gray-300 flex items-center justify-center"
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>

          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-medium text-[#101828] dark:text-white mb-5">
                {col.title}
              </h4>

              <ul className="space-y-4 text-sm text-[#667085] dark:text-gray-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Row */}

        <div className="border-t border-[#EAECF0] dark:border-white/10 mt-12 md:mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">

          <p className="text-xs text-[#98A2B3] dark:text-gray-500">
            © 2026 Future You, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-[#00D3F3]" />

            <span className="text-xs text-[#98A2B3] dark:text-gray-500">
              Built for the person you're becoming.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}
