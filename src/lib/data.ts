import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Bone,
  Brain,
  Eye,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export const navigationLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why CureNast", href: "#why" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
];

export const socialProof = {
  totalPatients: "20,000+",
  message: "happy patients served!",
  avatars: [
    "/images/doctor-emily.jpg",
    "/images/doctor-cynthia.jpg",
    "/images/doctor-alex.jpg",
  ],
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const services: Service[] = [
  {
    title: "Cardiology",
    description: "Comprehensive heart screenings and personalized heart-health roadmaps.",
    icon: HeartPulse,
    accent: "from-sky-100 via-sky-50 to-white",
  },
  {
    title: "Dermatology",
    description: "Advanced skin diagnostics with gentle, science-backed treatments.",
    icon: Sparkles,
    accent: "from-orange-50 via-white to-white",
  },
  {
    title: "Neurology",
    description: "Cutting-edge neuro care designed to protect what matters most.",
    icon: Brain,
    accent: "from-indigo-50 via-white to-white",
  },
  {
    title: "Orthopedics",
    description: "Movement-first therapies so you can return to the life you love.",
    icon: Bone,
    accent: "from-blue-50 via-white to-white",
  },
  {
    title: "Ophthalmology",
    description: "Vision programs that keep every glance sharp and confident.",
    icon: Eye,
    accent: "from-cyan-50 via-white to-white",
  },
  {
    title: "Pediatrics",
    description: "Whole-family pediatrics that listens closely to every milestone.",
    icon: Baby,
    accent: "from-lime-50 via-white to-white",
  },
];

export const aboutHighlights = [
  { value: "12+", label: "Years of integrative care" },
  { value: "150+", label: "Board-certified specialists" },
  { value: "98%", label: "Patient satisfaction" },
  { value: "45k", label: "Annual virtual consults" },
];

export const whyAccordion = [
  {
    title: "Expert Doctors",
    description:
      "A fellowship-trained collective that blends medical mastery with radically attentive listening on every visit.",
  },
  {
    title: "Patient Centered Care",
    description:
      "Treatment journeys co-created with you, balancing diagnostics, lifestyle adjustments, and integrative therapies.",
  },
  {
    title: "24/7 Support",
    description:
      "Nurses, care guides, and on-call physicians are reachable day or night through secure messaging and video.",
  },
];

export type Doctor = {
  name: string;
  specialty: string;
  consults: string;
  image: string;
  accent: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Emily Davis",
    specialty: "Endocrinologist",
    consults: "2.8k Consults",
    image: "/images/doctor-emily.jpg",
    accent: "from-[#1344fe] to-[#1b6bff]",
  },
  {
    name: "Dr. Alex Chen",
    specialty: "Pediatrician",
    consults: "3.1k Consults",
    image: "/images/doctor-alex.jpg",
    accent: "from-[#1d8cff] to-[#57b0ff]",
  },
  {
    name: "Dr. Maya Kapoor",
    specialty: "Dermatologist",
    consults: "1.9k Consults",
    image: "/images/doctor-maya.jpg",
    accent: "from-[#7c3aed] to-[#a855f7]",
  },
  {
    name: "Dr. Samuel Kim",
    specialty: "Cardiologist",
    consults: "4.5k Consults",
    image: "/images/doctor-samuel.jpg",
    accent: "from-[#ff623a] to-[#ff8c62]",
  },
  {
    name: "Dr. Cynthia Hale",
    specialty: "Neurologist",
    consults: "2.3k Consults",
    image: "/images/doctor-cynthia.jpg",
    accent: "from-[#00c6ff] to-[#0078ff]",
  },
];

