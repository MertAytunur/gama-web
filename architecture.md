# Project Architecture

## Overview
This is a Next.js-based web application that appears to be a product showcase or portfolio website. The project follows a modern web architecture using TypeScript, React, and Next.js.

## Tech Stack
- **Frontend Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **UI Library**: React 18.2.0
- **Styling**: TailwindCSS
- **Build Tools**: 
  - PostCSS
  - Autoprefixer
  - ESLint

## Project Structure
```
├── components/         # Reusable React components
├── pages/             # Next.js pages and routing
├── public/            # Static assets
├── styles/            # Global styles and Tailwind configuration
├── src/               # Source code
└── .next/             # Next.js build output
```

## Key Components
1. **Layout Component** (`components/Layout.tsx`)
   - Main layout wrapper for the application
   - Handles navigation and common UI elements

2. **Card Components**
   - `ProjectCard.tsx`: Displays project information
   - `SystemCard.tsx`: Displays system information

## Routing Structure
The application uses Next.js file-based routing:
- `/` - Home page
- `/about` - About page
- `/products` - Products section
- `/projects` - Projects section
- `/systems` - Systems section

## Development Workflow
- Development server: `npm run dev`
- Production build: `npm run build`
- Production server: `npm run start`
- Linting: `npm run lint`

## Configuration Files
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration 