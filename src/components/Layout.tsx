import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout