import React from 'react';
import { dateToString, getPeriod } from '../../scripts/utils';

interface TProject {
  title: string;
  start: Date;
  end: Date;
  desc?: string;
  img?: string;
  contents: string[];
}

const createDate = (date: string) => new Date(date);

const temp: TProject[] = [
  {
    title: 'VRTX, Community Web Service',
    start: createDate('2023-01'),
    end: createDate('2023-09'),
    desc: 'A content-based community for game users that aims to become the catalyst for the mass adoption of GameFi (Web3).',
    img: '',
    contents: [
      'Innovatively enhanced calendar page render speed by 74x, cutting down load times dramatically from 2.03s to just 0.027s.',
      'Crafted a Virtual Infinite Scroll component, boosting UX through smooth, endless content flow.',
      'Guided junior developers and managed taste with the PM as Frontend Project Lead for 3- months, streamlining team workflow and fast-tracking their adjustment.',
    ],
  },
  {
    title: 'IndoorMap Editor: Web-based Tool',
    desc: 'An Indoor positioning-based map editor aimed at enhancing location-based marketing strategies.',
    start: createDate('2022-07'),
    end: createDate('2022-12'),
    img: '',
    contents: [
      'Separated business logic and map(canvas) control for agility, using the Singleton pattern for easy updates and swift project adaptability.',
      'Pre-designed canvas control class and UI component interactions, ending development 2 weeks ahead of schedule, a 15% time reduction.',
      'Collaborated closely with senior developers in code reviews, leading to a marked improvement in project efficiency and adherence to best coding practices.',
    ],
  },
  {
    title: 'National Museum of Korea, BackOffice',
    desc: 'Building a Unified Platform for education services across the National Museum of Korea and Its 13 branches aiming to offer a comprehensive service.',
    start: createDate('2021-12'),
    end: createDate('2022-06'),
    img: '',
    contents: [
      'Effectively navigated UX planning delays, utilizing agile practices and daily stand-ups to prioritize tasks and ensure on-time delivery of core project parts.',
      'Developed reusable React UI components, accelerating the development schedule by 20% through increased efficiency in building duplicate pages (tables, form).',
      'Collaborated with UX and Backend teams to identify and resolve issues, significantly reducing miscommunications by effectively documenting action points in JIRA tickets.',
    ],
  },
];

const Contents = ({ contents }: { contents: string[] }) => {
  return (
    <ul className="list-inside list-disc">
      {contents.map(content => (
        <li>{content}</li>
      ))}
    </ul>
  );
};

function Project() {
  return (
    <>
      {temp.map(project => (
        <div className="mt-8 mb-8">
          <section>
            <div>
              <div className="title-project">{project.title}</div>
              <div>
                {dateToString(project.start)} - {dateToString(project.end)}{' '}
                <span>{getPeriod(project.start, project.end)}</span>
              </div>
            </div>
            <div className="desc-project">{project.desc}</div>
          </section>

          <Contents contents={project.contents} />
        </div>
      ))}
    </>
  );
}

export default Project;
