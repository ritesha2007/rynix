# Rynix - Complete Setup Guide

## Prerequisites

Before starting, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **MongoDB Atlas Account** - [Free tier](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **Code Editor** - VS Code recommended

### Developer Accounts Required:
1. **MongoDB Atlas** - Database
2. **Google Developer Console** - OAuth
3. **Apple Developer Account** - Apple Sign-in
4. **Meta/Facebook Developer** - Social login
5. **Razorpay Account** - Payment gateway

---

## 📥 Step 1: Clone Repository

```bash
git clone https://github.com/ritesha2007/rynix.git
cd rynix
```

---

## 🛠️ Step 2: Backend Setup

### 2.1 Navigate to Backend
```bash
cd backend
```

### 2.2 Install Dependencies
```bash
npm install
```

### 2.3 Create `.env` File
```bash
cp .env.example .env
```

### 2.4 Configure `.env` Variables

Edit `backend/.env` with your credentials:

```env
# Server
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rynix?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_jwt_secret_key_here_min_32_characters

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Apple ID
APPLE_CLIENT_ID=com.rynix.app
APPLE_TEAM_ID=your_apple_team_id
APPLE_KEY_ID=your_apple_key_id

# Meta/Facebook
META_APP_ID=your_meta_app_id
META_APP_SECRET=your_meta_app_secret

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### 2.5 Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get connection string: `mongodb+srv://username:password@...`
5. Replace in `.env` MONGODB_URI

### 2.6 Start Backend Server
```bash
npm run dev
```

**Expected Output:**
```
✅ MongoDB connected
🚀 Rynix Server running on port 5000
📍 http://localhost:5000
```

---

## 🎨 Step 3: Frontend Setup

### 3.1 Navigate to Frontend
```bash
cd ../frontend
```

### 3.2 Install Dependencies
```bash
npm install
```

### 3.3 Create `.env` File
```bash
cp .env.example .env
```

### 3.4 Configure `.env` Variables

Edit `frontend/.env`:

```env
# API
REACT_APP_API_URL=http://localhost:5000

# Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

# Apple ID
REACT_APP_APPLE_CLIENT_ID=your_apple_client_id
REACT_APP_APPLE_TEAM_ID=your_apple_team_id

# Meta/Facebook
REACT_APP_META_APP_ID=your_meta_app_id

# Razorpay
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 3.5 Start Frontend
```bash
npm start
```

**Frontend will open at:** `http://localhost:3000`

---

## 🔑 Step 4: OAuth Setup

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable OAuth 2.0 APIs
4. Create OAuth 2.0 Client ID (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000`
   - `http://localhost:5000`
6. Copy Client ID and Secret to `.env` files

### Apple Sign-in Setup

1. Go to [Apple Developer](https://developer.apple.com/)
2. Create App ID
3. Generate Sign in with Apple certificates
4. Get Team ID, Key ID, and Client ID
5. Add to `.env` files

### Meta/Facebook Setup

1. Go to [Meta Developer](https://developers.facebook.com/)
2. Create app
3. Configure Facebook Login product
4. Add valid OAuth redirect URIs
5. Get App ID and Secret

---

## 💳 Step 5: Razorpay Setup

1. Create account at [Razorpay](https://razorpay.com/)
2. Go to Settings → API Keys
3. Copy Key ID and Key Secret
4. Add to backend `.env`
5. Add Key ID to frontend `.env`

---

## 📁 Step 6: Project Structure Verification

Verify your project structure:

```
rynix/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   ├── Video.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Feed.js
│   │   │   ├── Videos.js
│   │   │   ├── Marketplace.js
│   │   │   └── Profile.js
│   │   ├── redux/
│   │   │   └── store.js
│   │   └── App.js
│   ├── package.json
│   └── .env
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── DEPLOYMENT.md
└── README.md
```

---

## 🧪 Step 7: Testing

### Test Backend
```bash
cd backend
npm test
```

### Test Frontend
```bash
cd frontend
npm test
```

### Manual Testing
1. Visit `http://localhost:3000`
2. Try signup/login
3. Create a post
4. Browse marketplace
5. Watch videos

---

## 🚀 Step 8: Environment Variables Checklist

**Backend `.env` ✓**
- [ ] MONGODB_URI configured
- [ ] JWT_SECRET set
- [ ] Google OAuth credentials
- [ ] Razorpay keys added
- [ ] PORT set to 5000

**Frontend `.env` ✓**
- [ ] REACT_APP_API_URL = http://localhost:5000
- [ ] Google Client ID added
- [ ] Razorpay Key ID added

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:** Check MongoDB URI in `.env` and ensure cluster is active

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:** Change PORT in `.env` or kill process using port

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** Ensure FRONTEND_URL in backend `.env` matches frontend URL

### React Module Not Found
```
Error: Cannot find module 'react'
```
**Solution:** Run `npm install` in frontend directory

### OAuth Redirect Error
```
redirect_uri_mismatch
```
**Solution:** Add `http://localhost:3000` and `http://localhost:5000` to OAuth app settings

---

## 📚 Next Steps

1. Read [API Documentation](./API.md)
2. Read [Deployment Guide](./DEPLOYMENT.md)
3. Start building features!
4. Check [GitHub Issues](https://github.com/ritesha2007/rynix/issues) for known issues

---

## ✅ Setup Verification

Run this to verify everything is working:

```bash
# Terminal 1: Start Backend
cd backend && npm run dev

# Terminal 2: Start Frontend
cd frontend && npm start

# Terminal 3: Check logs
curl http://localhost:5000/api/health
```

Expected output:
```json
{
  "status": "✅ Server is running",
  "timestamp": "2024-07-24T10:30:00Z",
  "version": "1.0.0"
}
```

---

**Setup Complete! 🎉**

For issues, check [GitHub Discussions](https://github.com/ritesha2007/rynix/discussions) or create an [Issue](https://github.com/ritesha2007/rynix/issues).
