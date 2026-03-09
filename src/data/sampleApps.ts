export interface AppData {
  id: number;
  name: string;
  title: string;
  description: string;
  tags: string[];
  publishedlink: string;
  prompt: string;
  thumbnail: string;
  promptLang?: string;
  creatorLink?: string;  // LinkedIn / X / Instagram profile URL
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
    name: "Mugdha",
    title: "Fly Dodge Play",
    description: "Classic Flappy Bird style game with smooth controls and addictive gameplay",
    tags: ["game", "flappy-bird", "arcade", "entertainment", "casual"],
    publishedlink: "https://fly-dodge-play.lovable.app",
    thumbnail: "https://iad.microlink.io/Cp_knBZVTrCi_3f2GvqRqBbYRZTgYrSea-hNDo0IICz_Xb8f3lvNuxaZrdHCiKUX_blo1gD2RRqJ0a0e3XP7yA.png",
    prompt: "Build a Flappy Bird clone game using React. The bird should respond to spacebar or click/tap controls, moving upward with each input and falling due to gravity. Generate randomly positioned pipes that scroll from right to left. Include collision detection, score tracking, game over screen with restart button, and smooth animations. Use canvas or CSS animations for fluid movement. Add sound effects for jumps, scoring, and collisions.",
    creatorLink: "https://linkedin.com/in/mugdhav",
  },
  {
    id: 2,
    name: "Mugdha",
    title: "Sheti Mitra",
    description: "Job portal for seasonal farm work in Marathi",
    tags: ["farm", "work", "seasonal", "job", "post", "marathi"],
    publishedlink: "https://sheti-mitra-app.lovable.app",
    thumbnail: "https://iad.microlink.io/9JC0Xa04CcaNCiF-c_oss_J8r71i94b4jj97bCN5-GQQDN76Wox154XHoBuEzJBnwO7zaELnd9a_jQv4mQjl_g.png",
    prompt: "ग्रामीण भागातील शेतकऱ्यांसाठी हंगामी कामगारांसाठी शेती विषयक नोकऱ्या post करण्यासाठी मराठीत एक संकेतस्थळ तयार करा. या संकेतस्थळ मध्ये हंगामी कामगारांना नोकरीच्या post ला pratisad देण्याची सुविधा असावी. संकेतस्थळ demo साठी डमी data पण तयार करा.",
    promptLang: "mr",
    creatorLink: "https://linkedin.com/in/mugdhav",
  },
  {
    id: 3,
    name: "Amita",
    title: "Ingredient to Kitchen",
    description: "Smart recipe finder that matches available ingredients to delicious meal ideas",
    tags: ["recipe", "cooking", "ingredients", "food", "meal-planning"],
    publishedlink: "https://ingredient-to-kitchen.lovable.app",
    thumbnail: "https://iad.microlink.io/hqECXsklVBnFjDZs_2g46eElIh1P8Vgr-qJ4dwLt06bQE0JntBmJAKNPA4qms5LgzPWKo-eGT7ezmj6BZu4ftQ.png",
    prompt: "Create a recipe finder web app where users can input ingredients they have at home, and the app suggests recipes they can make. Include a clean search interface with ingredient input fields, filter options for dietary preferences (vegetarian, vegan, gluten-free), and display recipe cards with images, cooking time, difficulty level, and ingredient lists. Add the ability to save favorite recipes and generate a shopping list for missing ingredients.",
    creatorLink: "https://linkedin.com/in/amita-kuvalekar",
  },
  {
    id: 4,
    name: "Reenal",
    title: "Headline Hero",
    description: "Generate posts for multiple social media platforms from single content",
    tags: ["socmed", "post", "ai", "generate"],
    publishedlink: "https://headline-hero-app.lovable.app",
    thumbnail: "https://iad.microlink.io/DzPfnX9cVNmDsm_II_jyKlHF6JjmjUWNEnYKH9Onyo9x9SHTksRZjp3JxsmTIklkhWYInnqtwMovsYLkuf9aEA.png",
    prompt: "Build a social media content repurposing tool called Headline Hero. The user pastes a single piece of source content (article, blog post, or idea) into a text area. The app then generates tailored posts for Twitter/X (280 chars), LinkedIn (professional tone, up to 3000 chars), Instagram (caption + hashtag suggestions), and Facebook (conversational, shareable). Display each output in a tabbed card with a one-click copy button. Add a tone selector (professional, casual, witty) that adjusts all outputs simultaneously. Use a bold, energetic design with platform brand colors on each tab.",
    creatorLink: "https://linkedin.com/in/reena",
  },
  {
    id: 5,
    name: "Smridhi",
    title: "Bloom - AI Journal",
    description: "Beautiful personal journaling app with AI-powered insights and reflections",
    tags: ["journaling", "ai", "wellness", "productivity", "mindfulness"],
    publishedlink: "https://bloom-journalling-ai.lovable.app/auth",
    thumbnail: "https://iad.microlink.io/Jhcz-idgIpMCZh3D5t_1mv3ULFSQqpVChHVdNcsO3-YYmvi9YZ0R5HEUCpul42B13Uua8m8GD5Eztl_2vt6wXw.png",
    prompt: "Create an AI-powered journaling application with user authentication. Include a beautiful, calming interface for daily journal entries with rich text formatting. Integrate AI features that provide gentle prompts, mood analysis, and personalized reflection questions based on entry content. Add calendar view to browse past entries, mood tracking visualization, search functionality, and privacy settings. Use Supabase for authentication and data storage. Design should emphasize mindfulness and personal growth.",
    creatorLink: "https://linkedin.com/in/smridhigupta",
  },
  {
    id: 6,
    name: "Amol",
    title: "Paper Sleuth",
    description: "Research paper discovery tool for finding and organizing academic publications",
    tags: ["research", "academic", "papers", "search", "bibliography"],
    publishedlink: "https://paper-sleuth.lovable.app",
    thumbnail: "https://iad.microlink.io/WOs6DsCfaIpHfvQv2GwtBex04sMav_V9tQt6mdA2yF8zdy53yuXYDHUQLV9Wrhc--vUsT-x2C3Fdm5MRGoAQpg.png",
    prompt: "Build an academic research paper search and management tool. Create a search interface that queries academic databases, displaying results with paper titles, authors, abstracts, publication dates, and citation counts. Include filters for publication year, field of study, and citation threshold. Add features to save papers to collections, export citations in multiple formats (APA, MLA, Chicago), highlight key findings, and create reading lists. Include a clean, scholarly interface with PDF preview capabilities.",
  },
];
