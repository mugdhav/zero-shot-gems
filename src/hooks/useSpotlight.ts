import { useState, useEffect, useRef, useCallback } from "react";
import { sampleApps, type AppData } from "@/data/sampleApps";

function shuffle(arr: number[]): number[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useSpotlight(intervalMs = 30_000): AppData {
  const total = sampleApps.length;
  const queueRef = useRef<number[]>([]);

  const pickNext = useCallback((): number => {
    if (queueRef.current.length === 0) {
      queueRef.current = shuffle(Array.from({ length: total }, (_, i) => i));
    }
    return queueRef.current.pop()!;
  }, [total]);

  const [index, setIndex] = useState(() => pickNext());

  useEffect(() => {
    const id = setInterval(() => setIndex(pickNext()), intervalMs);
    return () => clearInterval(id);
  }, [pickNext, intervalMs]);

  return sampleApps[index];
}
