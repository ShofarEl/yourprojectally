# YourProjectAlly - Academic Writing Excellence Platform

A modern, elegant MERN stack application designed specifically for academic writing and research management for undergraduate, graduate, and postgraduate students.

## Features

- **Academic Writing Focus**: Specialized tools for essays, research papers, theses, and dissertations
- **Citation Management**: Integrated support for APA, MLA, Chicago, and other academic citation styles
- **AI Writing Assistant**: Intelligent suggestions for grammar, style, and academic formatting
- **Research Integration**: Seamless integration with academic databases and reference management
- **Progress Tracking**: Monitor writing progress, word counts, and deadline management
- **Beautiful UI**: Modern, elegant design optimized for academic workflows
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Target Audience

### Undergraduate Students
- Essay writing support and templates
- Basic citation management
- Grammar and style checking
- Peer collaboration tools

### Graduate Students
- Advanced research paper tools
- Thesis and dissertation templates
- Supervisor collaboration features
- Comprehensive progress tracking

### Postgraduate Students
- Publication-ready templates
- Advanced analytics and insights
- Multi-document project management
- Academic networking capabilities

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd yourprojectally
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   - Copy `server/.env` and update with your MongoDB URI and JWT secret
   - Default MongoDB URI: `mongodb://localhost:27017/yourprojectally`

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:5000`
   - Frontend development server on `http://localhost:3000`

## Project Structure

```
yourprojectally/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   └── ...
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── package.json
└── package.json           # Root package.json
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend development server
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install dependencies for all packages

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Send password reset email
- `GET /api/auth/me` - Get current user (protected)

## Features Overview

### Landing Page
- Modern hero section with call-to-action
- Feature highlights
- Customer testimonials
- Responsive design

### Authentication
- **Login**: Email/password with validation
- **Signup**: Full registration with password strength indicator
- **Forgot Password**: Email-based password reset
- Form validation and error handling
- JWT-based authentication

### Dashboard
- Welcome message with user info
- Project statistics and metrics
- Recent projects overview
- Quick actions panel
- Activity feed
- Responsive layout

## Design Features

- **Modern UI**: Clean, professional design
- **Smooth Animations**: Framer Motion for delightful interactions
- **Responsive**: Mobile-first approach
- **Accessible**: WCAG compliant components
- **Fast**: Optimized for performance

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@yourprojectally.com or create an issue in the repository.