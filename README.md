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

2. Navigate to the project directory:

```bash
cd sourov-green-nest
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your Firebase configuration:

```bash
cp .env.example .env
```

Then edit `.env` with your Firebase credentials:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.firebasestorage.app
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

5. Start the development server:

```bash
npm run dev
```

---

## 🚀 Deployment to Vercel

This project is ready for deployment on Vercel. Follow these steps:

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Login to your Vercel account:

```bash
vercel login
```

3. Deploy the project:

```bash
vercel
```

4. Follow the prompts and add your environment variables in the Vercel dashboard.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Add your environment variables in the "Environment Variables" section:
   - `VITE_apiKey`
   - `VITE_authDomain`
   - `VITE_projectId`
   - `VITE_storageBucket`
   - `VITE_messagingSenderId`
   - `VITE_appId`
6. Click "Deploy"

### Environment Variables Setup

Make sure to add all your Firebase environment variables in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add each `VITE_*` variable with its corresponding value
4. Redeploy if necessary

---

## 📁 Project Structure

```
sourov-green-nest/
├── public/
│   ├── data.json
│   ├── greenExpats.json
│   ├── plantsTips.json
│   └── _redirects
├── src/
│   ├── components/
│   ├── pages/
│   ├── Provider/
│   ├── Firebase/
│   └── ...
├── .env.example
├── vercel.json
└── package.json
```

---

## 🔧 Build Configuration

The project includes:

- **vercel.json**: Vercel deployment configuration
- **_redirects**: SPA routing support
- **Environment variables**: Secure Firebase configuration
- **Build optimization**: Vite production build

---

## 📞 Support

If you encounter any issues during deployment, check:

1. All environment variables are correctly set in Vercel
2. Firebase configuration is valid
3. Build logs in Vercel dashboard for any errors

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

## 🔧 Troubleshooting Deployment Issues

### MIME Type Error Fix

If you encounter the error: `"Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'"`, try these solutions:

#### Solution 1: Clear Vercel Cache
```bash
# If using Vercel CLI
vercel --prod --force
```

Or in Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Functions" tab
3. Click "Redeploy" and check "Use existing Build Cache" = OFF

#### Solution 2: Verify Environment Variables
Make sure all `VITE_*` environment variables are set in Vercel:
1. Go to Project Settings → Environment Variables
2. Ensure all variables are added for "Production" environment
3. Redeploy after adding variables

#### Solution 3: Alternative Vercel Configuration
If issues persist, try this minimal `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

#### Solution 4: Manual Build Check
Test your build locally:

```bash
npm run build
npm run preview
```

If local preview works but Vercel doesn't, the issue is deployment-specific.

### Common Issues & Solutions

1. **404 on Refresh**: Ensure `_redirects` file exists in `public/` folder
2. **Environment Variables**: All Firebase config must use `VITE_` prefix
3. **Build Errors**: Check Vercel build logs for specific error messages
4. **Asset Loading**: Verify all imports use relative paths

### Alternative Deployment (Netlify)
If Vercel issues persist, you can deploy to Netlify:

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

The `_redirects` file will handle SPA routing automatically on Netlify.