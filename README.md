# Mia Flow React Template

A comprehensive React template designed for AI-assisted development with modern tools and best practices.

## 🎯 Purpose

This template provides **intentional examples** to guide AI code generation tools. Each component, page, and pattern demonstrates a specific concept that AI can learn from and replicate.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run tests
yarn test

# Run tests with coverage
yarn coverage

# Build for production
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button with variants (primary, secondary, outline)
│   ├── Layout.tsx      # App layout with navigation and routing
│   ├── MiaFlowIcon.tsx # Custom SVG icon component
│   └── ThemeToggle.tsx # Dark/light mode toggle with localStorage
├── pages/              # Page components (routes)
│   ├── HomePage.tsx    # Main page with counter example
│   ├── AboutPage.tsx   # Feature showcase page
│   ├── FormPage.tsx    # Form validation example
│   ├── APIPage.tsx     # Data fetching example
│   ├── StorePage.tsx   # Global state example
│   └── NotFoundPage.tsx # 404 error page
├── store/              # Zustand stores
│   └── userPreferencesStore.ts # Example global state with persistence
├── constants/          # Application constants
│   └── counter.ts      # Counter-specific constants
├── lib/                # Utility functions and configurations
│   ├── constants.ts    # General app constants
│   ├── translations.ts # i18n-ready text strings
│   ├── query-client.ts # Tanstack Query configuration
│   └── utils.ts        # Utility functions
└── router.tsx          # React Router v7 configuration
```

## 🎓 Learning Patterns

### 1. **Components** (`src/components/`)

#### Button Component
- **Pattern**: Reusable component with variants
- **Demonstrates**:
  - TypeScript interfaces for props
  - Multiple style variants
  - Extending HTML button attributes
  - Tailwind CSS utility classes

```typescript
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

#### Layout Component
- **Pattern**: App-wide layout wrapper
- **Demonstrates**:
  - React Router's `<Outlet />` for nested routes
  - `useLocation` hook for active route detection
  - Responsive navigation
  - Dark mode support

#### ThemeToggle Component
- **Pattern**: Theme switching with persistence
- **Demonstrates**:
  - `useState` hook
  - `useEffect` hook for side effects
  - localStorage integration
  - DOM manipulation (classList)

### 2. **Pages** (`src/pages/`)

#### HomePage
- **Pattern**: Interactive page with state
- **Demonstrates**:
  - State management with `useState`
  - Event handlers
  - Conditional rendering
  - Using constants for logic
  - Multiple sections with different purposes

#### FormPage
- **Pattern**: Form handling with validation
- **Demonstrates**:
  - React Hook Form for form state
  - Zod schema validation
  - Error handling and display
  - TypeScript type inference from schema
  - Async form submission
  - Success feedback

```typescript
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(formSchema),
})
```

#### APIPage
- **Pattern**: Data fetching with Tanstack Query
- **Demonstrates**:
  - `useQuery` hook
  - Loading states
  - Error handling
  - Refetch functionality
  - TypeScript interfaces for API responses
  - JSONPlaceholder API integration

```typescript
const { data, isLoading, error, refetch } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 5 * 60 * 1000,
})
```

#### StorePage
- **Pattern**: Global state management
- **Demonstrates**:
  - Zustand store creation
  - State persistence with middleware
  - Actions (setters) and selectors
  - Type-safe store
  - localStorage integration

```typescript
const { preferences, setUsername } = useUserPreferencesStore()
```

#### AboutPage
- **Pattern**: Content showcase page
- **Demonstrates**:
  - Grid layouts
  - Icon usage (Lucide React)
  - Navigation with `useNavigate` hook
  - Card-based layouts
  - Hover animations

#### NotFoundPage
- **Pattern**: Error handling
- **Demonstrates**:
  - 404 error page
  - Catch-all routing (`/*`)
  - Centered layouts
  - User-friendly error messages

### 3. **State Management**

#### Local State (useState)
Used in: `HomePage`, `FormPage`, `APIPage`, `StorePage`
- Component-level state
- Form inputs
- UI toggles

#### Global State (Zustand)
File: `src/store/userPreferencesStore.ts`
- Application-wide state
- Persisted to localStorage
- Type-safe actions
- Middleware support

