import { Card } from '../components/Card'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About This Template
        </h1>
        
        <Card
          title="Simple and Clean"
          description="This template provides a minimal setup with React, TypeScript, React Router, and Tailwind CSS. Perfect for AI-assisted development."
        />
        
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
