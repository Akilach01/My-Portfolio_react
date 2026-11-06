# 🚀 Quick Start Guide

Welcome to your new portfolio! Follow these steps to get started right away.

## 1️⃣ Start Development Server

```bash
cd my-portfolio
npm run dev
```

Then open http://localhost:5173 in your browser. You'll see your portfolio with placeholder content!

## 2️⃣ Customize in 5 Minutes

### A. Update Your Name and Info
Open `src/config/portfolio.config.js` and update:
```javascript
personal: {
  name: "YOUR NAME",              // ← Change this
  title: "YOUR TITLE",            // ← Change this
  email: "your-email@example.com", // ← Change this
  // ... more fields
}
```

### B. Add Your Profile Picture
1. Save your profile picture as `profile.jpg`
2. Place it in the `public/` folder
3. That's it! The portfolio will automatically display it

### C. Update Your Roles
Edit the `roles` array in the config:
```javascript
roles: [
  "Your Role 1",
  "Your Role 2",
  "Your Role 3",
]
```

## 3️⃣ Add Your Projects

Edit `src/config/portfolio.config.js` and update the `projects` array:

```javascript
projects: [
  {
    id: 1,
    title: "My Awesome Project",
    description: "Brief description of the project",
    image: "/project1.jpg",           // Add image to public/ folder
    tags: ["React", "Tailwind"],
    link: "https://project-link.com",
    github: "https://github.com/your/repo",
  },
]
```

## 4️⃣ Update Your Skills

Edit the `skills` array in the config:
```javascript
skills: [
  { name: "React", icon: "⚛️" },
  { name: "Your Skill", icon: "🔧" },
]
```

## 5️⃣ Add Your Social Links

Update the `social` array:
```javascript
social: [
  { name: "GitHub", url: "https://github.com/YOUR_USERNAME", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/YOUR_PROFILE", icon: "Linkedin" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "Mail" },
]
```

## 📁 File Organization

```
my-portfolio/
├── public/                    # Images go here
│   ├── profile.jpg           # Your profile picture
│   ├── project1.jpg          # Project images
│   └── project2.jpg
├── src/
│   ├── components/           # Ready-made components
│   ├── config/
│   │   └── portfolio.config.js # ⭐ Customize everything here
│   ├── App.jsx
│   └── index.css
└── README.md                  # Full documentation
```

## ✨ Available Pages/Sections

1. **Hero** - Welcome banner with typewriter effect
2. **About** - Your story and skills slideshow
3. **Services** - What you offer
4. **Projects** - Your best work
5. **Contact** - Get in touch form + social links
6. **Footer** - Navigation and info

## 🎨 Customization Examples

### Change Button Text
In components, buttons are hardcoded. For example, in `src/components/Hero.jsx`:
```jsx
<button>Get Started</button>  // ← Change this
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#6D28D9",    // Change to your color
  secondary: "#4C1D95",
}
```

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/App.jsx`
3. Add it to the component list

## 🚀 Deploy Your Portfolio

### To Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### To GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

### To Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

## 🆘 Common Issues

**Q: Images not showing?**
- Place images in `public/` folder
- Update paths in config to start with `/`

**Q: Changes not showing?**
- Restart dev server: `npm run dev`
- Clear browser cache

**Q: Typewriter text too fast/slow?**
- Edit `typeSpeed` in `src/components/Hero.jsx`

## 📚 Full Documentation

- **README.md** - Complete feature list and setup guide
- **CUSTOMIZATION.md** - Detailed customization instructions
- **Components** - Each component is well-commented

## 💡 Next Steps

1. ✅ Update your personal info in `portfolio.config.js`
2. ✅ Add your profile picture
3. ✅ Add your projects
4. ✅ Update your skills and services
5. ✅ Add social media links
6. ✅ Test on mobile devices
7. ✅ Deploy to the web!

## 🎯 Pro Tips

- **Keep It Fresh**: Update projects regularly
- **Quality Over Quantity**: Showcase your best work
- **Mobile First**: Always test on phones and tablets
- **Fast Loading**: Optimize images before uploading
- **Active Links**: Make sure all links work!

## 📞 Support

For detailed help, check:
- `README.md` - Full documentation
- `CUSTOMIZATION.md` - Advanced customization guide
- Component comments - Code documentation

---

**Ready to go?** Open `src/config/portfolio.config.js` and start customizing! 🎨

Happy building! 🚀
