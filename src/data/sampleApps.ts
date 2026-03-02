export interface AppData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  prompt: string;
  gradient: string;
}

export const sampleApps: AppData[] = [
  {
    id: 1,
    title: "Task Manager Pro",
    description: "Kanban-style task board with drag-drop functionality and team collaboration",
    tags: ["productivity", "kanban", "drag-drop"],
    gradient: "from-violet-500 to-purple-600",
    prompt: `Create a Kanban task management board with three columns: To Do, In Progress, and Done. Each task card should display a title, description, priority level (low, medium, high with color coding), and assignee avatar. Implement drag-and-drop between columns using smooth animations. Include a header with a "New Task" button that opens a modal form. Add a search bar to filter tasks. Use a clean, modern design with rounded cards and subtle shadows.`,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather display with forecasts and interactive maps",
    tags: ["dashboard", "weather", "data-viz"],
    gradient: "from-sky-400 to-blue-600",
    prompt: `Build a weather dashboard that shows current conditions including temperature, humidity, wind speed, and UV index. Display a 7-day forecast with daily high/low temps and weather icons. Include an hourly breakdown chart for the current day. Add a city search with autocomplete. Use weather-themed gradients that change based on conditions (sunny = warm tones, rainy = cool tones). Make it fully responsive with card-based layout.`,
  },
  {
    id: 3,
    title: "Pixel Art Studio",
    description: "Browser-based pixel art editor with layers and export options",
    tags: ["creative", "art", "editor"],
    gradient: "from-pink-500 to-rose-600",
    prompt: `Create a pixel art editor with a customizable grid canvas (8x8 to 64x64). Include a color palette with 24 preset colors and a custom color picker. Add tools: pencil, eraser, fill bucket, and color picker eyedropper. Support multiple layers with visibility toggle and opacity slider. Include undo/redo history. Add export options for PNG at 1x, 2x, 4x scale. Dark theme UI with tool sidebar on the left and layers panel on the right.`,
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "Search and save recipes with ingredient-based filtering and meal planning",
    tags: ["e-commerce", "food", "search"],
    gradient: "from-amber-400 to-orange-500",
    prompt: `Build a recipe discovery app where users can search by ingredient, cuisine type, or dietary restriction (vegan, gluten-free, keto). Display recipes in a Pinterest-style masonry grid with food images, cook time, difficulty rating, and calorie count. Clicking a recipe opens a detail view with full ingredient list, step-by-step instructions, and a "Save to Favorites" button. Include a meal planner sidebar where users can drag recipes into weekly slots.`,
  },
  {
    id: 5,
    title: "Chat Room",
    description: "Real-time group chat with emoji reactions and typing indicators",
    tags: ["social", "chat", "real-time"],
    gradient: "from-emerald-400 to-teal-600",
    prompt: `Create a real-time chat application with multiple chat rooms. Each message shows the sender's avatar, username, timestamp, and message content. Add emoji reactions (thumbs up, heart, laugh, wow, sad) that appear below messages. Show typing indicators when other users are composing. Include a user list sidebar showing online/offline status. Support message threading (reply to specific messages). Use a modern messaging UI similar to Discord or Slack.`,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Track workouts and visualize progress with charts and streaks",
    tags: ["productivity", "health", "charts"],
    gradient: "from-lime-400 to-green-600",
    prompt: `Build a fitness tracking dashboard that logs daily workouts with exercise type, duration, calories burned, and intensity level. Display weekly and monthly progress charts showing workout frequency, total calories, and personal records. Include a streak counter with motivational badges. Add a workout library with exercise GIFs and descriptions. Show a calendar heat map of activity. Use an energetic color scheme with green and blue accents.`,
  },
  {
    id: 7,
    title: "Memory Match",
    description: "Classic card matching game with difficulty levels and scoring",
    tags: ["game", "puzzle", "cards"],
    gradient: "from-indigo-500 to-violet-600",
    prompt: `Create a memory card matching game with three difficulty levels: Easy (4x3), Medium (4x4), Hard (6x4). Cards flip with a smooth 3D animation when clicked. Use emoji icons on cards. Track moves count, time elapsed, and best scores. Add a star rating (3 stars for perfect, fewer as moves increase). Include sound effects for flip, match, and win. Show a victory modal with confetti animation when all pairs are found. Add a "Play Again" button that shuffles cards.`,
  },
  {
    id: 8,
    title: "Invoice Generator",
    description: "Create professional invoices with line items and PDF export",
    tags: ["e-commerce", "business", "PDF"],
    gradient: "from-slate-500 to-zinc-700",
    prompt: `Build an invoice generator with editable company details, client information, and line items table. Each line item has description, quantity, unit price, and calculated total. Auto-calculate subtotal, tax (configurable rate), and grand total. Include invoice number auto-generation and date picker. Add a notes/terms section at the bottom. Generate a clean, professional PDF preview. Support multiple currencies. Use a minimal, business-appropriate design with a blue accent color.`,
  },
  {
    id: 9,
    title: "Mood Journal",
    description: "Daily mood tracker with journaling prompts and emotion analytics",
    tags: ["social", "wellness", "journal"],
    gradient: "from-fuchsia-400 to-purple-600",
    prompt: `Create a mood journaling app where users log their daily mood using emoji faces (great, good, okay, bad, awful). Each entry includes a text journal area with optional prompts like "What made you smile today?" and "What's on your mind?". Display a monthly mood calendar with color-coded days. Show mood trends over time with a line chart. Add tags for common triggers (work, sleep, exercise, social). Include a private, calming UI with soft gradients and smooth animations.`,
  },
];
