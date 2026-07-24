# API Documentation - Rynix

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected routes require JWT token in Authorization header:
```
Authorization: Bearer {token}
```

---

## 🔐 Authentication Endpoints

### 1. User Signup
**POST** `/auth/signup`

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "_id": "123",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

---

### 2. User Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "token": "eyJhbGc...",
  "user": {
    "_id": "123",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

---

## 📱 User Endpoints

### 3. Get User Profile
**GET** `/user/profile` *(Protected)*

**Response:**
```json
{
  "_id": "123",
  "username": "john_doe",
  "email": "john@example.com",
  "profilePicture": "https://...",
  "bio": "Hello world",
  "followers": ["456", "789"],
  "following": ["111", "222"],
  "posts": ["post1", "post2"]
}
```

---

### 4. Update Profile
**PUT** `/user/profile` *(Protected)*

**Request Body:**
```json
{
  "bio": "Updated bio",
  "profilePicture": "image_url"
}
```

---

## 📝 Post Endpoints

### 5. Get All Posts
**GET** `/posts` *(Protected)*

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Posts per page (default: 10)

**Response:**
```json
[
  {
    "_id": "post1",
    "content": "Hello world!",
    "author": {"_id": "123", "username": "john_doe"},
    "images": ["image_url"],
    "likes": ["user1", "user2"],
    "comments": [...],
    "createdAt": "2024-07-24T10:00:00Z"
  }
]
```

---

### 6. Create Post
**POST** `/posts` *(Protected)*

**Request Body (multipart/form-data):**
```
content: "Hello world!"
images: [file1, file2]
```

---

### 7. Like Post
**POST** `/posts/:postId/like` *(Protected)*

---

### 8. Comment on Post
**POST** `/posts/:postId/comment` *(Protected)*

**Request Body:**
```json
{
  "text": "Great post!"
}
```

---

## 🛍️ Product Endpoints

### 9. Get All Products
**GET** `/products` *(Protected)*

**Query Parameters:**
- `category` - Product category
- `search` - Search term
- `sort` - Sort by (price, rating, popularity)
- `page` - Page number

**Response:**
```json
[
  {
    "_id": "prod1",
    "name": "iPhone 14",
    "price": 79999,
    "discountPrice": 69999,
    "category": "electronics",
    "seller": {...},
    "images": ["image_url"],
    "rating": 4.5,
    "reviews": [...],
    "stock": 50
  }
]
```

---

### 10. Get Single Product
**GET** `/products/:productId` *(Protected)*

---

### 11. Create Product (Seller)
**POST** `/products` *(Protected)*

**Request Body (multipart/form-data):**
```
name: "iPhone 14"
description: "Latest iPhone model"
price: 79999
category: "electronics"
images: [file1, file2]
stock: 50
```

---

### 12. Update Product (Seller)
**PUT** `/products/:productId` *(Protected)*

---

### 13. Delete Product (Seller)
**DELETE** `/products/:productId` *(Protected)*

---

## 🎬 Video Endpoints

### 14. Get All Videos
**GET** `/videos` *(Protected)*

**Query Parameters:**
- `category` - movie/series/short/educational
- `search` - Search term
- `page` - Page number

**Response:**
```json
[
  {
    "_id": "vid1",
    "title": "Movie Title",
    "thumbnail": "image_url",
    "videoUrl": "video_url",
    "category": "movie",
    "price": 299,
    "isPaid": true,
    "duration": 120,
    "rating": 4.8,
    "views": 1000
  }
]
```

---

### 15. Get Single Video
**GET** `/videos/:videoId` *(Protected)*

---

### 16. Add Video View
**POST** `/videos/:videoId/view` *(Protected)*

---

## 💳 Order Endpoints

### 17. Create Order
**POST** `/orders` *(Protected)*

**Request Body:**
```json
{
  "items": [
    {"product": "prod1", "quantity": 2}
  ],
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "country": "USA",
    "zipCode": "10001"
  }
}
```

---

### 18. Get All Orders
**GET** `/orders` *(Protected)*

---

### 19. Get Single Order
**GET** `/orders/:orderId` *(Protected)*

---

## 💰 Payment Endpoints

### 20. Create Razorpay Order
**POST** `/payment/create-order` *(Protected)*

**Request Body:**
```json
{
  "amount": 50000,
  "orderId": "order123"
}
```

---

### 21. Verify Payment
**POST** `/payment/verify` *(Protected)*

**Request Body:**
```json
{
  "razorpay_order_id": "order_123",
  "razorpay_payment_id": "pay_123",
  "razorpay_signature": "signature"
}
```

---

## Error Responses

**400 - Bad Request:**
```json
{
  "error": "Validation failed",
  "message": "Email is required"
}
```

**401 - Unauthorized:**
```json
{
  "error": "No token provided"
}
```

**403 - Forbidden:**
```json
{
  "error": "Forbidden"
}
```

**404 - Not Found:**
```json
{
  "error": "Resource not found"
}
```

**500 - Server Error:**
```json
{
  "error": "Internal server error",
  "message": "Error details"
}
```

---

## Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

---

**Last Updated:** July 24, 2024
