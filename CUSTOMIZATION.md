# 🎨 Portfolio Customization Guide

This guide walks you through all the ways you can customize your portfolio to match your personal brand.

## Quick Start Customization (5 Minutes)

### Step 1: Update Your Profile
Open `src/config/portfolio.config.js` and update the `personal` section:

```javascript
personal: {
  name: "John Doe",                          // Your name
  title: "Full Stack Developer",             // Your professional title
  bio: "I create amazing web experiences",   // Your bio
  email: "john@example.com",                 // Your email
  phone: "+1 (555) 123-4567",               // Your phone
  location: "San Francisco, CA",             // Your location
  profileImage: "/profile.jpg",              // Profile image path
},
```

### Step 2: Add Your Profile Image
1. Add your profile image to `public/` folder
2. Name it `profile.jpg` (or update the config path)
3. Recommended size: 400x400px (square)

### Step 3: Update Your Roles
Edit the `roles` array to show your expertise:
```javascript
roles: [
  "Full Stack Developer",
  "UI Designer",
  "Tech Lead",
],
```

## Detailed Customization

### Hero Section
Customize the hero banner that greets visitors:

```javascript
// In portfolio.config.js
roles: [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Tech Enthusiast",
],

personal: {
  // ... update name, title, bio
}
```

### About Section
Update your professional story:

```javascript
about: {
  title: "About Me",
  description: [
    "First paragraph about yourself...",
    "Second paragraph about your experience...",
    "Third paragraph about your interests...",
  ],
},
```

### Skills Slideshow
Add your technical skills. Use emoji or update to use icons from lucide-react:

```javascript
skills: [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  // Add your skills...
],
```

**For custom icons using lucide-react:**
Edit `src/components/About.jsx` and update the icon rendering.

### Services Section
Showcase what you offer:

```javascript
services: [
  {
    id: 1,
    title: "Web Development",
    description: "Building modern, responsive applications...",
    icon: "Code2", // Lucide React icon name
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Creating native and cross-platform apps...",
    icon: "Smartphone",
  },
  // Add more services...
],
```

**Available Icons:** See lucide-react documentation for all icon names.

### Projects Section
Showcase your best work:

```javascript
projects: [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management.",
    image: "/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://your-project-link.com",
    github: "https://github.com/username/project-name",
  },
  // Add more projects...
],
```

**Image Setup:**
1. Add project images to `public/` folder
2. Recommended size: 400x300px (landscape)
3. Update image paths in config

### Contact Section
Customize contact information and social links:

```javascript
personal: {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, State",
},

social: [
  { name: "GitHub", url: "https://github.com/your-username", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/your-handle", icon: "Twitter" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "Mail" },
],
```

## Advanced Customization

### Change Color Theme
Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#6D28D9",    // Main purple
  secondary: "#4C1D95",  // Darker purple
  dark: "#0F172A",       // Dark background
},
```

To change to a different color scheme:
1. Choose your primary color
2. Find complementary colors using a color tool
3. Update the hex values in tailwind.config.js
4. Update `src/index.css` if needed

### Modify Global Styles
Edit `src/index.css` to customize:
- Font sizes and families
- Spacing
- Animation speeds
- Colors

### Customize Animations
Edit animations in `tailwind.config.js`:

```javascript
animation: {
  float: 'float 6s ease-in-out infinite',
  blob: 'blob 7s infinite',
},
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  // ...
},
```

### Component-Level Customization

#### Navbar
File: `src/components/Navbar.jsx`
- Add/remove navigation items
- Change styling and effects
- Add logo or branding

#### Hero
File: `src/components/Hero.jsx`
- Customize typewriter speed
- Change animation timing
- Modify button styles

#### About
File: `src/components/About.jsx`
- Adjust skills slideshow speed
- Change layout
- Customize card styles

## 🖼️ Image Organization

Recommended `public/` folder structure:
```
public/
├── profile.jpg           (400x400px)
├── project1.jpg          (400x300px)
├── project2.jpg          (400x300px)
├── project3.jpg          (400x300px)
├── project4.jpg          (400x300px)
└── favicon.ico
```

## 📱 Mobile Customization

The portfolio is mobile-first by default. To customize mobile behavior:

1. Edit component classes that use `md:` or `lg:` breakpoints
2. Common breakpoints:
   - `sm`: 640px
   - `md`: 768px
   - `lg`: 1024px
   - `xl`: 1280px

Example:
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive text size
</div>
```

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use tools like TinyPNG or ImageOptim
   - Compress before adding to portfolio
   - Use appropriate formats (JPG for photos, PNG for graphics)

2. **Lazy Loading:**
   - Images load as you scroll (built-in with Framer Motion)
   - Videos should be lazy-loaded

3. **Code Splitting:**
   - Components are already modular
   - Vite handles automatic code splitting

## 🔗 Social Media Links

Add your social links:
```javascript
social: [
  { name: "GitHub", url: "https://github.com/your-username", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com/your-handle", icon: "Twitter" },
  { name: "Instagram", url: "https://instagram.com/your-handle", icon: "Instagram" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "Mail" },
],
```

## 📧 Enable Email on Contact Form

To make the contact form functional, integrate with one of these services:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

Then in `src/components/Contact.jsx`:
```javascript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData);
  // Handle response
};
```

### Option 2: Formspree
No installation needed! Just update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Backend API
Point the form to your own backend endpoint.

## 🎯 SEO Optimization

To improve search engine visibility:

1. Update `index.html` with proper meta tags:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="developer, designer, your-skills">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
```

2. Add favicon in `public/` and link in `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🔐 Environment Variables

Create a `.env` file for sensitive data:
```
VITE_API_URL=https://api.example.com
VITE_GITHUB_TOKEN=your_github_token
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Common Customization Issues

### Images Not Showing
- Check file paths start with `/`
- Verify images are in `public/` folder
- Check file names match exactly

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `npm run dev`
- Check Tailwind classes are valid

### Typewriter Effect Speed
- Edit `typeSpeed` in Hero.jsx
- Increase for slower, decrease for faster

### Animations Too Fast/Slow
- Adjust `transition` durations in components
- Edit animation timings in tailwind.config.js

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev/)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev/guide/)

## ✨ Pro Tips

1. **Keep It Updated:** Update your projects and skills regularly
2. **Mobile First:** Always test on mobile devices
3. **Fast Loading:** Optimize images and minimize code
4. **Consistent Branding:** Use the same colors and fonts throughout
5. **Call-to-Action:** Make it easy for visitors to contact you
6. **Links Active:** Verify all links work before deploying
7. **Test Before Deploy:** Always test the full portfolio locally

---

Need more help? Check the main README.md or create an issue on GitHub!
