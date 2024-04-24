import { TagT } from './types';

export const techStacks: Array<{ name: string; type: TagT }> = [
  { name: 'JavaScript', type: 'tech' },
  { name: 'TypeScript', type: 'tech' },
  { name: 'React.js', type: 'tech' },
  { name: 'Next.js', type: 'tech' },
  { name: 'HTML', type: 'tech' },
  { name: 'CSS', type: 'tech' },
  { name: 'Redux', type: 'tech' },
  { name: 'Rtk-query', type: 'tech' },
  { name: 'React-query', type: 'tech' },
  { name: 'Zustand', type: 'tech' },
  { name: 'Sentry', type: 'tech' },
  { name: 'Git', type: 'tech' },
  { name: 'Agile', type: 'soft' },
  { name: 'JIRA', type: 'soft' },
  { name: 'Stands-up meeting', type: 'soft' },
  { name: 'Code Reviews', type: 'soft' },
  { name: 'Confluence', type: 'soft' },
];

export const ProgressSteps: Array<{
  step: string;
  info?: string;
  optional?: boolean;
}> = [
  {
    step: 'Requirement Gathering and Analysis and Tech Stack Selection',
    info: 'To understand customer requirements and goals, I analyze project requirements and review the project history. \n I collaborated with senior members to estimate the technology stack considering project requirements, scale, and performance.',
    optional: true,
  },
  {
    step: 'Project Setup',
    info: 'Set up the project development environment, including project structure, deployment environment, and version control.',
  },
  {
    step: 'Analysis UX',
    info: 'Collaborating with UX designers, I actively participated in UX design, considering user interface, usability, and development feasibility.\n This process aimed to make team members to develope their understanding of the service aligned and proactively identify features requiring technical research.',
  },
  {
    step: 'Technical Research and Schedule Estimation',
    info: 'Research and developed samples for parts seems vague to develop. Through sample development, I aimed to identify risks in advance and estimate overall task schedules with team members.',
  },
  {
    step: 'Development and Code Review',
    info: 'Development features and pages, conducting regular Code reviews with senior developers.\n I aimed to write clean, testable code, achieve pre-discussed goals for each projects (could be softskill and technical skills), and of course meet deadlines of each features.',
  },
  {
    step: 'Integration and Testing',
    info: 'Integrated and tested APIs in collaboration with Backend developers, resolving issues such as CORS.',
  },
  {
    step: 'Post-Deployment Testing and Monitoring',
    info: '',
  },
  {
    step: 'Deployment',
    info: 'Using deployment pipelines, I deployed actual code to the production level while managing code using GitFlow policies, utilizing dev, stage, and production (release) steps.',
  },
  {
    step: 'Operation and Updating',
    info: 'Based on actual user interaction monitoring and feedback from users and stakeholders, I conducted service upgrades to enhance user experience and addressed issues.\n Adding new features and updating existing ones were done through sprints, involving UX analysis, development, integration, testing, and deployment.',
    optional: true,
  },
];
