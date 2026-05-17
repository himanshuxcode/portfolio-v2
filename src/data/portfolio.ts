export const personalInfo = {
  name: "Himanshu Titoria",
  title: "Software Development Engineer",
  tagline: "Backend engineer — I like building quiet, reliable systems people can trust.",
  bio: `I'm a backend-focused engineer who cares most about the parts people never see — the transaction that doesn't double-charge, the migration that doesn't wake anyone at 3 a.m., the API that just quietly does the right thing. At Bookeve I work on the booking and payments systems that real customers depend on every day, and I've come to think of reliability as a kind of care: when the system holds, someone's day goes a little smoother and they never have to think about it. I'd rather go deep on a few things I understand well than spread thin. Away from work you'll usually find me reading, slowly refining side projects, or working through algorithm problems for the calm of it.`,
  email: "himanshuxcode@gmail.com",
  github: "https://github.com/himanshuxcode",
  linkedin: "https://linkedin.com/in/himanshutitoria",
  location: "Ghaziabad, India",
  resumeUrl: "#",
};

export const projects = [
  {
    title: "Bookeve — Booking & Payments Platform",
    description:
      "The booking and payments backend behind Bookeve's mobile app: booking creation, rescheduling, cancellations and refunds, with Razorpay integration. My focus was making it trustworthy — database transactions and row locking so two people can't book the same slot, idempotent webhook handling so a payment is never counted twice, and Celery jobs handling confirmations and cleanup in the background.",
    tags: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Celery", "AWS"],
    github: "",
    live: "",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "EVA — EV Battery Health Monitoring",
    description:
      "A system for monitoring electric-vehicle battery health in real time, built under Nasscom & Qmansys Infosolution. I designed the Spring Boot backend — scalable APIs and data models for live metrics like voltage, current and temperature — and the battery-health logic that feeds a Flutter app for live monitoring and insights.",
    tags: ["Spring Boot", "PostgreSQL", "Firebase", "IoT", "Flutter"],
    github: "",
    live: "",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Maya Bot — AI Chat Assistant",
    description:
      "A small AI chat assistant I built to understand how conversational apps fit together end to end — a Flutter client with Firebase auth and storage, talking to the OpenAI API for real-time responses. More a learning project than a product, and a genuinely enjoyable one.",
    tags: ["Flutter", "Firebase", "OpenAI API"],
    github: "https://github.com/himanshuxcode/maya_bot",
    live: "",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Home Automation System",
    description:
      "A Flutter app paired with an ESP32 and sensor modules to control home devices remotely, with real-time status updates. A hands-on IoT project from my degree that taught me, concretely, where software meets hardware and why the boundary is hard.",
    tags: ["Flutter", "IoT", "ESP32"],
    github: "https://github.com/himanshuxcode/home_automation_app",
    live: "",
    color: "from-orange-500 to-rose-600",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "Java", "SQL"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    category: "Backend & APIs",
    icon: "backend",
    items: ["Django", "FastAPI", "Spring Boot", "REST APIs", "Microservices"],
    color: "from-emerald-500 to-green-400",
  },
  {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Redis"],
    color: "from-violet-500 to-purple-400",
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "CI/CD (GitHub Actions)", "Git", "Postman"],
    color: "from-orange-500 to-amber-400",
  },
];

export const experience = [
  {
    role: "Software Development Engineer",
    company: "Bookeve (Wofo24 Technologies Pvt. Ltd.)",
    location: "Ghaziabad, India",
    period: "Apr 2025 – Present",
    description: [
      "Built the end-to-end booking system — creation, rescheduling, cancellations and refunds — used by the mobile app",
      "Integrated Razorpay payments with idempotent webhook handling so duplicate payments are caught and never double-charged",
      "Hardened booking reliability with database transactions and row locking, eliminating double bookings",
      "Built a multi-cart system (one cart per artist) with scheduling, pricing and checkout, plus location/serviceability with caching and fallbacks",
      "Moved notifications, confirmations and cleanup onto Celery + Redis, and added S3 image uploads with Swagger-documented APIs",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Software Engineer Intern",
    company: "Bookeve (Wofo24 Technologies Pvt. Ltd.)",
    location: "Ghaziabad, India",
    period: "Jan 2025 – Mar 2025",
    description: [
      "Ran a zero-downtime refactor of the cart model in production using a 3-phase add → migrate → remove strategy, without breaking existing APIs",
      "Tracked down and fixed production issues — pricing miscalculations, serviceability validation errors, cart expiration conflicts — to keep releases stable",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    role: "App Development Coordinator",
    company: "The Binary Club, RKGIT",
    location: "Ghaziabad, India",
    period: "During B.Tech",
    description: [
      "Led a 5-member team mentoring juniors in app development",
      "Organised technical events reaching 500+ participants",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Core Member",
    company: "Iotuino Club, RKGIT",
    location: "Ghaziabad, India",
    period: "During B.Tech",
    description: [
      "Helped build the club from the ground up with its founding members",
      "Taught basic IoT concepts to 30+ junior students",
    ],
    color: "from-rose-500 to-pink-500",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering (IoT)",
  school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
  period: "Sept 2021 – Aug 2025",
  detail: "CGPA 6.85 · GATE 2025 (CS) Qualified",
};
