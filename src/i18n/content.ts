export type Lang = "es" | "en";

export const links = {
  email: "andycaseres2@gmail.com",
  linkedin: "https://www.linkedin.com/in/andy-caseres/",
  github: "https://github.com/andycaseres2",
  youtube: "https://www.youtube.com/@andycaseresdev",
  tiktok: "https://www.tiktok.com/@andycaseresdev",
  instagram: "https://www.instagram.com/andycaseresdev",
  beacons: "https://beacons.ai/andycaseres",
};

const projectsBase = [
  {
    name: "Canonix",
    stack: ["Astro", "TypeScript", "Supabase", "Vercel"],
    demo: "https://canonix-psi.vercel.app",
    repo: "https://github.com/andycaseres2/canonix",
  },
  {
    name: "Cúmulo",
    stack: ["Astro", "TypeScript", "Supabase", "AWS"],
    demo: "https://cumulo-phi.vercel.app/es/",
    repo: "https://github.com/andycaseres2/cumulo",
  },
  {
    name: "Tech Agents",
    stack: ["Python", "Next.js", "LLMs", "Docker"],
    repo: "https://github.com/andycaseres2/Tech-agents",
  },
  {
    name: "Competix",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    demo: "https://andycaseres2.github.io/competix-landing/",
    repo: "https://github.com/andycaseres2/competix-landing",
  },
  {
    name: "E-commerce API",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Docker"],
    repo: "https://github.com/andycaseres2/backend-ecommerce-ac",
  },
  {
    name: "Taskflow SaaS",
    stack: ["TypeScript", "Fastify", "Nx", "Docker"],
    repo: "https://github.com/andycaseres2/taskflow-saas",
  },
];

