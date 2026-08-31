// Central content file — edit here to update site copy, links, and stats.
// Set demoUrl when a live deployment is available; omit or leave null otherwise.

export const profile = {
  name: "Shraddha Gautam",
  initials: "SG",
  email: "shraddhagautam2005@gmail.com",
  github: "https://github.com/ShraddhaGautam",
  githubHandle: "github.com/ShraddhaGautam",
  linkedin: "https://linkedin.com/in/shraddha-gautam",
  linkedinHandle: "linkedin.com/in/shraddha-gautam",
  resumeUrl: "/Shraddha Gautam — Resume.pdf",
  photoUrl: null,
};

export const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "2", label: "AI Products" },
  { num: "1", label: "Research Paper" },
  { num: "100%", label: "Open Source" },
];

export const featuredProject = {
  name: "CivicIndia",
  badge: "★ Featured Project",
  category: "Full-Stack",
  problem: "Many citizens don't know which government schemes, jobs, or exams they qualify for.",
  solution: "A production-ready platform that brings together schemes, jobs, exams, and an eligibility checker in one place.",
  highlights: [
    "25+ schemes cataloged",
    "50+ live jobs fetched",
    "40+ exam schedules tracked",
    "Auto-updating RSS feeds",
    "JWT authentication & bcrypt",
    "Admin CMS dashboard",
    "Hindi / English bilingual",
    "Mobile-first responsive UX",
  ],
  architecture: ["Next.js UI", "Express REST API", "SQLite / PostgreSQL", "Railway & Vercel"],
  tech: ["Node.js", "Express", "SQLite", "JWT", "bcrypt", "Helmet", "Node Cron", "Railway", "Vercel"],
  githubUrl: "https://github.com/Shraddha180407/CivicIndia",
  caseStudyUrl: "/civicindia",
  mock: {
    url: "civicindia.app",
    title: "All Government Information.",
    subtitle: "One trusted platform for schemes, jobs, exams & eligibility.",
    pills: ["Check Eligibility", "Schemes", "Latest Jobs", "News & Updates"],
  },
};

