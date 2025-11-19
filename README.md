# 🍃 GreenNest – Indoor Plant Care & Store

---

## 🌱 Project Overview

**GreenNest** is a single-page web application built for indoor plant lovers who want to nurture and decorate their homes with healthy plants.  
Users can explore plant care guides, buy plants, and book expert consultations, ensuring a greener and healthier living space.

![GreenNest Screenshot]

<p align="center">
  <img src="./sourov-green-nest.netlify.app_ (2).png" alt="Banner" />
</p>

---

## 🎯 Project Goals

- Build a responsive, visually appealing plant care and store platform.
- Implement secure Firebase authentication (Signup, Login, Google Sign-In, Forgot Password).
- Fetch plant data from JSON for product/service listings.
- Create protected routes for service details and profile management.
- Maintain SPA functionality with a minimalist, calming design.

---

## 🧩 Core Features

### Layout Structure

- **Navbar:** Logo, navigation links (Home, Plants, My Profile), conditional rendering for logged-in/logged-out users.
- **Footer:** Quick links (About, Contact, Privacy Policy), social media icons (Instagram, Facebook, Pinterest).
- Navbar and Footer remain visible on all routes.

### Plant Data

- JSON file containing at least 6 indoor plant objects.
- Each object has: `plantId`, `plantName`, `category`, `price`, `rating`, `description`, `image`, `availableStock`, `careLevel`, `providerName`.

### Home Page Sections

- Hero section with slider (Swiper.js or Framer Motion).
- Top Rated Indoor Plants cards (from JSON).
- Plant Care Tips section.
- Meet Our Green Experts section.
- Optional extra: Eco Decor Ideas.

### Plant Details Page (Protected)

- Accessible only for logged-in users.
- Displays complete JSON info: image, name, description, price, rating, stock.
- “Book Consultation” form with name, email, and submission success toast.

### Authentication

- **Login & Signup** with Firebase.
- Google Sign-In integration.
- Password validation (uppercase, lowercase, min 6 characters).
- Forgot Password functionality.
- Profile page with `updateProfile()` for displayName and photoURL.

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,tailwind,nodejs,express,mongodb,firebase,git,github,vscode" height="40"/>
</p>

---

## 📝 Dependencies

- React.js
- React Router DOM
- Tailwind CSS / DaisyUI
- Firebase Auth
- Swiper.js / Framer Motion
- React Toastify

---

## ⚙️ Installation & Local Setup

1. Clone the repo:

```bash
git clone https://github.com/sourovmoy/sourov-green-nest
```
