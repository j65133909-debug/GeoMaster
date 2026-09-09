import { Point, Vector, Line, Circle, Angle, Triangle } from '@types/geometry'
import * as math from 'math.js'

// Basic point operations
export const distance = (p1: Point, p2: Point): number => {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
}

export const midpoint = (p1: Point, p2: Point): Point => {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
  }
}

export const vectorFromPoints = (p1: Point, p2: Point): Vector => {
  return {
    x: p2.x - p1.x,
    y: p2.y - p1.y,
  }
}

// Vector operations
export const vectorMagnitude = (v: Vector): number => {
  return Math.sqrt(v.x ** 2 + v.y ** 2)
}

export const vectorDotProduct = (v1: Vector, v2: Vector): number => {
  return v1.x * v2.x + v1.y * v2.y
}

export const vectorCrossProduct = (v1: Vector, v2: Vector): number => {
  return v1.x * v2.y - v1.y * v2.x
}

export const vectorNormalize = (v: Vector): Vector => {
  const mag = vectorMagnitude(v)
  if (mag === 0) return { x: 0, y: 0 }
  return { x: v.x / mag, y: v.y / mag }
}

// Angle calculations (in degrees)
export const angleBetweenVectors = (v1: Vector, v2: Vector): number => {
  const dotProd = vectorDotProduct(v1, v2)
  const crossProd = vectorCrossProduct(v1, v2)
  const angle = Math.atan2(crossProd, dotProd)
  return (angle * 180) / Math.PI
}

export const angleBetweenPoints = (vertex: Point, p1: Point, p2: Point): number => {
  const v1 = vectorFromPoints(vertex, p1)
  const v2 = vectorFromPoints(vertex, p2)
  return Math.abs(angleBetweenVectors(v1, v2))
}

// Line operations
export const lineLength = (line: Line): number => {
  return distance(line.point1, line.point2)
}

export const lineSlope = (line: Line): number | null => {
  const dx = line.point2.x - line.point1.x
  if (dx === 0) return null // vertical line
  return (line.point2.y - line.point1.y) / dx
}

export const isPointOnLine = (point: Point, line: Line, tolerance = 0.01): boolean => {
  const slope = lineSlope(line)
  if (slope === null) {
    return Math.abs(point.x - line.point1.x) < tolerance
  }
  const expectedY = slope * (point.x - line.point1.x) + line.point1.y
  return Math.abs(point.y - expectedY) < tolerance
}

export const lineIntersection = (line1: Line, line2: Line): Point | null => {
  const x1 = line1.point1.x, y1 = line1.point1.y
  const x2 = line1.point2.x, y2 = line1.point2.y
  const x3 = line2.point1.x, y3 = line2.point1.y
  const x4 = line2.point2.x, y4 = line2.point2.y

  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
  if (Math.abs(denom) < 0.0001) return null // parallel

  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom

  return {
    x: x1 + t * (x2 - x1),
    y: y1 + t * (y2 - y1),
  }
}

// Circle operations
export const circleArea = (circle: Circle): number => {
  return Math.PI * circle.radius ** 2
}

export const circleCircumference = (circle: Circle): number => {
  return 2 * Math.PI * circle.radius
}

export const isPointInCircle = (point: Point, circle: Circle): boolean => {
  return distance(point, circle.center) <= circle.radius
}

export const isPointOnCircle = (point: Point, circle: Circle, tolerance = 0.01): boolean => {
  return Math.abs(distance(point, circle.center) - circle.radius) < tolerance
}

// Triangle operations
export const trianglePerimeter = (triangle: Triangle): number => {
  const [p1, p2, p3] = triangle.vertices
  return distance(p1, p2) + distance(p2, p3) + distance(p3, p1)
}

export const triangleArea = (triangle: Triangle): number => {
  const [p1, p2, p3] = triangle.vertices
  const v1 = vectorFromPoints(p1, p2)
  const v2 = vectorFromPoints(p1, p3)
  return Math.abs(vectorCrossProduct(v1, v2)) / 2
}

export const triangleAngles = (triangle: Triangle): [number, number, number] => {
  const [p1, p2, p3] = triangle.vertices
  const a = angleBetweenPoints(p1, p2, p3)
  const b = angleBetweenPoints(p2, p1, p3)
  const c = angleBetweenPoints(p3, p1, p2)
  return [a, b, c]
}

export const isValidTriangle = (triangle: Triangle): boolean => {
  const [p1, p2, p3] = triangle.vertices
  const d12 = distance(p1, p2)
  const d23 = distance(p2, p3)
  const d31 = distance(p3, p1)
  return d12 + d23 > d31 && d23 + d31 > d12 && d31 + d12 > d23
}

// Perpendicular and parallel operations
export const isPerpendicular = (line1: Line, line2: Line, tolerance = 0.01): boolean => {
  const slope1 = lineSlope(line1)
  const slope2 = lineSlope(line2)
  if (slope1 === null || slope2 === null) return true // one is vertical
  return Math.abs(slope1 * slope2 + 1) < tolerance
}

export const isParallel = (line1: Line, line2: Line, tolerance = 0.01): boolean => {
  const slope1 = lineSlope(line1)
  const slope2 = lineSlope(line2)
  if (slope1 === null && slope2 === null) return true
  if (slope1 === null || slope2 === null) return false
  return Math.abs(slope1 - slope2) < tolerance
}

export const perpendicularBisector = (line: Line): Line => {
  const mid = midpoint(line.point1, line.point2)
  const slope = lineSlope(line)
  if (slope === null) {
    return { point1: { x: mid.x - 50, y: mid.y }, point2: { x: mid.x + 50, y: mid.y } }
  }
  const perpSlope = -1 / slope
  const p1 = { x: mid.x - 50, y: mid.y + perpSlope * (-50) }
  const p2 = { x: mid.x + 50, y: mid.y + perpSlope * 50 }
  return { point1: p1, point2: p2 }
}
