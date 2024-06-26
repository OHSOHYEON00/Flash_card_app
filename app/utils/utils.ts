import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

export const headerFont = localFont({
  src: '../../public/SieraLeone.woff',
  display: 'swap',
});

export const latinFont = Raleway({
  subsets: ['latin'],
  display: 'swap',
});
import { ProgressT, TagT } from './types';

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

export const ProgressSteps: Array<ProgressT> = [
  {
    step: `Requirements \n Analysis, \n Select Tech Stack \n &\n Project Setup`,
    info: 'To understand customer requirements and goals, I analyze project requirements and review the project history. \n I collaborated with senior members to estimate the technology stack considering project requirements, scale, and performance. \n Set up the project development environment, including project structure, deployment environment, and version control.',
    optional: true,
  },
  {
    step: 'Analysis UX',
    info: 'Collaborating with UX designers, I actively participated in UX design, considering user interface, usability, and development feasibility.\n This process aimed to make team members to develope their understanding of the service aligned and proactively identify features requiring technical research.',
  },
  {
    step: 'Technical Research \n & \nSchedule Estimation',
    info: 'Research and developed samples for parts seems vague to develop. Through sample development, I aimed to identify risks in advance and estimate overall task schedules with team members.',
  },
  {
    step: 'Development\n& \nCode Review',
    info: 'Development features and pages, conducting regular Code reviews with senior developers.\n I aimed to write clean, testable code, achieve pre-discussed goals for each projects (could be softskill and technical skills), and of course meet deadlines of each features.',
  },
  {
    step: 'Integration \n& \n Testing',
    info: 'Integrated and tested APIs in collaboration with Backend developers, resolving issues such as CORS.',
  },
  {
    step: 'Deployment',
    info: 'Using deployment pipelines, I deployed actual code to the production level while managing code using GitFlow policies, utilizing dev, stage, and production (release) steps.',
  },
  {
    step: 'Operation \n& \n Updating',
    info: 'Based on actual user interaction monitoring and feedback from users and stakeholders, I conducted service upgrades to enhance user experience and addressed issues.\n Adding new features and updating existing ones were done through sprints, involving UX analysis, development, integration, testing, and deployment.',
  },
];
