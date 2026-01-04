import { Card } from '../components/Card'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to Your React App
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Getting Started"
            description="This is a simple React template with routing. Start building your application by editing this page."
          />
          
          <Card
            title="Components"
            description="Reusable components like this Card make building UIs easier and more consistent."
          />
          
          <Card
            title="React Router"
            description="Navigation is already set up. Try visiting /about to see routing in action."
          />
          
          <Card
            title="Tailwind CSS"
            description="Utility-first CSS framework for rapidly building custom designs."
          />
        </div>
      </div>
    </div>
  )
}
