export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: 'Projects Completed', value: 850, suffix: '+' },
  { label: 'Happy Clients', value: 420, suffix: '+' },
  { label: 'Countries Served', value: 38, suffix: '' },
  { label: 'Years Experience', value: 12, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
  { label: 'Developers', value: 180, suffix: '+' },
];

export const clientLogos = [
  'Nexora',
  'Quantix',
  'Vertexa',
  'Lumina',
  'Cobalt',
  'Helios',
  'Zenith',
  'Orbital',
  'Pinnacle',
  'Stratos',
  'Aurora',
  'Meridian',
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'Nexora',
    rating: 5,
    quote:
      'SpherTech rebuilt our platform from the ground up. Performance tripled and our roadmap accelerated by two quarters.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'VP Engineering',
    company: 'Quantix',
    rating: 5,
    quote:
      'The most professional engineering partner we have worked with. Clean code, clear communication, on-time delivery.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Amara Okafor',
    role: 'Product Lead',
    company: 'Vertexa',
    rating: 5,
    quote:
      'Their AI team delivered a RAG assistant that saved our support team 30 hours a week. Outstanding work.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Liam Becker',
    role: 'Founder & CEO',
    company: 'Lumina',
    rating: 5,
    quote:
      'From discovery to launch, SpherTech felt like an extension of our own team. The quality is simply world-class.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Digital',
    company: 'Helios',
    rating: 5,
    quote:
      'They migrated us to a cloud-native architecture with zero downtime. Costs dropped 40% while traffic doubled.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Marcus Webb',
    role: 'COO',
    company: 'Stratos',
    rating: 5,
    quote:
      'The ERP SpherTech built unified our entire operation. We finally have real-time visibility across every department.',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: 'What engagement models do you offer?',
    answer:
      'We offer fixed-price projects, time-and-materials, and dedicated team models. You can switch between them as your needs evolve.',
  },
  {
    question: 'How do you ensure code quality?',
    answer:
      'Every project follows our QA-first process: code reviews, automated unit/integration/E2E tests, CI/CD pipelines, and security audits before every release.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely. We integrate with your workflows, tools, and ceremonies, acting as a seamless extension of your in-house engineering org.',
  },
  {
    question: 'Do you sign NDAs and protect IP?',
    answer:
      'Yes. We sign mutual NDAs before any engagement and all intellectual property is transferred to you per the contract.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'An MVP typically takes 6–10 weeks, while full enterprise platforms run 4–9 months. We share a detailed roadmap after discovery.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Yes. We offer 24/7 monitoring, SLA-backed support, and continuous improvement retainers to keep your product healthy.',
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  { title: 'Nexora Analytics Cloud', category: 'Dashboards', description: 'Real-time BI dashboards for fintech.', image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Quantix Mobile Banking', category: 'Mobile Apps', description: 'Neobank app for 2M+ users.', image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Vertexa AI Assistant', category: 'AI Products', description: 'RAG-powered enterprise assistant.', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Lumina Commerce', category: 'Web Applications', description: 'Headless e-commerce platform.', image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Helios Cloud Console', category: 'SaaS', description: 'Multi-cloud management SaaS.', image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Stratos ERP', category: 'ERP', description: 'Unified ERP for logistics.', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Orbital Health', category: 'Enterprise Software', description: 'Hospital information system.', image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Pinnacle CRM', category: 'Enterprise Software', description: 'Sales & support CRM.', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { title: 'Aurora Learning', category: 'SaaS', description: 'EdTech LMS platform.', image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Services', href: '/services', mega: 'services' as const },
  { label: 'Products', href: '/products', mega: 'products' as const },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
