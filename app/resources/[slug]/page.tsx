import { promises as fs } from "fs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Resource {
  slug: string;
  name: string;
  description: string;
}
const ResourceDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const file = await fs.readFile(
    process.cwd() + "/data/resources.json",
    "utf8",
  );

  const resources: Resource[] = JSON.parse(file);

  const resource = resources.find((item) => item.slug === slug);

  if (!resource) notFound();

  return (
    <>
      <main className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center mb-10 transition"
          >
            <span className="mr-2">←</span> Back to Library
          </Link>

          <div className="bg-slate-50 border border-blue-50 rounded-3xl p-8 md:p-16 shadow-sm">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Resource Details
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-8">
              {resource.name}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              {resource.description}
            </p>

            <div className="mt-12 pt-10 border-t border-slate-200">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                Visit Official {resource.name} Site
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResourceDetails;
