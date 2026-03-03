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
        app.name.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="relative overflow-hidden py-16 px-4"
        style={{ background: "var(--gradient-shebuilds)" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-6xl mx-auto text-center relative z-[1]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-black text-white">S</span>
            </div>
            <span className="text-3xl font-black text-white tracking-tight">SheBuilds</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-white">
            App Showcase
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            Discover apps built with zero-shot prompts on Lovable
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
