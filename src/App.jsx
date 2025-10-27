import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <section id="explore" className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-800">
              <h2 className="text-2xl font-bold tracking-tight">Explore Notes</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                A curated feed of trending notes will live here. Filter by subject, level, and format.
              </p>
            </div>
          </div>
        </section>
        <HowItWorks />
        <FAQ />
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-900" aria-label="Footer">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-3 inline-flex h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Modern, secure notes sharing for creators and learners.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Follow</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li><a href="#" className="hover:underline">Twitter/X</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 md:flex-row">
            <p>© {new Date().getFullYear()} NoteShare. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">Status</a>
              <a href="#" className="hover:underline">Security</a>
              <a href="#" className="hover:underline">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
