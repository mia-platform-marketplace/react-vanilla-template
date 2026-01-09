# AI Instructions for React Vanilla Template

## Project Stack
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling

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
