import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Star, BookOpen, PenTool, Award } from 'lucide-react'
import Navigation from '../components/Navigation'

const LandingPage = () => {
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "AI-Powered Writing Assistant",
      description: "Get intelligent suggestions for grammar, style, and academic formatting"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Integration",
      description: "Seamlessly integrate citations and references from academic databases"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Standards",
      description: "Built-in templates for APA, MLA, Chicago, and other citation styles"
    }
  ]

  const testimonials = [
    {
      name: "Kemi Adebayo",
      role: "PhD Student, Psychology",
      content: "YourProjectAlly transformed my dissertation writing process. The citation management is incredible!",
      rating: 5
    },
    {
      name: "Chinedu Okafor",
      role: "Master's Student, Engineering",
      content: "Finally, a platform that understands academic writing. My grades improved significantly.",
      rating: 5
    },
    {
      name: "Fatima Abdullahi",
      role: "Undergraduate, Literature",
      content: "The AI writing assistant helped me develop my academic voice. Highly recommend!",
      rating: 5
    }
  ]

  const academicLevels = [
    {
      title: "Undergraduate",
      description: "Perfect for essays, research papers, and thesis projects",
      features: ["Essay writing support", "Basic citation help", "Grammar checking", "Peer collaboration"]
    },
    {
      title: "Graduate",
      description: "Advanced tools for master's theses and comprehensive exams",
      features: ["Advanced research tools", "Thesis templates", "Supervisor collaboration", "Progress tracking"]
    },
    {
      title: "Postgraduate",
      description: "Comprehensive support for dissertations and academic publications",
      features: ["Publication templates", "Advanced analytics", "Multi-document projects", "Academic networking"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.85) 0%, rgba(20, 184, 166, 0.75) 100%), 
                               url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          >
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              {/* Hero Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-3 md:mb-4"
                >
                  <span className="text-teal-200 font-semibold text-xs md:text-sm uppercase tracking-wide">
                    Welcome to YourProjectAlly
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  Excellence in Academic Writing
                  <span className="block">Made Simple</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm md:text-base mb-6 md:mb-8 leading-relaxed text-white/90 max-w-lg mx-auto px-4 md:px-0"
                >
                  Connect with expert academic writers who specialize in your field. 
                  Get professional help with essays, research papers, dissertations, and more.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0"
                >
                  <Link to="/signup" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg text-xs md:text-sm uppercase tracking-wide">
                    <span>GET WRITING HELP</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                  <Link to="/login" className="border-2 border-white/30 hover:border-white/50 text-white font-semibold py-2.5 md:py-3 px-5 md:px-6 rounded-lg transition-colors duration-200 bg-white/10 backdrop-blur-sm text-xs md:text-sm uppercase tracking-wide">
                    FIND WRITERS
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Benefits Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                  }}
                >
                </div>
              </div>
            </motion.div>

            {/* Benefits Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 md:mb-6">
                <span className="text-teal-600 font-semibold text-xs md:text-sm uppercase tracking-wide">
                  Academic Writing Services
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                Benefits of Professional
                <span className="block">Academic Writing Help</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PenTool className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Expert Writers</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Work with qualified academic writers who have advanced degrees from top universities. 
                      Get professional help tailored to your specific field of study.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">Quality Guarantee</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      All work is original, properly cited, and meets academic standards. 
                      We guarantee plagiarism-free content that follows your institution's guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">24/7 Support</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Get round-the-clock support from our team. Direct communication with writers 
                      via WhatsApp ensures you stay updated on your project's progress.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Levels Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Supporting Every Academic Journey
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              From your first essay to your doctoral dissertation, we're here to help you succeed
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {academicLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-teal-200 p-4 md:p-6"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                  {level.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  {level.description}
                </p>
                <ul className="space-y-1.5 md:space-y-2 text-left">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Powerful Tools for Academic Success
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              Everything you need to write, research, and excel in your academic pursuits
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center hover:shadow-lg transition-shadow duration-300 p-4 md:p-6"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 text-teal-600">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Trusted by Students Worldwide
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4 md:px-0">
              Join thousands of students who have improved their academic writing
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card p-4 md:p-6"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-sm md:text-base font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">5K+</div>
              <div className="text-xs md:text-base text-white/80">Papers Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">98%</div>
              <div className="text-xs md:text-base text-white/80">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-base text-white/80">Expert Writers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-base text-white/80">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:px-6 md:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 px-4 md:px-0"
          >
            Ready to Excel in Your Academic Writing?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 px-4 md:px-0"
          >
            Connect with expert writers and get the academic help you need to succeed
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="px-4 md:px-0"
          >
            <Link to="/signup" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 text-sm md:text-base rounded-lg transition-colors duration-200 inline-flex items-center space-x-2">
              <span>Find Expert Writers</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-6 md:px-6 md:py-8 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <img 
              src="/image.png" 
              alt="YourProjectAlly" 
              className="h-8 md:h-10 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="font-semibold text-white hidden">YourProjectAlly</span>
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 px-4 md:px-0">
            Empowering academic excellence through intelligent writing tools
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            © 2026 YourProjectAlly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage