export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Requirement Analysis', description: 'We deep-dive into your goals, users, and constraints to define a crisp scope.' },
  { step: '02', title: 'Research', description: 'Market, competitor, and technical research to de-risk every decision.' },
  { step: '03', title: 'UI/UX Design', description: 'Wireframes, prototypes, and design systems validated with real users.' },
  { step: '04', title: 'Architecture', description: 'Scalable, secure architecture with diagrams, data models, and APIs.' },
  { step: '05', title: 'Development', description: 'Clean, tested code shipped in weekly agile sprints.' },
  { step: '06', title: 'Testing', description: 'Automated unit, integration, E2E, performance, and security testing.' },
  { step: '07', title: 'Deployment', description: 'CI/CD pipelines with zero-downtime, blue-green releases.' },
  { step: '08', title: 'Maintenance', description: 'Monitoring, updates, and 24/7 support to keep you running.' },
];
