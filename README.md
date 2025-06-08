# NSW DUI Defense Platform

A comprehensive AI-powered legal assessment and education platform designed to help individuals understand and navigate DUI cases in New South Wales, Australia.

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/StepTen2024/nsw-dui-defense-platform)

## 🤖 Features

### AI-Powered Assessment System
- **Claude AI Integration**: Advanced legal analysis powered by Anthropic's Claude AI
- **Intelligent Case Analysis**: Comprehensive DUI case evaluation with NSW-specific legal expertise
- **Risk Assessment**: Automated penalty calculations and risk level determination
- **Defense Strategy Generation**: AI-powered recommendations for defense approaches
- **Interactive AI Chat**: Real-time legal guidance and question answering

### Core Functionality
- **5-Step Assessment Process**: Comprehensive case evaluation with personal info, incident details, circumstances, prior offenses, and additional information
- **Detailed Results Analysis**: Risk levels, penalty estimates, defense opportunities, and court preparation guidance
- **Legal Education Resources**: State-specific DUI information and legal guidance
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Mobile-first design optimized for all devices

### Key Components
- **Landing Page**: Professional introduction to AI-powered services
- **Assessment Tool**: Step-by-step case evaluation with validation
- **Results Page**: Comprehensive AI analysis with visual risk indicators
- **AI Chat Interface**: Interactive legal consultation
- **State-Specific Pages**: DUI information for all Australian states
- **Blog System**: Legal education articles and resources

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API communication
- **Context API** - State management for assessments and AI interactions

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Claude AI SDK** - Anthropic's Claude AI integration
- **MongoDB** - Database for user data and assessments
- **JWT** - Authentication tokens
- **Rate Limiting** - API protection and usage controls
- **CORS & Helmet** - Security middleware

### Deployment
- **Vercel** - Serverless deployment platform
- **MongoDB Atlas** - Cloud database hosting
- **Environment-based Configuration** - Separate dev/prod configs

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- MongoDB database (local or Atlas)
- Claude API key (optional - uses mock responses without it)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/StepTen2024/nsw-dui-defense-platform.git
cd nsw-dui-defense-platform
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies
cd server && npm install && cd ..
```

### 3. Environment Setup
```bash
# Server environment
echo "NODE_ENV=development
PORT=5001
MONGODB_URI=mongodb://localhost:27017/nsw-dui-defense
CLAUDE_API_KEY=your_claude_api_key_here
FRONTEND_URL=http://localhost:3000
AI_RATE_LIMIT_WINDOW=900000
AI_RATE_LIMIT_MAX=10" > server/.env

# Client environment
echo "REACT_APP_API_URL=http://localhost:5001/api
REACT_APP_AI_ENABLED=true" > client/.env
```

### 4. Start Development Servers
```bash
# Start both client and server concurrently
npm run dev
```

The application will be available at:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5001`
- **API Health Check**: `http://localhost:5001/api/health`

## 🔧 Deployment

### Deploy to Vercel (Recommended)

1. **One-Click Deploy**
   - Click the "Deploy with Vercel" button above
   - Connect your GitHub account
   - Set environment variables in Vercel dashboard

2. **Manual Deployment**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy to Vercel
   vercel --prod
   ```

3. **Required Environment Variables in Vercel**
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_uri
   CLAUDE_API_KEY=your_claude_api_key
   AI_RATE_LIMIT_WINDOW=900000
   AI_RATE_LIMIT_MAX=10
   REACT_APP_API_URL=/api
   REACT_APP_AI_ENABLED=true
   ```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
