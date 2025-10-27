import { motion } from 'framer-motion';
import { UserPlus, Upload, Search } from 'lucide-react';

const steps = [
  {
    title: 'Sign Up',
    desc: 'Create a secure account to personalize your experience and build your profile.',
    icon: UserPlus,
  },
  {
    title: 'Create / Upload Notes',
    desc: 'Use our rich editor or upload PDFs to publish beautiful, searchable notes.',
    icon: Upload,
  },
  {
    title: 'Share & Explore',
    desc: 'Share your work with the community and discover top-rated resources.',
    icon: Search,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A streamlined, secure flow designed for creators and learners.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white">
                <step.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
