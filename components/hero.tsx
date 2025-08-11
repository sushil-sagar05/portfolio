'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import photo from '../public/photo.jpg';
import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </motion.div>
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">
                  Hey, I&apos;m{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sushil Sagar
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Full-stack developer crafting{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  intelligent applications
                </span>
                {' '}with real-world impact — from AI to microservices.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 w-full sm:w-auto"
                >
                  <a href="/sushil___resume.pdf" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Link href="/#contact" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20 scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-10 scale-105 animate-pulse" />

              <div className="relative z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-2xl">
                <Image
                  src={photo}
                  alt="Sushil Sagar - Full Stack Developer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-80 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-sm"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
