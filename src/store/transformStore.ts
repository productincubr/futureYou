import { create } from 'zustand'

interface TransformState {
  photo: File | null
  photoPreview: string | null
  goals: {
    weightLoss: string
    buildMuscle: string
    fitnessLevel: string
    confidence: string
  }
  habits: string[]
  timeline: string
  transformedImage: string | null
  transformError: string | null
  setPhoto: (file: File, preview: string) => void
  setGoals: (goals: Partial<TransformState['goals']>) => void
  setHabits: (habits: string[]) => void
  setTimeline: (timeline: string) => void
  setTransformedImage: (url: string) => void
  setTransformError: (err: string) => void
  reset: () => void
}

export const useTransformStore = create<TransformState>((set) => ({
  photo: null,
  photoPreview: null,
  goals: { weightLoss: '', buildMuscle: '', fitnessLevel: '', confidence: '' },
  habits: [],
  timeline: '',
  transformedImage: null,
  transformError: null,
  setPhoto: (file, preview) => set({ photo: file, photoPreview: preview }),
  setGoals: (goals) => set((s) => ({ goals: { ...s.goals, ...goals } })),
  setHabits: (habits) => set({ habits }),
  setTimeline: (timeline) => set({ timeline }),
  setTransformedImage: (url) => set({ transformedImage: url }),
  setTransformError: (err) => set({ transformError: err }),
  reset: () => set({
    photo: null,
    photoPreview: null,
    goals: { weightLoss: '', buildMuscle: '', fitnessLevel: '', confidence: '' },
    habits: [],
    timeline: '',
    transformedImage: null,
    transformError: null,
  }),
}))