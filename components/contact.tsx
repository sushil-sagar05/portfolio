'use client';

import { Button } from '@/components/ui/button';
import {  Github, Linkedin, Twitter } from 'lucide-react'; 
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 text-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto">
        Whether it&apos;s a collaboration, opportunity, or question — feel free to connect with me.
        </p>

        <div className="flex flex-wrap justify-center gap-4 ">
          <Link href="https://github.com/sushil-sagar05" target="_blank">
            <Button variant="outline" size="lg" className='hover:text-pink-400'>
              <Github className="mr-2 size-5" /> GitHub
            </Button>
          </Link>

          <Link href="https://www.linkedin.com/in/sushil-sagar09/" target="_blank" >
            <Button variant="outline" size="lg" className='hover:text-pink-400'>
              <Linkedin className="mr-2 size-5" /> LinkedIn
            </Button>
          </Link>

          <Link href="https://x.com/noob_sagarr" target="_blank" >
            <Button variant="outline" size="lg"className='hover:text-pink-400'>
              <Twitter className="mr-2 size-5 " /> Twitter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
