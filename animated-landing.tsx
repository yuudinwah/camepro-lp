"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, ChevronRight, Star, Users, Gamepad2, Swords } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AnimatedLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // For scroll-based animations
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  useEffect(() => {
    setIsMounted(true)
    // Set dark mode by default for gaming theme
    document.documentElement.classList.add("dark")
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  const features = [
    {
      icon: <Swords className="h-6 w-6 text-gold-500" />,
      title: "Immersive Gameplay",
      description: "Experience fluid combat mechanics and responsive controls in a vast open world.",
    },
    {
      icon: <Users className="h-6 w-6 text-gold-500" />,
      title: "Multiplayer Arenas",
      description: "Team up with friends or compete against rivals in thrilling PvP and co-op modes.",
    },
    {
      icon: <Gamepad2 className="h-6 w-6 text-gold-500" />,
      title: "Epic Storyline",
      description: "Discover a rich narrative with branching storylines and memorable characters.",
    },
  ]

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Beta Tester",
      company: "GamersUnite",
      content:
        "The Camellia Project blew me away with its stunning visuals and engaging gameplay. The combat system is incredibly satisfying!",
      rating: 5,
    },
    {
      name: "Sophia Rodriguez",
      role: "Game Reviewer",
      company: "GameSpot",
      content:
        "One of the most promising titles I've seen this year. The attention to detail in the world-building is exceptional.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Streamer",
      company: "TwitchTV",
      content:
        "My audience couldn't get enough of the beta. The multiplayer modes are addictive and the character progression system is deep.",
      rating: 4,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col dark bg-midnight-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-midnight-900/80 backdrop-blur-md border-b border-gold-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-gold-500 flex items-center justify-center">
              <span className="text-midnight-900 font-bold">C</span>
            </div>
            <span className="font-bold text-xl text-gold-500">CamePro</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link
              href="#features"
              className="text-sm font-medium text-silver-400 hover:text-gold-500 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-silver-400 hover:text-gold-500 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium text-silver-400 hover:text-gold-500 transition-colors"
            >
              Community
            </Link>
            <Link href="#contact" className="text-sm font-medium text-silver-400 hover:text-gold-500 transition-colors">
              Contact
            </Link>
            <Button size="sm" className="bg-gold-500 text-midnight-900 hover:bg-gold-400">
              Join Waitlist
            </Button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden text-gold-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight-800 border-t border-gold-500/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium py-2 text-silver-400 hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium py-2 text-silver-400 hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#community"
                className="text-sm font-medium py-2 text-silver-400 hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium py-2 text-silver-400 hover:text-gold-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="w-full bg-gold-500 text-midnight-900 hover:bg-gold-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,195,0,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block rounded-full bg-gold-500/20 px-4 py-1.5 text-sm font-medium text-gold-500 mb-4"
              >
                Launching Soon
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="text-gold-500">The Camellia Project</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 text-lg text-silver-400"
              >
                Embark on an epic adventure in a breathtaking world where strategy, skill, and storytelling converge.
                <span className="text-gold-500 font-semibold"> 100% free to play.</span>
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="gap-2 bg-gold-500 text-midnight-900 hover:bg-gold-400">
                Join Waitlist <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gold-500/50 text-silver-300 hover:bg-gold-500/10">
                View Trailer
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,195,0,0.3)]">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Game preview"
                width={600}
                height={600}
                className="object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-tr from-gold-500/30 to-transparent"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-midnight-800 rounded-lg p-4 shadow-lg border border-gold-500/20"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Users className="h-4 w-4 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-silver-400">Beta Players</p>
                  <p className="text-2xl font-bold text-gold-500">10,543</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-midnight-800 rounded-lg p-4 shadow-lg border border-gold-500/20"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Star className="h-4 w-4 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-silver-400">Average Rating</p>
                  <p className="text-2xl font-bold text-gold-500">4.9/5</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-midnight-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500">Game Features</h2>
            <p className="text-lg text-silver-400">
              Discover what makes The Camellia Project a groundbreaking gaming experience.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-midnight-800 rounded-xl p-6 shadow-sm hover:shadow-[0_0_15px_rgba(255,195,0,0.2)] transition-shadow border border-gold-500/20"
              >
                <div className="h-12 w-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold-500">{feature.title}</h3>
                <p className="text-silver-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Button size="lg" className="bg-gold-500 text-midnight-900 hover:bg-gold-400">
              View Game Trailer
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500">Early Reviews</h2>
            <p className="text-lg text-silver-400">
              See what beta testers and reviewers are saying about The Camellia Project.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-midnight-800 rounded-xl p-6 shadow-sm hover:shadow-[0_0_15px_rgba(255,195,0,0.2)] transition-shadow border border-gold-500/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-midnight-600"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-silver-300">"{testimonial.content}"</p>
                <div>
                  <p className="font-medium text-gold-500">{testimonial.name}</p>
                  <p className="text-sm text-silver-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Section (replacing CTA) */}
      <section id="community" className="py-16 md:py-24 bg-midnight-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500">Join Our Community</h2>
            <p className="text-lg text-silver-400 mb-8">
              Sign up for early access and be among the first to experience The Camellia Project.
              <span className="text-gold-500 font-semibold"> Completely free forever.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gold-500 text-midnight-900 hover:bg-gold-400">
                Join Waitlist <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gold-500/50 text-silver-300 hover:bg-gold-500/10">
                Join Discord
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-gold-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gold-500 flex items-center justify-center">
                  <span className="text-midnight-900 font-bold">C</span>
                </div>
                <span className="font-bold text-xl text-gold-500">CamePro</span>
              </div>
              <p className="text-sm text-silver-500">The Camellia Project: Redefining immersive gaming experiences.</p>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-gold-500">Game</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Early Access
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-gold-500">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 text-gold-500">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-silver-500 hover:text-gold-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gold-500/20 text-center">
            <p className="text-sm text-silver-500">
              © {new Date().getFullYear()} The Camellia Project. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

