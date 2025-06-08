const express = require('express');
const rateLimit = require('express-rate-limit');
const aiController = require('../controllers/aiController');

const router = express.Router();

// Rate limiting for AI endpoints
const aiRateLimit = rateLimit({
  windowMs: parseInt(process.env.AI_RATE_LIMIT_WINDOW) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.AI_RATE_LIMIT_MAX) || 10, // limit each IP to 10 requests per windowMs
  message: {
    success: false,
    error: 'Too many AI requests from this IP, please try again later.',
    retryAfter: Math.ceil((parseInt(process.env.AI_RATE_LIMIT_WINDOW) || 15 * 60 * 1000) / 1000)
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all AI routes
router.use(aiRateLimit);

// AI Routes
router.post('/analyze-case', aiController.analyzeCase);
router.post('/chat', aiController.chat);
router.post('/defense-strategies', aiController.generateDefenseStrategies);
router.post('/recommendations', aiController.getRecommendations);
router.get('/health', aiController.healthCheck);

module.exports = router; 