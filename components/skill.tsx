'use client';
import { Badge } from '@/components/ui/badge';
import { motion, Variants } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'Flask',
  'FastAPI',
  'REST APIs',
  'JWT Authentication',
  'MongoDB',
  'SQL',
  'Hugging Face Transformers',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'TF-IDF',
  'Cosine Similarity',
  'langchain',
  'Matplotlib',
  'Git',
  'GitHub',
  'Postman',
  'Cron Jobs',
];

const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 text-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div key={skill} variants={itemVariants}>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 cursor-default select-none dark:border-teal-300 border-pink-300"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
