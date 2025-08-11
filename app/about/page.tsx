import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  User, 
  Award, 
  Code, 
  Brain,
  Target,
  Lightbulb,
  Coffee,
  BookOpen,
  Rocket,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me – Sushil Sagar',
  description: 'Learn more about Sushil Sagar, a full-stack developer and ML enthusiast.',
};

const achievements = [
  {
    title: '15+ Projects',
    description: 'Built and deployed',
    icon: Code,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '3+ Years',
    description: 'Development experience',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: '25+ Technologies',
    description: 'Worked with',
    icon: Brain,
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Open Source',
    description: 'Active contributor',
    icon: Heart,
    color: 'from-orange-500 to-red-500'
  }
];

const values = [
  {
    title: 'Problem-First Approach',
    description: 'I start with understanding the real problem before jumping to solutions',
    icon: Target
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves fast, and I make sure to keep pace with innovation',
    icon: BookOpen
  },
  {
    title: 'Clean Code Philosophy',
    description: 'Writing maintainable, readable code that others can understand and build upon',
    icon: Code
  },
  {
    title: 'Impact-Driven Development',
    description: 'Every line of code should serve a purpose and create meaningful value',
    icon: Rocket
  }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
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

      <div className="relative z-10 px-6 md:px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6">
              <User className="w-4 h-4" />
              About Me
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">Hello, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sushil Sagar
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A passionate developer crafting intelligent solutions that bridge technology and human needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-2">
              <Card className="p-8 lg:p-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      My Journey
                    </h2>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                      Hey! I'm <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sushil Sagar</span>, a Computer Science undergraduate focused on building intelligent, scalable web systems. I specialize in full-stack development, machine learning integration, and clean, efficient architecture.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      Passionate about open source, I'm constantly learning advanced AI tools and improving backend & DevOps skills. Driven by impact, I aim to engineer purposeful, production-ready solutions with clarity and precision.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <a href="/sushil___resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="font-bold text-green-900 dark:text-green-300">Current Focus</h3>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700">
                    AI/ML Integration
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                    Full-Stack Development
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                    DevOps & Architecture
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="font-bold text-orange-900 dark:text-orange-300">Learning Path</h3>
                </div>
                <div className="text-sm text-orange-800 dark:text-orange-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Advanced AI frameworks
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Cloud architecture
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    Open source contribution
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What Drives Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          <Card className="p-8 lg:p-10 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h2>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I believe real expertise comes from consistent hands-on experience, solving actual problems,
                and building impactful projects — not just from certifications. While I appreciate structured learning,
                I focus more on applying knowledge practically and sharing results through my work.
              </p>
              
              <div className="flex items-center justify-center gap-4 py-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Portfolio-Driven Learning
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  <Rocket className="w-4 h-4" />
                  Real-World Impact
                </div>
              </div>
              
              <p className="text-lg font-semibold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                My portfolio showcases the kind of engineer I am — curious, driven, and always building.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
