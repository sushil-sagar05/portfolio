'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Eye, Code } from 'lucide-react';

import nyayNetraimage from '../public/nyaynetra.png';
import moviemeterimage from '../public/moviemeter.png';
import devcircle_image from '../public/dev-circle.png';

const projects = [
  {
    id: 1,
    title: 'Nyaynetra',
    description: 'AI-powered platform that analyzes legal documents with summarization, clause tagging, and risk detection and Q/A.',
    image: nyayNetraimage,
    link: 'https://nyaynetra-ai.vercel.app/',
    github: 'https://github.com/sushil-sagar05/nyaynetra.ai',
    tech: ['Next.js', 'TypeScript','Langchain' , 'Huggingface', 'FastAPI', 'Sentence Transformer','Express',  'InLegalBERT', 'microservices'],
    featured: true,
    status: 'Live',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'MovieMeter',
    description: 'Content-based movie recommender delivering real-time personalized suggestions using user profiles and ML and Mern App.',
    image: moviemeterimage,
    link: 'https://movie-meter-fullstack.onrender.com/',
    github: 'https://github.com/sushil-sagar05/Movie-Meter',
    tech: ['React', 'Node.js', 'Express.js', 'Scikit-learn', 'MongoDB', 'cosine similarity', 'socket.io', 'microservices'],
    featured: true,
    status: 'Live',
    category: 'Full Stack'
  },
  {
    id: 3,
    title: 'Dev-Circle',
    description: 'Mern Based Post sharing web app with messaging function only followed from both side and engaging functionalities.',
    image: devcircle_image,
    link: 'https://dev-circle-six.vercel.app/',
    github: 'https://github.com/sushil-sagar05/dev_circle',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'socket.io', 'Context API'],
    featured: true,
    status: 'Live',
    category: 'Full Stack'
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  },
};

const techStackVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
};


export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-30">
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6">
            <Code className="w-4 h-4" />
            Featured Projects
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">My Latest </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of full-stack applications, AI-powered solutions, and innovative web experiences 
            built with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Status badge */}
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

                <CardHeader className="p-0">
                  {/* Project Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                      {project.link && (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  {/* Category badge */}
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>

                  {/* Project title and description */}
                  <div className="space-y-3">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </div>

                  {/* Tech stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={techStackVariants}
                  >
                    {project.tech.slice(0, 6).map((item, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </motion.div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex gap-3">
                    {project.link && (
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-900/20">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center items-center mt-16"
        >
          <Link href="/projects" passHref>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
