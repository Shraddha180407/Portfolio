// Central content file — edit here to update site copy, links, and stats.

export const profile = {
  name: "Shraddha Gautam",
  initials: "SG",
  email: "shraddhagautam2005@gmail.com",
  github: "https://github.com/ShraddhaGautam",
  githubHandle: "github.com/ShraddhaGautam",
  linkedin: "https://linkedin.com/in/shraddha-gautam679/",
  linkedinHandle: "linkedin.com/in/shraddha-gautam679",
  portfolioUrl: "https://shraddhagautam.netlify.app/",
  resumeUrl: "/Shraddha Gautam — Resume.pdf",
  whatsappNumber: "+91 99999 99999",
  whatsappUrl: "https://wa.me/919999999999?text=Hi%20Shraddha,%20I'm%20interested%20in%20discussing%20a%20website%20project",
  photoUrl: null,
};

export const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "2", label: "AI Products" },
  { num: "1", label: "Research Paper" },
  { num: "100%", label: "Open Source" },
];

// Commercial Concept Demo (Sample Business Website)
export const commercialDemoProject = {
  id: "apex-academy",
  name: "Apex Academy",
  badge: "Concept Demo · Business Web Design",
  category: "Client Showcase",
  status: "Concept Demo · Starter Package Reference",
  previewVideo: null,
  problem: "Coaching institutes and local tutorial centers struggle to convert visitors due to cluttered, outdated websites that fail on mobile and lack direct WhatsApp lead capture.",
  solution: "A modern, high-converting responsive website designed for coaching institutes. Features structured course cards, faculty highlights, transparent fee schedules, sample parent reviews, and 1-click WhatsApp admissions enquiry.",
  commercialNote: {
    clientGoal: "Turn web visitors into enrolled students with zero-friction mobile browsing and direct WhatsApp leads.",
    deliverables: "Mobile-first responsive design, course curriculum cards, fee schedule, faculty credentials, illustrative reviews, Google Maps location, and WhatsApp enquiry integration.",
    package: "Starter Business Package Reference",
    disclaimer: "Concept Demo: Designed as a functional reference implementation for educational institutes. All faculty and reviews are illustrative sample data.",
  },
  demoUrl: "/demo/coaching-institute",
  tags: ["React", "Tailwind CSS", "Mobile-First", "WhatsApp Lead Flow", "Fast Loading"],
};

// Featured Technical Full-Stack Platform
export const featuredProject = {
  id: "civicindia",
  name: "CivicIndia",
  badge: "★ Featured Engineering Project",
  category: "Full-Stack",
  status: "Full-Stack Web Application · Live Deployment",
  previewVideo: "/previews/civicindia.mp4",
  problem: "Citizens struggle to navigate fragmented government portals to identify schemes, job notifications, and examinations they qualify for.",
  solution: "A production full-stack platform bringing together welfare schemes, live jobs, exam calendars, and an eligibility engine in one bilingual interface.",
  engineeringNote: {
    challenge: "Aggregating 25+ government schemes, exam schedules, and employment notifications across state portals with structured bilingual filtering.",
    decision: "Architected a modular Node.js/Express REST backend with structured SQLite/PostgreSQL storage, scheduled RSS fetch routines, and role-based JWT administrative authentication.",
    verification: "Deployed live with an authenticated CMS dashboard; verified bilingual (Hindi/English) rendering and responsive mobile-first UI.",
  },
  highlights: [
    "25+ schemes cataloged with structured eligibility criteria",
    "50+ live job postings with automatic RSS updates",
    "40+ exam schedules tracked across sectors",
    "Admin CMS dashboard with role-based JWT authentication",
    "Hindi / English bilingual content rendering",
    "Mobile-first responsive UI architecture",
  ],
  architecture: ["Next.js UI", "Express REST API", "SQLite / PostgreSQL", "Railway & Vercel"],
  tech: ["Node.js", "Express", "SQLite", "JWT", "bcrypt", "Helmet", "Node Cron", "Railway", "Vercel"],
  githubUrl: "https://github.com/Shraddha180407/CivicIndia",
  caseStudyUrl: "/civicindia",
  demoUrl: null,
};

