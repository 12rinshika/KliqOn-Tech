# KliqOn Landing Page

A modern, responsive landing page for KliqOn Technologies built with React, TypeScript, and Vite. Features a sleek design with smooth animations, multi-page routing, and a component-based architecture.

## Tech Stack

### Core Framework
- **React** `^19.2.0` - Modern UI library with latest features
- **TypeScript** `~5.9.3` - Type-safe JavaScript for better developer experience
- **Vite** `^7.2.4` - Fast build tool and development server

### Routing & Navigation
- **React Router DOM** `^7.11.0` - Client-side routing for multi-page navigation

### Styling
- **Tailwind CSS** `^4.1.18` - Utility-first CSS framework with latest v4 features
- **@tailwindcss/vite** `^4.1.18` - Vite plugin for seamless Tailwind integration
- **tw-animate-css** `^1.4.0` - Additional animation utilities

### Animation
- **Motion** `^12.23.26` - Powerful animation library (Framer Motion) for smooth transitions and interactions

### Development Tools
- **ESLint** `^9.39.1` - Code linting and quality assurance
- **TypeScript ESLint** `^8.46.4` - TypeScript-specific linting rules
- **@vitejs/plugin-react** `^5.1.1` - React plugin for Vite with Fast Refresh

## Setup & Run Instructions

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd landingPage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
 npm run dev
```

The application will be available at `http://localhost:3000` (automatically opens in your browser).

### Building for Production

Build the project for production:
```bash
npm run build
```

The optimized production build will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Deployment Details

### Build Output
The production build creates static files in the `dist` directory that can be deployed to any static hosting service.

### Recommended Deployment Platforms

#### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root
3. Follow the prompts to deploy

Or connect your GitHub repository to Vercel for automatic deployments.


#### Traditional Web Server
1. Build the project: `npm run build`
2. Upload the contents of the `dist` directory to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

### Environment Variables
Currently, no environment variables are required. If needed in the future, create a `.env` file in the root directory.

### Build Configuration
- **Target**: `esnext` (modern JavaScript)
- **Output Directory**: `dist`
- **Port**: `3000` (development)

## Architecture & Key Decisions

### Component Architecture
The project follows a **component-based architecture** with clear separation of concerns:

- **Pages** (`src/app/pages/`) - Top-level page components that compose sections
- **Components** (`src/app/components/`) - Reusable UI components (Navbar, Hero, Footer, etc.)
- **Data** (`src/app/data/`) - Centralized constants and data structures
- **Styles** (`src/styles/`) - Global styles, fonts, and theme configuration

### Key Architectural Decisions

1. **Vite over Create React App**
   - Faster development server with HMR (Hot Module Replacement)
   - Optimized production builds with better tree-shaking
   - Modern tooling with native ES modules support

2. **Tailwind CSS v4**
   - Utility-first approach for rapid UI development
   - Integrated via Vite plugin for optimal performance
   - Consistent design system with custom theme configuration

3. **TypeScript for Type Safety**
   - Prevents runtime errors through compile-time type checking
   - Better IDE support and developer experience
   - Easier refactoring and maintenance

4. **React Router for SPA Navigation**
   - Client-side routing without page reloads
   - Support for multiple pages (Home, Contact, Products, Career)
   - Smooth navigation transitions

5. **Motion Library for Animations**
   - Declarative animation API
   - Performance-optimized animations
   - Smooth user experience with engaging interactions

6. **Centralized Data Management**
   - Constants file (`constants.ts`) for easy content updates
   - Separation of data from presentation logic
   - Type-safe data structures

7. **Path Aliases**
   - `@/` alias for `src/` directory for cleaner imports
   - Figma asset integration via custom path resolution
   - Improved code organization

8. **Modular Component Structure**
   - Each section (Hero, Services, About, etc.) is a separate component
   - Reusable and maintainable codebase
   - Easy to extend with new sections

### File Structure
```
landingPage/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── data/           # Constants and data
│   │   └── App.tsx         # Main app with routing
│   ├── assets/             # Static assets
│   ├── styles/             # Global styles and themes
│   └── main.tsx            # Application entry point
├── public/                 # Public assets
├── dist/                   # Production build output
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```
