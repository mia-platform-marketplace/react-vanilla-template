# AI Instructions for React Vanilla Template

## Project Stack
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling

## Available Libraries (Already Installed)

### Core Dependencies
- **react** (^18.3.1) - React library
- **react-dom** (^18.3.1) - React DOM renderer
- **react-router-dom** (^7.1.1) - Routing library (optional to use)
- **typescript** (^5.7.2) - TypeScript support

### Styling
- **tailwindcss** (^3.4.17) - Utility-first CSS framework
- **autoprefixer** (^10.4.20) - PostCSS plugin to parse CSS and add vendor prefixes
- **postcss** (^8.4.49) - CSS transformation tool
- **clsx** (^2.1.1) - Utility for constructing className strings conditionally
- **tailwind-merge** (^2.5.5) - Merge Tailwind CSS classes without style conflicts

### Build & Development
- **vite** (^6.0.5) - Build tool and dev server
- **@vitejs/plugin-react** (^4.3.4) - Vite plugin for React

### Testing
- **vitest** (^2.1.8) - Unit test framework
- **@testing-library/react** (^16.1.0) - React testing utilities
- **@testing-library/dom** (^10.4.1) - DOM testing utilities
- **@testing-library/jest-dom** (^6.6.3) - Custom jest matchers for DOM
- **@vitest/coverage-v8** (^2.1.8) - Code coverage
- **@vitest/ui** (^2.1.8) - Vitest UI
- **happy-dom** (^15.11.7) - DOM implementation for testing

### Linting
- **eslint** (^9.17.0) - JavaScript/TypeScript linter
- **@eslint/js** (^9.17.0) - ESLint JavaScript rules
- **typescript-eslint** (^8.19.1) - TypeScript ESLint rules
- **eslint-plugin-react-hooks** (^7.0.1) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (^0.4.16) - ESLint rules for React Refresh

### TypeScript Types
- **@types/react** (^18.3.18) - TypeScript types for React
- **@types/react-dom** (^18.3.5) - TypeScript types for React DOM
- **@types/node** (^24.10.1) - TypeScript types for Node.js

## Project Structure
```
src/
  App.tsx            # Main app component - all UI code goes here
  main.tsx           # Entry point
  index.css          # CSS file with Tailwind
```

This is a simplified template with a flat structure. All components and UI should be built directly in `App.tsx` or as inline elements.

## Coding Guidelines

### Component Creation
- Use **functional components** with TypeScript
- Keep components **simple and inline** in `App.tsx`
- Use `.tsx` extension
- Extract to separate files only when truly needed for reusability

### Styling
- Use **Tailwind CSS** utility classes
- Use `clsx` or `tailwind-merge` for conditional classes
- Keep custom CSS minimal, prefer Tailwind utilities

### State Management
- Use **useState** for component-level state
- Use **useEffect** for side effects
- Keep state simple and local to components

### TypeScript
- Define proper **TypeScript types** and interfaces when needed
- Avoid `any`, use `unknown` when type is uncertain
- Use type inference where possible

### Best Practices
- Keep the app **simple and focused**
- Write semantic HTML
- Use Tailwind utilities for styling
- Avoid over-engineering - this is a starter template

## When Adding Features
1. Start by editing **App.tsx** - this is your main component
2. Add inline elements and components as needed
3. Use Tailwind CSS for styling
4. Only create separate files when components need to be truly reusable
5. Keep the structure flat and simple for easy AI modifications

## Quick Tips
- **Start simple**: Everything goes in `App.tsx`
- **Styling**: Use Tailwind utility classes directly in JSX
- **State**: Use `useState` hook for local state
- **Icons**: Install and import libraries as needed (e.g., lucide-react) and use SVG if possible
- **Keep it flat**: Avoid complex folder structures unless truly necessary
