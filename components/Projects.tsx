'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import nyayNetraimage from '../public/nyaynetra.png';
import moviemeterimage from '../public/moviemeter.png';
import cabflowimage from '../public/cabflow.png'
const projects = [
  {
    id: 1,
    title: 'Nyaynetra',
    description: 'AI-powered platform that analyzes legal documents with summarization, clause tagging, and risk detection.',
    image: nyayNetraimage,
    link: 'https://nyaynetra-ai.vercel.app/',
    github: 'https://github.com/sushil-sagar05/nyaynetra.ai',
    tech: ['Next.js', 'TypeScript', 'Express', 'Huggingface', 'FastAPI', 'Sentence Transformer','Langchain', 'InLegalBERT', 'microservices'],
  },
  {
    id: 2,
    title: 'MovieMeter',
    description: 'Content-based movie recommender delivering real-time personalized suggestions using user profiles and ML.',
    image: moviemeterimage,
    link: 'https://movie-meter-fullstack.onrender.com/',
    github: 'https://github.com/sushil-sagar05/Movie-Meter',
    tech: ['React', 'Node.js', 'Express.js', 'Scikit-learn', 'MongoDB', 'cosine similarity', 'socket io', 'microservices'],
  },
  {
    id: 3,
    title: 'Cabflow',
    description: 'End-to-end cab booking platform offering seamless ride scheduling, real-time driver tracking, fare estimation, custom authentication using JWT tokens.',
    image: cabflowimage,  
    link: '',
    github: 'https://github.com/yourusername/blog-platform',
    tech: ['React', 'Node.js', 'Express.js', 'Google map api', 'MongoDB', 'Jwt', 'socket io', 'Context Api'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="block dark:hidden w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundColor: 'rgba(255,255,255,0.6)',
            mixBlendMode: 'multiply',
          }}
        />
        <div
          className="hidden dark:block w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            mixBlendMode: 'lighten',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {projects.map(({ id, title, description, image, link, github, tech }) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(32,146,157,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-lg"
            >
              <Card className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="w-full relative rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                    style={{ aspectRatio: '16 / 9' }}
                  >
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
                  <CardDescription className="mt-4 text-gray-600 dark:text-gray-300">{description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((item, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full border border-border  bg-muted cursor-default"
                        whileHover={{ backgroundColor: "#20929d", color: "white", borderColor: "#20929d" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={link} target="_blank" rel="noopener noreferrer" passHref>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button className='text-blue-400' variant="link">View Live</Button>
                    </motion.a>
                  </Link>
                  <Link href={github} target="_blank" rel="noopener noreferrer" passHref>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Button className='dark:border-pink-400' variant="outline">GitHub</Button>
                    </motion.a>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="m-8 flex justify-center items-center">
          <Link href="/projects" passHref>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>View All</Button>
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
}
