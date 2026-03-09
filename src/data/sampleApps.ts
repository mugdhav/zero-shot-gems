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
  creatorLink?: string; // LinkedIn / X / Instagram profile URL
  objectPosition?: string; // CSS object-position for thumbnail (default: top)
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
    thumbnail:
      "https://iad.microlink.io/Cp_knBZVTrCi_3f2GvqRqBbYRZTgYrSea-hNDo0IICz_Xb8f3lvNuxaZrdHCiKUX_blo1gD2RRqJ0a0e3XP7yA.png",
    prompt:
      "Build a Flappy Bird clone game using React. The bird should respond to spacebar or click/tap controls, moving upward with each input and falling due to gravity. Generate randomly positioned pipes that scroll from right to left. Include collision detection, score tracking, game over screen with restart button, and smooth animations. Use canvas or CSS animations for fluid movement. Add sound effects for jumps, scoring, and collisions.",
    creatorLink: "https://linkedin.com/in/mugdhav",
  },
  {
    id: 2,
    name: "Mugdha",
    title: "Shetkari Mitra",
    description: "Job portal for seasonal farm work in Marathi",
    tags: ["farm", "work", "seasonal", "job", "post", "marathi"],
    publishedlink: "https://sheti-mitra-app.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fsheti-mitra-app.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    prompt:
      "ग्रामीण भागातील शेतकऱ्यांसाठी हंगामी कामगारांसाठी शेती विषयक नोकऱ्या post करण्यासाठी मराठीत एक संकेतस्थळ तयार करा. या संकेतस्थळ मध्ये हंगामी कामगारांना नोकरीच्या post ला pratisad देण्याची सुविधा असावी. संकेतस्थळ demo साठी डमी data पण तयार करा.",
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
    thumbnail:
      "https://iad.microlink.io/hqECXsklVBnFjDZs_2g46eElIh1P8Vgr-qJ4dwLt06bQE0JntBmJAKNPA4qms5LgzPWKo-eGT7ezmj6BZu4ftQ.png",
    prompt:
      "Create a recipe finder web app where users can input ingredients they have at home, and the app suggests recipes they can make. Include a clean search interface with ingredient input fields, filter options for dietary preferences (vegetarian, vegan, gluten-free), and display recipe cards with images, cooking time, difficulty level, and ingredient lists. Add the ability to save favorite recipes and generate a shopping list for missing ingredients.",
    creatorLink: "https://linkedin.com/in/amita-kuvalekar",
  },
  {
    id: 4,
    name: "Reenal",
    title: "Headline Hero",
    description: "Generate posts for multiple social media platforms from single content",
    tags: ["socmed", "post", "ai", "generate"],
    publishedlink: "https://headline-hero-app.lovable.app",
    thumbnail:
      "https://iad.microlink.io/DzPfnX9cVNmDsm_II_jyKlHF6JjmjUWNEnYKH9Onyo9x9SHTksRZjp3JxsmTIklkhWYInnqtwMovsYLkuf9aEA.png",
    prompt:
      "Build a social media content repurposing tool called Headline Hero. The user pastes a single piece of source content (article, blog post, or idea) into a text area. The app then generates tailored posts for Twitter/X (280 chars), LinkedIn (professional tone, up to 3000 chars), Instagram (caption + hashtag suggestions), and Facebook (conversational, shareable). Display each output in a tabbed card with a one-click copy button. Add a tone selector (professional, casual, witty) that adjusts all outputs simultaneously. Use a bold, energetic design with platform brand colors on each tab.",
    creatorLink: "https://linkedin.com/in/reena",
  },
  {
    id: 5,
    name: "Smridhi",
    title: "Bloom - AI Journal",
    description: "Beautiful personal journaling app with AI-powered insights and reflections",
    tags: ["journaling", "ai", "wellness", "productivity", "mindfulness"],
    publishedlink: "https://bloom-journalling-ai.lovable.app/auth",
    thumbnail:
      "https://iad.microlink.io/Jhcz-idgIpMCZh3D5t_1mv3ULFSQqpVChHVdNcsO3-YYmvi9YZ0R5HEUCpul42B13Uua8m8GD5Eztl_2vt6wXw.png",
    prompt:
      "Create an AI-powered journaling application with user authentication. Include a beautiful, calming interface for daily journal entries with rich text formatting. Integrate AI features that provide gentle prompts, mood analysis, and personalized reflection questions based on entry content. Add calendar view to browse past entries, mood tracking visualization, search functionality, and privacy settings. Use Supabase for authentication and data storage. Design should emphasize mindfulness and personal growth.",
    creatorLink: "https://linkedin.com/in/smridhigupta",
  },
  {
    id: 6,
    name: "Surbhi Pai",
    title: "DonationDesk",
    description: "Web app to help NGOs manage requirement and distribution of in-kind donations efficiently",
    tags: ["ngo", "donation-management", "social-impact", "nonprofit", "crm"],
    publishedlink: "https://dogoodalways.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fdogoodalways.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    prompt:
      "Create a donation management system for NGOs that tracks in-kind donations (non-monetary items like clothes, food, supplies). Build a dashboard showing donation requirements, donor information, and distribution tracking. Include features for: listing required items with quantities, recording incoming donations with donor details, matching donations to requirements, tracking distribution to beneficiaries, generating reports on donation impact, and managing volunteer assignments. Use a clean, accessible interface with data tables, status indicators, and search/filter functionality.",
    creatorLink: "https://www.linkedin.com/in/surbhi-pai",
  },
  {
    id: 7,
    name: "Sneha Deshpande",
    title: "Course Compass AI",
    description:
      "AI-powered platform to help learners navigate the crowded learning marketplace and find their perfect course",
    tags: ["education", "ai", "course-finder", "learning", "recommendation-engine"],
    publishedlink: "https://course-compass-chooser.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fcourse-compass-chooser.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    prompt:
      "Build an AI-powered course recommendation platform that helps users find the perfect online course. Create a multi-step questionnaire collecting user's learning goals, skill level, time commitment, budget, and preferred learning style. Integrate with an AI API (like Claude) to analyze responses and recommend courses from major platforms (Coursera, Udemy, edX, etc.). Display recommendations with course details, ratings, duration, pricing, and personalized reasoning for each suggestion. Include filters for platform, price range, difficulty level, and subject area. Add comparison features and the ability to save favorite courses.",
    creatorLink: "https://www.linkedin.com/in/sneha-deshpande-05034617/",
  },
  {
    id: 8,
    name: "Kritika Soni",
    title: "Build a Little Town",
    description: "Engaging drawing game with superb visuals where players create and build their own charming town",
    tags: ["game", "creative", "drawing", "kids", "art", "simulation"],
    publishedlink: "https://build-a-town-play.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fbuild-a-town-play.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    objectPosition: "center",
    prompt:
      "Create an interactive town-building drawing game for children with beautiful, whimsical illustrations. Allow players to draw or place buildings, houses, trees, roads, and decorations on a canvas to build their own town. Include a palette of colorful pre-designed elements (houses, shops, parks, vehicles, people) that can be dragged and placed. Add drawing tools for roads and custom decorations. Implement layers so items can overlap properly. Include a save/load feature for town designs, zoom and pan controls, and a gallery of example towns for inspiration. Use vibrant colors, smooth animations, and child-friendly UI with large, clear buttons and icons.",
    creatorLink: "https://www.linkedin.com/in/kritikasoni8/",
  },
  {
    id: 9,
    name: "Archana Kshirsagar",
    title: "Speak n Spell Buddy",
    description:
      "Interactive spelling game for children inspired by The Hangman, making learning to spell fun and engaging",
    tags: ["game", "education", "kids", "spelling", "learning", "word-game"],
    publishedlink: "https://speak-n-spell-buddy.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fspeak-n-spell-buddy.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    prompt:
      "Build an educational spelling game for children based on Hangman mechanics. Display blank spaces for each letter of a word, with hints or categories provided. Players guess letters using an on-screen keyboard or typing. Show correct letters in their positions and track incorrect guesses with a visual indicator (but make it child-friendly, not a traditional hangman). Include difficulty levels (easy, medium, hard) with age-appropriate word lists. Add voice pronunciation of words when revealed, encouraging sound effects for correct/incorrect guesses, score tracking, and a reward system with stars or badges. Use bright colors, large fonts, and animated feedback to keep children engaged.",
    creatorLink: "https://www.linkedin.com/in/archana-kshirasagar-8a1b665/",
  },
  {
    id: 10,
    name: "Madhushree Wagh",
    title: "AdRideCRM™",
    description:
      "Lovable app built on a smartphone. Connecting cab and auto drivers with advertisers to generate extra income through vehicle advertising",
    tags: ["crm", "advertising", "mobile-app", "gig-economy", "marketplace", "revenue"],
    publishedlink: "https://adride-drive-earn.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fadride-drive-earn.lovable.app&screenshot=true&meta=false&embed=screenshot.url",
    prompt:
      "Create a mobile-optimized CRM platform connecting drivers (cab/auto) with advertisers for vehicle advertising opportunities. Build two user types: Driver Portal - registration with vehicle details, available advertising space (rear window, sides, top), earnings dashboard, campaign management, and payout tracking; Advertiser Portal - campaign creation, target audience selection, budget management, driver matching based on routes/areas, and performance analytics. Include a marketplace showing available advertising slots, pricing calculator based on vehicle type and duration, approval workflow, contract management, and photo verification of ad placement. Design with a mobile-first responsive interface, touch-friendly controls, and offline capabilities for drivers on the go.",
    creatorLink: "https://www.linkedin.com/in/madhushriwagh",
  },
  {
    id: 11,
    name: "Maitree Purohit",
    title: "Pause",
    description:
      "Voice-guided emergency support platform with sensory-safe UI for neurodivergent users to handle panic, stress, and cognitive overload",
    tags: ["mental-health", "accessibility", "neurodivergent", "adhd", "wellness", "crisis-support"],
    publishedlink: "https://letspause.lovable.app",
    thumbnail:
      "https://api.microlink.io/?url=https%3A%2F%2Fletspause.lovable.app&screenshot=true&meta=false&embed=screenshot.url&waitFor=3000",
    prompt:
      "Build an emergency mental health support platform designed specifically for neurodivergent users (ADHD, autism, anxiety disorders) experiencing panic, stress, or cognitive overload. Create a sensory-safe interface with: minimal visual stimulation (no bright colors, busy patterns, or flashing elements), large touch targets, simple navigation with few choices at once, and dark mode support. Include voice-guided breathing exercises with visual aids (expanding circles, progress bars), grounding techniques (5-4-3-2-1 sensory method), calming soundscapes, and crisis contact quick-access buttons. Implement text-to-speech for all instructions, customizable session lengths, and the ability to save favorite exercises. Use gentle animations, reduced motion options, and a calming color palette. Add features like body scan meditations, thought journals, and emergency coping strategies with step-by-step audio guidance.",
    creatorLink: "https://www.linkedin.com/in/maitree-purohit-8b979622b",
  },
  {
    id: 12,
    name: "Amol",
    title: "Paper Sleuth",
    description: "Research paper discovery tool for finding and organizing academic publications",
    tags: ["research", "academic", "papers", "search", "bibliography"],
    publishedlink: "https://paper-sleuth.lovable.app",
    thumbnail:
      "https://iad.microlink.io/WOs6DsCfaIpHfvQv2GwtBex04sMav_V9tQt6mdA2yF8zdy53yuXYDHUQLV9Wrhc--vUsT-x2C3Fdm5MRGoAQpg.png",
    prompt:
      "Build an academic research paper search and management tool. Create a search interface that queries academic databases, displaying results with paper titles, authors, abstracts, publication dates, and citation counts. Include filters for publication year, field of study, and citation threshold. Add features to save papers to collections, export citations in multiple formats (APA, MLA, Chicago), highlight key findings, and create reading lists. Include a clean, scholarly interface with PDF preview capabilities.",
  },
];
