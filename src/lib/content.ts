/*
  Single source of truth for homepage copy.
  Copy is drawn from PFHI's brand brief. Numbers in `impact.stats` and the
  featured story are PLACEHOLDERS and must be replaced with verified figures
  before launch. Images are grayscale texture placeholders standing in for
  PFHI's own documentary photography.
*/

export const nav = {
  brand: "PFHI",
  brandFull: "People Frontline Health Initiative",
  links: [
    { title: "About", url: "/about" },
    { title: "What we do", url: "/what-we-do" },
    { title: "Our impact", url: "/#impact" },
    { title: "Get involved", url: "/#involve" },
  ],
  cta: { title: "Donate", url: "/#donate" },
};

export const hero = {
  kicker: "Public health, powered by communities",
  headline: "Everyone deserves quality healthcare",
  headlineAccent: "— wherever they live.",
  body:
    "PFHI works alongside underserved communities across Africa to close the gap in access to quality care — through outreach, research, innovation, and lasting partnerships.",
  primary: { title: "Support our work", url: "#donate" },
  secondary: { title: "Partner with us", url: "#involve" },
  image: "/images/hero-home.webp",
  imageAlt: "A PFHI volunteer sharing gifts with children at a community outreach",
};

export const values = [
  "Compassion",
  "Equity",
  "Integrity",
  "Innovation",
  "Community",
  "Collaboration",
  "Excellence",
  "Accountability",
  "Inclusion",
  "Sustainability",
  "Evidence-based action",
  "Human dignity",
];

export const mission = {
  lead: "We believe healthcare is a fundamental right, not a privilege.",
  body:
    "Together with communities and partners, we create practical solutions that improve lives, strengthen health systems, and build healthier futures — for the people the system reaches last.",
  points: [
    {
      label: "The bridge",
      text: "We connect communities to knowledge, care, and opportunity — and connect partners to work that measurably changes lives.",
    },
    {
      label: "The lighthouse",
      text: "We lead with evidence, innovation, and transparency, guiding people toward healthier futures they can trust.",
    },
  ],
};

export const programs = {
  heading: "What we do",
  intro:
    "Six connected areas of work — grounded in communities, strengthened by research, and built to last.",
  items: [
    {
      no: "01",
      title: "Community health & outreach",
      text: "Mobile clinics, screening drives, and disease-prevention campaigns that meet people where they are — in rural villages and urban informal settlements.",
      image: "/images/program-outreach.jpg",
      activities: [
        "Mobile clinics & health camps",
        "Community screening drives",
        "Disease-prevention campaigns",
        "Health education & promotion",
      ],
    },
    {
      no: "02",
      title: "Maternal & child health",
      text: "Safer pregnancies, healthier births, and thriving children through accessible, community-based maternal and child care.",
      image: "/images/program-maternal.jpg",
      activities: [
        "Antenatal & postnatal support",
        "Safe-birth referral networks",
        "Child health & nutrition",
        "Immunization awareness",
      ],
    },
    {
      no: "03",
      title: "Mental health & wellbeing",
      text: "Breaking stigma and widening access to mental health awareness, support, and care in communities that have had none.",
      image: "/images/program-wellbeing.jpg",
      activities: [
        "Awareness & anti-stigma campaigns",
        "Community-based support",
        "Counselling & referral pathways",
        "Youth mental-health programs",
      ],
    },
    {
      no: "04",
      title: "Research, policy & advocacy",
      text: "Generating evidence and monitoring impact to strengthen public health systems and shape health policy that works.",
      image: "/images/program-research.jpg",
      activities: [
        "Public-health research",
        "Policy advocacy & dialogue",
        "Monitoring & evaluation",
        "Evidence for decision-making",
      ],
    },
    {
      no: "05",
      title: "Innovation & digital health",
      text: "Using technology, data, and telemedicine to extend the reach of care and make health services smarter and more resilient.",
      image: "/images/hero-outreach.jpg",
      activities: [
        "Telemedicine & remote care",
        "Digital health tools",
        "Data-driven decision-making",
        "Health-tech partnerships",
      ],
    },
    {
      no: "06",
      title: "Capacity building & partnerships",
      text: "Empowering young people, frontline health workers, and local organizations with the skills, resources, and partnerships to lead.",
      image: "/images/program-capacity.jpg",
      activities: [
        "Frontline-worker training",
        "Youth development",
        "Local-organization support",
        "Strategic partnerships",
      ],
    },
  ],
};

