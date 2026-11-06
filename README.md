# My Awesome Portfolio

A modern, responsive React portfolio website inspired by dev09solutions.com with a beautiful purple gradient aesthetic.

## 🚀 Features

- ✨ Modern & Responsive Design
- 🎨 Beautiful Purple Gradient Theme
- 🎭 Smooth Animations (Framer Motion)
- ⌨️ Typewriter Effect in Hero Section
- 🎪 Skills Slideshow (Swiper)
- 📱 Mobile-First Approach
- 🌙 Glassmorphism UI Elements
- 🚀 Fast Performance (Vite)
- ♿ Accessible Components

## 🛠️ Tech Stack

- **React** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Swiper** - Carousel/Slideshow
- **React Simple Typewriter** - Typewriter Effect

## 📦 Installation

1. Navigate to the project directory:
```bash
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization Guide

### 1. **Personal Information**
Edit `src/config/portfolio.config.js` to update:
- Your name and title
- Bio/description
- Email and phone
- Location
- Social media links

```javascript
personal: {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more options
}
```

### 2. **Profile Image**
Place your profile image in the `public/` folder as `profile.jpg` and update the config:
```javascript
profileImage: "/profile.jpg"
```

### 3. **Roles/Typewriter**
Update the roles that appear in the typewriter effect:
```javascript
roles: [
  "Full Stack Developer",
  "UI/UX Designer",
  "Your Role Here",
]
```

### 4. **Skills**
Add or modify skills in the slideshow:
```javascript
skills: [
  { name: "React", icon: "⚛️" },
  { name: "Your Skill", icon: "🔧" },
  // ...
]
```

### 5. **Services**
Update service cards with your offerings:
```javascript
services: [
  {
    id: 1,
    title: "Your Service",
    description: "Service description",
    icon: "IconName", // From lucide-react
  },
  // ...
]
```

### 6. **Projects**
Add your projects with images and details:
```javascript
projects: [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    image: "/project1.jpg",
    tags: ["React", "Node.js"],
    link: "https://project-link.com",
    github: "https://github.com/username/project",
  },
  // ...
]
```

### 7. **Theme Colors**
Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#6D28D9",
  secondary: "#4C1D95",
  dark: "#0F172A",
}
```

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── portfolio.config.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── [Your images here]
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Build: `npm run build`
3. Push to GitHub with GitHub Actions

## 🎨 Color Reference

- **Primary Purple**: `#6D28D9`
- **Secondary Purple**: `#4C1D95`
- **Dark Background**: `#0F172A`
- **Text**: `#E2E8F0`

## 📝 Environment Variables (Optional)

Create a `.env` file for any sensitive data:
```
VITE_API_URL=your_api_url
VITE_EMAIL_SERVICE_ID=your_email_service_id
```

## 🤝 Contributing

Feel free to customize and modify this portfolio as needed!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Better Results

1. **Images**: Use high-quality images (1200x800px for projects, square for profile)
2. **Performance**: Optimize images before adding to the portfolio
3. **Content**: Keep descriptions concise and impactful
4. **Links**: Ensure all project links and social media links are active
5. **Mobile Testing**: Always test on mobile devices before deploying

## 🐛 Troubleshooting

### Issues with Tailwind CSS
- Clear node_modules: `rm -rf node_modules` and `npm install`
- Rebuild: `npm run dev`

### Issues with Images
- Ensure images are in the `public/` folder
- Check file paths in the config match actual filenames
- Use relative paths starting with `/`

### Contact Form Not Working
- The form is currently a demo with local state
- To make it functional, integrate with a backend service or email API

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

---

**Happy Building! 🎉** If you found this portfolio template helpful, feel free to star it and share it with others!
