# Rynix - Multi-Platform Social & E-Commerce App

A comprehensive platform combining Instagram-like social features, video streaming, and product reselling marketplace with multi-social authentication.

## ✨ Features

### 🔐 Authentication
- ✅ Google OAuth Login
- ✅ Apple ID Login  
- ✅ Meta (Facebook) Login
- ✅ Email/Password Authentication
- ✅ JWT Token-based Sessions

### 📱 Social Features
- User profiles and following system
- Posts with images/videos
- Stories, likes and comments
- Real-time feed algorithm
- User discovery

### 🎬 Video Streaming
- Movie/video library
- Subscription-based access
- Razorpay payment integration
- Watch history
- Multiple quality options (720p, 1080p, 4K)

### 🛒 Marketplace
- Product listing and search
- Shopping cart functionality
- Order management
- Razorpay payments
- Seller dashboard
- Product reviews & ratings

### 💰 Payment Integration
- Razorpay for all transactions
- Order tracking
- Invoice generation
- Refund management

## Tech Stack

### Frontend
- **React 18+** - UI Library
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State Management
- **Axios** - HTTP Client
- **React Router v6** - Navigation
- **Socket.io** - Real-time Features

### Backend
- **Node.js + Express** - Server Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Passport.js** - OAuth Strategies
- **Razorpay SDK** - Payment Gateway
- **Multer** - File Uploads
- **Socket.io** - Real-time Communication

### Hosting
- **Frontend**: Vercel
- **Backend**: Railway/Render
- **Database**: MongoDB Atlas

## Project Structure

```
rynix/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── redux/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env.example
├── backend/
│   ├── routes/
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Video.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── docs/
│   ├── SETUP.md
│   ├── API.md
│   └── DEPLOYMENT.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 14+ 
- MongoDB Atlas (free tier account)
- Razorpay Account
- Google, Apple, Meta developer accounts

### Quick Start

**1. Clone Repository:**
```bash
git clone https://github.com/ritesha2007/rynix.git
cd rynix
```

**2. Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

**3. Frontend Setup:**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

The app will be available at `http://localhost:3000`

## Environment Variables

See `.env.example` files in both `backend/` and `frontend/` directories for required variables.

### Key Backend Variables
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET` - Payment gateway keys
- OAuth credentials (Google, Apple, Meta)

### Key Frontend Variables
- `REACT_APP_API_URL` - Backend API URL
- OAuth Client IDs

## API Documentation

See `docs/API.md` for complete API endpoints and usage examples.

## Database Models

- **User** - User profiles with OAuth support
- **Post** - Social media posts
- **Video** - Video streaming content
- **Product** - Marketplace products
- **Order** - Purchase orders

## Features by Module

### Authentication
- Multi-social login (Google, Apple, Meta)
- Email/Password authentication
- JWT token management
- Password hashing with bcryptjs

### Social Network
- Create/edit/delete posts
- Like and comment on posts
- Follow/unfollow users
- User discovery

### Video Streaming
- Video upload and management
- Subscription-based access
- Razorpay integration for payments
- View tracking and analytics

### Marketplace
- Product listing creation
- Shopping cart management
- Order processing
- Seller dashboard
- Review and rating system

## License
MIT

## Support
For issues and questions, please create an issue on GitHub.

## Contributing
Pull requests are welcome! Please follow the standard fork → feature branch → pull request workflow.

---

**Created by:** [@ritesha2007](https://github.com/ritesha2007)
