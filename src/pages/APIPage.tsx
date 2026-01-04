import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ArrowLeft, RefreshCw, User } from 'lucide-react'

/**
 * APIPage Component
 * 
 * Demonstrates data fetching with Tanstack Query:
 * - useQuery hook for fetching data
 * - Loading states
 * - Error handling
 * - Refetch functionality
 * - Type-safe API responses
 * 
 * Uses JSONPlaceholder API as an example.
 */

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: {
    name: string
  }
}

// API fetch function
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}

export function APIPage() {
  const navigate = useNavigate()
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

  const { data: users, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  const selectedUser = users?.find(u => u.id === selectedUserId)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <Button
          variant="secondary"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          API Example
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Demonstrates Tanstack Query for data fetching
        </p>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading users...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
              Error Loading Data
            </h3>
            <p className="text-red-700 dark:text-red-400">
              {error instanceof Error ? error.message : 'An error occurred'}
            </p>
          </div>
        )}

        {/* Success State - User List */}
        {users && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Users ({users.length})
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {users.map((user) => (
                <button
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedUserId === user.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {user.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {user.email}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {user.company.name}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected User Details */}
      {selectedUser && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            User Details
          </h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            <div>
              <span className="font-semibold">Name:</span> {selectedUser.name}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {selectedUser.email}
            </div>
            <div>
              <span className="font-semibold">Phone:</span> {selectedUser.phone}
            </div>
            <div>
              <span className="font-semibold">Website:</span> {selectedUser.website}
            </div>
            <div>
              <span className="font-semibold">Company:</span> {selectedUser.company.name}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
