

# Lovable.dev App Showcase

A single-page application showcasing apps built with zero-shot prompts on Lovable.dev.

## Header Section
- Title: "Lovable.dev App Showcase" with subtitle "Discover apps built with zero-shot prompts"
- Purple/blue tech-themed gradient accent
- Clean, modern typography

## Sticky Search Bar
- Prominently placed below the header with sticky positioning
- Real-time filtering across app titles, descriptions, and tags (case-insensitive)
- Result count display (e.g., "Showing 6 of 9 apps")
- "No results found" message when search yields nothing

## App Cards Grid
- **Desktop:** 3 columns | **Tablet:** 2 columns | **Mobile:** 1 column
- Each card shows:
  - Placeholder thumbnail (16:9 aspect ratio) with gradient background
  - Bold app title
  - Brief description (max 20 words)
  - Pill-shaped tag badges
- Hover effects: subtle scale and shadow transitions (0.2-0.3s)
- Rounded corners and soft shadows

## Prompt Modal
- Clicking a card opens a dialog overlay showing the full zero-shot prompt
- App title at the top, prompt in a formatted code block
- Scrollable for long content
- Closes via X button, backdrop click, or ESC key
- Semi-transparent backdrop

## Sample Data
- 9 sample apps across categories: productivity, games, dashboards, creative tools, e-commerce, and social features
- Each with a realistic zero-shot prompt

## Component Structure
- `AppShowcase` — main page layout
- `SearchBar` — search input with result count
- `AppCard` — individual app card
- `PromptModal` — dialog for viewing prompts

