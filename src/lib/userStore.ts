import { create } from 'zustand'

interface LessonProgress {
  lessonId: string
  completedSteps: number
  totalSteps: number
  timeSpent: number
  lastAccessed: Date
}

interface UserProfile {
  name: string
  gradeLevel: '10' | '11' | '12'
  progress: LessonProgress[]
  totalPointsEarned: number
  achievementsUnlocked: string[]
}

interface UserState {
  profile: UserProfile | null
  setProfile: (profile: UserProfile) => void
  updateProgress: (lessonId: string, updates: Partial<LessonProgress>) => void
  addAchievement: (achievement: string) => void
  incrementPoints: (points: number) => void
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  
  setProfile: (profile) => set({ profile }),
  
  updateProgress: (lessonId, updates) => set((state) => {
    if (!state.profile) return state
    return {
      profile: {
        ...state.profile,
        progress: state.profile.progress.map((p) =>
          p.lessonId === lessonId ? { ...p, ...updates } : p
        ),
      },
    }
  }),
  
  addAchievement: (achievement) => set((state) => {
    if (!state.profile) return state
    return {
      profile: {
        ...state.profile,
        achievementsUnlocked: [...new Set([...state.profile.achievementsUnlocked, achievement])],
      },
    }
  }),
  
  incrementPoints: (points) => set((state) => {
    if (!state.profile) return state
    return {
      profile: {
        ...state.profile,
        totalPointsEarned: state.profile.totalPointsEarned + points,
      },
    }
  }),
}))
