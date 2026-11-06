// Portfolio Configuration - Customize this file to personalize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Akila Chamara",
    title: "Full Stack Developer|UI/UX Designer",
    bio: "I'm a passionate developer creating elegant solutions to complex problems.",
    email: "akilapeiris92@gmail.com",
    phone: "+94 76 904 908 26",
    location: "Panadura, Srilanka",
    profileImage: "/my professional img.png", // Place your image in public folder
    cvUrl: "/Akila_simple-Fullstack Dev- cv.pdf",
  },

  // Typewriter roles (Hero section)
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Mobile Developer",
    "Tech Enthusiast",
  ],

  // About section
  about: {
    title: "About Me",
    description: [
      "I'm a passionate developer with expertise in building modern web applications using React, Node.js, and cloud technologies.",
      "With a background in computer science, I combine technical excellence with creative problem-solving to deliver exceptional digital experiences.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    ],
  },

  // Skills for the slideshow
  skills: [
    { name: "Java", icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
    { name: "MySQL", icon: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" },
    { name: "Python", icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" },
    { name: "HTML", icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
    { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "PHP", icon: "https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" },
    { name: "React", icon: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { name: "Angular", icon: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000" },
    { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png&color=000000" },
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Wekada Bauddhaloka National College",
      qualification: "Completed O/Ls",
      period: "2009 - 2019",
      icon: "School",
    },
    {
      id: 2,
      institution: "Horana Vidyarathna University College",
      qualification: "Completed A/Ls in Engineering Technology Stream",
      period: "2019 - 2022",
      icon: "Landmark",
    },
    {
      id: 3,
      institution: "IJSE Institute of Software Engineering",
      qualification: "Graduate Diploma in Software Engineering",
      period: "2024 - 2026",
      icon: "GraduationCap",
    },
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Building modern, responsive web applications using React, Vue, and other cutting-edge technologies.",
      icon: "Code2",
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile applications that deliver seamless user experiences.",
      icon: "Smartphone",
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Designing scalable server architectures and APIs using Node.js, Python, and cloud platforms.",
      icon: "Server",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive interfaces that users love, with focus on accessibility.",
      icon: "Palette",
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and payment integration.",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/project2.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with real-time data visualization and forecasting capabilities.",
      image: "/project3.jpg",
      tags: ["React", "API Integration", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics platform for tracking social media metrics with advanced visualization and reporting.",
      image: "/project4.jpg",
      tags: ["React", "Python", "PostgreSQL", "D3.js"],
      link: "#",
      github: "#",
    },
  ],

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/Akilach01", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/akila-c-371a84332", icon: "Linkedin" },
    { name: "Facebook", url: "https://www.facebook.com/share/1BVshUTkS1", icon: "Facebook" },
    { name: "Email", url: "mailto:akilapeiris92@gmail.com", icon: "Mail" },
  ],

  // Contact Form Settings
  contact: {
    title: "Get In Touch",
    description: "Have a project in mind? Let's work together to bring your ideas to life.",
    submitMessage: "Sending...",
    successMessage: "Message sent successfully!",
    errorMessage: "Failed to send message. Please try again.",
  },

  // Theme Colors (Optional - for advanced customization)
  theme: {
    primary: "#6D28D9",
    secondary: "#4C1D95",
    dark: "#0F172A",
  },
};
