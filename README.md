# AmazonaShop


> Build an e-commerce app like Amazon by MERN Stack

## Live Preview Project 
- Production Link Change due to Heroku Free tier account closed, move Heroku cyclic.sh
[Demo Project](https://fancy-scarf.cyclic.app//)


## Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as a delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend of this project. Ensure you have at least Node v14.6 or higher; otherwise, you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and set Babel if you would like

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```
### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku post-build script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

Fill Register Page and create own account   (Customer)

admin@example.com (Admin)
123456

ali@example.com (Customer)
123456

```
