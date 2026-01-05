import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'
import { User, LogOut, Menu, X } from 'lucide-react'

const Navigation = () => {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="px-4 sm:px-6 py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="flex items-center">
            <img 
              src="/image.png" 
              alt="YourProjectAlly" 
              className="h-6 sm:h-8 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden">YourProjectAlly</span>
          </Link>
        </motion.div>
        
        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors text-sm uppercase tracking-wide">
            HOME
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors text-sm uppercase tracking-wide">
            ABOUT
          </Link>
          {user && (
            <Link to="/writers" className="text-gray-700 hover:text-teal-600 font-medium transition-colors text-sm uppercase tracking-wide">
              WRITERS
            </Link>
          )}
        </div>
        
        {/* Desktop User Menu */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-4"
        >
          {user ? (
            <div className="flex items-center space-x-4">
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 font-medium text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden lg:inline">Logout</span>
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                Login
              </Link>
              <Link to="/signup" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3 py-2 rounded-lg transition-colors text-sm">
                Sign Up
              </Link>
            </>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 border-t border-gray-200"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-600 font-medium text-sm uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-teal-600 font-medium text-sm uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            {user && (
              <Link 
                to="/writers" 
                className="text-gray-700 hover:text-teal-600 font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                WRITERS
              </Link>
            )}
            
            <div className="border-t border-gray-200 pt-4">
              {user ? (
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-600 font-medium text-sm"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/login" 
                    className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation