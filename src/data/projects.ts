export type Project = {
  title: string
  description: string
  tech: string[]
  repo: string
  demo?: string
}

// Add new projects here – they show up on the page automatically.
export const projects: Project[] = [
  {
    title: 'InvestEasy',
    description:
      'Web app for exploring financial markets, tracking stocks, learning about investing and calculating savings growth.',
    tech: ['Blazor', 'ASP.NET Core', 'EF Core', 'SQLite', 'Finnhub API'],
    repo: 'https://github.com/HelmerBergstrom/InvestEasy_Blazor',
  },
  {
    title: 'AI Feedback',
    description:
      "My thesis project: AI-generated feedback on students' quiz answers and reports, compared with a teacher's feedback.",
    tech: ['C#', 'ASP.NET', 'OpenAI API'],
    repo: 'https://github.com/HelmerBergstrom/AI_feedback',
  },
  {
    title: 'Iron Gym',
    description:
      'Inventory system for a fictional gym chain: a Vue SPA and a JWT-secured REST API for products and categories.',
    tech: ['Vue', 'Pinia', 'NestJS', 'MongoDB'],
    repo: 'https://github.com/HelmerBergstrom/iron-gym-frontend',
  },
  {
    title: 'Book Reviews',
    description: 'Search books through the Google Books API and write, edit and delete your own reviews.',
    tech: ['React', 'NestJS', 'Prisma', 'SQLite'],
    repo: 'https://github.com/HelmerBergstrom/books_frontend',
  },
  {
    title: 'StockTrendPredictor',
    description: 'Console app that uses machine learning to predict stock trends from historical data.',
    tech: ['C#', 'ML.NET', 'AutoML'],
    repo: 'https://github.com/HelmerBergstrom/StockTrendPredictor',
  },
  {
    title: 'Blog API',
    description: 'REST API for a blog platform with JWT authentication and admin CRUD for posts.',
    tech: ['Fastify', 'Prisma', 'TypeScript'],
    repo: 'https://github.com/HelmerBergstrom/bloggApi_Fastify_Prisma',
  },
]
