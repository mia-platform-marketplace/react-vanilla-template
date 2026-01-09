function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to Your React App
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Getting Started
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is a simple React template. Start building your application by editing App.tsx.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Tailwind CSS
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Utility-first CSS framework for rapidly building custom designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
