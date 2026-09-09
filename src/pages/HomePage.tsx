function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
          Master Euclidean Geometry
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Interactive learning platform for CAPS Mathematics Grade 10–12. Visualise, explore, and solve geometry problems with AI guidance.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/lab" className="btn btn-primary btn-lg">
            Launch Geometry Lab
          </a>
          <a href="/lessons" className="btn btn-secondary btn-lg">
            Browse Lessons
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Interactive Lab"
          description="Build and explore geometric figures with real-time visualization and measurements."
          icon="🔬"
        />
        <FeatureCard
          title="AI Mathematics Tutor"
          description="Get personalized explanations and step-by-step guidance on geometry concepts."
          icon="🤖"
        />
        <FeatureCard
          title="Guided Lessons"
          description="Learn core topics aligned with CAPS curriculum: triangles, circles, transformations, and more."
          icon="📚"
        />
        <FeatureCard
          title="Problem Solver"
          description="Practice with guided problems and receive instant feedback with detailed solutions."
          icon="💡"
        />
        <FeatureCard
          title="Visual Reasoning"
          description="Develop spatial reasoning through interactive constructions and animations."
          icon="🎨"
        />
        <FeatureCard
          title="Track Progress"
          description="Monitor your learning journey with achievements, points, and personalized recommendations."
          icon="📊"
        />
      </section>

      {/* CAPS Curriculum Info */}
      <section className="card p-8">
        <h2 className="text-3xl font-bold mb-4">Aligned with CAPS Mathematics</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          GeoMaster covers key Euclidean Geometry topics from the South African CAPS curriculum:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Grade 10</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✓ Angle properties and angle calculations</li>
              <li>✓ Triangle properties and congruence</li>
              <li>✓ Quadrilaterals</li>
              <li>✓ Similarity and scale factors</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Grade 11-12</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✓ Circle geometry and theorems</li>
              <li>✓ Coordinate geometry</li>
              <li>✓ Transformations (rotations, reflections, translations)</li>
              <li>✓ Trigonometry in geometry</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="card p-6 text-center hover:shadow-card-lg transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}

export default HomePage