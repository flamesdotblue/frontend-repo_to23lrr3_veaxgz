import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const contributors = [
  { name: 'Ava M.', avatar: 'https://i.pravatar.cc/80?img=1' },
  { name: 'Liam K.', avatar: 'https://i.pravatar.cc/80?img=2' },
  { name: 'Noah P.', avatar: 'https://i.pravatar.cc/80?img=3' },
  { name: 'Mia R.', avatar: 'https://i.pravatar.cc/80?img=4' },
  { name: 'Ethan S.', avatar: 'https://i.pravatar.cc/80?img=5' },
  { name: 'Olivia C.', avatar: 'https://i.pravatar.cc/80?img=6' },
  { name: 'Lucas T.', avatar: 'https://i.pravatar.cc/80?img=7' },
  { name: 'Emma B.', avatar: 'https://i.pravatar.cc/80?img=8' },
  { name: 'Sophia W.', avatar: 'https://i.pravatar.cc/80?img=9' },
  { name: 'James H.', avatar: 'https://i.pravatar.cc/80?img=10' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 lg:py-24">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Share brilliant notes with a modern, secure platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            Publish your study materials, discover high-quality resources, and collaborate with a thriving community of top contributors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-3 text-white shadow-lg transition hover:opacity-95"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Explore Notes
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-10"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Top contributors
            </p>
            <div className="relative h-20 overflow-hidden">
              <motion.div
                className="absolute flex gap-6"
                initial={{ x: 0 }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[...contributors, ...contributors].map((c, idx) => (
                  <div key={`${c.name}-${idx}`} className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <img src={c.avatar} alt={c.name} className="h-8 w-8 rounded-full object-cover" />
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{c.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-50 shadow-inner dark:border-zinc-800/70 dark:bg-zinc-950 md:aspect-[4/3] lg:aspect-[16/10]">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-zinc-950/40" />
        </div>
      </div>
    </section>
  );
}
