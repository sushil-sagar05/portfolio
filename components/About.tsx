'use client';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  User, 
  Code, 
  Heart, 
  Lightbulb,
  Target,
  Coffee,
  BookOpen,
  Rocket
} from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6">
            <User className="w-4 h-4" />
            Get to Know Me
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting intelligent solutions that bridge technology and human needs.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 lg:p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Journey
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I&apos;m <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sushil Sagar</span>, a
                  Computer Science undergraduate passionate about building intelligent,
                  scalable web systems. I specialize in crafting end-to-end applications
                  integrating full-stack engineering with machine learning.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">NyayNetra</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">AI-driven legal document analysis platform</p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">MovieMeter</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-400">Real-time personalized movie recommender</p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I enjoy solving real-world problems with clean code, smart architecture,
                  and purposeful design. I actively contribute to open source, learn advanced
                  AI tools like Hugging Face Transformers, and continuously improve my DevOps
                  and backend skills.
                </p>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Let&apos;s build something meaningful together.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-green-900 dark:text-green-300">What Drives Me</h4>
              </div>
              <ul className="space-y-2 text-sm text-green-800 dark:text-green-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Clean, maintainable code
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Real-world problem solving
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Continuous learning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Open source contribution
                </li>
              </ul>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="font-bold text-orange-900 dark:text-orange-300">Currently Exploring</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-300 dark:border-orange-700">
                  AI/ML Integration
                </Badge>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-300 dark:border-red-700">
                  Microservices
                </Badge>
                <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-300 dark:border-pink-700">
                  DevOps
                </Badge>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-bold text-purple-900 dark:text-purple-300">Beyond Code</h4>
              </div>
              <div className="space-y-3 text-sm text-purple-800 dark:text-purple-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Loves learning new technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Always thinking of solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  <span>Building impactful projects</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                   100%
                  </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Passion Driven</p>
              </div>

              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Technologies Used</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  ∞
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Lines of Code</p>
              </div>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Ready to collaborate?</h3>
                <p className="text-blue-100">Let&apos;s create something amazing together</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
