#!/bin/bash

# NSW DUI Defense Navigator - Setup Script
# This script sets up the development environment

set -e  # Exit on error

echo "🚀 Setting up NSW DUI Defense Navigator development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and npm 8+"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm $(npm --version) detected"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Setup client
echo "📦 Setting up React client..."
cd client

# Check if client package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Client package.json not found. Creating React app..."
    cd ..
    npx create-react-app client --template minimal
    cd client
fi

# Install client dependencies
echo "📦 Installing client dependencies..."
npm install

# Install additional client dependencies
echo "📦 Installing additional client packages..."
npm install @stripe/stripe-js @stripe/react-stripe-js
npm install lucide-react
npm install axios
npm install react-router-dom
npm install tailwindcss @tailwindcss/forms
npm install -D autoprefixer postcss

# Initialize Tailwind CSS
if [ ! -f "tailwind.config.js" ]; then
    echo "🎨 Initializing Tailwind CSS..."
    npx tailwindcss init -p
fi

cd ..

# Setup server
echo "🖥️  Setting up Node.js server..."
cd server

# Install server dependencies
echo "📦 Installing server dependencies..."
npm install

cd ..

# Create environment files from examples
echo "⚙️  Setting up environment files..."

if [ ! -f "client/.env" ]; then
    if [ -f "client/.env.example" ]; then
        cp client/.env.example client/.env
        echo "📝 Created client/.env from example"
    fi
fi

if [ ! -f "server/.env" ]; then
    if [ -f "server/.env.example" ]; then
        cp server/.env.example server/.env
        echo "📝 Created server/.env from example"
    fi
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p uploads
mkdir -p generated-docs
mkdir -p server/logs
mkdir -p server/uploads

# Check if MongoDB is running (optional)
echo "🔍 Checking MongoDB connection..."
if command -v mongosh &> /dev/null; then
    if mongosh --eval "db.adminCommand('ismaster')" --quiet > /dev/null 2>&1; then
        echo "✅ MongoDB is running"
    else
        echo "⚠️  MongoDB is not running. You can start it with:"
        echo "   - macOS (Homebrew): brew services start mongodb-community"
        echo "   - Linux: sudo systemctl start mongod"
        echo "   - Windows: net start MongoDB"
        echo "   - Docker: docker-compose up -d mongodb"
    fi
else
    echo "ℹ️  MongoDB shell not found. Make sure MongoDB is installed and running."
fi

# Check if Redis is available (optional)
echo "🔍 Checking Redis connection..."
if command -v redis-cli &> /dev/null; then
    if redis-cli ping > /dev/null 2>&1; then
        echo "✅ Redis is running"
    else
        echo "⚠️  Redis is not running. You can start it with:"
        echo "   - macOS (Homebrew): brew services start redis"
        echo "   - Linux: sudo systemctl start redis"
        echo "   - Windows: Start Redis service"
        echo "   - Docker: docker-compose up -d redis"
    fi
else
    echo "ℹ️  Redis not found. Install Redis for caching and session management."
fi

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x scripts/*.sh

# Git hooks setup (optional)
if [ -d ".git" ]; then
    echo "🔗 Setting up Git hooks..."
    if [ ! -f ".git/hooks/pre-commit" ]; then
        cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Run linting before commit
echo "Running pre-commit checks..."
npm run lint:check || exit 1
EOF
        chmod +x .git/hooks/pre-commit
    fi
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Configure your environment variables:"
echo "      - Edit client/.env (Stripe keys, API URL)"
echo "      - Edit server/.env (Database, JWT secret, API keys)"
echo ""
echo "   2. Start the development servers:"
echo "      npm run dev"
echo ""
echo "   3. Visit your application:"
echo "      - Frontend: http://localhost:3000"
echo "      - Backend API: http://localhost:5000"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview and setup"
echo "   - docs/API.md - API documentation"
echo "   - docs/DEPLOYMENT.md - Deployment guide"
echo ""
echo "🔧 Useful commands:"
echo "   npm run dev          - Start both client and server"
echo "   npm run client       - Start only React frontend"
echo "   npm run server       - Start only Node.js backend"
echo "   npm run build        - Build production client"
echo "   npm test            - Run all tests"
echo ""
echo "⚠️  Important reminders:"
echo "   - Set up Stripe test keys for payment processing"
echo "   - Configure email service for notifications"
echo "   - Set a secure JWT_SECRET in production"
echo "   - Review legal disclaimers before going live"
echo "" 