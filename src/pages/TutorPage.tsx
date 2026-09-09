import { useState } from 'react'
import { Send, MessageCircle, Lightbulb } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

function TutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI Mathematics Tutor. Ask me anything about Euclidean Geometry. I can help you understand concepts, solve problems, or explore geometric properties.',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response (in production, call your backend API)
    setTimeout(() => {
      const responses: Record<string, string> = {
        triangle: 'A triangle is a polygon with three sides and three angles. The sum of all interior angles in any triangle is always 180°. Triangles can be classified by: 1) Side lengths (equilateral, isosceles, scalene) and 2) Angles (acute, right, obtuse).',
        circle: 'A circle is a set of all points equidistant from a central point (the center). Key properties: The distance from center to any point on the circle is the radius. The circumference is 2πr, and the area is πr². Circles are important in many geometric theorems.',
        angle: 'An angle is formed by two rays sharing a common endpoint (vertex). Angles are measured in degrees (°) or radians. Types: acute (0-90°), right (90°), obtuse (90-180°), and straight (180°). Angles on a straight line sum to 180°.',
      }

      const lowerInput = input.toLowerCase()
      let response = responses['triangle']
      if (lowerInput.includes('circle')) response = responses['circle']
      else if (lowerInput.includes('angle')) response = responses['angle']
      else response = 'That\'s a great question! In Euclidean Geometry, we study shapes, angles, and their relationships. What specific concept would you like to explore? Try asking about triangles, circles, angles, or use the Lab to visualize ideas.'

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="h-screen flex flex-col max-w-4xl mx-auto">
      {/* Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="w-6 h-6 text-primary-600" />
          <h1 className="text-3xl font-bold">AI Mathematics Tutor</h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Ask questions about Euclidean Geometry concepts, problem-solving strategies, or proofs.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-md px-4 py-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary-600 text-white rounded-br-none'
                  : 'card bg-slate-100 dark:bg-slate-800 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-primary-100' : 'text-slate-500'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="card bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-bl-none">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="card p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask a question about geometry..."
            className="input flex-1"
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
            className="btn btn-primary btn-md px-6"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TutorPage