export const projects = [
  {
    id: "moodbowl",
    icon: "Mic",
    category: "AI & ML",
    name: "MoodBowl",
    badge: "Voice Emotion AI · Research Prototype",
    status: "Voice AI Prototype · Paper in Preparation",
    previewVideo: "/previews/moodbowl.mp4",
    problem: "Food ordering platforms ignore user emotional state and force users through tedious, multi-step menus.",
    solution: "A voice-first food ordering system that analyzes acoustic cues to detect user emotion and deliver personalized meal recommendations.",
    engineeringNote: {
      challenge: "Detecting user emotional state and affective sentiment directly from raw spoken audio without forcing users through complex multi-step menus.",
      decision: "Built an asynchronous FastAPI pipeline integrating Gemini multimodal audio processing to extract affective cues and rerank menu items dynamically.",
      verification: "Awarded Special Mention & Cash Prize at DU Tech-A-Thon; working interactive prototype validated live; academic research paper in preparation.",
    },
    highlights: [
      "Special Mention & Cash Prize at DU Tech-A-Thon for affective computing architecture",
      "Research paper in preparation on acoustic emotion-driven recommendation systems",
      "Real-time voice emotion parsing with Gemini multimodal API",
      "FastAPI asynchronous backend with PostgreSQL vector-ready schema",
    ],
    architecture: ["Voice Input UI", "Emotion Classifier", "FastAPI Core", "PostgreSQL Vector Store"],
    tags: ["FastAPI", "Python", "Gemini API", "PostgreSQL", "Voice UI", "Research"],
    githubUrl: "https://github.com/Shraddha180407/MoodBowl",
  },
  {
    id: "fake-news",
    icon: "Search",
    category: "AI & ML",
    name: "TruthLens — Misinformation Detection",
    badge: "NLP Pipeline · Open Source",
    status: "Machine Learning Pipeline · Open Source",
    previewVideo: "/previews/truthlens.mp4",
    problem: "Misinformation spreads rapidly and is difficult to identify across unstructured online articles.",
    solution: "An NLP classification pipeline that ingests article text, extracts linguistic features via TF-IDF, and flags falsified claims.",
    engineeringNote: {
      challenge: "Identifying deceptive linguistic markers, sensationalist framing, and fabricated claims across unstructured article text.",
      decision: "Implemented a two-stage classification workflow: TF-IDF n-gram vectorization with a Passive-Aggressive classifier for rapid text analysis, backed by a Bi-LSTM model for syntactic context.",
      verification: "Validated on standard fake news benchmark datasets; deployed via a lightweight Flask web interface for interactive article analysis.",
    },
    highlights: [
      "TF-IDF n-gram feature extraction paired with Passive-Aggressive classification",
      "Bi-directional LSTM neural network for syntactic context verification",
      "Text preprocessing pipeline with tokenization and lemmatization",
      "Flask REST API inference endpoint for rapid article classification",
    ],
    architecture: ["Text Preprocessor", "TF-IDF Vectorizer", "LSTM Classifier", "Flask Endpoint"],
    tags: ["Python", "TF-IDF", "LSTM", "Flask", "Scikit-Learn", "NLP"],
    githubUrl: "https://github.com/Shraddha180407/fake-news-detection",
  },
  {
    id: "ab-tester",
    icon: "BarChart3",
    category: "Full-Stack",
    name: "SaaS Landing Page A/B Tester",
    badge: "Analytics & Product",
    status: "Production Tool",
    previewVideo: "/previews/A-B TESTER.mp4",
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
    id: "basti-pathshala",
    icon: "GraduationCap",
    category: "Full-Stack",
    name: "Basti Ki Pathshala",
    badge: "Civic & NGO",
    status: "NGO Platform",
    previewVideo: "/previews/Basti ki Pathshala.mp4",
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

export const techToolkit = [
  {
    number: "01",
    category: "Web & Client Sites",
    description: "Responsive business sites, web apps, and conversion-focused landing pages.",
    tools: ["React", "Next.js", "Tailwind CSS", "Node.js & Express", "PostgreSQL & SQLite", "Mobile-First UX", "WhatsApp API"],
    demonstratedIn: "Apex Academy Demo, CivicIndia, Basti Ki Pathshala",
  },
  {
    number: "02",
    category: "AI & Data",
    description: "Speech intelligence, NLP pipelines, and multimodal inference services.",
    tools: ["Python", "FastAPI", "Gemini API", "PyTorch & TensorFlow", "Scikit-Learn", "Voice & NLP"],
    demonstratedIn: "MoodBowl (Voice UI), TruthLens (NLP Classifier)",
  },
  {
    number: "03",
    category: "Deployment & Tools",
    description: "Version control, containerization, and modern deployment pipelines.",
    tools: ["Git & GitHub", "Docker", "Railway & Vercel", "REST APIs", "Figma", "Linux / Shell"],
    demonstratedIn: "Production deployments & open-source repositories",
  },
];

export const aboutBento = {
  bio: [
    "I'm Shraddha Gautam, a Computer Science Honours student at the University of Delhi. I design and build fast, modern websites and custom web applications for businesses, educators, and startups — alongside deep technical work in speech intelligence and full-stack software.",
    "My work connects client needs with solid engineering: from high-converting business websites to CivicIndia (a civic welfare portal) and MoodBowl (an acoustic emotion AI system awarded a Special Mention & Cash Prize at DU Tech-A-Thon, with a research paper in preparation).",
  ],
  education: {
    degree: "B.Sc. Computer Science (Honours)",
    institution: "University of Delhi",
    period: "2023 — Present",
    highlights: ["Data Structures & Algorithms", "Operating Systems", "Machine Learning", "Database Systems"],
  },
  currentlyExploring: [
    { title: "High-Converting Client Websites", detail: "Fast, mobile-first websites with direct WhatsApp lead flows" },
    { title: "Voice & Multimodal AI", detail: "Real-time acoustic analysis and conversational interfaces" },
    { title: "Resilient Full-Stack Systems", detail: "Clean APIs, secure authentication, and scalable databases" },
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
    "Eligibility checker for 25+ cataloged schemes",
    "Live government job feed with automated RSS sync",
    "Admin CMS to manage and publish verified content",
    "JWT authentication & bcrypt password hashing",
    "Hindi / English bilingual content support",
    "Fully responsive mobile-first architecture",
  ],
  architecture: [
    { label: "Frontend\n(Next.js)", accent: true },
    { label: "REST API\n(Express)", accent: false },
    { label: "PostgreSQL / SQLite\nDatabase", accent: false },
    { label: "Admin CMS\nDashboard", accent: true },
  ],
  challenges: [
    "Structuring heterogeneous government notifications into unified queryable schemas",
    "Maintaining reliable automated feed updates without dropping connection sessions",
    "Securing administrative routes with robust JWT tokens and bcrypt encryption",
  ],
  results: [
    "Deployed and verified in live cloud environment",
    "Clean bilingual presentation for everyday citizens",
    "Role-based administrative control over published notices",
  ],
  nextUp: [
    "Multilingual SMS notifications for remote rural districts",
    "Automated state gazette scrapers with webhook alerts",
    "Direct WhatsApp bot integration for scheme qualification checks",
  ],
  githubUrl: "https://github.com/Shraddha180407/CivicIndia",
};
