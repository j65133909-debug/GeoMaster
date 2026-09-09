import { useEffect, useRef } from 'react'
import { Stage, Layer, Line, Circle, Text, Group } from 'react-konva'
import Konva from 'konva'
import { useCanvasStore } from '@/lib/canvasStore'

function Canvas() {
  const stageRef = useRef<Konva.Stage>(null)
  const { objects, selectedId, scale, panX, panY, gridVisible, selectObject } = useCanvasStore()

  const handleStageClick = (e: any) => {
    if (e.target === e.target.getStage()) {
      selectObject(null)
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden">
      <Stage
        ref={stageRef}
        width={window.innerWidth - 300}
        height={window.innerHeight - 200}
        onClick={handleStageClick}
        scaleX={scale}
        scaleY={scale}
        offsetX={-panX}
        offsetY={-panY}
      >
        <Layer>
          {/* Grid */}
          {gridVisible && (
            <Group>
              {Array.from({ length: 40 }).map((_, i) => (
                <Line
                  key={`v-${i}`}
                  points={[i * 50, -1000, i * 50, 1000]}
                  stroke="#e2e8f0"
                  strokeWidth={0.5}
                />
              ))}
              {Array.from({ length: 40 }).map((_, i) => (
                <Line
                  key={`h-${i}`}
                  points={[-1000, i * 50, 1000, i * 50]}
                  stroke="#e2e8f0"
                  strokeWidth={0.5}
                />
              ))}
            </Group>
          )}

          {/* Geometry Objects */}
          {objects.map((obj) => {
            const isSelected = obj.id === selectedId
            const color = obj.color || '#0284c7'
            const strokeWidth = isSelected ? 3 : 2

            switch (obj.type) {
              case 'point':
                return (
                  <Circle
                    key={obj.id}
                    x={obj.properties.x}
                    y={obj.properties.y}
                    radius={isSelected ? 6 : 4}
                    fill={color}
                    stroke={isSelected ? '#0ea5e9' : color}
                    strokeWidth={strokeWidth}
                    onClick={() => selectObject(obj.id)}
                    onTap={() => selectObject(obj.id)}
                  />
                )
              case 'line':
                return (
                  <Group key={obj.id} onClick={() => selectObject(obj.id)}>
                    <Line
                      points={[
                        obj.properties.p1.x,
                        obj.properties.p1.y,
                        obj.properties.p2.x,
                        obj.properties.p2.y,
                      ]}
                      stroke={color}
                      strokeWidth={strokeWidth}
                      lineCap="round"
                    />
                  </Group>
                )
              case 'circle':
                return (
                  <Circle
                    key={obj.id}
                    x={obj.properties.center.x}
                    y={obj.properties.center.y}
                    radius={obj.properties.radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    onClick={() => selectObject(obj.id)}
                  />
                )
              default:
                return null
            }
          })}
        </Layer>
      </Stage>
    </div>
  )
}

export default Canvas