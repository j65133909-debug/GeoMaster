import { useState } from 'react'
import Canvas from '@/components/Canvas'
import ToolPanel from '@/components/ToolPanel'

function LabPage() {
  const [showInstructions, setShowInstructions] = useState(true)

  return (
    <div className="flex flex-col gap-4 h-screen">
      {showInstructions && (
        <div className="card p-4 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                Welcome to the Geometry Lab
              </h2>
              <p className="text-sm text-primary-800 dark:text-primary-200">
                Use the tools on the left to create points, lines, and circles. Click objects to select them and explore geometric properties.
              </p>
            </div>
            <button
              onClick={() => setShowInstructions(false)}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="flex flex-1 gap-4 overflow-hidden">
        <ToolPanel />
        <div className="flex-1">
          <Canvas />
        </div>
      </div>
    </div>
  )
}

export default LabPage