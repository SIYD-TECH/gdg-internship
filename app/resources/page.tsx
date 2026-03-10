import Link from "next/link";
import { promises as fs } from "fs";

export default async function ResourcesPage() {

  const file = await fs.readFile(process.cwd() + "/data/resources.json" , 'utf8')

  const allResources = JSON.parse(file);

  return (
    <main className="p-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">All Resources</h1>

      <div className="grid px-30 grid-cols-1 md:grid-cols-3 gap-6">
        {allResources.map((item: any) => (
          <div
            key={item.slug}
            className="p-6 bg-white rounded-xl border border-blue-100 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
            <p className="text-slate-600 mt-2 mb-4">{item.description}</p>

            <Link
              href={`/resources/${item.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
