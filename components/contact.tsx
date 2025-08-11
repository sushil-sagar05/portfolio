'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MessageCircle, 
  Send,
  ArrowRight,
  ExternalLink,
  Calendar,
  Coffee
} from 'lucide-react'; 
import Link from 'next/link';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/sushil-sagar05',
    color: 'from-gray-700 to-gray-900',
    hoverColor: 'hover:bg-gray-50 dark:hover:bg-gray-800',
    description: 'Check out my repositories and contributions',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sushil-sagar09/',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    description: 'Connect professionally and see my experience',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/noob_sagarr',
    color: 'from-blue-400 to-blue-500',
    hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
    description: 'Follow my tech journey and thoughts',
  }
];

const contactMethods = [
  {
    title: 'Direct Email',
    description: 'Reach out for opportunities or collaborations',
    icon: Mail,
    action: 'Send Email',
    href: 'mailto:sagarsushil1403@example.com',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Schedule a Call',
    description: 'Let\'s discuss your project over a virtual coffee',
    icon: Calendar,
    action: 'Book Meeting',
    href: '#',
    color: 'from-purple-500 to-violet-500'
  }
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl" />
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
            <MessageCircle className="w-4 h-4" />
            Let&apos;s Connect
          </div>
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether it&apos;s a collaboration, opportunity, or question — I&apos;d love to hear from you. 
            Let&apos;s build something amazing together.
          </p>

          <div className="flex justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new opportunities
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4" />
              Always up for a virtual coffee chat
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <motion.div key={method.title} variants={itemVariants} className="group">
                <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 bg-gradient-to-r ${method.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {method.description}
                      </p>
                      <Link href={method.href}>
                        <Button 
                          className={`bg-gradient-to-r ${method.color} hover:from-opacity-90 hover:to-opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
                        >
                          {method.action}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Find me on social platforms
          </h3>
          
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.div key={social.name} variants={itemVariants} className="group">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Card className={`p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 ${social.hoverColor} hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}>
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                            {social.name}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Send className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Quick Response Guaranteed</h3>
                <p className="text-blue-100">I typically respond within 24 hours</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to start something awesome?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              From concept to deployment, let&apos;s create solutions that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Start a Conversation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