export const stack = [
  { key: "frontend", items: ["TypeScript", "React", "Next.js", "Vue", "Astro", "Tailwind CSS"] },
  { key: "backend", items: ["Node.js", "NestJS", "Express", "Python", "REST APIs", "OAuth 2.0 / SSO"] },
  { key: "mobile", items: ["React Native", "Flutter", "SQLite"] },
  { key: "data", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { key: "cloud", items: ["AWS", "Docker", "Vercel", "CI/CD", "Git"] },
  { key: "ai", items: ["LLMs", "AI agents", "OpenAI API", "Claude Code", "n8n", "Chatbots"] },
];

export const content = {
  es: {
    meta: {
      title: "Andy Caseres — Software Developer",
      description:
        "Software Developer en Bogotá. Construyo productos web, móviles y backend de punta a punta, con IA aplicada y Clean Architecture.",
    },
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", stack: "Stack", contact: "Contacto", cta: "Hablemos" },
    hero: {
      badge: "Disponible para roles remotos y proyectos",
      role: "Software Developer · Web · Mobile · Backend",
      prompt: "construyendo productos de punta a punta con IA aplicada",
      lead:
        "Diseño y desarrollo software en producción: plataformas web, apps móviles, APIs y automatizaciones con IA. Trabajo con Clean Architecture y un flujo AI-first que me permite entregar rápido sin sacrificar calidad.",
      primary: "Ver proyectos",
      secondary: "Contactar",
    },
    stats: [
      { value: "+4", label: "años en producción" },
      { value: "3", label: "plataformas: web, móvil y backend" },
      { value: "AI-first", label: "agentes y automatización a diario" },
      { value: "GMT-5", label: "remoto desde Bogotá" },
    ],
    about: {
      title: "Sobre mí",
      body: [
        "Llegué a la programación de forma autodidacta y desde entonces construyo productos reales para empresas en producción: desde plataformas de venta y formularios de financiación hasta apps móviles y sistemas internos.",
        "Me muevo entre frontend, backend y móvil, y me importa que el código se pueda mantener: separo la lógica de negocio con Clean Architecture, escribo tests y uso agentes de IA en mi día a día para diseñar, revisar y desplegar más rápido.",
        "Fuera del trabajo comparto lo que aprendo: doy charlas técnicas y creo contenido en español sobre IA y programación como @andycaseresdev.",
      ],
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "CasaToro Automotriz",
          role: "Desarrollador Frontend",
          period: "dic. 2022 — actualidad",
          type: "Tiempo completo · Bogotá",
          points: [
            "Desarrollo integral de la plataforma web: frontend con React, Next.js, Vue, Astro y TypeScript, y backend con APIs REST, modelos de datos e integraciones.",
            "Formulario de financiación de vehículos con integración de datos externos y un bot de IA que personaliza respuestas y agiliza la aprobación de crédito.",
            "Autenticación corporativa con SSO sobre Active Directory, despliegues en AWS y CI/CD.",
            "Charlas internas sobre Astro y buenas prácticas en React, y guías técnicas para el equipo.",
          ],
        },
        {
          company: "Logo Texo S.A.S.",
          role: "Software Developer",
          period: "ene. 2024 — actualidad",
          type: "Medio tiempo · Remoto",
          points: [
            "Productos de punta a punta para clientes: web con React, Next.js y Astro; móvil con React Native y Flutter; APIs con Node.js y Python.",
            "Sistema de gestión de tareas y asignaciones para una consultora, con seguimiento en tiempo real.",
            "Plataforma de seguimiento de mantenimiento con GPS para planificación proactiva y ahorro de costos.",
            "Autenticación OAuth 2.0 (Google, GitHub) e IA integrada: agentes, chatbots y automatizaciones.",
          ],
        },
        {
          company: "Datarte.art",
          role: "Frontend Developer Junior",
          period: "may. 2022 — oct. 2022",
          type: "Tiempo completo",
          points: [
            "Nuevas funcionalidades y mejoras de UX para una plataforma en línea de artistas.",
            "Actualización de información en tiempo real para una experiencia más dinámica entre usuarios.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Proyectos personales y open source. El trabajo para clientes y empresas es privado.",
      demo: "Demo",
      code: "Código",
      wip: "En desarrollo",
      items: [
        "Rutas de lectura de cómics y mangas con login, biblioteca y progreso por usuario.",
        "Plataforma para preparar la certificación AWS Cloud Practitioner con misiones y retos prácticos.",
        "Sistema multi-agente que detecta tendencias tech, genera guiones y envía resúmenes por Telegram, con dashboard.",
        "Landing de una extensión de Chrome con análisis de mercado para vendedores de Mercado Libre.",
        "API REST para e-commerce con validación, persistencia en MongoDB y despliegue en contenedores.",
        "SaaS de gestión de tareas con IA en un monorepo con Docker multi-stage y pipeline de CI.",
      ],
    },
    stack: {
      title: "Stack",
      groups: { frontend: "Frontend", backend: "Backend", mobile: "Móvil", data: "Datos", cloud: "Cloud y DevOps", ai: "IA y automatización" },
    },
    community: {
      title: "Charlas y contenido",
      items: [
        { title: "Desarrollo con Astro", text: "Charla técnica sobre cómo construir sitios rápidos con Astro." },
        { title: "Buenas prácticas en React.js", text: "Charla sobre arquitectura, componentes y calidad de código en React." },
        { title: "@andycaseresdev", text: "Contenido en español sobre IA y programación en YouTube, TikTok e Instagram." },
      ],
    },
    contact: {
      title: "¿Construimos algo?",
      text: "Estoy abierto a roles remotos y proyectos freelance. Escríbeme y te respondo pronto.",
      button: "Escríbeme",
    },
    footer: "Hecho con Astro y Tailwind.",
    switchLang: "EN",
  },
  en: {
    meta: {
      title: "Andy Caseres — Software Developer",
      description:
        "Software Developer based in Bogotá. I build end-to-end web, mobile and backend products with applied AI and Clean Architecture.",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", stack: "Stack", contact: "Contact", cta: "Let's talk" },
    hero: {
      badge: "Open to remote roles and projects",
      role: "Software Developer · Web · Mobile · Backend",
      prompt: "building end-to-end products with applied AI",
      lead:
        "I design and ship production software: web platforms, mobile apps, APIs and AI-powered automations. I work with Clean Architecture and an AI-first workflow that lets me deliver fast without cutting corners.",
      primary: "View projects",
      secondary: "Get in touch",
    },
    stats: [
      { value: "4+", label: "years shipping to production" },
      { value: "3", label: "platforms: web, mobile and backend" },
      { value: "AI-first", label: "agents and automation every day" },
      { value: "GMT-5", label: "remote from Bogotá" },
    ],
    about: {
      title: "About",
      body: [
        "I'm a self-taught developer who has been building real products for companies ever since: from sales platforms and financing forms to mobile apps and internal systems.",
        "I work across frontend, backend and mobile, and I care about maintainable code: I isolate business logic with Clean Architecture, write tests and use AI agents daily to design, review and deploy faster.",
        "Outside work I share what I learn: I give technical talks and create Spanish-language content about AI and programming as @andycaseresdev.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "CasaToro Automotriz",
          role: "Frontend Developer",
          period: "Dec 2022 — present",
          type: "Full-time · Bogotá",
          points: [
            "End-to-end development of the web platform: frontend with React, Next.js, Vue, Astro and TypeScript, plus REST APIs, data models and integrations.",
            "Vehicle financing form with external data integration and an AI bot that personalizes answers and speeds up credit approval.",
            "Corporate SSO authentication on Active Directory, AWS deployments and CI/CD.",
            "Internal talks on Astro and React best practices, plus technical guides for the team.",
          ],
        },
        {
          company: "Logo Texo S.A.S.",
          role: "Software Developer",
          period: "Jan 2024 — present",
          type: "Part-time · Remote",
          points: [
            "End-to-end products for clients: web with React, Next.js and Astro; mobile with React Native and Flutter; APIs with Node.js and Python.",
            "Task and assignment management system for a consultancy, with real-time tracking.",
            "GPS-based maintenance tracking platform for proactive planning and cost savings.",
            "OAuth 2.0 authentication (Google, GitHub) and built-in AI: agents, chatbots and automations.",
          ],
        },
        {
          company: "Datarte.art",
          role: "Junior Frontend Developer",
          period: "May 2022 — Oct 2022",
          type: "Full-time",
          points: [
            "New features and UX improvements for an online platform for artists.",
            "Real-time data updates for a more dynamic experience between users.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Personal and open-source projects. Client and company work is private.",
      demo: "Live",
      code: "Code",
      wip: "In progress",
      items: [
        "Reading paths for comics and manga with login, library and per-user progress.",
        "Platform to prepare for the AWS Cloud Practitioner certification with hands-on missions.",
        "Multi-agent system that spots tech trends, writes video scripts and sends Telegram digests, with a dashboard.",
        "Landing page for a Chrome extension with market analysis for Mercado Libre sellers.",
        "E-commerce REST API with validation, MongoDB persistence and containerized deployment.",
        "AI-powered task management SaaS in a monorepo with multi-stage Docker and a CI pipeline.",
      ],
    },
    stack: {
      title: "Stack",
      groups: { frontend: "Frontend", backend: "Backend", mobile: "Mobile", data: "Data", cloud: "Cloud & DevOps", ai: "AI & automation" },
    },
    community: {
      title: "Talks & content",
      items: [
        { title: "Building with Astro", text: "Technical talk on building fast websites with Astro." },
        { title: "React.js best practices", text: "Talk on architecture, components and code quality in React." },
        { title: "@andycaseresdev", text: "Spanish-language content about AI and programming on YouTube, TikTok and Instagram." },
      ],
    },
    contact: {
      title: "Let's build something",
      text: "I'm open to remote roles and freelance projects. Send me a message and I'll get back to you soon.",
      button: "Email me",
    },
    footer: "Built with Astro and Tailwind.",
    switchLang: "ES",
  },
};

export const projects = (lang: Lang) =>
  projectsBase.map((p, i) => ({ ...p, description: content[lang].projects.items[i], wip: p.name === "Taskflow SaaS" }));
