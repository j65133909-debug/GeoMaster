// Core geometric types and interfaces

export interface Point {
  x: number
  y: number
}

export interface Vector {
  x: number
  y: number
}

export interface Line {
  point1: Point
  point2: Point
}

export interface Circle {
  center: Point
  radius: number
}

export interface Angle {
  vertex: Point
  arm1: Point
  arm2: Point
}

export interface Triangle {
  vertices: [Point, Point, Point]
}

export interface Polygon {
  vertices: Point[]
}

export interface GeometryObject {
  id: string
  type: 'point' | 'line' | 'circle' | 'triangle' | 'polygon' | 'angle'
  properties: Record<string, any>
  label?: string
  color?: string
}

export interface TransformationMatrix {
  a: number
  b: number
  c: number
  d: number
  e: number
  f: number
}
