export const personalInfo = {
  name: "Himanshu Titoria",
  title: "Full-Stack Software Engineer",
  tagline: "Building digital experiences that matter",
  bio: `I'm a passionate software engineer with 5+ years of experience crafting scalable web applications and delightful user experiences. I specialize in React, Node.js, and cloud-native architectures. When I'm not coding, you'll find me contributing to open-source projects or writing about software engineering best practices.`,
  email: "himanshu@example.com",
  github: "https://github.com/himanshutitoria",
  linkedin: "https://linkedin.com/in/himanshutitoria",
  twitter: "https://twitter.com/himanshutitoria",
  location: "Bengaluru, India",
  resumeUrl: "#",
};

export const projects = [
  {
    title: "CloudSync Dashboard",
    description:
      "A real-time cloud infrastructure monitoring dashboard with interactive graphs, alerting, and multi-region support. Built for teams managing large-scale Kubernetes deployments.",
    tags: ["React", "TypeScript", "D3.js", "WebSocket", "Go"],
    image: "/projects/cloudsync.png",
    github: "https://github.com/himanshutitoria/cloudsync",
    live: "https://cloudsync-demo.vercel.app",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "DevFlow CLI",
    description:
      "An opinionated CLI toolkit that automates developer workflows — from scaffolding new services to running integration tests and deploying to staging with a single command.",
    tags: ["Node.js", "TypeScript", "Commander.js", "Docker", "CI/CD"],
    image: "/projects/devflow.png",
    github: "https://github.com/himanshutitoria/devflow",
    live: "",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "SnapTrade",
    description:
      "A mobile-first stock trading simulator with real-time market data, portfolio analytics, and social features. Users can paper-trade and compete on leaderboards.",
    tags: ["Next.js", "PostgreSQL", "Redis", "Tailwind CSS", "Prisma"],
    image: "/projects/snaptrade.png",
    github: "https://github.com/himanshutitoria/snaptrade",
    live: "https://snaptrade-demo.vercel.app",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Patchwork",
    description:
      "A collaborative code review platform with inline annotations, AI-powered suggestions, and team analytics. Designed to make code reviews faster and more constructive.",
    tags: ["React", "Python", "FastAPI", "OpenAI", "MongoDB"],
    image: "/projects/patchwork.png",
    github: "https://github.com/himanshutitoria/patchwork",
    live: "https://patchwork-demo.vercel.app",
    color: "from-orange-500 to-rose-600",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend",
    icon: "backend",
    items: ["Node.js", "Python", "Go", "FastAPI", "Express", "GraphQL"],
    color: "from-emerald-500 to-green-400",
  },
  {
    category: "Database",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "DynamoDB", "Elasticsearch"],
    color: "from-violet-500 to-purple-400",
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel"],
    color: "from-orange-500 to-amber-400",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Razorpay",
    location: "Bengaluru, India",
    period: "Jan 2024 – Present",
    description: [
      "Leading the frontend architecture for the merchant dashboard serving 10M+ businesses",
      "Reduced page load time by 40% through code splitting and edge caching strategies",
      "Mentoring a team of 4 engineers and driving adoption of TypeScript across the org",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Software Engineer II",
    company: "Flipkart",
    location: "Bengaluru, India",
    period: "Jun 2022 – Dec 2023",
    description: [
      "Built the real-time inventory tracking system handling 500K+ SKU updates per minute",
      "Designed and shipped a micro-frontend architecture reducing deploy times by 60%",
      "Contributed to the internal design system used by 200+ developers across teams",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    role: "Software Engineer",
    company: "Zoho Corporation",
    location: "Chennai, India",
    period: "Jul 2020 – May 2022",
    description: [
      "Developed key features for Zoho CRM's workflow automation module",
      "Implemented a drag-and-drop workflow builder used by 50K+ enterprise customers",
      "Wrote comprehensive test suites achieving 92% code coverage across the module",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Software Engineering Intern",
    company: "Postman",
    location: "Bengaluru, India",
    period: "Jan 2020 – Jun 2020",
    description: [
      "Built a VS Code extension for API testing that reached 15K downloads in 3 months",
      "Contributed to the open-source Newman CLI runner, merging 12 PRs",
    ],
    color: "from-rose-500 to-pink-500",
  },
];
