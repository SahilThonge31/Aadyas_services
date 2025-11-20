# Aadyas Services - Corporate Web Application



A professional, high-performance single-page application (SPA) built for **Aadyas Services**, a multi-domain enterprise providing solutions in Education, Manpower, and Industrial Services across India.

🚀 **Live Demo:** [Insert Your Live Website URL Here]

## ✨ Key Features

### 🎨 UI/UX & Design
* **Dynamic Theming:** Full support for **Light/Dark mode** toggle.
* **Color Palettes:** User-selectable color themes (Green, Blue, Rose, Teal, etc.) that instantly update the entire application using CSS variables.
* **Responsive Design:** Mobile-first architecture with a custom animated side-drawer menu for smaller devices.
* **Animations:** Smooth page transitions and element reveals using **Framer Motion**.

### ⚡ Performance & Optimization
* **React 19:** Built on the latest React architecture.
* **Code Splitting:** Implemented `React.lazy` and `Suspense` for optimized route loading.
* **Asset Optimization:** Lazy-loaded images and compressed assets for fast Core Web Vitals.
* **SEO Ready:** Dynamic metadata (Title/Description) for every page, sitemap generation, and structured schema data.

### 🛠 Functional Components
* **Interactive Gallery:** Filterable project gallery with 30+ items.
* **Direct Integration:** Contact forms integrated directly with **WhatsApp API** for instant communication.
* **Case Studies:** Detailed project breakdowns with statistical counters.

## 💻 Tech Stack

* **Frontend:** React.js (v19), React Router v6
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Animations:** Framer Motion, React CountUp
* **State Management:** React Context API (for Theme/Palette management)

## 📂 Project Structure

```bash
src/
├── components/    # Reusable UI components (Navbar, Footer, CTA, Modals)
├── context/       # ThemeContext for global state
├── pages/         # Individual route pages (Home, About, Services, etc.)
└── App.js         # Main entry point with Routing and Lazy Loading
