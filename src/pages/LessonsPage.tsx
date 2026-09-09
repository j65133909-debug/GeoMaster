import { BookOpen, Play } from 'lucide-react'

interface Lesson {
  id: string
  title: string
  description: string
  gradeLevel: string
  topics: string[]
  duration: number
  completed: boolean
}

const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Angle Properties & Calculations',
    description: 'Learn about different types of angles, angle pairs, and how to calculate angles using geometric relationships.',
    gradeLevel: '10',
    topics: ['Acute angles', 'Obtuse angles', 'Angle pairs', 'Angle calculations'],
    duration: 45,
    completed: false,
  },
  {
    id: '2',
    title: 'Triangle Properties & Congruence',
    description: 'Explore triangle classifications, properties, congruence tests (SSS, SAS, ASA), and similarity.',
    gradeLevel: '10',
    topics: ['Triangle types', 'Congruence tests', 'Angle sum', 'Similarity'],
    duration: 60,
    completed: false,
  },
  {
    id: '3',
    title: 'Quadrilaterals',
    description: 'Study quadrilateral types, properties of parallelograms, trapezoids, and special quadrilaterals.',
    gradeLevel: '10',
    topics: ['Parallelograms', 'Trapezoids', 'Kites', 'Properties'],
    duration: 50,
    completed: false,
  },
  {
    id: '4',
    title: 'Circle Geometry & Theorems',
    description: 'Master circle properties, theorems about chords, tangents, angles in circles, and cyclic quadrilaterals.',
    gradeLevel: '11-12',
    topics: ['Chords', 'Tangents', 'Angles in circles', 'Cyclic quadrilaterals'],
    duration: 75,
    completed: false,
  },
  {
    id: '5',
    title: 'Coordinate Geometry',
    description: 'Learn to work with geometric figures on a coordinate plane, finding distances, midpoints, and equations.',
    gradeLevel: '11-12',
    topics: ['Distance formula', 'Midpoint', 'Gradient', 'Equations of lines'],
    duration: 65,
    completed: false,
  },
  {
    id: '6',
    title: 'Transformations',
    description: 'Understand rotations, reflections, translations, and dilations, and how they affect geometric figures.',
    gradeLevel: '11-12',
    topics: ['Rotations', 'Reflections', 'Translations', 'Dilations'],
    duration: 55,
    completed: false,
  },
]

function LessonsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Geometry Lessons</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Comprehensive lessons aligned with CAPS Mathematics curriculum. Each lesson includes interactive visualizations and guided practice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  )
}

interface LessonCardProps {
  lesson: Lesson
}

function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="card p-6 hover:shadow-card-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-primary-600">Grade {lesson.gradeLevel}</span>
          </div>
          <h3 className="text-xl font-bold">{lesson.title}</h3>
        </div>
        {lesson.completed && (
          <div className="text-2xl">✓</div>
        )}
      </div>

      <p className="text-slate-600 dark:text-slate-400 mb-4">{lesson.description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Topics:</p>
        <div className="flex flex-wrap gap-2">
          {lesson.topics.map((topic) => (
            <span key={topic} className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 px-3 py-1 rounded-full">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">⏱ {lesson.duration} minutes</span>
        <button className="btn btn-primary btn-sm flex items-center gap-2">
          <Play className="w-4 h-4" />
          Start Lesson
        </button>
      </div>
    </div>
  )
}

export default LessonsPage