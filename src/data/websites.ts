export interface Website {
  id: string;
  url: string;
  name: string;
  category: WebsiteCategory;
  isApproved: boolean;
  description: string;
}

export type WebsiteCategory = 
  | 'fun'
  | 'comics'
  | 'news'
  | 'tech'
  | 'business'
  | 'health'
  | 'lifestyle'
  | 'education'
  | 'search'
  | 'tools'
  | 'inspiration'
  | 'humor'
  | 'entertainment';

export const categoryLabels: Record<WebsiteCategory, string> = {
  fun: 'Fun & Quirky',
  comics: 'Comics',
  news: 'News',
  tech: 'Technology',
  business: 'Business',
  health: 'Health & Wellness',
  lifestyle: 'Lifestyle',
  education: 'Education',
  search: 'Search',
  tools: 'Tools',
  inspiration: 'Inspiration',
  humor: 'Humor',
  entertainment: 'Entertainment',
};

export const categoryIcons: Record<WebsiteCategory, string> = {
  fun: '🎮',
  comics: '📚',
  news: '📰',
  tech: '💻',
  business: '💼',
  health: '💪',
  lifestyle: '🌟',
  education: '📖',
  search: '🔍',
  tools: '🛠️',
  inspiration: '✨',
  humor: '😂',
  entertainment: '🎬',
};

