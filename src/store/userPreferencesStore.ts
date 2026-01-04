import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * User Preferences Store
 * 
 * Example of Zustand for global state management.
 * This store persists user preferences to localStorage.
 * 
 * Features demonstrated:
 * - Global state with Zustand
 * - Persistence with zustand/middleware
 * - TypeScript types for store
 * - Actions (setters) and selectors (getters)
 */

interface UserPreferences {
  username: string
  emailNotifications: boolean
  language: string
}

interface UserPreferencesStore {
  preferences: UserPreferences
  setUsername: (username: string) => void
  setEmailNotifications: (enabled: boolean) => void
  setLanguage: (language: string) => void
  resetPreferences: () => void
}

const defaultPreferences: UserPreferences = {
  username: '',
  emailNotifications: true,
  language: 'en',
}

export const useUserPreferencesStore = create<UserPreferencesStore>()(
  persist(
    (set) => ({
      preferences: defaultPreferences,
      
      setUsername: (username) =>
        set((state) => ({
          preferences: { ...state.preferences, username },
        })),
      
      setEmailNotifications: (emailNotifications) =>
        set((state) => ({
          preferences: { ...state.preferences, emailNotifications },
        })),
      
      setLanguage: (language) =>
        set((state) => ({
          preferences: { ...state.preferences, language },
        })),
      
      resetPreferences: () =>
        set({ preferences: defaultPreferences }),
    }),
    {
      name: 'user-preferences-storage',
    }
  )
)
