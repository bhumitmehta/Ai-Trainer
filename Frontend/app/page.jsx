"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronRight, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { GlassCard } from "../components/ui/glass-card"
import { AnimatedCounter } from "../components/animated-counter"
import { GradientText } from "../components/gradient-text"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const features = [
    {
      title: "AI Exercise Evaluation",
      description: "Get real-time feedback on your exercise form using advanced computer vision technology.",
      icon: "🏋️‍♂️",
    },
    {
      title: "Personalized Meal Plans",
      description: "Receive customized meal plans based on your fitness goals and dietary preferences.",
      icon: "🥗",
    },
    {
      title: "BMI & Health Tracking",
      description: "Track your BMI, weight, and other health metrics with beautiful visualizations.",
      icon: "📊",
    },
    {
      title: "Calorie Counter",
      description: "Log your meals and track your calorie intake with our intuitive interface.",
      icon: "🍎",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content:
        "FitFuture has completely transformed my workout routine. The AI exercise evaluation is like having a personal trainer with me at all times!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marathon Runner",
      content:
        "The meal planning feature has been a game-changer for my marathon training. I've seen significant improvements in my energy levels and recovery time.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      content:
        "As a yoga instructor, I appreciate the attention to form that FitFuture provides. It's helped me refine my practice and teach better classes.",
      rating: 4,
    },
  ]

  return (
    <div className="relative pt-16">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Your <GradientText>AI-Powered</GradientText> Fitness Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            Transform your fitness routine with real-time exercise evaluation, personalized meal plans, and
            comprehensive health tracking.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0"
            >
              <Link href="/exercise">
                <p className="text-sm">Start Your Journey</p> <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 backdrop-blur-sm hover:bg-white/10">
              <Link href="#features">
                Explore Features <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500 rounded-full opacity-30 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <motion.div style={{ y }} className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="rgba(255, 255, 255, 0.05)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={10000} suffix="+" />
                </h3>
                <p className="text-white/70">Active Users</p>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={500} suffix="+" />
                </h3>
                <p className="text-white/70">Exercise Types</p>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={98} suffix="%" />
                </h3>
                <p className="text-white/70">Satisfaction Rate</p>
              </GlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <GlassCard className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={1000} suffix="+" />
                </h3>
                <p className="text-white/70">Meal Plans</p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <GradientText from="from-cyan-400" via="via-blue-500" to="to-purple-600">
                Cutting-Edge Features
              </GradientText>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our platform combines AI technology with fitness expertise to provide you with the most advanced fitness
              experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full" hoverEffect>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <GradientText from="from-pink-500" via="via-purple-500" to="to-indigo-500">
                What Our Users Say
              </GradientText>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their fitness journey with FitFuture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full" hoverEffect>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of users who have already revolutionized their fitness routine with our AI-powered
              platform.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0"
            >
              <Link href="/exercise">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500 rounded-full opacity-30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full opacity-30 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  FitFuture
                </span>
              </Link>
              <p className="mt-2 text-white/70">Your AI-powered fitness companion</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/exercise" className="text-white/70 hover:text-white transition-colors">
                Exercise Evaluation
              </Link>
              <Link href="/bmi" className="text-white/70 hover:text-white transition-colors">
                BMI Calculator
              </Link>
              <Link href="/calories" className="text-white/70 hover:text-white transition-colors">
                Calorie Counter
              </Link>
              <Link href="/meal-plans" className="text-white/70 hover:text-white transition-colors">
                Meal Plans
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} FitFuture. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
