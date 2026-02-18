# React Frontend Template

A production-ready React + TypeScript template designed for rapid frontend development. Features containerized deployment via nginx, automated CI/CD pipeline, health checks, and comprehensive test coverage.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 20.x or higher
- [Yarn 4 (Berry)](https://yarnpkg.com/) (enabled via corepack)
- [Docker](https://www.docker.com/get-started) (optional, for containerized development)
- [Azure DevOps](https://azure.microsoft.com/services/devops/) account (for CI/CD)

### Local Development

1. **Clone and install dependencies:**

```bash
cd %MICROSERVICE_NAME%
corepack enable
yarn install
```

2. **Start the development server:**

```bash
yarn dev
```

The application starts on `http://localhost:5173` (Vite default port).

3. **Build for production:**

```bash
yarn build
```

The optimized production build is created in the `build/` directory.

4. **Run tests:**

```bash
# Run tests in watch mode
yarn test

# Run tests with coverage
yarn coverage
```

## 📁 Project Structure

This template follows modern React best practices with Vite as the build tool:

```
%MICROSERVICE_NAME%/
├── src/                                # Application source code
│   ├── App.tsx                         # Main application component
│   ├── App.test.tsx                    # Application tests
│   ├── main.tsx                        # Application entry point
│   └── setupTests.ts                   # Test configuration
├── nginx/                              # Nginx configuration for production
│   ├── nginx.conf                      # Main nginx configuration
│   └── conf.d/
│       └── website.conf                # Site-specific configuration with health endpoints
├── public/                             # Static assets
├── build/                              # Production build output (generated)
├── Dockerfile                          # Multi-stage Docker build configuration
├── azure-pipelines.yml                 # CI/CD pipeline definition
├── .dockerignore                       # Docker build context exclusions
├── vite.config.ts                      # Vite build configuration
├── vitest.config.ts                    # Vitest test configuration
├── tsconfig.json                       # TypeScript configuration
└── package.json                        # Project dependencies and scripts

```

### Key Design Principles

- **Modern Stack**: React 18 + TypeScript + Vite for fast development
- **Test-Ready**: Vitest + React Testing Library pre-configured
- **Production Optimized**: Nginx-based serving with health endpoints
- **Container-First**: Multi-stage Docker build for minimal production images

## 🐳 Docker

### Build the Docker Image

```bash
docker build -t %PROJECT_ID%/%MICROSERVICE_NAME%:latest .
```

The Dockerfile uses a multi-stage build:
- **Build Stage**: Uses `node:20-alpine` to compile the application with Vite
- **Runtime Stage**: Uses `nginx:1.17.2-alpine` to serve static files (~25 MB)

### Run the Container Locally

```bash
# Standard port mapping
docker run -p 8080:8080 %PROJECT_ID%/%MICROSERVICE_NAME%:latest

# Alternative port (e.g., 3000 on host -> 8080 in container)
docker run -p 3000:8080 %PROJECT_ID%/%MICROSERVICE_NAME%:latest

# Run in detached mode
docker run -d -p 8080:8080 --name %MICROSERVICE_NAME% %PROJECT_ID%/%MICROSERVICE_NAME%:latest
```

Access the application:
- With port 8080: http://localhost:8080
- With port 3000: http://localhost:3000
- Health check: http://localhost:8080/-/healthz

### Environment Variables

The Docker container runs nginx on port 8080 and serves the pre-built static files from `/usr/static`.

## 🔄 CI/CD Pipeline Configuration

The Azure DevOps pipeline (`azure-pipelines.yml`) automates linting, testing, building, and publishing Docker images.

### Pipeline Architecture

The pipeline uses **reusable templates** from the `pipeline-templates` repository to promote code reuse across projects:

- **Docker Build & Push**: Uses `common/jobs/build/docker-build-push.yml` - a shared template for building and publishing container images to ACR
- **Node.js-specific steps**: Install, lint, test, and build tasks are project-specific

This architecture allows the same Docker publishing logic to be reused for other projects (e.g., .NET, Python, etc.) without duplication.

### Pipeline Stages

1. **Install**: Sets up Node.js and installs dependencies with Yarn
2. **Lint**: Runs ESLint to check code quality (non-blocking)
3. **Test**: Runs unit tests with code coverage collection
4. **Build**: Creates optimized production build with Vite
5. **Docker Build & Push**: Uses shared template to build and publish Docker image to ACR

### Required Azure DevOps Configuration

The pipeline is pre-configured to use the **"Mia Demo ACR"** service connection. If you're using a different ACR or organization, update the service connection:

#### Update Pipeline for Your ACR

Edit `azure-pipelines.yml`:

```yaml
dockerRegistryServiceConnection: 'Your-ACR-Connection-Name'  # Change if needed
imageRepository: 'react-template'                            # Your desired image name
```

#### Creating a New Service Connection (if needed)

1. Navigate to **Project Settings** > **Service connections** in Azure DevOps
2. Click **New service connection** > **Docker Registry**
3. Select **Azure Container Registry**
4. Choose your Azure subscription and ACR registry
5. Name the connection (update the pipeline YAML with this name)
6. Click **Save**

### Trigger Behavior

- **Automatic**: Triggers on every push to the `master` branch
- **Manual**: Can be triggered manually from Azure DevOps UI for any branch

### Build Artifacts

The pipeline produces:
- Docker image tagged with `$(Build.BuildId)` and `latest`
- Test results published to Azure DevOps Test Plans
- Code coverage reports viewable in the pipeline run (Cobertura format)

## ☸️ Kubernetes Deployment

### Image Pull Secret Configuration

To deploy the Docker image from Azure Container Registry to Kubernetes, you need an ImagePullSecret.

#### 1. Create Service Principal or Use Admin Credentials

**Option A: Service Principal (Recommended for production)**

```bash
# Create a service principal with pull access
az ad sp create-for-rbac --name myapp-acr-reader --skip-assignment
az acr show --name myregistry.azurecr.io --query id --output tsv

# Grant AcrPull role
az role assignment create \
  --assignee <SERVICE_PRINCIPAL_APP_ID> \
  --role AcrPull \
  --scope <ACR_RESOURCE_ID>
```

**Option B: Admin Credentials (Simpler for development)**

```bash
# Enable admin user on ACR
az acr update --name myregistry --admin-enabled true

# Get credentials
az acr credential show --name myregistry
```

#### 2. Create Kubernetes Secret

**Using Service Principal:**

```bash
kubectl create secret docker-registry acr-secret \
  --docker-server=myregistry.azurecr.io \
  --docker-username=<SERVICE_PRINCIPAL_APP_ID> \
  --docker-password=<SERVICE_PRINCIPAL_PASSWORD> \
  --namespace=your-namespace
```

**Using Admin Credentials:**

```bash
kubectl create secret docker-registry acr-secret \
  --docker-server=myregistry.azurecr.io \
  --docker-username=myregistry \
  --docker-password=<ADMIN_PASSWORD> \
  --namespace=your-namespace
```

#### 3. Reference Secret in Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: react-template
spec:
  template:
    spec:
      imagePullSecrets:
        - name: acr-secret
      containers:
        - name: frontend
          image: myregistry.azurecr.io/%PROJECT_ID%/%MICROSERVICE_NAME%:latest
          ports:
            - containerPort: 8080
          livenessProbe:
            httpGet:
              path: /-/healthz
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /-/ready
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
```

### Required Secret Fields

| Field | Description | Example |
|-------|-------------|---------|
| `username` | Service principal ID or ACR admin username | `12345678-abcd-1234-abcd-123456789abc` |
| `password` | Service principal secret or ACR admin password | `uXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` |
| `server` | ACR registry hostname | `myregistry.azurecr.io` |

## 🧪 Testing

### Run Tests Locally

```bash
# Run tests in watch mode
yarn test

# Run tests once
yarn test run

# Run with coverage
yarn coverage
```

### View Coverage Reports

Coverage reports are generated in the `coverage/` directory:

```bash
# Open HTML coverage report
open coverage/index.html  # macOS
xdg-open coverage/index.html  # Linux
```

### Test Structure

Tests use:
- **Vitest**: Fast unit test framework compatible with Vite
- **React Testing Library**: User-centric testing utilities
- **@testing-library/jest-dom**: Custom matchers for DOM elements
- **happy-dom**: Lightweight DOM implementation for tests

### Adding New Tests

1. Create test file next to component: `MyComponent.test.tsx`
2. Import testing utilities and component
3. Write tests using `describe` and `it` blocks
4. Use `screen` queries to find elements

Example:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders the component', () => {
    render(<MyComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

## 🏥 Health Endpoints

The nginx configuration includes Mia-Platform standard health check endpoints:

### `GET /-/healthz`

**Purpose**: Kubernetes liveness probe endpoint

**Response**: `200 OK`
```json
{
  "status": "ok",
  "message": "Service is healthy"
}
```

### `GET /-/ready`

**Purpose**: Kubernetes readiness probe endpoint

**Response**: `200 OK`
```json
{
  "status": "ok",
  "message": "Service is ready"
}
```

**Usage**:
- Kubernetes `livenessProbe` and `readinessProbe`
- Load balancer health checks
- Monitoring systems

These endpoints are configured in `nginx/conf.d/website.conf` and return static JSON responses without hitting the application logic.

## 🛠️ Customization & Extension

### Adding New Pages

```tsx
// src/pages/About.tsx
export default function About() {
  return <div>About Page</div>
}

// In src/App.tsx (with React Router)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Adding API Integration

```typescript
// src/services/api.ts
const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api'

export async function fetchData() {
  const response = await fetch(`${API_BASE}/data`)
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

// Use in component
import { useEffect, useState } from 'react'
import { fetchData } from './services/api'

function MyComponent() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetchData().then(setData)
  }, [])
  
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>
}
```

### Environment Variables

Create `.env` files for environment-specific configuration:

**.env.local** (for local development):
```
VITE_API_BASE_URL=http://localhost:5000
VITE_FEATURE_FLAG=true
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

**Note**: Only variables prefixed with `VITE_` are exposed to the client.

### Adding State Management

**With Context API:**

```tsx
import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [state, setState] = useState({ user: null })
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
```

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server on http://localhost:5173 |
| `yarn build` | Create optimized production build |
| `yarn preview` | Preview production build locally |
| `yarn test` | Run tests in watch mode |
| `yarn coverage` | Run tests with coverage report |
| `yarn lint` | Check code quality with ESLint |

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/)
- [Kubernetes ImagePullSecrets](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)

## 🎯 AI Development Guide

For detailed guidance on AI-assisted development patterns and best practices, see [ai-instructions.md](ai-instructions.md).

## 📄 License

This template is provided by Mia-Platform for use in frontend development projects.

---

**Built with ❤️ for Mia Flow**
