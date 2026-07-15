import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Cloud,
  PenTool,
  Boxes,
  Users,
  GitBranch,
  Plug,
  ShieldCheck,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored enterprise software engineered around your exact workflows, scale, and compliance needs.',
    icon: Code2,
    features: ['Bespoke architecture', 'Domain-driven design', 'Legacy modernization'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'High-performance web platforms with Next.js, edge rendering, and pixel-perfect responsive UI.',
    icon: Globe,
    features: ['SSR / ISR', 'Edge functions', 'Core Web Vitals 90+'],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps with Flutter and React Native, shipped to App Store & Play.',
    icon: Smartphone,
    features: ['Flutter & React Native', 'Offline-first', 'Push & deep links'],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'LLM-powered assistants, RAG pipelines, computer vision, and predictive models wired into your stack.',
    icon: BrainCircuit,
    features: ['RAG & agents', 'Fine-tuning', 'MLOps pipelines'],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Cloud-native architecture on AWS, Azure, and GCP with autoscaling, IaC, and zero-downtime deploys.',
    icon: Cloud,
    features: ['Multi-cloud', 'Terraform IaC', 'Cost optimization'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Research-driven product design with design systems, prototyping, and accessibility baked in.',
    icon: PenTool,
    features: ['Design systems', 'WCAG 2.2 AA', 'Motion design'],
  },
  {
    slug: 'erp',
    title: 'ERP Solutions',
    description:
      'Unified ERP platforms connecting finance, HR, inventory, and operations in real time.',
    icon: Boxes,
    features: ['Modular ERP', 'Real-time ledger', 'Mobile approvals'],
  },
  {
    slug: 'crm',
    title: 'CRM Solutions',
    description:
      'CRM systems that unify sales, marketing, and support with automation and 360° customer views.',
    icon: Users,
    features: ['Pipeline automation', '360° profiles', 'Email & SMS'],
  },
  {
    slug: 'devops',
    title: 'DevOps',
    description:
      'CI/CD pipelines, Kubernetes orchestration, observability, and SRE practices for reliability.',
    icon: GitBranch,
    features: ['CI/CD pipelines', 'K8s orchestration', 'Observability'],
  },
  {
    slug: 'api-development',
    title: 'API Development',
    description:
      'Secure, documented, versioned REST and GraphQL APIs with rate limiting and developer portals.',
    icon: Plug,
    features: ['REST & GraphQL', 'OpenAPI docs', 'Rate limiting'],
  },
  {
    slug: 'qa-testing',
    title: 'QA Testing',
    description:
      'Automated and manual QA across unit, integration, E2E, performance, and security testing.',
    icon: ShieldCheck,
    features: ['E2E automation', 'Load testing', 'Security audits'],
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    description:
      'Strategic technology consulting on architecture, stack selection, and digital transformation.',
    icon: Lightbulb,
    features: ['Stack advisory', 'Architecture review', 'Roadmapping'],
  },
];