### 4. **Data Fetching** (Tanstack Query)

File: `src/pages/APIPage.tsx`
- Automatic caching
- Loading and error states
- Refetch on demand
- Stale-while-revalidate pattern

### 5. **Routing** (React Router v7)

File: `src/router.tsx`
- Nested routes with `<Outlet />`
- Active link detection
- Preview route support (`/preview-*`)
- Catch-all 404 route

### 6. **Forms** (React Hook Form + Zod)

File: `src/pages/FormPage.tsx`
- Schema-based validation
- Type-safe forms
- Error handling
- Controlled inputs

### 7. **Styling**

- **Tailwind CSS**: Utility-first styling
- **Dark Mode**: Class-based with system preference fallback
- **CSS Variables**: Custom properties in `src/index.css`
- **Responsive Design**: Mobile-first approach

## 🧪 Testing

Comprehensive test coverage (99.75%) with:
- Component tests (Button, Layout, ThemeToggle, MiaFlowIcon)
- Page tests (HomePage, AboutPage, NotFoundPage)
- Integration tests (Router, Store)
- Test utilities configured with @testing-library/react

```bash
yarn test        # Run tests in watch mode
yarn coverage    # Run tests with coverage report
```

## 🛠️ Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Routing & Navigation
- **React Router v7** - Routing with createBrowserRouter

### State Management
- **Zustand** - Lightweight global state
- **Tanstack Query** - Server state and data fetching

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Styling
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

### Testing
- **Vitest** - Test runner
- **@testing-library/react** - Component testing
- **happy-dom** - DOM implementation for tests

## 📝 AI Development Guidelines

When working with AI coding assistants, reference these patterns:

### Creating New Components
1. Use the Button component as a template for simple components
2. Use the Layout component for complex components with multiple concerns
3. Always include TypeScript interfaces
4. Add JSDoc comments explaining the pattern

### Creating New Pages
1. Use HomePage for pages with state and interactions
2. Use AboutPage for content-heavy pages
3. Use FormPage for forms with validation
4. Use APIPage for pages that fetch data
5. Use StorePage for pages that use global state
6. Always add routes to `src/router.tsx`

### Adding Navigation
1. Update `src/components/Layout.tsx` navLinks array
2. Import appropriate icon from lucide-react
3. Add route to `src/router.tsx`

### Form Validation
1. Define Zod schema first
2. Infer TypeScript type from schema
3. Use zodResolver with useForm
4. Register inputs with {...register('fieldName')}
5. Display errors from formState.errors

### Data Fetching
1. Create typed interface for response
2. Create fetch function outside component
3. Use useQuery with queryKey and queryFn
4. Handle loading, error, and success states

### Global State
1. Create store in `src/store/`
2. Define interface for state and actions
3. Use persist middleware for localStorage
4. Import and use hook in components

## 🎨 Customization

### Colors
Edit `src/index.css` for CSS custom properties:
```css
:root {
  --text-primary: #1f2937;
  --bg-primary: #ffffff;
  --brand-primary: #3b82f6;
}
```

### Constants
Edit `src/lib/constants.ts` and `src/constants/counter.ts`

### Translations
Edit `src/lib/translations.ts` for i18n-ready strings

## 📦 Pre-configured Libraries

The following are installed but not fully demonstrated:
- **Framer Motion** - Animations
- **Chart.js + React Chartjs 2** - Charts
- **Three.js + React Three Fiber** - 3D graphics
- **dnd-kit** - Drag and drop
- **date-fns** - Date utilities
- **axios** - HTTP client
- **clsx** - Class name utility

## 🚢 Production Build

```bash
yarn build
```

Outputs to `dist/` directory with:
- Minified JavaScript
- Optimized assets
- Source maps

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [Tanstack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## 🤖 AI Assistant Tips

When prompting AI to work with this template:

✅ **Good prompts:**
- "Add a new page like FormPage that demonstrates X"
- "Create a component similar to Button with these variants"
- "Add API call using the pattern from APIPage"
- "Create a store like userPreferencesStore for managing Y"

❌ **Less effective:**
- "Build a form" (no reference to existing patterns)
- "Add state" (not specific about local vs global)
- "Make it look good" (no reference to existing styling patterns)

---

**Built with ❤️ for Mia Flow**
