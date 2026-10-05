export type Project = {
  title: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
  // File names in public/projekt-bilder/. The first image is used as the card cover.
  images?: string[]
}

const range = (name: string, count: number) => Array.from({ length: count }, (_, i) => `${name}_1.${i + 1}.png`)

// Add new projects here – they show up on the page automatically.
export const projects: Project[] = [
  {
    title: 'InvestEasy',
    description:
      'Web app for exploring financial markets, tracking stocks, learning about investing and calculating savings growth.',
    tech: ['Blazor', 'ASP.NET Core', 'EF Core', 'SQLite', 'Finnhub API'],
    repo: 'https://github.com/HelmerBergstrom/InvestEasy_Blazor',
    images: range('InvestEasy', 5),
  },
  {
    title: 'AI Feedback',
    description:
      "My thesis project: AI-generated feedback on students' quiz answers and reports, compared with a teacher's feedback.",
    tech: ['C#', 'ASP.NET', 'OpenAI API', 'SQLite'],
    repo: 'https://github.com/HelmerBergstrom/AI_feedback',
    images: range('AI_learn', 7),
  },
  {
    title: 'Iron Gym',
    description:
      'Inventory system for a fictional gym chain: a Vue SPA and a JWT-secured REST API for products and categories.',
    tech: ['Vue', 'Pinia', 'NestJS', 'MongoDB'],
    repo: 'https://github.com/HelmerBergstrom/iron-gym-frontend',
    images: range('IronGym', 5),
  },
  {
    title: 'Giffers',
    description:
      'Website for a fictional restaurant at GIF Sundsvall’s arena, with menu and table booking, plus a login-protected admin interface for menu and bookings.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repo: 'https://github.com/HelmerBergstrom/Projekt-webbplats',
    images: range('Giffers', 13),
  },
  {
    title: 'Kom Bort',
    description: 'WordPress site for a holiday rental company, with listings of apartments, houses and cabins.',
    tech: ['WordPress', 'PHP', 'CSS'],
    images: range('KomBort', 9),
  },
  {
    title: 'Book Reviews',
    description: 'Search books through the Google Books API and write, edit and delete your own reviews.',
    tech: ['React', 'NestJS', 'Prisma', 'SQLite'],
    repo: 'https://github.com/HelmerBergstrom/books_frontend',
    images: range('BookReviews', 6),
  },
  {
    title: 'StockTrendPredictor',
    description: 'Console app that uses machine learning to predict stock trends from historical data.',
    tech: ['C#', 'ML.NET', 'AutoML'],
    repo: 'https://github.com/HelmerBergstrom/StockTrendPredictor',
    images: ['StockTrendPredictor_1.png', 'StockTrendPredictor_2.png', 'StockTrendPredictor_3.png'],
  },
  {
    title: 'Blog API',
    description: 'REST API for a blog platform with JWT authentication and admin CRUD for posts.',
    tech: ['Fastify', 'Prisma', 'TypeScript'],
    repo: 'https://github.com/HelmerBergstrom/bloggApi_Fastify_Prisma',
  },
]
