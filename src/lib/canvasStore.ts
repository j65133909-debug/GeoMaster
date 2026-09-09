import { create } from 'zustand'
import { GeometryObject, Point } from '@types/geometry'

interface CanvasState {
  objects: GeometryObject[]
  selectedId: string | null
  scale: number
  panX: number
  panY: number
  gridVisible: boolean
  snapToGrid: boolean

  addObject: (obj: GeometryObject) => void
  removeObject: (id: string) => void
  updateObject: (id: string, updates: Partial<GeometryObject>) => void
  selectObject: (id: string | null) => void
  clearSelection: () => void
  setScale: (scale: number) => void
  setPan: (x: number, y: number) => void
  toggleGrid: () => void
  toggleSnapToGrid: () => void
  clearCanvas: () => void
}

export const useCanvasStore = create<CanvasState>((set) => ({
  objects: [],
  selectedId: null,
  scale: 1,
  panX: 0,
  panY: 0,
  gridVisible: true,
  snapToGrid: false,

  addObject: (obj) => set((state) => ({ objects: [...state.objects, obj] })),
  
  removeObject: (id) => set((state) => ({
    objects: state.objects.filter((o) => o.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId,
  })),
  
  updateObject: (id, updates) => set((state) => ({
    objects: state.objects.map((o) => o.id === id ? { ...o, ...updates } : o),
  })),
  
  selectObject: (id) => set({ selectedId: id }),
  clearSelection: () => set({ selectedId: null }),
  setScale: (scale) => set({ scale: Math.max(0.1, Math.min(5, scale)) }),
  setPan: (x, y) => set({ panX: x, panY: y }),
  toggleGrid: () => set((state) => ({ gridVisible: !state.gridVisible })),
  toggleSnapToGrid: () => set((state) => ({ snapToGrid: !state.snapToGrid })),
  clearCanvas: () => set({ objects: [], selectedId: null }),
}))
