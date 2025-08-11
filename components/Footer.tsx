'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              Built with
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              by
            </span>
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sagar
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