nsw-dui-defense-platform/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── AI/          # AI chat components
│   │   │   └── Assessment/   # Assessment form components
│   │   ├── context/         # React Context providers
│   │   ├── pages/           # Page components
│   │   ├── services/        # API and AI service functions
│   │   └── App.jsx          # Main application component
│   └── package.json
├── server/                   # Node.js backend
│   ├── src/
│   │   ├── controllers/     # API controllers
│   │   ├── routes/          # Express routes
│   │   ├── services/        # Business logic services
│   │   ├── middleware/      # Express middleware
│   │   └── app.js          # Express application
│   └── package.json
├── vercel.json              # Vercel deployment config
├── DEPLOYMENT.md            # Deployment guide
└── README.md
```

## 🎯 Usage

### For Users
1. **Start Assessment**: Navigate to `/assessment` and complete the 5-step evaluation
2. **AI Analysis**: Receive comprehensive AI-powered legal analysis
3. **View Results**: Access detailed penalty estimates and defense strategies
4. **Chat with AI**: Use the interactive chat for additional legal guidance
5. **Explore Resources**: Browse state-specific DUI information and legal articles

### AI Features
- **Smart Case Analysis**: Input your case details and receive NSW-specific legal analysis
- **Risk Assessment**: Automated calculation of risk levels and penalty estimates
- **Defense Strategies**: AI-generated recommendations for defense approaches
- **Court Preparation**: Guidance on required documents and preparation steps
- **Interactive Chat**: Ask specific legal questions and get informed responses

## 🔧 Configuration

### Environment Variables

#### Development
- **Server**: `server/.env`
- **Client**: `client/.env`

#### Production (Vercel)
Set these in your Vercel dashboard:
- `NODE_ENV=production`
- `MONGODB_URI=your_atlas_connection_string`
- `CLAUDE_API_KEY=your_claude_api_key`
- `REACT_APP_API_URL=/api`
- `REACT_APP_AI_ENABLED=true`

## 🤖 AI Integration

### Claude AI Features
- **NSW Legal Expertise**: Specialized prompts for Australian DUI law
- **Structured Analysis**: JSON-formatted responses for consistent processing
- **Fallback Responses**: Mock responses when API key is not available
- **Rate Limiting**: Protection against API abuse
- **Error Handling**: Graceful degradation when AI services are unavailable

### API Endpoints
- `POST /api/ai/analyze-case` - Comprehensive case analysis
- `POST /api/ai/chat` - Interactive AI chat
- `POST /api/ai/defense-strategies` - Generate defense strategies
- `GET /api/health` - Health check and system status

## 🔒 Security Features

- **Rate Limiting**: AI endpoint protection (10 requests per 15 minutes)
- **Input Validation**: Comprehensive form and API validation
- **CORS Protection**: Configured for production domains
- **Helmet Security**: HTTP security headers
- **Environment-based Config**: Secure credential management
- **Error Handling**: Sanitized error responses

## 🧪 Testing

```bash
# Test the AI integration
curl -X POST http://localhost:5001/api/ai/analyze-case \
  -H "Content-Type: application/json" \
  -d '{"bacLevel":"0.12","priorOffenses":0,"location":"Sydney, NSW"}'

# Run frontend tests
cd client && npm test

# Health check
curl http://localhost:5001/api/health
```

## 📊 Performance & Monitoring

- **AI Response Times**: Optimized for <5 second analysis
- **Rate Limiting**: Prevents API abuse and ensures fair usage
- **Error Tracking**: Comprehensive logging and error handling
- **Health Monitoring**: Real-time system status endpoints
- **Responsive Design**: Optimized for all device sizes

## 🆘 Support & Troubleshooting

### Common Issues
1. **AI not working**: Check `CLAUDE_API_KEY` environment variable
2. **Database errors**: Verify `MONGODB_URI` connection string
3. **CORS errors**: Ensure `FRONTEND_URL` is correctly set
4. **Rate limiting**: Wait 15 minutes or contact support

### Development Support
- Check server logs for detailed error messages
- Use health check endpoint to verify system status
- Enable development mode for detailed error stacks

---

**Ready to deploy?** Click the deploy button above or check out our [deployment guide](./DEPLOYMENT.md)! 