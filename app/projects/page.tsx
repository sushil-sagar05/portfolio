'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ImageOff, Star, Calendar, Code, Sparkles, ArrowRight, Eye } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

import nyayNetraimage from '../../public/nyaynetra.png';
import moviemeterimage from '../../public/moviemeter.png';
import devcircle_image from '../../public/dev-circle.png';
import foodyimage from '../../public/foody.png';
import caresyncimage from '../../public/caresync.png';
import randomMessage from '../../public/true feedback.png';
import musicAcademy from '../../public/music academy.png';
import cabflowImage from '../../public/cabflow.png';

const projects = [
  {
    title: 'Nyaynetra',
    description: 'AI-powered platform that analyzes legal documents with summarization, clause tagging, and risk detection.',
    image: nyayNetraimage,
    live: 'https://nyaynetra-ai.vercel.app/',
    github: 'https://github.com/sushil-sagar05/nyaynetra.ai',
    tech: ['Next.js', 'TypeScript', 'Express', 'Huggingface', 'FastAPI', 'Sentence Transformer','Langchain', 'InLegalBERT', 'microservices'],
    featured: true,
    category: 'AI/ML',
    status: 'Live',
    year: '2025'
  },
  {
    title: 'MovieMeter',
    description: 'Movie recommender delivering real-time personalized suggestions using user profiles and ML.',
    image: moviemeterimage,
    live: 'https://movie-meter-fullstack.onrender.com/',
    github: 'https://github.com/sushil-sagar05/Movie-Meter',
    tech: ['React', 'Node.js', 'Express.js', 'Scikit-learn', 'MongoDB', 'cosine similarity','vectorisation','jwt', 'socket io', 'microservices'],
    featured: true,
    category: 'Full Stack',
    status: 'Live',
    year: '2025'
  },
   {
    title: 'Dev-circle',
    description: 'Mern Based Post sharing web app with messaging function only followed from both side and engaging functionalities.',
     image: devcircle_image,
    live: 'https://movie-meter-fullstack.onrender.com/',
    github: 'https://github.com/sushil-sagar05/dev_circle',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'socket.io', 'Context API'],
    featured: true,
    category: 'Full Stack',
    status: 'Live',
    year: '2025'
  },
  {
    title: 'Cabflow',
    description: 'A feature-rich, end-to-end cab booking platform offering seamless ride scheduling, real-time driver tracking, fare estimation, custom authentication using JWT tokens, and real-time communication via Socket.io.',
    image: cabflowImage,
    live: '',
    github: 'https://github.com/yourname/devops-dashboard',
    tech: ['React', 'Node.js', 'Express.js', 'Context Api', 'MongoDB', 'Google Api','jwt', 'socket io'],
    featured: false,
    category: 'Full Stack',
    status: 'Development',
    year: '2024'
  },
  {
    title: 'Foody',
    description: 'Clean food delivery website build with React js and Context Api frontend web app with add to cart funtionality.',
    image: foodyimage,
    live: 'https://food-delivery-app-frontend-gamma.vercel.app/',
    github: 'https://github.com/sushil-sagar05/Food-delivery-App',
    tech: ['React.js', 'Context API', 'REST API','Lucid-React','Api'],
    featured: false,
    category: 'Frontend',
    status: 'Live',
    year: '2024'
  },
  {
    title: 'Random Message',
    description: 'A platform to receive message from random people build with nextjs and nextauth and ai suggested message with clean ui/ux.',
    image: randomMessage,
    live: '',
    github: 'https://github.com/sushil-sagar05/Random_Message',
    tech: ['Nextjs', 'Next Auth', 'Mongodb','Resend','Gemini Api'],
    featured: false,
    category: 'Full Stack',
    status: 'Development',
    year: '2024'
  },
  {
    title: 'Music Academy',
    description: 'Educational platform for music learners.',
    image: musicAcademy,
    live: '',
    github: 'https://github.com/yourname/devops-dashboard',
    tech: ['Next.js', 'Accernity UI'],
    featured: false,
    category: 'Frontend',
    status: 'Development',
    year: '2024'
  },
  {
    title: 'CareSync',
    description: 'A multipurpose medical frontend website.',
    image: caresyncimage,
    live: 'https://health-care-website-rho.vercel.app/',
    github: 'https://github.com/sushil-sagar05/HealthCare-Website',
    tech: ['React.js', 'Context API', 'Tailwind CSS'],
    featured: false,
    category: 'Frontend',
    status: 'Live',
    year: '2024'
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
    case 'Full Stack':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
    case 'Frontend':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-800';
  }
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-8 lg:px-16 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6">
            <Code className="w-4 h-4" />
            Portfolio Showcase
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            A collection of full-stack applications, AI-powered solutions, and innovative web experiences 
            showcasing my technical expertise and problem-solving abilities.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              {projects.filter(p => p.featured).length} Featured Projects
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              2024 - 2025
            </div>
          </div>
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 h-full flex flex-col">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    variant={project.status === 'Live' ? 'default' : 'secondary'}
                    className={project.status === 'Live' 
                      ? 'bg-green-500 hover:bg-green-600 text-white border-0' 
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="relative w-full h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500">
                      <ImageOff className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                    {project.live && (
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                          <Eye className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 shadow-lg">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`text-xs ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 flex-1">
                    <div className="flex flex-wrap gap-2 flex-1">
                      {project.tech.slice(0, 6).map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-default"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3 pt-4 mt-auto">
                      {project.live && (
                        <Link href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" className="w-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
                      <Link href={project.github} target="_blank" rel="noopener noreferrer" className={project.live ? '' : 'flex-1'}>
                        <Button variant="ghost" className={`${project.live ? '' : 'w-full'} text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700`}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Have a project in mind?</h3>
                <p className="text-blue-100">Let&apos;s collaborate and bring your ideas to life</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
