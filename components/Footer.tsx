import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-50 py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-bold text-blue-600">
          Dev<span className="text-black ">Hub</span>
        </div>

        <div className="text-slate-500 text-sm font-medium">
          Developed by{" "}
          <span className="text-slate-900 underline decoration-blue-200">
            SIYD
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com"
            className="text-slate-400 hover:text-blue-600 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-slate-400 hover:text-blue-600 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com"
            className="text-slate-400 hover:text-blue-600 transition"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
