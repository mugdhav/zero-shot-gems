import { useEffect, useState } from "react";
import type { AppData } from "@/data/sampleApps";
import AppCard from "./AppCard";

interface SpotlightCardProps {
  app: AppData;
  onClickApp: (app: AppData) => void;
}

const SpotlightCard = ({ app, onClickApp }: SpotlightCardProps) => {
  const [visible, setVisible] = useState(true);
  const [displayedApp, setDisplayedApp] = useState(app);

  useEffect(() => {
    if (app.id === displayedApp.id) return;
    setVisible(false);
    const timeout = setTimeout(() => {
      setDisplayedApp(app);
      setVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, [app, displayedApp.id]);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold tracking-wide text-accent">✦ Spotlight</span>
      </div>
      <div
        className="rounded-xl p-[2px]"
        style={{ background: "var(--gradient-shebuilds)" }}
      >
        <div
          className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <AppCard app={displayedApp} onClick={() => onClickApp(displayedApp)} />
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
