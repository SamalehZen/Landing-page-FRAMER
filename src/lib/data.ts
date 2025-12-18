import { Heart, Brain, Eye, Baby, Activity, Sparkles } from "lucide-react";

export const services = [
  { icon: Heart, title: "Cardiology", desc: "Expert care for your heart health with advanced diagnostics." },
  { icon: Sparkles, title: "Dermatology", desc: "Comprehensive skin care solutions for all ages." },
  { icon: Brain, title: "Neurology", desc: "Specialized treatment for neurological conditions." },
  { icon: Activity, title: "Orthopedics", desc: "Restoring movement and function to your daily life." },
  { icon: Eye, title: "Ophthalmology", desc: "Advanced eye care and vision correction services." },
  { icon: Baby, title: "Pediatrics", desc: "Compassionate healthcare for infants, children, and teens." },
];

export const doctors = [
  { id: 1, name: "Dr. Emily Davis", role: "Endocrinologist", consults: "1200+", imageColor: "bg-pink-100", image: "/images/dr-emily-davis.png" },
  { id: 2, name: "Dr. Alex Chen", role: "Pediatrician", consults: "850+", imageColor: "bg-blue-100", image: "/images/dr-samuel-kim.png" },
  { id: 3, name: "Dr. Sarah Johnson", role: "Cardiologist", consults: "2000+", imageColor: "bg-green-100", image: "/images/dr-ema-thomson.png" }, 
  { id: 4, name: "Dr. Michael Lee", role: "Neurologist", consults: "1500+", imageColor: "bg-purple-100", image: "/images/dr-samuel-kim.png" },
];

export const testimonials = [
  {
    id: 1,
    content: "The care I received at CureNast was exceptional. The doctors really took the time to listen to my concerns and provided a treatment plan that worked perfectly for me.",
    author: "Cynthia on Reiki",
    role: "Patient",
    rating: 5,
    image: "/images/patient1.jpg"
  },
  {
    id: 2,
    content: "Professional, clean, and incredibly supportive staff. I felt safe and well-cared for throughout my entire visit. Highly recommended!",
    author: "James Miller",
    role: "Patient",
    rating: 4.5,
    image: "/images/patient2.jpg"
  },
  {
    id: 3,
    content: "Booking an online consultation was so easy. Dr. Kim was thorough and explained everything clearly. Telehealth at its best.",
    author: "Sarah Jenkins",
    role: "Remote Patient",
    rating: 5,
    image: "/images/patient3.jpg"
  }
];

export const blogs = [
  {
    id: 1,
    title: "Why Regular Health Checkups Really Matter",
    category: "Health Tips",
    author: "Dr. Sarah Johnson",
    role: "Cardiologist",
    date: "Oct 12, 2024",
    image: "/images/blog1.jpg", 
    bgClass: "bg-blue-50"
  },
  {
    id: 2,
    title: "Understanding the Basics of Balanced Nutrition",
    category: "Lifestyle",
    author: "Dr. Emily Davis",
    role: "Nutritionist",
    date: "Oct 08, 2024",
    image: "/images/blog2.jpg",
    bgClass: "bg-orange-50"
  },
  {
    id: 3,
    title: "Mental Health Awareness in the Modern Age",
    category: "Mental Health",
    author: "Dr. Michael Lee",
    role: "Psychiatrist",
    date: "Sep 28, 2024",
    image: "/images/blog3.jpg",
    bgClass: "bg-purple-50"
  }
];

export const faqs = [
  {
    number: "/01",
    title: "What Services Do You Currently Offer Patients?",
    content: "We offer a comprehensive range of medical services including Cardiology, Dermatology, Neurology, Orthopedics, Ophthalmology, and Pediatrics. We also provide routine checkups and specialized treatments."
  },
  {
    number: "/02",
    title: "Can I Reschedule My Appointment After Booking?",
    content: "Yes, you can easily reschedule your appointment through our online portal or by contacting our support team at least 24 hours in advance."
  },
  {
    number: "/03",
    title: "What Payment Methods Do You Currently Accept?",
    content: "We accept all major credit/debit cards, bank transfers, and most major health insurance plans. Digital wallets are also supported."
  },
  {
    number: "/04",
    title: "Do You Offer Emergency Medical Services Too?",
    content: "Yes, we have a dedicated emergency department operating 24/7 to handle critical medical situations."
  },
  {
    number: "/05",
    title: "Do You Accept All Major Health Insurances?",
    content: "We partner with most major insurance providers. Please check our insurance page or contact our billing department for verification."
  },
  {
    number: "/06",
    title: "How Long Does a Consultation Usually Take?",
    content: "A standard consultation typically lasts between 20 to 30 minutes, depending o the complexity of your medical needs."
  }
];

export const whyChooseUsData = [
  {
    title: "Expert Doctors",
    content: "Our team consists of highly qualified and experienced medical professionals dedicated to providing top-notch healthcare services.",
  },
  {
    title: "Patient Centered Care",
    content: "We prioritize your comfort and well-being, tailoring our treatments to meet your specific needs and preferences.",
  },
  {
    title: "24/7 Support",
    content: "Medical emergencies can happen anytime. Our support team is available round the clock to assist you.",
  }
];
