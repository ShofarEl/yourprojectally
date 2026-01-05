import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Star, BookOpen, PenTool, Award, Clock, Shield, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'

const LandingPage = () => {
  const features = [
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Expert Academic Writers",
      description: "PhD-qualified writers from top universities worldwide"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your academic needs"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "100% Original Work",
      description: "Plagiarism-free content with quality guarantee"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "PhD Student, Harvard",
      content: "YourProjectAlly helped me complete my dissertation with confidence. The quality is exceptional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Master's Student, MIT",
      content: "Professional service that delivered exactly what I needed. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Undergraduate, Stanford",
      content: "The writers understood my requirements perfectly. Amazing experience!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 w-full px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-300" />
                <span className="text-sm font-medium">Trusted by 10,000+ Students</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Academic Excellence
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Connect with world-class academic writers and transform your educational journey with professional support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup" 
                  className="group bg-white text-teal-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-yellow-300 hover:text-teal-800 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/writers" 
                  className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                >
                  Browse Writers
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">98% Success Rate</p>
                      <p className="text-sm text-gray-600">Student Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose YourProjectAlly?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive academic support with a focus on quality, reliability, and student success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Academic writing"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-teal-600 text-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-90">Expert Writers</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Academic Excellence</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Academic Writing Services
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From essays to dissertations, our expert writers provide comprehensive support across all academic levels and disciplines.
              </p>

              <div className="space-y-4">
                {[
                  "Essays & Research Papers",
                  "Thesis & Dissertations", 
                  "Case Studies & Reports",
                  "Literature Reviews"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/writers" 
                className="inline-flex items-center mt-8 bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-teal-700 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Students Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful students who achieved their academic goals with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10K+", label: "Happy Students" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Expert Writers" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who have achieved academic excellence with our expert support
            </p>
            <Link 
              to="/signup" 
              className="inline-flex items-center bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/image.png" 
              alt="YourProjectAlly" 
              className="h-10 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="font-semibold text-white hidden ml-3">YourProjectAlly</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering academic excellence through professional writing support
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 YourProjectAlly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage