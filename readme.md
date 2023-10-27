# Natours App
<p align="center">
      <img src="https://github.com/alin00r/Natours-app/assets/74410154/ced15312-6a9c-4b85-b500-792e0dd2a7dc" alt="Natours" height="120"></p>
  
## Introduction 🌟

Welcome to Natours! This full stack web application is designed specially for persons who love travelling and going on tour vacations.

> **This was developed under the guidance of _Jonas Schmedtmann's_ [Node.js course](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/) that consists of**
- 📃How to create an API
- 🎮MVC Architecture
- 👩‍💻User Authentication
- 📚Data Modelling
- 🤳File Uploading
- 📌Realtime Map integeration using Mapbox

and much more 😉

## Technologies 🚀

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML, CSS
- Pug (Template Engine)
- Mailtrap
- Mapbox
- Stripe
- JSON Web Token
- bcrypt
- Nodemailer
- Gmail

## Features ✨

- [x] Browse and book a variety of nature tours.
- [x] Signup and create your own account!
- [x] Login to your account!
- [x] Each login session is persisted using cookies
- [x] Detailed information about each tour, including duration, difficulty, and price.
- [x] Interactive maps to visualize tour destinations.
- [x] Tour reviews and ratings by fellow travelers.
- [x] Reset your password
- [x] Update your password and profile
- [x] Stripe payment checkout gateway 💸
- [x] Upload Profile Picture
- [x] Email service 📨
- [x] Responsive for Mobiles, Laptops and PC 📱

## Setting Up Your Local Environment

Follow these steps to set up your local environment for the Natours app:

1. **Clone the Repository:**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/alin00r/natours.git
   cd natours
   ```
2. **Install Dependencies:**
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   Before you can run the Natours app, you need to set up your environment variables. These variables store sensitive information required for the app to function properly. Follow these steps to configure your environment variables:

   1. **Create a `.env` File:**
      In the root directory of the app, create a file named `.env`.

   2. **Add the Following Environment Variables:**
      Replace the placeholders with your actual information. You might need to sign up for accounts and services to obtain the required credentials.

      ```dotenv

      # MongoDB Configuration
      DATABASE=your-mongodb-database-url
      USERNAME=your-mongodb-username
      DATABASE_PASSWORD=your-mongodb-password

      # JSON Web Token Configuration
      SECRET=your-json-web-token-secret
      JWT_EXPIRES_IN=90d
      JWT_COOKIE_EXPIRES_IN=90

      # Stripe Configuration
      STRIPE_SECRET_KEY=your-stripe-secret-key
      STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret

      ```

## Test Payment

If you want to test the payment, please do not provide your secure information. So, we can use the following credit card that's available on the [stripe docs](https://stripe.com/docs/testing#use-test-cards).

```
credit card: 4242 4242 4242 4242 // VISA
m/y: 12/34
cvv: 567
```

## Request limit

100 request per hour.

## Query operators

Natours API use four (04) operators:

- $gt: greater than to a value specified
- $gte: greater than or equal to a value specified
- $lt: less than to a value specified
- $lte: less than or equal to a value specified

# API reference

During API development, I use `Postman` for handling/testing all endpoints.

- Postman collection/documentation is available on this link [click here](https://documenter.getpostman.com/view/28708948/2s9YRGw8PW)
- Base URL endpoints: `http://127.0.0.1:3000/api/V1/` or `http://localhost:3000/api/v1/`

## Project Demo 🎬

Explore the Natours app in action:

[**Natours App Demo**](https://natours-appnour.onrender.com/)

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- [Ali Nour](https://github.com/alin00r)
