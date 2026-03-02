import { useState, useMemo } from "react";
import { sampleApps, type AppData } from "@/data/sampleApps";
import SearchBar from "./SearchBar";
import AppCard from "./AppCard";
import PromptModal from "./PromptModal";

const AppShowcase = () => {
  const [query, setQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return sampleApps;
    return sampleApps.filter(
      (app) =>
        app.title.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="max-w-6xl mx-auto text-center relative z-[1]">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Lovable.dev App Showcase
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            Discover apps built with zero-shot prompts
          </p>
        </div>
      </header>

      {/* Search */}
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        resultCount={filtered.length}
        totalCount={sampleApps.length}
      />

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20 text-lg">
            No results found for "{query}"
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} onClick={() => setSelectedApp(app)} />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      <PromptModal
        app={selectedApp}
        open={!!selectedApp}
        onOpenChange={(open) => !open && setSelectedApp(null)}
      />
    </div>
  );
};

export default AppShowcase;
