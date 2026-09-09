import { Link } from 'react-router-dom'
import { BookOpen, Microscope, Zap, GraduationCap, Lightbulb } from 'lucide-react'

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary-600">
            <BookOpen className="w-8 h-8" />
            GeoMaster
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" icon={BookOpen} label="Home" />
            <NavLink to="/lab" icon={Microscope} label="Lab" />
            <NavLink to="/lessons" icon={GraduationCap} label="Lessons" />
            <NavLink to="/tutor" icon={Zap} label="AI Tutor" />
            <NavLink to="/problems" icon={Lightbulb} label="Problems" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, icon: Icon, label }: { to: string; icon: any; label: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
    >
      <Icon className="w-4 h-4" />
      {label}
    </Link>
  )
}

export default Navigation