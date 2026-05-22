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
  { id: '61', url: 'https://sliding.toys/mystic-square/8-puzzle/daily/', name: 'Daily 8-Puzzle', category: 'fun', isApproved: true, description: 'Daily sliding puzzle challenge' },
  { id: '62', url: 'https://longdogechallenge.com/', name: 'Long Doge Challenge', category: 'fun', isApproved: true, description: 'The never-ending doge' },
  { id: '63', url: 'https://maze.toys/mazes/mini/daily/', name: 'Daily Maze', category: 'fun', isApproved: true, description: 'Solve a new maze every day' },
  { id: '64', url: 'https://optical.toys', name: 'Optical Toys', category: 'fun', isApproved: true, description: 'Optical illusions and visual tricks' },
  { id: '65', url: 'https://paint.toys/zen-garden/', name: 'Zen Garden', category: 'fun', isApproved: true, description: 'Interactive zen sand garden' },
  { id: '66', url: 'https://puginarug.com', name: 'Pug on a Rug', category: 'fun', isApproved: true, description: 'A pug on a rug' },
  { id: '67', url: 'https://memory.toys/classic/easy/', name: 'Memory Game', category: 'fun', isApproved: true, description: 'Classic memory matching game' },
  { id: '68', url: 'https://alwaysjudgeabookbyitscover.com', name: 'Book Cover Judge', category: 'fun', isApproved: true, description: 'Judge books by their covers' },
  { id: '69', url: 'https://clicking.toys/peg-solitaire/english/', name: 'Peg Solitaire', category: 'fun', isApproved: true, description: 'Classic peg solitaire puzzle' },
  { id: '70', url: 'https://weirdorconfusing.com/', name: 'Weird or Confusing', category: 'fun', isApproved: true, description: 'Weird and confusing web' },
  { id: '71', url: 'https://checkbox.toys/scale/', name: 'Checkbox Scale', category: 'fun', isApproved: true, description: 'Funny checkbox interactions' },
  { id: '72', url: 'https://binarypiano.com/', name: 'Binary Piano', category: 'fun', isApproved: true, description: 'Type and create binary music' },
  { id: '73', url: 'https://mondrianandme.com/', name: 'Mondrian & Me', category: 'fun', isApproved: true, description: 'Mondrian-style art generator' },
  { id: '74', url: 'https://cruel.toys/maze', name: 'Cruel Maze', category: 'fun', isApproved: true, description: 'Frustrating maze game' },
  { id: '75', url: 'https://onesquareminesweeper.com/', name: 'One Square Minesweeper', category: 'fun', isApproved: true, description: 'Minimalist minesweeper' },
  { id: '76', url: 'https://cursoreffects.com', name: 'Cursor Effects', category: 'fun', isApproved: true, description: 'Beautiful cursor effects' },
  { id: '77', url: 'https://patience.toys', name: 'Patience Toys', category: 'fun', isApproved: true, description: 'Patience-testing games' },
  { id: '78', url: 'https://floatingqrcode.com/', name: 'Floating QR Code', category: 'fun', isApproved: true, description: 'Mesmerizing floating QR' },
  { id: '79', url: 'https://thatsthefinger.com/', name: "That's The Finger", category: 'fun', isApproved: true, description: 'Click the finger' },
  { id: '80', url: 'https://cant-not-tweet-this.com/', name: "Can't Not Tweet This", category: 'fun', isApproved: true, description: 'Automatic tweet generator' },
  { id: '81', url: 'http://heeeeeeeey.com/', name: 'Heeeeeeeeey', category: 'fun', isApproved: true, description: 'Mesmerizing visual effect' },
  { id: '82', url: 'https://paint.toys/sand/', name: 'Sand Painting', category: 'fun', isApproved: true, description: 'Interactive sand art' },
  { id: '83', url: 'https://ant.toys', name: 'Ant Toys', category: 'fun', isApproved: true, description: 'Watch virtual ants' },
  { id: '84', url: 'https://musical.toys/toys/snapegiator/', name: 'Snapegiator', category: 'fun', isApproved: true, description: 'Musical snapping toy' },
  { id: '85', url: 'https://thevintageweb.com/', name: 'The Vintage Web', category: 'fun', isApproved: true, description: 'Nostalgic web experience' },
  { id: '86', url: 'https://toms.toys', name: 'Toms Toys', category: 'fun', isApproved: true, description: 'Fun toy collections' },
  { id: '87', url: 'http://burymewithmymoney.com/', name: 'Bury Me With My Money', category: 'fun', isApproved: true, description: 'Money-themed humor' },
  { id: '88', url: 'https://smashthewalls.com/', name: 'Smash The Walls', category: 'fun', isApproved: true, description: 'Destroy walls game' },
  { id: '89', url: 'https://jacksonpollock.org/', name: 'Jackson Pollock', category: 'fun', isApproved: true, description: 'Abstract art splatter' },
  { id: '90', url: 'https://duckstreet.net/', name: 'Duck Street', category: 'fun', isApproved: true, description: 'Duck-themed street view' },
  { id: '91', url: 'http://drawing.garden/', name: 'Drawing Garden', category: 'fun', isApproved: true, description: 'Collaborative drawing' },
  { id: '92', url: 'https://www.trypap.com/', name: 'Try Pap', category: 'fun', isApproved: true, description: 'Paper airplane printer' },
  { id: '93', url: 'https://paint.toys/symmetry/', name: 'Symmetry Painter', category: 'fun', isApproved: true, description: 'Create symmetric art' },
  { id: '94', url: 'https://xn--gi8h42h.ws/', name: 'Emoji Domain', category: 'fun', isApproved: true, description: 'Website with emoji domain' },
  { id: '95', url: 'http://www.movenowthinklater.com/', name: 'Move Now Think Later', category: 'fun', isApproved: true, description: 'Act first, think later' },
  { id: '96', url: 'https://sliding.toys/mystic-square/15-puzzle/daily/', name: 'Daily 15-Puzzle', category: 'fun', isApproved: true, description: 'Classic sliding puzzle' },
  { id: '97', url: 'https://checkboxrace.com/', name: 'Checkbox Race', category: 'fun', isApproved: true, description: 'Race with checkboxes' },
  { id: '98', url: 'http://www.rrrgggbbb.com/', name: 'RGB Color Game', category: 'fun', isApproved: true, description: 'Guess the RGB color' },
  { id: '99', url: 'https://rotatingsandwiches.com/', name: 'Rotating Sandwiches', category: 'fun', isApproved: true, description: 'Infinite sandwich rotation' },
  { id: '100', url: 'http://www.everydayim.com/', name: "Everyday I'm", category: 'fun', isApproved: true, description: 'Daily hustling' },
  { id: '101', url: 'http://randomcolour.com/', name: 'Random Colour', category: 'fun', isApproved: true, description: 'Random color generator' },
  { id: '102', url: 'http://maninthedark.com/', name: 'Man in the Dark', category: 'fun', isApproved: true, description: 'Scary flash experience' },
  { id: '103', url: 'http://cat-bounce.com/', name: 'Cat Bounce', category: 'fun', isApproved: true, description: 'Bouncing cats' },
  { id: '104', url: 'https://paint.toys/', name: 'Paint Toys', category: 'fun', isApproved: true, description: 'Collection of painting toys' },
  { id: '105', url: 'http://chrismckenzie.com/', name: 'Chris McKenzie', category: 'fun', isApproved: true, description: 'Quirky personal site' },
  { id: '106', url: 'https://thezen.zone/', name: 'The Zen Zone', category: 'fun', isApproved: true, description: 'Relaxing zen experience' },
  { id: '107', url: 'http://ihasabucket.com/', name: 'I Has a Bucket', category: 'fun', isApproved: true, description: 'Funny bucket face' },
  { id: '108', url: 'http://corndogoncorndog.com/', name: 'Corndog on Corndog', category: 'fun', isApproved: true, description: 'Inception of corndogs' },
  { id: '109', url: 'http://www.hackertyper.com/', name: 'Hacker Typer', category: 'fun', isApproved: true, description: 'Type like a hacker' },
  { id: '110', url: 'http://imaninja.com/', name: "I'm a Ninja", category: 'fun', isApproved: true, description: 'Ninja illusion' },
  { id: '111', url: 'https://paint.toys/calligram/', name: 'Calligram Art', category: 'fun', isApproved: true, description: 'Word art generator' },
  { id: '112', url: 'http://www.nullingthevoid.com/', name: 'Nulling the Void', category: 'fun', isApproved: true, description: 'Empty void experience' },
  { id: '113', url: 'http://www.muchbetterthanthis.com/', name: 'Much Better Than This', category: 'fun', isApproved: true, description: 'Strange web experience' },
  { id: '114', url: 'http://www.yesnoif.com/', name: 'Yes No If', category: 'fun', isApproved: true, description: 'Conditional yes/no' },
  { id: '115', url: 'http://lacquerlacquer.com', name: 'Lacquer', category: 'fun', isApproved: true, description: 'Polish-like visual' },
  { id: '116', url: 'https://clicking.toys/flip-grid/neat-nine/3-holes/', name: 'Flip Grid Puzzle', category: 'fun', isApproved: true, description: '3D flip grid game' },
  { id: '117', url: 'http://iamawesome.com/', name: 'I Am Awesome', category: 'fun', isApproved: true, description: 'Self-affirmation site' },
  { id: '118', url: 'https://strobe.cool/', name: 'Strobe', category: 'fun', isApproved: true, description: 'Strobe light effect' },
  { id: '119', url: 'http://thisisnotajumpscare.com/', name: 'Not a Jumpscare', category: 'fun', isApproved: true, description: 'Or is it?' },
  { id: '120', url: 'https://musical.toys/toys/polyrhythm/', name: 'Polyrhythm', category: 'fun', isApproved: true, description: 'Musical polyrhythm toy' },
  { id: '121', url: 'http://papertoilet.com/', name: 'Paper Toilet', category: 'fun', isApproved: true, description: 'Unroll paper forever' },
  { id: '122', url: 'https://loopedforinfinity.com/', name: 'Looped for Infinity', category: 'fun', isApproved: true, description: 'Infinite loop animation' },
  { id: '123', url: 'https://www.ripefordebate.com/', name: 'Ripe for Debate', category: 'fun', isApproved: true, description: 'Debate simulator' },
  { id: '124', url: 'https://end.city/', name: 'End City', category: 'fun', isApproved: true, description: 'Minecraft End City viewer' },
  { id: '125', url: 'https://elonjump.com/', name: 'Elon Jump', category: 'fun', isApproved: true, description: 'Jump with Elon' },
  { id: '126', url: 'https://www.bouncingdvdlogo.com/', name: 'Bouncing DVD Logo', category: 'fun', isApproved: true, description: 'Classic DVD screensaver' },
  { id: '127', url: 'https://toybox.toms.toys', name: 'Toy Box', category: 'fun', isApproved: true, description: 'Collection of digital toys' },
  { id: '128', url: 'https://memory.toys/monkey-challenge/easy/', name: 'Monkey Challenge', category: 'fun', isApproved: true, description: 'Memory monkey game' },
  { id: '129', url: 'https://memory.toys', name: 'Memory Toys', category: 'fun', isApproved: true, description: 'Various memory games' },
  { id: '130', url: 'http://eelslap.com/', name: 'Eel Slap', category: 'fun', isApproved: true, description: 'Slap with an eel' },
  { id: '131', url: 'http://endless.horse/', name: 'Endless Horse', category: 'fun', isApproved: true, description: 'Infinite horse legs' },
  { id: '132', url: 'http://corndog.io/', name: 'Corndog.io', category: 'fun', isApproved: true, description: '.io style game' },
  { id: '133', url: 'http://ninjaflex.com/', name: 'Ninja Flex', category: 'fun', isApproved: true, description: 'Ninja stretching toy' },
  { id: '134', url: 'http://www.ismycomputeron.com/', name: 'Is My Computer On', category: 'fun', isApproved: true, description: 'Check if your computer is on' },
  { id: '135', url: 'http://doughnutkitten.com/', name: 'Doughnut Kitten', category: 'fun', isApproved: true, description: 'Cute kitten through a hole' },
  { id: '136', url: 'http://chillestmonkey.com/', name: 'Chillest Monkey', category: 'fun', isApproved: true, description: 'Chill monkey experience' },
  { id: '137', url: 'http://scroll-o-meter.club/', name: 'Scroll-O-Meter', category: 'fun', isApproved: true, description: 'Measure your scrolling' },
  { id: '138', url: 'http://tencents.info/', name: 'Ten Cents', category: 'fun', isApproved: true, description: 'Ten cents information' },
  { id: '139', url: 'http://chihuahuaspin.com/', name: 'Chihuahua Spin', category: 'fun', isApproved: true, description: 'Spinning chihuahua' },
  { id: '140', url: 'https://dice.toys/toy/greedy-pig/', name: 'Greedy Pig', category: 'fun', isApproved: true, description: 'Dice game with pig' },
  { id: '141', url: 'http://spaceis.cool/', name: 'Space is Cool', category: 'fun', isApproved: true, description: 'Space facts and visuals' },
  { id: '142', url: 'http://yeahlemons.com/', name: 'Yeah Lemons', category: 'fun', isApproved: true, description: 'Lemon-themed site' },
  { id: '143', url: 'http://wowenwilsonquiz.com', name: 'Owen Wilson Quiz', category: 'fun', isApproved: true, description: 'Wow quiz' },
  { id: '144', url: 'http://buildshruggie.com/', name: 'Build Shruggie', category: 'fun', isApproved: true, description: 'Build the shruggie emoticon' },
  { id: '145', url: 'https://poetic.toys/poems/river-of-reverence/', name: 'River Poem', category: 'fun', isApproved: true, description: 'Interactive river poetry' },
  { id: '146', url: 'http://crouton.net/', name: 'Crouton', category: 'fun', isApproved: true, description: 'Nerdy crouton site' },
  { id: '147', url: 'http://corgiorgy.com/', name: 'Corgi Orgy', category: 'fun', isApproved: true, description: 'Corgi video collection' },
  { id: '148', url: 'http://www.wutdafuk.com/', name: 'Wut Da Fuk', category: 'fun', isApproved: true, description: 'Confusing web experience' },
  { id: '149', url: 'http://unicodesnowmanforyou.com/', name: 'Unicode Snowman', category: 'fun', isApproved: true, description: 'Snowman experience' },
  { id: '150', url: 'http://www.crossdivisions.com/', name: 'Cross Divisions', category: 'fun', isApproved: true, description: 'Mind-bending visuals' },
  { id: '151', url: 'https://boringboringboring.com/', name: 'Boring Boring Boring', category: 'fun', isApproved: true, description: 'Deliberately boring site' },
  { id: '152', url: 'http://www.patience-is-a-virtue.org/', name: 'Patience is a Virtue', category: 'fun', isApproved: true, description: 'Test your patience' },
  { id: '153', url: 'http://pixelsfighting.com/', name: 'Pixels Fighting', category: 'fun', isApproved: true, description: 'Animated pixel battles' },
  { id: '154', url: 'http://isitwhite.com/', name: 'Is It White', category: 'fun', isApproved: true, description: 'Is it white?' },
  { id: '155', url: 'https://existentialcrisis.com/', name: 'Existential Crisis', category: 'fun', isApproved: true, description: 'Deep thoughts generator' },
  { id: '156', url: 'http://onemillionlols.com/', name: 'One Million LOLs', category: 'fun', isApproved: true, description: 'Comedy collection' },
  { id: '157', url: 'http://www.omfgdogs.com/', name: 'OMFG Dogs', category: 'fun', isApproved: true, description: 'Cute dog videos' },
  { id: '158', url: 'http://oct82.com/', name: 'Oct 82', category: 'fun', isApproved: true, description: 'October 1982 nostalgia' },
  { id: '159', url: 'http://www.blankwindows.com/', name: 'Blank Windows', category: 'fun', isApproved: true, description: 'Windows error screens' },
  { id: '160', url: 'http://tunnelsnakes.com/', name: 'Tunnel Snakes', category: 'fun', isApproved: true, description: 'Tunnel snakes exclamation' },
  { id: '161', url: 'http://www.trashloop.com/', name: 'Trash Loop', category: 'fun', isApproved: true, description: 'Never-ending trash animation' },
  { id: '162', url: 'https://wigglyme.com/', name: 'Wiggly Me', category: 'fun', isApproved: true, description: 'Wiggly character' },
  { id: '163', url: 'http://www.doublepressure.com/', name: 'Double Pressure', category: 'fun', isApproved: true, description: 'Double the pressure' },
  { id: '164', url: 'http://www.donothingfor2minutes.com/', name: 'Do Nothing 2 Minutes', category: 'fun', isApproved: true, description: 'Relax for 2 minutes' },
  { id: '165', url: 'https://optical.toys/thatcher-effect/', name: 'Thatcher Effect', category: 'fun', isApproved: true, description: 'Visual Thatcher illusion' },
  { id: '166', url: 'http://notdayoftheweek.com/', name: 'Not Day of the Week', category: 'fun', isApproved: true, description: 'What day is it?' },
  { id: '167', url: 'https://number.toys/', name: 'Number Toys', category: 'fun', isApproved: true, description: 'Number-based games' },
  { id: '168', url: 'https://card.toys/klondike/', name: 'Klondike Solitaire', category: 'fun', isApproved: true, description: 'Classic card game' },
  { id: '169', url: 'http://www.amialright.com/', name: 'Am I Alright', category: 'fun', isApproved: true, description: 'Are you alright?' },
  { id: '170', url: 'https://greatbignothing.com/', name: 'Great Big Nothing', category: 'fun', isApproved: true, description: 'Absolutely nothing' },
  { id: '171', url: 'https://zoomquilt.org/', name: 'Zoom Quilt', category: 'fun', isApproved: true, description: 'Infinite zoom art' },
  { id: '172', url: 'https://cruel.toys/hunt', name: 'Hunt Game', category: 'fun', isApproved: true, description: 'Hidden object game' },
  { id: '173', url: 'https://optical.toys/troxler-fade/', name: 'Troxler Fade', category: 'fun', isApproved: true, description: 'Troxler fading illusion' },
  { id: '174', url: 'https://dadlaughbutton.com/', name: 'Dad Laugh Button', category: 'fun', isApproved: true, description: 'Dad joke generator' },
  { id: '175', url: 'https://remoji.com/', name: 'Remoji', category: 'fun', isApproved: true, description: 'Reaction emoji site' },
  { id: '176', url: 'https://musical.toys/toys/pendulum-waves/', name: 'Pendulum Waves', category: 'fun', isApproved: true, description: 'Mesmerizing pendulum animation' },
  { id: '177', url: 'https://musical.toys', name: 'Musical Toys', category: 'fun', isApproved: true, description: 'Collection of musical toys' },
  { id: '178', url: 'https://www.boredbutton.com/', name: 'Bored Button', category: 'fun', isApproved: true, description: 'Press the button when you are bored' },
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
