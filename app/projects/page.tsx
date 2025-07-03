'use client';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ImageOff } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

import nyayNetraimage from '../../public/nyaynetra.png';
import moviemeterimage from '../../public/moviemeter.png';
import foodyimage from '../../public/foody.png';
import caresyncimage from '../../public/caresync.png';
import randomMessage from '../../public/true feedback.png';
import musicAcademy from '../../public/music academy.png';
import cabflowImage from '../../public/cabflow.png'

const projects = [
  {
    title: 'Nyaynetra',
    description:
      'AI-powered platform that analyzes legal documents with summarization, clause tagging, and risk detection.',
    image: nyayNetraimage,
    live: 'https://nyaynetra-ai.vercel.app/',
    github: 'https://github.com/sushil-sagar05/nyaynetra.ai',
    tech: ['Next.js', 'TypeScript', 'Express', 'Huggingface', 'FastAPI', 'Sentence Transformer','Langchain', 'InLegalBERT', 'microservices'],
  },
  {
    title: 'MovieMeter',
    description:
      'Movie recommender delivering real-time personalized suggestions using user profiles and ML.',
    image: moviemeterimage,
    live: 'https://movie-meter-fullstack.onrender.com/',
    github: 'https://github.com/sushil-sagar05/Movie-Meter',
    tech: ['React', 'Node.js', 'Express.js', 'Scikit-learn', 'MongoDB', 'cosine similarity','vectorisation','jwt', 'socket io', 'microservices'],
  },
  {
    title: 'Cabflow',
    description: 'A feature-rich, end-to-end cab booking platform offering seamless ride scheduling, real-time driver tracking, fare estimation, custom authentication using JWT tokens, and real-time communication via Socket.io.',
    image: cabflowImage,
    live: '',
    github: 'https://github.com/yourname/devops-dashboard',
    tech: ['React', 'Node.js', 'Express.js', 'Context Api', 'MongoDB', 'Google Api','jwt', 'socket io'],
  },
  {
    title: 'Foody',
    description: 'Frontend e-commerce food website.',
    image: foodyimage,
    live: 'https://food-delivery-app-frontend-gamma.vercel.app/',
    github: 'https://github.com/sushil-sagar05/Food-delivery-App',
    tech: ['React.js', 'Context API', 'REST API'],
  },
  {
    title: 'Random Message',
    description: 'A platform to receive message from random people.',
    image: randomMessage,
    live: '',
    github: 'https://github.com/sushil-sagar05/Random_Message',
    tech: ['Nextjs', 'Next Auth', 'Mongodb','Resend'],
  },
  {
    title: 'Music Academy',
    description: 'Educational platform for music learners.',
    image: musicAcademy,
    live: '',
    github: 'https://github.com/yourname/devops-dashboard',
    tech: ['Next.js', 'Accernity UI'],
  },
  {
    title: 'CareSync',
    description: 'A multipurpose medical frontend website.',
    image: caresyncimage,
    live: 'https://health-care-website-rho.vercel.app/',
    github: 'https://github.com/sushil-sagar05/HealthCare-Website',
    tech: ['React.js', 'Context API', 'Tailwind CSS'],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🔳 Grid pattern background — light mode */}
      <div
        className="absolute inset-0 z-0 block dark:hidden"
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

      {/* 🔳 Grid pattern background — dark mode */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          mixBlendMode: 'lighten',
        }}
      />

      {/* 🔲 Main content */}
      <div className="relative z-10 px-6 md:px-16 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          My Projects
        </h1>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(32,146,157,0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/70 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 cursor-pointer">
                <div className="relative w-full h-56 rounded-t-2xl overflow-hidden bg-muted">
                  {project.image ? (
                    typeof project.image === 'string' ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <ImageOff className="w-10 h-10" />
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.live && (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="ghost"
                      className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-purple-400 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