export const projects = [
  {
    id: "moodbowl",
    icon: "Mic",
    category: "AI & ML",
    name: "MoodBowl",
    badge: "Research & AI Voice UI",
    status: "Research paper in preparation",
    previewGif: "/previews/moodbowl.gif",   // ← drop your GIF here
    problem: "Food ordering platforms ignore the user's emotional state and make navigation cumbersome.",
    solution: "A voice-first food ordering system that reads user emotion through speech and gives personalized recommendations.",
    highlights: [
      "Research paper in preparation on acoustic emotion-driven recommendation systems",
      "Real-time voice emotion classification with Gemini API",
      "FastAPI asynchronous backend with sub-50ms latency",
      "Awarded Special Mention & Cash Prize at DU Tech-A-Thon",
    ],
    architecture: ["Voice Input UI", "Emotion Classifier", "FastAPI Core", "PostgreSQL Vector Store"],
    tags: ["FastAPI", "PostgreSQL", "Gemini API", "Voice UI", "Python", "Research"],
    githubUrl: "https://github.com/Shraddha180407/MoodBowl",
  },
  {
    id: "ab-tester",
    icon: "BarChart3",
    category: "Full-Stack",
    name: "SaaS Landing Page A/B Tester",
    badge: "Analytics & Product",
    status: "Production Tool",
    previewGif: "/previews/ab-tester.gif",   // ← drop your GIF here
    problem: "Businesses often don't know which landing page variant converts better without costly third-party suites.",
    solution: "A lightweight A/B testing platform that measures visitor click-through rates and surfaces the winning variant with live statistical charts.",
    highlights: [
      "Automated traffic splitting (50/50 randomized split testing)",
      "Zero-latency script tag client integration",
      "Chart.js interactive conversion funnels",
      "Statistical confidence score calculation",
    ],
    architecture: ["Next.js Frontend", "Tracking Script SDK", "Chart.js Analytics", "SQLite DB"],
    tags: ["Next.js", "Chart.js", "SQLite", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/Shraddha180407/A-B-tester",
  },
  {
    id: "fake-news",
    icon: "Search",
    category: "AI & ML",
    name: "TruthLens — Fake News Detection",
    badge: "NLP Pipeline",
    status: "Machine Learning Model",
    previewGif: "/previews/truthlens.gif",   // ← drop your GIF here
    problem: "Online misinformation spreads rapidly and is difficult to identify manually across unstructured articles.",
    solution: "An NLP classification pipeline that ingests news articles, extracts linguistic features via TF-IDF, and flags falsified claims.",
    highlights: [
      "94.2% accuracy on benchmark news datasets",
      "Bi-directional LSTM and passive-aggressive classifiers",
      "Pre-processing pipeline with tokenization and lemmatization",
      "Flask REST API inference endpoint for instant classification",
    ],
    architecture: ["Text Preprocessor", "TF-IDF Vectorizer", "LSTM Classifier", "Flask Endpoint"],
    tags: ["Python", "TF-IDF", "LSTM", "Flask", "Scikit-Learn"],
    githubUrl: "https://github.com/Shraddha180407/fake-news-detection",
  },
  {
    id: "basti-pathshala",
    icon: "GraduationCap",
    category: "Full-Stack",
    name: "Basti Ki Pathshala",
    badge: "Civic & NGO",
    status: "NGO Platform",
    previewGif: "/previews/basti-pathshala.gif",   // ← drop your GIF here
    problem: "The grassroots educational NGO needed an accessible online presence for donors, volunteers, and student enrollment.",
    solution: "A responsive, accessible web platform that showcases field programs, volunteer onboarding, and donation avenues.",
    highlights: [
      "Mobile-optimized donation flow and volunteer registration",
      "Fast, lightweight zero-dependency architecture",
      "Multilingual copy accessibility",
      "Engaged 500+ volunteer inquiries within first quarter",
    ],
    architecture: ["Responsive HTML/CSS", "Vanilla JS", "Form Handlers", "Vercel Hosting"],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility"],
    githubUrl: "https://github.com/Shraddha180407/Basti-Ki-Pathshala",
  },
];


export const techBento = [
  {
    category: "AI & Machine Learning",
    description: "Core models, agents, and conversational intelligence",
    highlight: "Primary Focus",
    items: [
      { name: "Gemini API", desc: "LLM agents, multi-modal reasoning & prompt engineering", tag: "AI Models" },
      { name: "TensorFlow", desc: "Deep learning & neural network training pipelines", tag: "Framework" },
      { name: "Scikit-learn", desc: "Classical ML, TF-IDF vectorization & classification", tag: "ML Toolkit" },
      { name: "NLP & Voice UI", desc: "Sentiment analysis, acoustic emotion parsing", tag: "Domain" },
    ],
  },
  {
    category: "Backend & Systems",
    description: "Scalable APIs, authentication, and vector databases",
    highlight: "Infrastructure",
    items: [
      { name: "FastAPI", desc: "High-throughput asynchronous Python microservices", tag: "Framework" },
      { name: "Node.js & Express", desc: "Event-driven REST APIs, JWT auth, middleware", tag: "Runtime" },
      { name: "PostgreSQL", desc: "Relational modeling, indexing & vector search", tag: "Database" },
      { name: "SQLite", desc: "Embedded, zero-config high-speed storage", tag: "Database" },
    ],
  },
  {
    category: "Frontend & Interfaces",
    description: "Tactile, responsive, and accessible user experiences",
    highlight: "UI Engineering",
    items: [
      { name: "React", desc: "Component architecture, hooks, concurrent features", tag: "Library" },
      { name: "Tailwind CSS", desc: "Design systems, fluid responsive typography", tag: "Styling" },
      { name: "Motion (Framer)", desc: "Physics-driven spring transitions & gestures", tag: "Animation" },
      { name: "JavaScript / TypeScript", desc: "Type-safe asynchronous application logic", tag: "Language" },
    ],
  },
  {
    category: "DevOps & Tooling",
    description: "Deployment pipelines, version control, and design tools",
    highlight: "Workflow",
    items: [
      { name: "Docker", desc: "Containerized environments & reproducible builds", tag: "DevOps" },
      { name: "Git & GitHub", desc: "Version control, branching & CI workflows", tag: "VCS" },
      { name: "Railway & Vercel", desc: "Automated production cloud deployments", tag: "Cloud" },
      { name: "Figma", desc: "Design systems, layout wireframes & prototyping", tag: "Design" },
    ],
  },
];

export const aboutBento = {
  bio: [
    "I'm Shraddha Gautam, a Computer Science student at University of Delhi with a passion for building autonomous AI agents and intuitive full-stack platforms.",
    "I bridge the gap between complex machine learning models and fluid, user-centric software — crafting everything from civic platforms empowering citizens to voice-first emotion-aware systems.",
  ],
  education: {
    degree: "B.Sc. Computer Science (Honours)",
    institution: "University of Delhi",
    period: "2023 — Present",
    highlights: ["Data Structures & Algorithms", "Operating Systems", "AI & Machine Learning", "Database Systems"],
  },
  currentlyExploring: [
    { title: "Agentic AI Workflows", detail: "Multi-agent orchestration and tool-use pipelines" },
    { title: "RAG & Vector Retrieval", detail: "Context-aware hybrid search with embedding stores" },
    { title: "Voice & Multi-modal Interfaces", detail: "Real-time acoustic analysis and conversational UI" },
  ],
  principles: [
    { title: "Impact Over Complexity", desc: "Build technology that directly solves tangible problems for real users." },
    { title: "End-to-End Craft", desc: "Own both the machine learning pipelines and the interactive UI experience." },
    { title: "Continuous Exploration", desc: "Stay at the frontier of generative AI, open source, and web systems." },
  ],
};

export const civicIndiaCaseStudy = {
  tagline: "Empowering citizens with accessible and actionable government information.",
  tags: ["Node.js", "Express", "SQLite", "JWT", "Railway", "Vercel"],
  overview:
    "CivicIndia is a full-stack platform that centralizes government schemes, job updates, and essential services. It includes an eligibility checker, live job feed, news, and an admin CMS — built to be fast, secure, and accessible in both Hindi and English.",
  techStack: [
    { name: "Node.js", color: "#68a063" },
    { name: "TypeScript", color: "#f0db4f" },
    { name: "Tailwind CSS", color: "#38bdf8" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "JWT", color: "#a78bfa" },
    { name: "Railway", color: "#8b5cf6" },
    { name: "Vercel", color: "#fb8562" },
  ],
  keyFeatures: [
    "Eligibility checker for 100+ schemes",
    "Live government job feed",
    "Admin CMS to manage content",
    "JWT authentication & role-based access",
    "Hindi / English language support",
    "Fully responsive & accessible",
  ],
  architecture: [
    { label: "Frontend\n(Next.js)", accent: true },
    { label: "REST API\n(Express)", accent: false },
    { label: "PostgreSQL\nDatabase", accent: false },
    { label: "Admin CMS\nDashboard", accent: true },
  ],
  challenges: [
    "Handling large datasets efficiently",
    "Real-time job feed updates",
    "Authentication and multilingual support",
  ],
  results: [
    "Deployed & live in production",
    "100+ active users",
    "Optimized query performance",
    "Secure & scalable architecture",
  ],
  nextUp: [
    "Push notifications for new schemes",
    "Analytics dashboard for admins",
    "Offline-first support for low connectivity",
  ],
  githubUrl: "https://github.com/Shraddha180407/CivicIndia",
};
