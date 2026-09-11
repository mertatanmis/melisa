import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function Ornament({ dark = false }: { dark?: boolean }) {
  const line = dark ? 'via-accent-300' : 'via-accent-400';
  return (
    <span className="mt-6 mb-6 inline-flex items-center gap-2" aria-hidden="true">
      <span className={`h-px w-14 bg-gradient-to-r from-transparent ${line}`} />
      <span className={`w-1.5 h-1.5 rotate-45 border ${dark ? 'border-accent-300' : 'border-accent-400'}`} />
      <span className={`h-px w-14 bg-gradient-to-l from-transparent ${line}`} />
    </span>
  );
}

export default function SectionHeader({ eyebrow, title, subtitle, dark = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className={`section-eyebrow ${dark ? 'section-eyebrow--light' : ''}`}>
        {eyebrow}
      </span>
      <h2 className={`section-title mt-4 ${dark ? 'section-title--light' : ''}`}>
        {title}
      </h2>
      <div className="flex justify-center">
        <Ornament dark={dark} />
      </div>
      {subtitle && (
        <p className={`section-subtitle ${dark ? 'section-subtitle--light' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
