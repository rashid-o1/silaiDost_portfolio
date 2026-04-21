import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="w-full sticky-nav">
      <div className="flex flex-col flex-wrap max-w-5xl p-2.5 mx-auto md:flex-row">
        <div className="flex flex-row items-center justify-between p-2 md:p-1">
          <Link href="/">
            <a className="mb-4 text-2xl font-medium text-black transition duration-300 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white md:mb-0">
              SilaiDost
            </a>
          </Link>

          <button
            className="px-3 py-1 pb-4 ml-auto text-black outline-none dark:text-gray-300 md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="6" y2="6" x2="21"></line>
              <line x1="3" y1="12" y2="12" x2="21"></line>
              <line x1="3" y1="18" y2="18" x2="21"></line>
            </svg>
          </button>
        </div>

        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex flex-wrap items-center justify-center pt-1 pl-2 ml-1 space-x-8 md:space-x-16 md:mx-auto md:pl-14">
            <Link href="/">
              <a className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-500">
                Home
              </a>
            </Link>

            <Link href="/privacy-policy">
              <a className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-500">
                Privacy Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}