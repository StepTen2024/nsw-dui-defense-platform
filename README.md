# NSW DUI Defense Navigator

A comprehensive AI-powered legal guidance platform for NSW DUI defendants with React frontend, Node.js backend, and payment integration.

## 🎯 Project Overview

The NSW DUI Defense Navigator helps individuals facing DUI charges in New South Wales understand their legal situation, potential penalties, and defense options through an intelligent assessment system and guided modules.

### Key Features

- **AI-Powered Case Assessment** - Intelligent analysis of DUI circumstances
- **Penalty Calculator** - Accurate penalty predictions based on NSW law
- **Defense Strategy Modules** - Comprehensive legal guidance packages
- **Secure Payment Processing** - Stripe integration for module purchases
- **Document Generation** - Automated legal document creation
- **Expert Legal Resources** - Curated content from NSW legal professionals

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm 8+
- MongoDB (local or Atlas)
- Stripe account for payments
- Email service (Gmail/SendGrid)

### Installation

1. **Clone and setup project**
```bash
git clone <repository-url>
cd nsw-dui-defense-navigator
npm run setup
```

2. **Configure environment variables**
```bash
# Copy example files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Edit with your configuration
nano server/.env
nano client/.env
```

3. **Start development servers**
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Using Docker

```bash
docker-compose up -d
```

## 📁 Project Structure

```
nsw-dui-defense-navigator/
├── client/           # React Frontend
├── server/           # Node.js Backend API
├── shared/           # Shared utilities and types
├── docs/             # Documentation
├── scripts/          # Build and deployment scripts
└── docker-compose.yml
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run client` - Start only the React frontend
- `npm run server` - Start only the Node.js backend
- `npm run build` - Build production client bundle
- `npm run test` - Run all tests
- `npm run migrate` - Run database migrations

### Environment Configuration

#### Server (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nsw-dui-defense
JWT_SECRET=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:3000
```

#### Client (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_...
REACT_APP_ENVIRONMENT=development
```

## 🏗️ Architecture

### Frontend (React)
- **Components**: Reusable UI components with consistent styling
- **Pages**: Route-level components for different app sections
- **Hooks**: Custom hooks for state management and API calls
- **Services**: API communication layer
- **Context**: Global state management

### Backend (Node.js/Express)
- **Controllers**: Request handling and business logic
- **Models**: MongoDB schemas and data validation
- **Routes**: API endpoint definitions
- **Middleware**: Authentication, validation, and security
- **Services**: External integrations (Stripe, Email, AI)

### Database (MongoDB)
- **Users**: Authentication and profile data
- **Assessments**: Case analysis and results
- **Payments**: Transaction records and subscriptions
- **Modules**: Legal content and user progress

## 🔒 Security

- JWT-based authentication
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- Helmet security headers
- Encrypted password storage
- PCI-compliant payment processing

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices with:
- Mobile-first design approach
- Touch-friendly interfaces
- Optimized loading performance
- PWA capabilities

## 🚀 Deployment

### Heroku
```bash
git push heroku main
```

### Vercel (Frontend)
```bash
vercel --prod
```

### Manual Deployment
```bash
npm run build
# Deploy build folder to your hosting provider
```

## 📊 Monitoring

- Application logging with Winston
- Error tracking with Sentry (optional)
- Performance monitoring
- User analytics integration

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run frontend tests only
cd client && npm test

# Run backend tests only
cd server && npm test
```

## 📋 Legal Compliance

⚠️ **Important**: This application provides legal information, not legal advice. Users should consult qualified NSW legal professionals for specific legal matters.

### Compliance Features
- Required legal disclaimers
- Privacy policy implementation
- Data protection measures
- Terms of service
- Professional liability considerations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Email: support@nswduidefense.com
- Documentation: `/docs`
- Issues: GitHub Issues

## 📄 License

This project is proprietary software. All rights reserved.

---

**Disclaimer**: This software provides legal information only and does not constitute legal advice. Users should consult with qualified legal professionals for advice specific to their situation. 