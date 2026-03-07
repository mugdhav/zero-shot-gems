export interface AppData {
  id: number;
  name: string;
  title: string;
  description: string;
  tags: string[];
  publishedlink: string;
  prompt: string;
}

/** Helper to get a Lovable app thumbnail from a published URL */
export const getAppThumbnail = (publishedlink: string): string => {
  // Use a screenshot/OG approach — for now we use the published link domain
  // Lovable published apps have OG images at their URL
  try {
    const url = new URL(publishedlink);
    return `https://api.microlink.io/?url=${encodeURIComponent(publishedlink)}&screenshot=true&meta=false&embed=screenshot.url`;
  } catch {
    return "";
  }
};

export const sampleApps: AppData[] = [
  {
    id: 1,
    name: "Amita",
    title: "Ingredient to Kitchen",
    description: "Smart recipe finder that matches available ingredients to delicious meal ideas",
    tags: ["recipe", "cooking", "ingredients", "food", "meal-planning"],
    publishedlink: "https://ingredient-to-kitchen.lovable.app",
    prompt: "Create a recipe finder web app where users can input ingredients they have at home, and the app suggests recipes they can make. Include a clean search interface with ingredient input fields, filter options for dietary preferences (vegetarian, vegan, gluten-free), and display recipe cards with images, cooking time, difficulty level, and ingredient lists. Add the ability to save favorite recipes and generate a shopping list for missing ingredients.",
  },
  {
    id: 2,
    name: "Mugdha",
    title: "Fly Dodge Play",
    description: "Classic Flappy Bird style game with smooth controls and addictive gameplay",
    tags: ["game", "flappy-bird", "arcade", "entertainment", "casual"],
    publishedlink: "https://fly-dodge-play.lovable.app",
    prompt: "Build a Flappy Bird clone game using React. The bird should respond to spacebar or click/tap controls, moving upward with each input and falling due to gravity. Generate randomly positioned pipes that scroll from right to left. Include collision detection, score tracking, game over screen with restart button, and smooth animations. Use canvas or CSS animations for fluid movement. Add sound effects for jumps, scoring, and collisions.",
  },
  {
    id: 3,
    name: "Smridhi",
    title: "Bloom - AI Journal",
    description: "Beautiful personal journaling app with AI-powered insights and reflections",
    tags: ["journaling", "ai", "wellness", "productivity", "mindfulness"],
    publishedlink: "https://bloom-journalling-ai.lovable.app/auth",
    prompt: "Create an AI-powered journaling application with user authentication. Include a beautiful, calming interface for daily journal entries with rich text formatting. Integrate AI features that provide gentle prompts, mood analysis, and personalized reflection questions based on entry content. Add calendar view to browse past entries, mood tracking visualization, search functionality, and privacy settings. Use Supabase for authentication and data storage. Design should emphasize mindfulness and personal growth.",
  },
  {
    id: 4,
    name: "Amol",
    title: "Paper Sleuth",
    description: "Research paper discovery tool for finding and organizing academic publications",
    tags: ["research", "academic", "papers", "search", "bibliography"],
    publishedlink: "https://paper-sleuth.lovable.app",
    prompt: "Build an academic research paper search and management tool. Create a search interface that queries academic databases, displaying results with paper titles, authors, abstracts, publication dates, and citation counts. Include filters for publication year, field of study, and citation threshold. Add features to save papers to collections, export citations in multiple formats (APA, MLA, Chicago), highlight key findings, and create reading lists. Include a clean, scholarly interface with PDF preview capabilities.",
  },
];
