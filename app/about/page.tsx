import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me – Sushil Sagar',
  description: 'Learn more about Sushil Sagar, a full-stack developer and ML enthusiast.',
};

export default function AboutPage() {
  return (
    <main className="px-6 md:px-16 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="text-muted-foreground text-lg leading-relaxed">
          <p className="mb-4">
            Hey! I’m <span className="text-foreground font-medium">Sushil Sagar</span>, a Computer Science undergraduate focused on building intelligent, scalable web systems.
            I specialize in full-stack development, machine learning integration, and clean, efficient architecture.
            Passionate about open source, I’m constantly learning advanced AI tools and improving backend & DevOps skills.
          Driven by impact, I aim to engineer purposeful, production-ready solutions with clarity and precision.


          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </Button>
      </div>
      <section className="mt-16">
  <h2 className="text-3xl font-semibold mb-4">Certifications</h2>
  <p className="text-muted-foreground text-lg leading-relaxed">
    I believe real expertise comes from consistent hands-on experience, solving actual problems,
    and building impactful projects — not just from certifications. While I appreciate structured learning,
    I focus more on applying knowledge practically and sharing results through my work.
  </p>
  <p className="text-muted-foreground text-lg mt-4">
    My portfolio showcases the kind of engineer I am — curious, driven, and always building.
  </p>
</section>
    </main>
  );
}
