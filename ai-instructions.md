# AI Instructions for Vibe Coding

## Project Stack
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **Zustand** for state management
- **React Query** (@tanstack/react-query) for data fetching
- **React Router** for navigation
- **React Hook Form** + **Zod** for forms and validation
- **Lucide React** for icons
- **Framer Motion** for animations
- **Chart.js** & **Recharts** for data visualization
- **Three.js** + **React Three Fiber** for 3D graphics

## Project Structure
```
src/
  App.tsx            # Main app component
  main.tsx           # Entry point
  index.css          # css file with tailwind
  components/        # Reusable UI components
    Button.tsx       # Example: Button component with variants
    index.ts         # Component exports
  pages/             # Page components
    HomePage.tsx     # Example: Home page with counter demo
    index.ts         # Page exports
  lib/               # Utilities
    axios.ts         # Axios instance
    query-client.ts  # React Query config
    utils.ts         # Helper functions
  store/             # Zustand stores
    app-store.ts
```

## Development Commands
- Start, Testing, linting, and deployment are handled by CI/CD pipelines

## Coding Guidelines

### Component Creation
- Use **functional components** with TypeScript
- Place **reusable components** in `src/components/`
- Place **page components** in `src/pages/`
- Use `.tsx` extension for components
- Export components as default or named exports
- See `src/components/Button.tsx` for a well-documented component example
- See `src/pages/HomePage.tsx` for a complete page example with state and events

### Styling
- Use **Tailwind CSS** utility classes
- Use `clsx` or `tailwind-merge` (cn helper) for conditional classes
- Keep custom CSS minimal, prefer Tailwind utilities

### State Management
- Use **Zustand** for global state (see `src/store/`)
- Use **React Query** for server state
- Use local `useState` for component-level state

### Forms
- Use **React Hook Form** for form handling
- Use **Zod** for schema validation
- Use **@hookform/resolvers** to integrate Zod with React Hook Form

### API Calls
- Use the configured **Axios** instance from `src/lib/axios.ts`
- Wrap API calls with **React Query** hooks (`useQuery`, `useMutation`)
- Configure React Query client in `src/lib/query-client.ts`

### Routing
- Use **React Router** for navigation
- Define routes in `App.tsx` or separate router file
- Use `Link` and `useNavigate` for navigation

### Icons & Animations
- Use **Lucide React** for icons: `import { IconName } from 'lucide-react'`
- Use **Framer Motion** for animations and transitions

### TypeScript
- Always define proper **TypeScript types** and interfaces
- Avoid `any`, use `unknown` when type is uncertain
- Use type inference where possible

### Best Practices
- Keep components **small and focused**
- Extract reusable logic into **custom hooks**
- Use **composition** over inheritance
- Write **tests** for critical functionality
- Follow **ESLint** rules configured in the project
- Use **semantic HTML** and ensure accessibility

## When Adding Features
1. Identify the appropriate directory:
   - **Reusable UI components** → `src/components/`
   - **Page components** → `src/pages/`
   - **Utilities and helpers** → `src/lib/`
   - **State stores** → `src/store/`
2. Create components with proper TypeScript types and interfaces
3. Add JSDoc comments to document props and usage
4. Use existing utilities (axios, query-client, utils)
5. Style with Tailwind CSS utility classes
6. Add routing if needed in App.tsx
7. Implement state management (Zustand for global, React Query for server data)
8. Export from index.ts files for clean imports
9. CI/CD pipeline will handle linting, testing, and deployment automatically

## Quick Tips
- **Components**: Check `src/components/Button.tsx` for a well-documented reusable component pattern
- **Pages**: Check `src/pages/HomePage.tsx` for a complete page example with state and styling
- **Icons**: `import { Check } from 'lucide-react'` → `<Check className="w-5 h-5" />`
- **Forms**: Use `useForm` + Zod schema for validation
- **API**: Use `useQuery` for GET, `useMutation` for POST/PUT/DELETE
- **State**: Use Zustand for cross-component state, React Query for server data
- **Animation**: Wrap elements with `<motion.div>` from framer-motion
- **Charts**: Use Recharts for quick charts, Chart.js for advanced visualizations
- **Styling**: Use `clsx` for conditional classes, follow existing Tailwind patterns

## Example Code References
- **Button Component**: `src/components/Button.tsx` - Shows TypeScript props, variants, and extending HTML attributes
- **Home Page**: `src/pages/HomePage.tsx` - Shows useState, event handling, conditional rendering, and Tailwind layouts
