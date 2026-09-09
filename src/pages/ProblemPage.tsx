import { useState } from 'react'
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react'

interface Problem {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  topic: string
  points: number
}

const problems: Problem[] = [
  {
    id: '1',
    title: 'Finding Unknown Angles',
    description: 'Two parallel lines are cut by a transversal. If one angle is 65°, find all other angles formed.',
    difficulty: 'easy',
    topic: 'Angle Properties',
    points: 10,
  },
  {
    id: '2',
    title: 'Triangle Congruence Proof',
    description: 'Prove that two triangles are congruent using SSS (Side-Side-Side) criterion given the following measurements...',
    difficulty: 'medium',
    topic: 'Triangle Congruence',
    points: 20,
  },
  {
    id: '3',
    title: 'Circle Theorem Application',
    description: 'A chord is 8 cm from the center of a circle with radius 10 cm. Find the length of the chord.',
    difficulty: 'medium',
    topic: 'Circle Geometry',
    points: 20,
  },
  {
    id: '4',
    title: 'Coordinate Geometry Challenge',
    description: 'Find the equation of a line passing through points (2,3) and (5,9). Then find where it intersects the line y = x.',
    difficulty: 'medium',
    topic: 'Coordinate Geometry',
    points: 25,
  },
  {
    id: '5',
    title: 'Transformation Composition',
    description: 'A figure undergoes a 90° rotation followed by a reflection. Describe the final position and determine if this equals a single transformation.',
    difficulty: 'hard',
    topic: 'Transformations',
    points: 30,
  },
]

function ProblemPage() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null)
  const [solved, setSolved] = useState<string[]>([])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-success-600 bg-success-50 dark:bg-success-900/20'
      case 'medium':
        return 'text-warning-600 bg-warning-50 dark:bg-warning-900/20'
      case 'hard':
        return 'text-error-600 bg-error-50 dark:bg-error-900/20'
      default:
        return ''
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Geometry Problems</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Practice your skills with guided problems. Each problem includes hints and detailed solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problems List */}
        <div className="lg:col-span-1 space-y-3">
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => setSelectedProblem(problem)}
              className={`w-full text-left card p-4 transition-all ${
                selectedProblem?.id === problem.id ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {solved.includes(problem.id) ? (
                  <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-full flex-shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{problem.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{problem.topic}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Problem Details */}
        <div className="lg:col-span-2">
          {selectedProblem ? (
            <div className="card p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{selectedProblem.title}</h2>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyColor(selectedProblem.difficulty)}`}>
                    {selectedProblem.difficulty.charAt(0).toUpperCase() + selectedProblem.difficulty.slice(1)}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">{selectedProblem.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Points: {selectedProblem.points}</span>
                  <span>Topic: {selectedProblem.topic}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Need Help?
                </h3>
                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-primary-900 dark:text-primary-100">
                    💡 <strong>Hint:</strong> Start by identifying what information you have and what you need to find. Try using the Geometry Lab to visualize the problem.
                  </p>
                </div>

                <button
                  onClick={() => setSolved([...new Set([...solved, selectedProblem.id])])}
                  disabled={solved.includes(selectedProblem.id)}
                  className="btn btn-primary btn-lg w-full"
                >
                  {solved.includes(selectedProblem.id) ? 'Problem Solved ✓' : 'Mark as Solved'}
                </button>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <h3 className="font-semibold mb-3">Solution Steps</h3>
                <div className="space-y-3 text-sm">
                  <div className="card p-4 bg-slate-50 dark:bg-slate-800/50">
                    <p><strong>Step 1:</strong> Analyze the given information and identify what geometric principles apply.</p>
                  </div>
                  <div className="card p-4 bg-slate-50 dark:bg-slate-800/50">
                    <p><strong>Step 2:</strong> Set up equations or use geometric theorems to establish relationships.</p>
                  </div>
                  <div className="card p-4 bg-slate-50 dark:bg-slate-800/50">
                    <p><strong>Step 3:</strong> Solve the problem step by step, showing all calculations.</p>
                  </div>
                  <div className="card p-4 bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800">
                    <p className="text-success-900 dark:text-success-100"><strong>Final Answer:</strong> Verify your solution and express it clearly.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card p-12 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <p className="text-slate-500">Select a problem to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProblemPage