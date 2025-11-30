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
  lib/               # Utilities
    axios.ts         # Axios instance
    query-client.ts  # React Query config
    utils.ts         # Helper functions
   store/            # Zustand stores
     app-store.ts
   styles/           # Global styles
     globals.css
```

## Development Commands
- Start, Testing, linting, and deployment are handled by CI/CD pipelines

## Coding Guidelines

### Component Creation
- Use **functional components** with TypeScript
- Place components in appropriate directories under `src/`
- Use `.tsx` extension for components
- Export components as default or named exports

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
1. Identify the appropriate directory structure
2. Create components with proper TypeScript types
3. Use existing utilities (axios, query-client, utils)
4. Style with Tailwind CSS
5. Add routing if needed
6. Implement state management (Zustand/React Query)
7. CI/CD pipeline will handle linting, testing, and deployment automatically

## Quick Tips
- **Icons**: `import { Check } from 'lucide-react'` Ã¢ÂÂ `<Check className="w-5 h-5" />`
- **Forms**: Use `useForm` + Zod schema for validation
- **API**: Use `useQuery` for GET, `useMutation` for POST/PUT/DELETE
- **State**: Use Zustand for cross-component state, React Query for server data
- **Animation**: Wrap elements with `<motion.div>` from framer-motion
- **Charts**: Use Recharts for quick charts, Chart.js for advanced visualizations
