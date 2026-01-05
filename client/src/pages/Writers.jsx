import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import { 
  Star, 
  MessageCircle, 
  User, 
  BookOpen, 
  Award, 
  Clock,
  Filter,
  Search
} from 'lucide-react'

const Writers = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const testimonials = [
    {
      name: "Adebayo Ogundimu",
      university: "University of Lagos, Nigeria",
      content: "YourProjectAlly helped me with my final year project. The quality was exceptional and delivered on time!",
      rating: 5,
      subject: "Engineering"
    },
    {
      name: "Chioma Nwankwo",
      university: "University of Nigeria, Nsukka",
      content: "Amazing service! Got an A+ on my literature review. The writers really understand academic standards.",
      rating: 5,
      subject: "Literature"
    },
    {
      name: "Kwame Asante",
      university: "University of Ghana, Legon",
      content: "Excellent work on my business research paper. The analysis was thorough and well-structured.",
      rating: 5,
      subject: "Business"
    },
    {
      name: "Akosua Mensah",
      university: "Kwame Nkrumah University, Ghana",
      content: "Professional service! They helped me with my medical research and I got outstanding results.",
      rating: 5,
      subject: "Medicine"
    },
    {
      name: "Thabo Mthembu",
      university: "University of Cape Town, South Africa",
      content: "Top-notch academic writing assistance. My dissertation supervisor was impressed with the quality.",
      rating: 5,
      subject: "Psychology"
    },
    {
      name: "Nomsa Dlamini",
      university: "University of the Witwatersrand, South Africa",
      content: "Reliable and professional. They delivered my law assignment perfectly formatted and well-researched.",
      rating: 5,
      subject: "Law"
    },
    {
      name: "Ibrahim Musa",
      university: "Ahmadu Bello University, Nigeria",
      content: "Professional and reliable. They helped me with my MBA dissertation and the result was outstanding.",
      rating: 5,
      subject: "Business"
    },
    {
      name: "Funmilayo Adeyemi",
      university: "Obafemi Awolowo University, Nigeria",
      content: "Best academic writing service in Africa. They delivered exactly what I needed for my research paper.",
      rating: 5,
      subject: "Psychology"
    },
    {
      name: "Kofi Boateng",
      university: "University of Cape Coast, Ghana",
      content: "Outstanding support for my computer science project. The code documentation was excellent.",
      rating: 5,
      subject: "Computer Science"
    }
  ]

  const specialties = [
    'All', 'Business', 'Education', 'Health Sciences', 'Humanities', 
    'Law', 'STEM', 'Social Sciences'
  ]

  const writers = [
    {
      id: 1,
      name: 'YourProjectAlly',
      specialty: 'Literature',
      rating: 4.9,
      reviews: 287,
      projects: 341,
      description: 'Academic research expert in Literature with 8+ years of academic writing experience. Specializing in...',
      subjects: ['Humanities'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 2,
      name: 'YourProjectAlly',
      specialty: 'Psychology',
      rating: 4.8,
      reviews: 156,
      projects: 234,
      description: 'Academic research expert in Psychology with expertise in behavioral research and statistical analysi...',
      subjects: ['Social Sciences'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    },
    {
      id: 3,
      name: 'YourProjectAlly',
      specialty: 'Engineering',
      rating: 4.9,
      reviews: 203,
      projects: 189,
      description: 'Academic research expert in Engineering with expertise in mechanical, electrical, and civil engineer...',
      subjects: ['STEM'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 4,
      name: 'YourProjectAlly',
      specialty: 'Business Administration',
      rating: 4.7,
      reviews: 142,
      projects: 198,
      description: 'Academic writing expert in Business Administration with 10+ years of experience in academic writing and research...',
      subjects: ['Business'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    },
    {
      id: 5,
      name: 'YourProjectAlly',
      specialty: 'Computer Science',
      rating: 4.8,
      reviews: 178,
      projects: 267,
      description: 'Research expert in Computer Science with expertise in AI, machine learning, and software engineering...',
      subjects: ['STEM'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 6,
      name: 'YourProjectAlly',
      specialty: 'Education',
      rating: 4.9,
      reviews: 234,
      projects: 312,
      description: 'Educational researcher with focus on curriculum development and pedagogical methodologies...',
      subjects: ['Education'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    },
    {
      id: 7,
      name: 'YourProjectAlly',
      specialty: 'Medicine',
      rating: 4.6,
      reviews: 89,
      projects: 156,
      description: 'Medical research specialist with expertise in clinical studies, pharmacology, and health sciences...',
      subjects: ['Health Sciences'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 8,
      name: 'YourProjectAlly',
      specialty: 'Law',
      rating: 4.8,
      reviews: 167,
      projects: 223,
      description: 'Legal research expert with specialization in constitutional law, criminal justice, and legal writing...',
      subjects: ['Law'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    },
    {
      id: 9,
      name: 'YourProjectAlly',
      specialty: 'Nursing',
      rating: 4.7,
      reviews: 134,
      projects: 187,
      description: 'Healthcare professional with expertise in nursing research, patient care studies, and medical ethics...',
      subjects: ['Health Sciences'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 10,
      name: 'YourProjectAlly',
      specialty: 'History',
      rating: 4.9,
      reviews: 245,
      projects: 298,
      description: 'Historical research specialist with focus on African history, colonial studies, and archival research...',
      subjects: ['Humanities'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    },
    {
      id: 11,
      name: 'YourProjectAlly',
      specialty: 'Economics',
      rating: 4.6,
      reviews: 98,
      projects: 145,
      description: 'Economic research expert with specialization in development economics, econometrics, and policy analysis...',
      subjects: ['Social Sciences'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2349032979532'
    },
    {
      id: 12,
      name: 'YourProjectAlly',
      specialty: 'Mathematics',
      rating: 4.8,
      reviews: 189,
      projects: 276,
      description: 'Academic writing expert in Mathematics with expertise in applied mathematics, statistics, and mathematical modeling...',
      subjects: ['STEM'],
      status: 'Online',
      responseTime: 'Quick',
      whatsappNumber: '+2348148160322'
    }
  ]

  const filteredWriters = writers.filter(writer => {
    const matchesSpecialty = selectedSpecialty === 'All' || writer.subjects.includes(selectedSpecialty)
    const matchesSearch = writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         writer.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  const handleWhatsAppChat = (phoneNumber, writerName) => {
    const message = `Hello ${writerName}, I found your profile on YourProjectAlly and I'm interested in your academic writing services. Could you please help me with my project?`
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.85) 0%, rgba(20, 184, 166, 0.75) 100%), 
                               url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`
            }}
          >
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif text-white">
                Expert Writers
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-teal-200 font-semibold mb-4 sm:mb-6 font-serif">
                Ready to Help
              </h2>
              <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Connect with verified academic writers who specialize in your field. 
                All our writers are vetted professionals with advanced degrees.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white px-4">
                <div className="flex items-center justify-center space-x-2">
                  <User className="w-5 h-5 text-teal-200" />
                  <span>12 Expert Writers</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>4.8★ Average Rating</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 text-green-300" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 items-stretch">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search writers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-col space-y-3">
              <span className="text-sm font-medium text-gray-700 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Specialty:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      selectedSpecialty === specialty
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-right text-sm text-gray-600">
            {filteredWriters.length} writers available
          </div>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="py-8 sm:py-12 transform scale-85 origin-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-4 sm:gap-6">
            {filteredWriters.map((writer, index) => (
              <motion.div
                key={writer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Writer Avatar */}
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src="/logo1.png" 
                        alt={`${writer.name} Avatar`} 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <User className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 hidden" />
                    </div>
                    <div className="mt-2 text-center">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        writer.status === 'Online' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-1 ${
                          writer.status === 'Online' ? 'bg-green-400' : 'bg-gray-400'
                        }`}></div>
                        {writer.status}
                      </span>
                    </div>
                  </div>

                  {/* Writer Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                      <div className="mb-3 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{writer.name}</h3>
                        <p className="text-teal-600 font-medium mb-2">{writer.specialty}</p>
                        
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{writer.rating}</span>
                            <span>({writer.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{writer.projects} projects</span>
                          </div>
                        </div>
                      </div>

                      {/* Status Badges */}
                      <div className="flex flex-row sm:flex-col sm:items-end space-x-2 sm:space-x-0 sm:space-y-2 justify-center sm:justify-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {writer.responseTime}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                          Response
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          Grade
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{writer.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {writer.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {subject}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleWhatsAppChat(writer.whatsappNumber, writer.name)}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-serif">What Our Clients Say</h2>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="border-t pt-3 sm:pt-4">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.university}</p>
                  <p className="text-xs sm:text-sm text-teal-600 font-medium">{testimonial.subject}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Writers