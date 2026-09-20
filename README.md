# QuickKart — Zepto Home Page Clone

A responsive Zepto-inspired grocery shopping application built with **React, Vite, Tailwind CSS, shadcn/ui, Zustand, and TanStack Query**.

The project demonstrates product fetching, category filtering, search, responsive UI, cart management, persistent cart state, loading skeletons, and toast notifications using the Fake Store API.

## 🚀 Features

### Header

* QuickKart branding
* Mock delivery location
* Product search
* Shopping cart icon
* Dynamic cart item count
* Responsive desktop and mobile layout

### Categories

* Categories fetched dynamically from the Fake Store API
* Horizontally scrollable category cards
* Product images used for category cards
* "All Products" option
* Active category highlighting
* Category-based product filtering

### Products

* Products fetched from Fake Store API
* Responsive product grid
* Product images
* Product titles
* Product categories
* Price displayed in Indian Rupees (₹)
* Add to cart functionality
* Hover animations
* Loading skeletons
* No-products-found state

### Search

* Search products by title
* Search works together with category filtering
* Displays an empty state when no matching products are found

### Cart

* Add products to cart
* Increase quantity
* Decrease quantity
* Remove products
* Dynamic cart count
* Subtotal calculation
* Empty cart state
* Responsive cart sidebar
* Cart data persists after page reload

### Notifications

Toast notifications are displayed when:

* A product is added to the cart
* A product is removed from the cart

### Responsive Design

The application is designed for:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 🛠️ Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| React          | UI development                |
| Vite           | Development and build tooling |
| JavaScript     | Application logic             |
| Tailwind CSS   | Styling and responsive design |
| shadcn/ui      | Reusable UI components        |
| Zustand        | Cart state management         |
| TanStack Query | API/server-state management   |
| Lucide React   | Icons                         |
| Sonner         | Toast notifications           |
| Fake Store API | Product and category data     |

## 🌐 API

This project uses the Fake Store API.

### Products

```text
https://fakestoreapi.com/products
```

### Categories

```text
https://fakestoreapi.com/products/categories
```

The application uses the native JavaScript `fetch()` API for API requests.

## 📁 Project Structure

```text
quickkart/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── skeleton.jsx
│   │   │   └── sonner.jsx
│   │   │
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   │
│   │   ├── CategoryTabs/
│   │   │   └── CategoryTabs.jsx
│   │   │
│   │   ├── CategoryCard/
│   │   │   └── CategoryCard.jsx
│   │   │
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductSkeleton.jsx
│   │   │
│   │   └── CartSheet/
│   │       └── CartSheet.jsx
│   │
│   ├── lib/
│   │   └── utils.js
│   │
│   ├── pages/
│   │   └── Home/
│   │       └── Home.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── store/
│   │   └── cartStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── components.json
├── jsconfig.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

## 🧠 State Management

### Zustand

Zustand is used for client-side cart state management.

The cart store handles:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products
* Clearing the cart
* Persisting cart data

The Zustand `persist` middleware stores the cart in browser storage using:

```text
quickkart-cart
```

This allows the cart to remain available after refreshing the page.

## 🔄 TanStack Query

TanStack Query is used for server-state management.

The application fetches:

```text
Products
Categories
```

Query keys used by the application include:

```text
["products"]
["categories"]
```

This keeps API/server state separate from the client-side cart state.

## 🔎 Search and Filtering

Products can be filtered by category and search term.

### Category Filtering

Users can select:

```text
All Products
Jewelery
Electronics
Men's Clothing
Women's Clothing
```

The product grid updates according to the selected category.

### Search Filtering

The search input filters products based on their title.

Search and category filtering work together.

For example:

```text
Category: Electronics
Search: watch
```

Only products matching both conditions are displayed.

## 🛒 Cart Flow

```text
Product
   ↓
Click ADD
   ↓
Zustand Cart Store
   ↓
Cart Count Updates
   ↓
Open Cart
   ↓
Increase / Decrease Quantity
   ↓
Remove Product
   ↓
Subtotal Updates
```

If the same product is added multiple times, its quantity is increased instead of creating a duplicate cart item.

## 💰 Currency

Product prices are displayed in Indian Rupees:

```text
₹
```

Prices are formatted to two decimal places.

Example:

```text
₹109.99
```

## ⏳ Loading State

While products are being fetched, the application displays product skeleton placeholders.

This provides visual feedback while waiting for API data.

## 🔔 Toast Notifications

Sonner is used for user feedback.

Examples:

```text
Added to cart
Removed from cart
```

## 🎨 UI Design

The interface is inspired by modern quick-commerce applications.

Design characteristics include:

* Clean white cards
* Yellow accent color
* Rounded corners
* Minimal interface
* Responsive product grid
* Horizontal category scrolling
* Subtle hover animations
* Mobile-friendly layout
* Responsive cart sidebar

The project uses Tailwind CSS and shadcn/ui for the interface.

## 📱 Responsive Layout

### Desktop

```text
Header
────────────────────────────────
Categories
────────────────────────────────
Product Grid
```

### Mobile

```text
Header
Search
Location
────────────────
Scrollable Categories
────────────────
Product Grid
```

The cart opens as a responsive sidebar/sheet without leaving the product page.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Geetaspatil/quickkart.git
```

### 2. Navigate to the project

```bash
cd quickkart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:5173
```

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates the production build.

### Preview

```bash
npm run preview
```

Runs the production build locally.

## 🏗️ Build Verification

Before submission, run:

```bash
npm run build
```

A successful build confirms that the application can be compiled for production.

## 📸 Screenshots

Add screenshots of the completed application to the `screenshots` folder.

Recommended structure:

```text
screenshots/
├── home.png
├── cart.png
└── mobile.png
```

### Home Page

![QuickKart Home Page](screenshots/home.png)

### Cart

![QuickKart Cart](screenshots/cart.png)

### Mobile View

![QuickKart Mobile View](screenshots/mobile.png)

## 🔗 GitHub Repository

https://github.com/Geetaspatil/quickkart


## 🚀 Future Improvements

Possible future improvements include:

* Product detail page
* Product sorting
* Price range filtering
* Checkout flow
* User authentication
* Address management
* Real delivery location selection
* Backend integration
* Payment integration
* Improved API error and retry handling
* Pagination or infinite scrolling
* Advanced product search

## 👩‍💻 Author

Geeta Mane

MERN Stack Developer

## 📌 Assignment

This project was created as a **Zepto Home Page Clone** development assessment.

The project demonstrates:

* React component architecture
* API integration
* State management
* Server-state management
* Responsive UI development
* Cart functionality
* Search and filtering
* Persistent client-side state
* Reusable components
* Tailwind CSS
* shadcn/ui

## 📄 License

This project was created for educational and assessment purposes.
