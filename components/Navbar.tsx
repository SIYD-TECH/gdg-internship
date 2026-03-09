"use client"; 

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-blue-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 tracking-tight"
        >
          Dev<span className="text-slate-900">Hub</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-slate-600 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/resources"
            className="text-slate-600 hover:text-blue-600 font-medium transition"
          >
            Resources
          </Link>
          <Link
            href="/resources"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-blue-50 px-6 py-4 space-y-4 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/resources"
            onClick={() => setIsOpen(false)}
            className="block text-slate-600 font-medium"
          >
            Resources
          </Link>
          <Link
            href="/resources"
            onClick={() => setIsOpen(false)}
            className="block text-blue-600 font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
