

# Spotlight Section

Add a "Spotlight" area to the left of the app grid that highlights a randomly selected app card, cycling every 30 seconds using a shuffle-without-repeat algorithm.

## Layout Change

The `<main>` section will switch from a single grid to a two-column layout:
- **Left (sticky):** Spotlight card (~1/3 width on desktop) with a "Spotlight" label and a glowing/accent border. On mobile, it sits above the grid as a full-width section.
- **Right:** The existing app card grid (2 cols on lg instead of 3 to accommodate).

## Spotlight Logic (custom hook: `useSpotlight`)

- Maintain a `shuffledQueue` of indices `[0..N-1]`, shuffled randomly.
- Pop from the queue every 30s via `setInterval`. When queue is empty, reshuffle and start over.
- Return the current `sampleApps[index]` as the spotlighted app.
- Uses `useState` + `useEffect` + `useRef` for the queue.

## Components

- **`SpotlightCard`** — A new component wrapping `AppCard` with a "✦ Spotlight" label, a subtle gradient border/glow, and a fade transition when the app changes.
- Clicking it opens the same `PromptModal`.

## Files to Create/Edit

1. **Create `src/hooks/useSpotlight.ts`** — shuffle-cycle hook returning current spotlighted app.
2. **Create `src/components/SpotlightCard.tsx`** — styled wrapper with label and transition.
3. **Edit `src/components/AppShowcase.tsx`** — integrate spotlight into a 2-column layout beside the grid.

