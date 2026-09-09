import { useCanvasStore } from '@/lib/canvasStore'
import { Plus, Trash2, RotateCcw, Grid3x3 } from 'lucide-react'

function ToolPanel() {
  const { addObject, removeObject, clearCanvas, selectedId, toggleGrid, gridVisible } = useCanvasStore()

  // Simple UUID v4 generator (no external dependency)
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  const addPoint = () => {
    addObject({
      id: generateUUID(),
      type: 'point',
      properties: { x: Math.random() * 400, y: Math.random() * 400 },
      label: 'P',
      color: '#0284c7',
    })
  }

  const addLine = () => {
    addObject({
      id: generateUUID(),
      type: 'line',
      properties: {
        p1: { x: 100, y: 100 },
        p2: { x: 300, y: 300 },
      },
      label: 'Line',
      color: '#0284c7',
    })
  }

  const addCircle = () => {
    addObject({
      id: generateUUID(),
      type: 'circle',
      properties: { center: { x: 200, y: 200 }, radius: 100 },
      label: 'Circle',
      color: '#0284c7',
    })
  }

  return (
    <div className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 space-y-4 overflow-y-auto">
      <div>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Tools</h3>
        <div className="space-y-2">
          <button
            onClick={addPoint}
            className="btn btn-secondary btn-md w-full flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Point
          </button>
          <button
            onClick={addLine}
            className="btn btn-secondary btn-md w-full flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Line
          </button>
          <button
            onClick={addCircle}
            className="btn btn-secondary btn-md w-full flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Circle
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">View</h3>
        <button
          onClick={toggleGrid}
          className={`btn btn-md w-full flex items-center justify-center gap-2 ${
            gridVisible ? 'btn-primary' : 'btn-secondary'
          }`}
        >
          <Grid3x3 className="w-4 h-4" />
          Grid
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Selection</h3>
        {selectedId ? (
          <button
            onClick={() => removeObject(selectedId)}
            className="btn btn-md w-full flex items-center justify-center gap-2 bg-error-500 text-white hover:bg-error-600"
          >
            <Trash2 className="w-4 h-4" />
            Delete Selected
          </button>
        ) : (
          <p className="text-sm text-slate-500">No object selected</p>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Canvas</h3>
        <button
          onClick={clearCanvas}
          className="btn btn-md w-full flex items-center justify-center gap-2 bg-warning-500 text-white hover:bg-warning-600"
        >
          <RotateCcw className="w-4 h-4" />
          Clear All
        </button>
      </div>
    </div>
  )
}

export default ToolPanel