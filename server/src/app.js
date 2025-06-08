const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Import middleware
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const logger = require('./utils/logger');

// Import routes
const authRoutes = require('./routes/auth');
const assessmentRoutes = require('./routes/assessment');
const paymentRoutes = require('./routes/payment');
const moduleRoutes = require('./routes/modules');
const userRoutes = require('./routes/users');

// Initialize Express app
const app = express();

// Trust proxy for accurate IP addresses
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "https://js.stripe.com"],
      connectSrc: ["'self'", "https://api.stripe.com"],
    },
  },
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim())
    }
  }));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

// Stripe webhook endpoint (before JSON parsing)
app.use('/api/payment/webhook', express.raw({ type: 'application/json' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/users', userRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
}

// Mock API Endpoints for Development

// Mock Authentication
app.post('/api/auth/login', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      user: {
        id: '1',
        email: req.body.email,
        firstName: 'Test',
        lastName: 'User',
        subscription: { plan: 'free' }
      },
      token: 'mock-jwt-token'
    });
  }, 1000);
});

app.post('/api/auth/register', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      user: {
        id: '1',
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        subscription: { plan: 'free' }
      },
      token: 'mock-jwt-token'
    });
  }, 1500);
});

// Mock Assessment
app.post('/api/assessment/submit', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      assessmentId: 'assessment-' + Date.now(),
      results: {
        riskLevel: 'Medium',
        penaltyEstimate: {
          fine: { min: 1100, max: 2200 },
          licenseSuspension: { min: 3, max: 6 },
          interlock: true,
          communityService: { min: 0, max: 100 }
        },
        defenseStrategies: [
          {
            strategy: 'Challenge BAC Reading',
            success: 'High',
            description: 'Question breathalyzer calibration and maintenance.'
          }
        ]
      }
    });
  }, 2000);
});

app.get('/api/assessment/:id', (req, res) => {
  res.json({
    success: true,
    assessment: {
      id: req.params.id,
      status: 'completed',
      createdAt: new Date().toISOString()
    }
  });
});

// Mock Payment
app.post('/api/payment/create-intent', (req, res) => {
  setTimeout(() => {
    res.json({
      success: true,
      clientSecret: 'mock_client_secret',
      amount: req.body.amount
    });
  }, 1000);
});

// Mock Modules
app.get('/api/modules', (req, res) => {
  res.json({
    success: true,
    modules: [
      {
        id: 'defense-strategies',
        title: 'Advanced Defense Strategies',
        price: 29,
        purchased: false
      },
      {
        id: 'court-procedures',
        title: 'Court Procedures Masterclass',
        price: 29,
        purchased: false
      }
    ]
  });
});

// Mock User Dashboard
app.get('/api/user/dashboard', (req, res) => {
  res.json({
    success: true,
    data: {
      assessments: [
        {
          id: '1',
          date: new Date().toISOString(),
          status: 'completed',
          riskLevel: 'Medium'
        }
      ],
      progress: {
        modulesCompleted: 2,
        totalModules: 6,
        completionRate: 33
      }
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

// Graceful shutdown
const gracefulShutdown = (signal) => {
  logger.info(`Received ${signal}. Starting graceful shutdown...`);
  
  server.close(() => {
    logger.info('HTTP server closed.');
    
    mongoose.connection.close(() => {
      logger.info('MongoDB connection closed.');
      process.exit(0);
    });
  });
};

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    
    const server = app.listen(PORT, () => {
      logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });

    // Handle graceful shutdown
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    return server;
  } catch (error) {
    logger.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

// Start the server if this file is run directly
if (require.main === module) {
  startServer();
}

module.exports = app; 