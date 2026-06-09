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
  sessionId: string | null
  resultImageUrl: string | null
  setPhoto: (file: File, preview: string) => void
  setGoals: (goals: Partial<TransformState['goals']>) => void
  setHabits: (habits: string[]) => void
  setTimeline: (timeline: string) => void
  setSessionId: (id: string) => void
  setResultImageUrl: (url: string) => void
}

export const useTransformStore = create<TransformState>((set) => ({
  photo: null,
  photoPreview: null,
  goals: { weightLoss: '', buildMuscle: '', fitnessLevel: '', confidence: '' },
  habits: [],
  timeline: '',
  sessionId: null,
  resultImageUrl: null,
  setPhoto: (file, preview) => set({ photo: file, photoPreview: preview }),
  setGoals: (goals) => set((s) => ({ goals: { ...s.goals, ...goals } })),
  setHabits: (habits) => set({ habits }),
  setTimeline: (timeline) => set({ timeline }),
  setSessionId: (id) => set({ sessionId: id }),
  setResultImageUrl: (url) => set({ resultImageUrl: url }),
}))