export const websites: Website[] = [
  { id: '1', url: 'https://www.pointerpointer.com', name: 'Pointer Pointer', category: 'fun', isApproved: true, description: 'A funny interactive site' },
  { id: '2', url: 'https://www.theuselessweb.com', name: 'The Useless Web', category: 'fun', isApproved: true, description: 'Collection of useless websites' },
  { id: '3', url: 'https://www.koalastothemax.com', name: 'Koala to the Max', category: 'fun', isApproved: true, description: 'Interactive visual experience' },
  { id: '4', url: 'https://www.staggeringbeauty.com', name: 'Staggering Beauty', category: 'fun', isApproved: true, description: 'Interactive art' },
  { id: '5', url: 'https://www.rrrgggbbb.com', name: 'RGB Color Game', category: 'fun', isApproved: true, description: 'Color exploration' },
  { id: '6', url: 'https://www.zombo.com', name: 'Zombo', category: 'fun', isApproved: true, description: 'Classic weird site' },
  { id: '7', url: 'https://www.potatoortomato.com', name: 'Potato or Tomato', category: 'fun', isApproved: true, description: 'The ultimate question' },
  { id: '8', url: 'https://www.xkcd.com', name: 'XKCD', category: 'comics', isApproved: true, description: 'Geek comics' },
  { id: '9', url: 'https://www.smbc-comics.com', name: 'SMBC Comics', category: 'comics', isApproved: true, description: 'Saturday Morning Breakfast Cereal' },
  { id: '10', url: 'https://www.qwantz.com', name: 'Dinosaur Comics', category: 'comics', isApproved: true, description: 'Funny dinosaur comics' },
  { id: '11', url: 'https://www.explainxkcd.com', name: 'Explain XKCD', category: 'comics', isApproved: true, description: 'XKCD explanations' },
  { id: '12', url: 'https://www.dilbert.com', name: 'Dilbert', category: 'comics', isApproved: true, description: 'Workplace humor' },
  { id: '13', url: 'https://www.clickhole.com', name: 'ClickHole', category: 'humor', isApproved: true, description: 'Satirical news' },
  { id: '14', url: 'https://www.theonion.com', name: 'The Onion', category: 'humor', isApproved: true, description: 'Satire news' },
  { id: '15', url: 'https://www.theoatmeal.com', name: 'The Oatmeal', category: 'humor', isApproved: true, description: 'Funny comics and articles' },
  { id: '16', url: 'https://www.bbc.com', name: 'BBC News', category: 'news', isApproved: true, description: 'World news' },
  { id: '17', url: 'https://www.cnn.com', name: 'CNN', category: 'news', isApproved: true, description: 'News network' },
  { id: '18', url: 'https://www.nytimes.com', name: 'New York Times', category: 'news', isApproved: true, description: 'Newspaper' },
  { id: '19', url: 'https://www.washingtonpost.com', name: 'Washington Post', category: 'news', isApproved: true, description: 'News publication' },
  { id: '20', url: 'https://www.theguardian.com', name: 'The Guardian', category: 'news', isApproved: true, description: 'UK news' },
  { id: '21', url: 'https://www.theverge.com', name: 'The Verge', category: 'tech', isApproved: true, description: 'Tech news' },
  { id: '22', url: 'https://www.techcrunch.com', name: 'TechCrunch', category: 'tech', isApproved: true, description: 'Tech startup news' },
  { id: '23', url: 'https://www.gizmodo.com', name: 'Gizmodo', category: 'tech', isApproved: true, description: 'Tech and gadgets' },
  { id: '24', url: 'https://www.wired.com', name: 'Wired', category: 'tech', isApproved: true, description: 'Technology magazine' },
  { id: '25', url: 'https://www.cnet.com', name: 'CNET', category: 'tech', isApproved: true, description: 'Tech reviews' },
  { id: '26', url: 'https://www.zdnet.com', name: 'ZDNet', category: 'tech', isApproved: true, description: 'Enterprise tech' },
  { id: '27', url: 'https://www.forbes.com', name: 'Forbes', category: 'business', isApproved: true, description: 'Business news' },
  { id: '28', url: 'https://www.bloomberg.com', name: 'Bloomberg', category: 'business', isApproved: true, description: 'Financial news' },
  { id: '29', url: 'https://www.reuters.com', name: 'Reuters', category: 'business', isApproved: true, description: 'News agency' },
  { id: '30', url: 'https://www.economist.com', name: 'The Economist', category: 'business', isApproved: true, description: 'Economic news' },
  { id: '31', url: 'https://www.inc.com', name: 'Inc.', category: 'business', isApproved: true, description: 'Entrepreneurship' },
  { id: '32', url: 'https://www.fastcompany.com', name: 'Fast Company', category: 'business', isApproved: true, description: 'Innovation' },
  { id: '33', url: 'https://www.menshealth.com', name: "Men's Health", category: 'health', isApproved: true, description: 'Health for men' },
  { id: '34', url: 'https://www.womenshealthmag.com', name: "Women's Health", category: 'health', isApproved: true, description: 'Health for women' },
  { id: '35', url: 'https://www.self.com', name: 'Self', category: 'health', isApproved: true, description: 'Fitness and wellness' },
  { id: '36', url: 'https://www.yogajournal.com', name: 'Yoga Journal', category: 'health', isApproved: true, description: 'Yoga and wellness' },
  { id: '37', url: 'https://www.mindbodygreen.com', name: 'Mindbodygreen', category: 'health', isApproved: true, description: 'Wellness' },
  { id: '38', url: 'https://www.cosmopolitan.com', name: 'Cosmopolitan', category: 'lifestyle', isApproved: true, description: 'Women\'s lifestyle' },
  { id: '39', url: 'https://www.vogue.com', name: 'Vogue', category: 'lifestyle', isApproved: true, description: 'Fashion' },
  { id: '40', url: 'https://www.glamour.com', name: 'Glamour', category: 'lifestyle', isApproved: true, description: 'Women\'s magazine' },
  { id: '41', url: 'https://www.people.com', name: 'People', category: 'lifestyle', isApproved: true, description: 'Celebrity news' },
  { id: '42', url: 'https://www.boredpanda.com', name: 'Bored Panda', category: 'entertainment', isApproved: true, description: 'Interesting stories' },
  { id: '43', url: 'https://www.9gag.com', name: '9GAG', category: 'entertainment', isApproved: true, description: 'Funny content' },
  { id: '44', url: 'https://www.buzzfeed.com', name: 'BuzzFeed', category: 'entertainment', isApproved: true, description: 'Viral content' },
  { id: '45', url: 'https://www.wikipedia.org', name: 'Wikipedia', category: 'education', isApproved: true, description: 'Free encyclopedia' },
  { id: '46', url: 'https://www.howstuffworks.com', name: 'How Stuff Works', category: 'education', isApproved: true, description: 'Educational content' },
  { id: '47', url: 'https://www.statista.com', name: 'Statista', category: 'education', isApproved: true, description: 'Statistics' },
  { id: '48', url: 'https://www.worldometers.info', name: 'Worldometers', category: 'education', isApproved: true, description: 'World statistics' },
  { id: '49', url: 'https://www.google.com', name: 'Google', category: 'search', isApproved: true, description: 'Search engine' },
  { id: '50', url: 'https://www.bing.com', name: 'Bing', category: 'search', isApproved: true, description: 'Search engine' },
  { id: '51', url: 'https://www.duckduckgo.com', name: 'DuckDuckGo', category: 'search', isApproved: true, description: 'Privacy search' },
  { id: '52', url: 'https://www.moz.com', name: 'Moz', category: 'tools', isApproved: true, description: 'SEO tools' },
  { id: '53', url: 'https://www.ahrefs.com', name: 'Ahrefs', category: 'tools', isApproved: true, description: 'SEO tools' },
  { id: '54', url: 'https://www.semrush.com', name: 'SEMrush', category: 'tools', isApproved: true, description: 'Marketing tools' },
  { id: '55', url: 'https://www.sethgodin.com', name: 'Seth Godin', category: 'inspiration', isApproved: true, description: 'Marketing blog' },
  { id: '56', url: 'https://www.paulgraham.com', name: 'Paul Graham', category: 'inspiration', isApproved: true, description: 'Essays' },
  { id: '57', url: 'https://www.tim.blog', name: 'Tim Ferriss', category: 'inspiration', isApproved: true, description: 'Productivity' },
  { id: '58', url: 'https://www.ryanholiday.net', name: 'Ryan Holiday', category: 'inspiration', isApproved: true, description: 'Stoicism' },
  { id: '59', url: 'https://www.markmanson.net', name: 'Mark Manson', category: 'inspiration', isApproved: true, description: 'Self-help' },
  { id: '60', url: 'https://www.hubermanlab.com', name: 'Huberman Lab', category: 'inspiration', isApproved: true, description: 'Science podcast' },
];

export const getApprovedWebsites = (): Website[] => {
  return websites.filter(website => website.isApproved);
};

export const getRandomWebsite = (category?: WebsiteCategory): Website => {
  let filteredWebsites = getApprovedWebsites();
  
  if (category) {
    filteredWebsites = filteredWebsites.filter(website => website.category === category);
  }
  
  if (filteredWebsites.length === 0) {
    filteredWebsites = getApprovedWebsites();
  }
  
  const randomIndex = Math.floor(Math.random() * filteredWebsites.length);
  return filteredWebsites[randomIndex];
};

export const getCategories = (): WebsiteCategory[] => {
  return [...new Set(websites.filter(w => w.isApproved).map(w => w.category))];
};