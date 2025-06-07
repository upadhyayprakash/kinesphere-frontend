# KineSphere v2

A modern, SEO-optimized website for KineSphere, built with Next.js 14, TypeScript, and Redux.

## Features

- Server-side rendering and static site generation for optimal SEO
- Modern UI with Tailwind CSS
- State management with Redux Toolkit
- Comprehensive testing setup with Jest and React Testing Library
- E2E testing with Playwright
- Type safety with TypeScript
- Code quality tools (ESLint, Prettier, Husky)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd kinesphere-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run e2e` - Run Playwright E2E tests
- `npm run e2e:ui` - Run Playwright tests with UI
- `npm run format` - Format code with Prettier

## Project Structure

```
kinesphere-v2/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   ├── lib/          # Third-party library configurations
│   ├── store/        # Redux store setup and slices
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── e2e/              # Playwright E2E tests
├── public/           # Static assets
└── [Configuration files]
```

## Testing

- Unit/Integration Tests: Jest + React Testing Library
- E2E Tests: Playwright
- Run `npm run test` for unit tests
- Run `npm run e2e` for E2E tests

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to the branch
4. Create a Pull Request

## License

[Your License]