export const testimonials = [
  {
    quote:
      "I never felt rushed. CureNast's team co-created a plan that finally aligned my medications, nutrition, and mindfulness in a way that sticks.",
    author: "Cynthia on Reiki",
    role: "Holistic Therapy Patient",
    rating: 4.9,
    image: "/images/patient-testimonial.jpg",
  },
  {
    quote:
      "Every visit is a masterclass in empathy. My care team stays on video until every question is answered with warmth.",
    author: "James Miller",
    role: "Cardiac Recovery Patient",
    rating: 4.8,
    image: "/images/patient-consult.jpg",
  },
  {
    quote:
      "I love how seamless the online consultations feel. Labs, refills, and follow-ups happen instantly.",
    author: "Sonia Patel",
    role: "Dermatology Patient",
    rating: 4.7,
    image: "/images/hero-doctor-stack.jpg",
  },
  {
    quote:
      "CureNast helps our corporate wellness teams activate preventative medicine with compassion and clear data dashboards.",
    author: "Lina Gomez",
    role: "Wellness Program Lead",
    rating: 4.7,
    image: "/images/hero-doctor-secondary.jpg",
  },
];

export const blogPosts = [
  {
    title: "Why Regular Health Checkups Really Matter",
    summary: "We decode preventive screenings and how they future-proof your wellness.",
    author: "Dr. Emily Davis",
    role: "Lead Wellness Strategist",
    image: "/images/blog-checkups.jpg",
  },
  {
    title: "Designing Calm Recovery Rituals at Home",
    summary: "Science-backed practices that soothe the nervous system post-treatment.",
    author: "Dr. Maya Kapoor",
    role: "Dermatology Lead",
    image: "/images/blog-recovery.jpg",
  },
  {
    title: "The Daily Habits Your Microbiome Loves",
    summary: "Simple nutrition tweaks that unlock more resilient immunity.",
    author: "Dr. Alex Chen",
    role: "Functional Medicine",
    image: "/images/blog-nutrition.jpg",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What services do you currently offer patients?",
    answer:
      "From integrative primary care to sub-specialties like cardiology, neurology, dermatology, pediatrics, and behavioral health—all accessible in-studio or virtually.",
  },
  {
    question: "Can I reschedule my appointment after booking?",
    answer:
      "Absolutely. Use the CureNast app or concierge chat to shift appointments up to 2 hours prior with no penalty.",
  },
  {
    question: "What payment methods do you currently accept?",
    answer:
      "All major credit cards, HSA/FSA, digital wallets, and direct insurance billing with instant verification.",
  },
  {
    question: "Do you offer emergency medical services too?",
    answer:
      "We partner with MediNest ER partners for escalations and can coordinate transport. Virtual triage is available 24/7.",
  },
  {
    question: "Do you accept all major health insurances?",
    answer:
      "Yes—CureNast is in-network with the top 25 insurers and provides transparent pricing for out-of-network guests.",
  },
  {
    question: "How long does a consultation usually take?",
    answer:
      "Initial visits average 45 minutes while follow-ups run 20 minutes. Every session includes recap notes and next steps.",
  },
];

export type ConsultationHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const consultationHighlights: ConsultationHighlight[] = [
  {
    title: "Live HD consultations",
    description: "Crystal-clear video rooms with collaborative notes and prescriptions inside one interface.",
    icon: Video,
  },
  {
    title: "Care concierge",
    description: "Dedicated guides coordinate labs, referrals, and follow-ups in under 12 hours.",
    icon: MessageCircle,
  },
  {
    title: "Secure sharing",
    description: "Encrypted reports and AI summaries keep everyone aligned without email chaos.",
    icon: ShieldCheck,
  },
];

export const ctaIcons: { label: string; icon: LucideIcon }[] = [
  { label: "Heart", icon: HeartPulse },
  { label: "Vision", icon: Eye },
  { label: "Neuro", icon: Brain },
  { label: "Ortho", icon: Bone },
  { label: "Support", icon: Users },
];

export const partnerBadge = {
  title: "MediNest",
  description: "Outstanding care for every patient",
  body:
    "We built MediNest with one promise: combine academic-level expertise with soothing hospitality so patients always feel held.",
  pill: "Outstanding Care",
  stats: [
    { label: "Avg. response", value: "<12m" },
    { label: "Care guides", value: "85" },
  ],
};
