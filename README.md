# NSW DUI Defense Platform

A comprehensive legal assessment and education platform designed to help individuals understand and navigate DUI cases in New South Wales, Australia.

## 🚀 Features

### Core Functionality
- **Intelligent DUI Assessment**: Comprehensive case analysis with personalized penalty estimates
- **Legal Education Modules**: 6 interactive modules covering DUI law, court procedures, and defense strategies
- **Results & Analysis**: Detailed risk assessment with recommended defense strategies
- **User Authentication**: Secure login and registration system
- **Payment Integration**: Tiered subscription plans (Free, Premium, Professional)
- **Dashboard**: Progress tracking and case management

### Key Components
- **Landing Page**: Professional introduction to services
- **Assessment Tool**: Step-by-step case evaluation
- **Results Page**: Comprehensive analysis with penalty estimates and defense strategies
- **Payment System**: Subscription management with Stripe-ready integration
- **User Dashboard**: Progress tracking and assessment history
- **Settings**: Profile management and preferences

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Context API** - State management for auth, assessments, and payments

### Backend (Ready for Development)
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Development Tools
- **Create React App** - Build tooling
- **ESLint** - Code linting
- **Docker** - Containerization support

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/nsw-dui-defense-platform.git
cd nsw-dui-defense-platform
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 3. Environment Setup
```bash
# Copy environment templates
cp client/.env.example client/.env
cp server/.env.example server/.env
```

### 4. Start Development Server
```bash
# Start the React development server
cd client
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
nsw-dui-defense-platform/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React Context providers
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── index.js       # Application entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend (ready for development)
│   ├── src/
│   │   └── app.js        # Express application
│   └── package.json
├── shared/                # Shared constants and utilities
├── scripts/               # Setup and deployment scripts
├── docker-compose.yml     # Docker configuration
└── README.md
```

## 🎯 Usage

### For Users
1. **Assessment**: Complete the DUI case assessment questionnaire
2. **Results**: View comprehensive analysis with penalty estimates
3. **Education**: Access legal education modules
4. **Dashboard**: Track progress and manage cases
5. **Premium Features**: Upgrade for advanced analysis and expert consultation

### For Developers
1. **Component Development**: Add new components in `client/src/components/`
2. **Page Creation**: Create new pages in `client/src/pages/`
3. **State Management**: Use Context providers in `client/src/context/`
4. **API Integration**: Implement services in `client/src/services/`

## 🔧 Configuration

### Environment Variables

#### Client (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

#### Server (.env)
```
PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS:

- **Colors**: Primary (blue), Secondary (gray), Success (green), Warning (amber), Error (red)
- **Typography**: Inter font family with heading and body text styles
- **Components**: Consistent button, card, and form components
- **Spacing**: 8px grid system
- **Responsive**: Mobile-first responsive design

## 📱 Responsive Design

- **Mobile**: Optimized for smartphones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Optimized for large displays (1280px+)

## 🔒 Security Features

- **Authentication**: JWT-based secure authentication
- **Data Protection**: Encrypted sensitive information
- **Input Validation**: Comprehensive form validation
- **HTTPS Ready**: SSL/TLS encryption support
- **Privacy Compliance**: GDPR and privacy-friendly data handling

## 🧪 Testing

```bash
# Run tests
cd client
npm test

# Run tests with coverage
npm test -- --coverage
```

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
cd client
npm run build
```

### Docker Deployment
```bash
docker-compose up -d
```

## 📊 Performance

- **Lighthouse Score**: 95+ performance rating
- **Code Splitting**: Lazy-loaded routes and components
- **Bundle Size**: Optimized for fast loading
- **Caching**: Efficient asset caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Legal Disclaimer

This platform provides general information about DUI law in NSW and is not a substitute for professional legal advice. Users should consult with qualified legal professionals for advice specific to their situation.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@duidefense.com.au
- Documentation: [Wiki](https://github.com/yourusername/nsw-dui-defense-platform/wiki)

## 🙏 Acknowledgments

- NSW Government for legal guidelines and penalty information
- Legal professionals who provided expertise
- Open source community for excellent tools and libraries

---

**Built with ❤️ for NSW residents facing DUI charges** 