export const approach = {
  heading: "We don’t just implement projects. We co-create with communities.",
  body:
    "Our advantage is the combination that most programs miss — grassroots trust, rigorous research, and technology, working as one. That is how solutions become practical, scalable, and genuinely owned by the people they serve.",
  pillars: [
    { title: "Grassroots trust", text: "Rooted in the communities we serve, not parachuted in." },
    { title: "Rigorous evidence", text: "Every program measured, learned from, and improved." },
    { title: "Smart technology", text: "Digital tools that extend care, not complicate it." },
    { title: "Lasting partnerships", text: "Built with government, donors, and local leaders." },
  ],
  image: "/images/approach-community.jpg",
};

export const impact = {
  heading: "Measured by lives, not logos",
  intro:
    "We hold ourselves to what actually changes: people reached, communities strengthened, and health systems that stand on their own.",
  // PLACEHOLDER figures — replace with verified numbers before launch.
  stats: [
    { value: "40+", label: "Communities reached" },
    { value: "25,000+", label: "People served" },
    { value: "300+", label: "Frontline workers trained" },
    { value: "18", label: "Partner organizations" },
  ],
  // PLACEHOLDER stories — replace with real, consented community stories.
  storiesHeading: "Stories from the frontline",
  stories: [
    {
      tag: "Field story",
      title: "Bringing maternal care within reach",
      text: "When care is hours away, small barriers become life-threatening. Our community-based maternal program brings screening, counselling, and referral to the doorstep — so no mother faces pregnancy alone.",
      image: "/images/program-maternal.jpg",
    },
    {
      tag: "Field story",
      title: "Where children can just be children",
      text: "Health is more than the absence of illness. Our outreach creates spaces where children are screened, supported, and seen — and simply get to be kids.",
      image: "/images/program-wellbeing.jpg",
    },
    {
      tag: "Field story",
      title: "Training the next frontline",
      text: "Every workshop multiplies our reach. We equip young people and local health workers with the skills and confidence to lead care in their own communities.",
      image: "/images/program-research.jpg",
    },
  ],
};

export const involve = {
  heading: "Stand at the frontline with us",
  intro: "Communities are ready. Change moves at the speed of the people willing to back it.",
  options: [
    {
      no: "01",
      title: "Donate",
      text: "Fund community programs that put care within reach of the people the system reaches last.",
      cta: { title: "Give today", url: "#donate" },
    },
    {
      no: "02",
      title: "Volunteer",
      text: "Lend your skills — clinical, technical, or organizational — to work that changes lives.",
      cta: { title: "Join us", url: "#volunteer" },
    },
    {
      no: "03",
      title: "Partner",
      text: "Government, donors, and organizations: let’s co-create scalable, evidence-based health solutions.",
      cta: { title: "Start a conversation", url: "#partner" },
    },
  ],
};

export const closing = {
  heading: "Healthcare is a right, not a privilege.",
  body: "Help us make that true for millions more.",
  primary: { title: "Donate now", url: "#donate" },
  secondary: { title: "Become a partner", url: "#partner" },
};

export const footer = {
  tagline:
    "A movement placing people at the frontline of healthcare — combining compassion, innovation, and measurable impact.",
  columns: [
    {
      title: "Explore",
      links: [
        { title: "About", url: "/about" },
        { title: "What we do", url: "/what-we-do" },
        { title: "Our impact", url: "/#impact" },
        { title: "News & insights", url: "#" },
      ],
    },
    {
      title: "Get involved",
      links: [
        { title: "Donate", url: "#donate" },
        { title: "Volunteer", url: "#volunteer" },
        { title: "Partner", url: "#partner" },
        { title: "Careers", url: "#" },
      ],
    },
    {
      title: "Programs",
      links: [
        { title: "Community health", url: "/what-we-do#community-health-and-outreach" },
        { title: "Maternal & child", url: "/what-we-do#maternal-and-child-health" },
        { title: "Mental health", url: "/what-we-do#mental-health-and-wellbeing" },
        { title: "Digital health", url: "/what-we-do#innovation-and-digital-health" },
      ],
    },
  ],
  newsletterHeading: "Stay close to the work",
  newsletterBody: "Occasional updates on our programs, research, and impact. No noise.",
  email: "hello@peoplefrontlinehealth.org",
};
