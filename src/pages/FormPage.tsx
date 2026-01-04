import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ArrowLeft } from 'lucide-react'

/**
 * FormPage Component
 * 
 * Demonstrates form handling with validation:
 * - React Hook Form for form state management
 * - Zod for schema validation
 * - TypeScript for type safety
 * - Error handling and display
 * - Controlled inputs
 * - Form submission
 * 
 * This pattern is ideal for any form in your application.
 */

// Define validation schema with Zod
const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  age: z.coerce.number().min(18, 'Must be at least 18 years old').max(120),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type FormData = z.infer<typeof formSchema>

export function FormPage() {
  const navigate = useNavigate()
  const [submittedData, setSubmittedData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setSubmittedData(data)
    console.log('Form submitted:', data)
    
    // Reset form after successful submission
    setTimeout(() => {
      reset()
      setSubmittedData(null)
    }, 3000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Button 
        variant="outline" 
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Form Example
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Demonstrates React Hook Form + Zod validation
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Username
            </label>
            <input
              {...register('username')}
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="johndoe"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Confirm Password
            </label>
            <input
              {...register('confirmPassword')}
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Age
            </label>
            <input
              {...register('age')}
              type="number"
              id="age"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              placeholder="18"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.age.message}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              {...register('agreeToTerms')}
              type="checkbox"
              id="agreeToTerms"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.agreeToTerms.message}</p>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </Button>
          </div>
        </form>

        {/* Success Message */}
        {submittedData && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
              Form Submitted Successfully!
            </h3>
            <pre className="text-sm text-green-700 dark:text-green-400 overflow-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
