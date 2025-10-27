import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is NoteShare free to use?',
    a: 'Core features are free. A premium plan unlocks advanced analytics, priority discovery, and higher storage limits.'
  },
  {
    q: 'How do you keep my notes secure?',
    a: 'We use modern encryption in transit (TLS), robust access controls, and continuous monitoring. Role-based permissions let you control who can view or edit your notes.'
  },
  {
    q: 'Can I collaborate with others?',
    a: 'Yes. Share links with granular permissions, invite collaborators to co-author, and receive feedback through comments.'
  },
  {
    q: 'Do you support dark mode?',
    a: 'Absolutely. Toggle themes anytime; the preference is remembered across visits.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Quick answers to common questions.</p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={item.q} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/60"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-zinc-500 transition-transform duration-200 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`grid overflow-hidden px-5 transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] py-0' : 'grid-rows-[0fr]'} `}
                >
                  <div className="min-h-0">
                    <p className="pb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
