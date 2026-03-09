
export default function FeatureSection() {
  const featureList = [
    {
      title: "Handpicked Tools",
      description:
        "We only list the highest-quality libraries and frameworks used by top engineers.",
      icon: "🛠️",
    },
    {
      title: "Always Updated",
      description:
        "Our database is refreshed daily to ensure you're using the latest versions.",
      icon: "⚡",
    },
    {
      title: "Community Driven",
      description:
        "Join thousands of developers sharing their favorite resources every day.",
      icon: "🌍",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Why use <span className="text-blue-600">DevHub?</span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-lg mx-auto">
          Everything you need to go from an idea to a production-ready
          application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-blue-50 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-left group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
