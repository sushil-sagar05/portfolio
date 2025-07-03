'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import photo from '../public/photo.jpg'
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-background mt-8">
      <motion.div
        className="max-w-xl text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
          Hey, I&apos;m <span className="text-[#1d4ed7]">Sushil Sagar</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Full-stack developer crafting intelligent apps with real-world impact — from{' '}
          <strong>AI to microservices.</strong>
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/resume.pdf">
              Download Resume
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href="/#contact">
               <Button variant="outline">
                Contact Me
          </Button>
           </a>
      </motion.div>
        </div>
      </motion.div>
        <Image
          src={photo}
          alt="Hero Illustration"
          width={500}
          height={500}
          className="rounded-full"
        />
    </section>
  );
}
