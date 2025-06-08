# NSW DUI Defense Platform - Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/StepTen2024/nsw-dui-defense-platform)

### Option 2: Manual Deployment

1. **Fork/Clone the Repository**
   ```bash
   git clone https://github.com/StepTen2024/nsw-dui-defense-platform.git
   cd nsw-dui-defense-platform
   ```

2. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 🔧 Environment Variables

Set these environment variables in your Vercel dashboard:

### Server Environment Variables
- `NODE_ENV=production`
- `MONGODB_URI=your_mongodb_atlas_connection_string`
- `CLAUDE_API_KEY=your_claude_api_key_here`
- `AI_RATE_LIMIT_WINDOW=900000`
- `AI_RATE_LIMIT_MAX=10`

### Client Environment Variables
- `REACT_APP_API_URL=/api`
- `REACT_APP_AI_ENABLED=true`

## 📊 Database Setup

1. **MongoDB Atlas** (Recommended)
   - Create a free MongoDB Atlas account
   - Create a new cluster
   - Get the connection string
   - Add it as `MONGODB_URI` environment variable

## 🤖 AI Setup (Optional)

1. **Claude AI Integration**
   - Get Claude API key from Anthropic
   - Add it as `CLAUDE_API_KEY` environment variable
   - If not provided, the app will use mock responses

## 🔍 Verification

After deployment:
- ✅ Frontend should be accessible at your Vercel domain
- ✅ API endpoints should work at `your-domain.vercel.app/api/health`
- ✅ Assessment feature should be functional
- ✅ AI analysis should provide responses (mock or real)

## 🛠️ Troubleshooting

### Common Issues:
1. **Build Failures**: Check that all dependencies are installed
2. **API Errors**: Verify environment variables are set correctly
3. **Database Connection**: Ensure MongoDB URI is correct and accessible
4. **AI Features**: Check Claude API key is valid (optional)

### Support
- Check Vercel deployment logs for detailed error messages
- Ensure all environment variables are properly set
- Verify GitHub repository is up to date

## 🎯 Features Available After Deployment

- ✅ Complete DUI Assessment System
- ✅ AI-Powered Legal Analysis
- ✅ Defense Strategy Recommendations
- ✅ Risk Assessment and Penalty Calculations
- ✅ Interactive AI Chat
- ✅ State-Specific DUI Information
- ✅ Blog and Legal Resources

---

**Ready to deploy?** Click the deploy button above or follow the manual steps! 