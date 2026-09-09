function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary-600">GeoMaster</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Interactive Euclidean Geometry learning platform for CAPS Mathematics students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="/lab" className="hover:text-primary-600">Geometry Lab</a></li>
              <li><a href="/lessons" className="hover:text-primary-600">Lessons</a></li>
              <li><a href="/tutor" className="hover:text-primary-600">AI Tutor</a></li>
              <li><a href="/problems" className="hover:text-primary-600">Problem Solver</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary-600">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-600">CAPS Curriculum</a></li>
              <li><a href="#" className="hover:text-primary-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary-600">User Guide</a></li>
              <li><a href="#" className="hover:text-primary-600">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-600">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} GeoMaster. Designed for CAPS Mathematics Grade 10-12.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer