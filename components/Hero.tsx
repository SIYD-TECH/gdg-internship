import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-30 px-6 text-center bg-slate-50 border-b border-blue-50">
      <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6">
        New: 2026 Dev Tools Added
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl">
        Developer <span className="text-blue-600">Resource Hub</span>
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
        The best tools for modern web development, hand-picked for your next
        project. Stop searching and start building.
      </p>

      <div className="mt-10 flex gap-4">
        <Link
          href="/resources"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-0.5"
        >
          Explore Resources
        </Link>
      </div>
    </section>
  );
}
