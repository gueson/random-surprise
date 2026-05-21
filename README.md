# Random Surprise

Discover random websites with just one click! A fun and exciting way to explore the internet.

## 🌟 Features

- **Random Website Discovery**: Click the button and discover where the internet takes you
- **Category Filtering**: Filter websites by category - Fun, News, Technology, Entertainment, and more
- **Visit History**: Keep track of your recent discoveries
- **Stats Page**: View your browsing statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Curated Selection**: All websites are hand-picked and reviewed for quality

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd random-surprise

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── disclaimer/     # Disclaimer page
│   ├── privacy/        # Privacy Policy page
│   ├── stats/          # Statistics page
│   ├── terms/          # Terms of Service page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── robots.ts       # Robots.txt
│   └── sitemap.ts      # Sitemap
├── components/
│   └── Footer.tsx      # Footer component
├── data/
│   └── websites.ts     # Website data and categories
└── globals.css         # Global styles
```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Categories

- **Fun & Quirky** - Entertaining and weird websites
- **Comics** - Webcomics and humor
- **News** - Latest news sources
- **Technology** - Tech news and blogs
- **Business** - Business and finance
- **Health & Wellness** - Health tips and fitness
- **Lifestyle** - Fashion and lifestyle
- **Entertainment** - Fun and entertainment
- **Education** - Educational resources
- **Search** - Alternative search engines
- **Tools** - Useful web tools

## 📊 Analytics

This project uses Vercel Analytics for tracking user interactions. To enable analytics:

1. Deploy your project to Vercel
2. Analytics will automatically be enabled

## 📝 License

This project is for personal use. All external website links are property of their respective owners.

## 📄 Legal Pages

- [Privacy Policy](/privacy)
- [Terms of Service](/terms)
- [Disclaimer](/disclaimer)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Random Surprise** - Discover the unexpected!