'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, FolderOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './toggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { 
    name: 'Home', 
    href: '/', 
    icon: Home,
    description: 'Back to homepage'
  },
  { 
    name: 'Projects', 
    href: '/projects',
    icon: FolderOpen,
    description: 'View my work'
  },
  { 
    name: 'About', 
    href: '/about',
    icon: User,
    description: 'Learn more about me'
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled 
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50" 
            : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Sushil Sagar
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Full Stack Developer
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const active = isActive(link.href);
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group relative"
                  >
                    <div className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                      active 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}>
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium text-sm">{link.name}</span>
                    </div>
                    {active && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              <div className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </nav>
            <div className="flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-10 h-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="px-6 py-4">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    const active = isActive(link.href);
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group",
                            active 
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                          )}
                        >
                          <div className={cn(
                            "p-2 rounded-lg transition-all duration-300",
                            active 
                              ? "bg-white/20" 
                              : "bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700"
                          )}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{link.name}</div>
                            <div className={cn(
                              "text-xs",
                              active 
                                ? "text-white/70" 
                                : "text-gray-500 dark:text-gray-400"
                            )}>
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <div className="h-16 lg:h-20" />
    </>
  );
}
