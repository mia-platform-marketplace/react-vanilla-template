interface CardProps {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  )
}
