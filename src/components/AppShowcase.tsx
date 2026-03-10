import { useState, useMemo } from "react";
import { sampleApps, type AppData } from "@/data/sampleApps";
import SearchBar from "./SearchBar";
import AppCard from "./AppCard";
import SpotlightCard from "./SpotlightCard";
import PromptModal from "./PromptModal";
import { useSpotlight } from "@/hooks/useSpotlight";
import shebuildsLogo from "@/assets/shebuilds-logo-white.png";

const AppShowcase = () => {
  const [query, setQuery] = useState("");
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const spotlightApp = useSpotlight(30_000);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return sampleApps;
    return sampleApps.filter(
      (app) =>
        app.title.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.name.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden py-16 px-4" style={{ background: "var(--gradient-shebuilds)" }}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Logo top-left */}
        <div className="absolute top-6 left-6 z-10">
          <img src={shebuildsLogo} alt="SheBuilds" className="h-10" />
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-[1]">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 text-white">App Showcase</h1>
          <p className="text-lg sm:text-xl text-white/80">
            Discover apps built with{" "}
            <span className="inline-flex items-center gap-1">
              Lovable
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500 inline-block">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            {" "}at the SheBuilds buildathon in Pune, India on International Women's Day 2026
          </p>
        </div>
      </header>

      {/* Search */}
      <SearchBar query={query} onQueryChange={setQuery} resultCount={filtered.length} totalCount={sampleApps.length} />

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Spotlight — sticky on desktop */}
          <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start shrink-0">
            <SpotlightCard app={spotlightApp} onClickApp={setSelectedApp} />
          </div>

          {/* Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20 text-lg">No results found for "{query}"</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((app) => (
                  <AppCard key={app.id} app={app} onClick={() => setSelectedApp(app)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-muted-foreground">
        © 2026{" "}
        <a href="https://www.vmugdha.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
          www.vmugdha.in
        </a>
      </footer>

      {/* Modal */}
      <PromptModal app={selectedApp} open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)} />
    </div>
  );
};

export default AppShowcase;
