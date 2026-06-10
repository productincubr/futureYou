import { create } from 'zustand'

interface Goals {
  weightLoss: string
  buildMuscle: string
  fitnessLevel: string
  confidence: string
}

interface TransformStore {
  photo: File | null
  photoPreview: string | null
  photoBase64: string | null

  goals: Goals
  habits: string[]
  timeline: string

  isUploading: boolean
  isTransforming: boolean
  uploadedFilename: string
  uploadedUrl: string
  transformedImage: string | null
  transformError: string | null

  setPhoto: (file: File, preview: string, base64: string) => void
  setGoals: (g: Partial<Goals>) => void
  setHabits: (h: string[]) => void
  setTimeline: (t: string) => void
  setIsUploading: (v: boolean) => void
  setUploadResult: (filename: string, url: string) => void
  setIsTransforming: (v: boolean) => void
  setTransformedImage: (img: string) => void
  setTransformError: (err: string) => void
  reset: () => void
}

const defaultGoals: Goals = {
  weightLoss: '',
  buildMuscle: '',
  fitnessLevel: '',
  confidence: '',
}

export const useTransformStore = create<TransformStore>((set) => ({
  photo: null,
  photoPreview: null,
  photoBase64: null,

  goals: defaultGoals,
  habits: [],
  timeline: '',

  isUploading: false,
  isTransforming: false,
  uploadedFilename: '',
  uploadedUrl: '',
  transformedImage: null,
  transformError: null,

  setPhoto: (file, preview, base64) =>
    set({ photo: file, photoPreview: preview, photoBase64: base64 }),

  setGoals: (g) =>
    set((state) => ({ goals: { ...state.goals, ...g } })),

  setHabits: (h) => set({ habits: h }),
  setTimeline: (t) => set({ timeline: t }),
  setIsUploading: (v) => set({ isUploading: v }),
  setUploadResult: (filename, url) =>
    set({ isUploading: false, uploadedFilename: filename, uploadedUrl: url }),
  setIsTransforming: (v) => set({ isTransforming: v }),
  setTransformedImage: (img) =>
    set({ transformedImage: img, isTransforming: false }),
  setTransformError: (err) =>
    set({ transformError: err, isTransforming: false }),

  reset: () =>
    set({
      photo: null,
      photoPreview: null,
      photoBase64: null,
      goals: defaultGoals,
      habits: [],
      timeline: '',
      transformedImage: null,
      transformError: null,
      uploadedFilename: '',
      uploadedUrl: '',
    }),
}))