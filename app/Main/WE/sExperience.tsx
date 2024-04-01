import React from 'react';

interface TWorkExperience {
  company: string;
  contents: string[];
}

const temp: TWorkExperience[] = [
  {
    company: 'HNINE',
    contents: ['어쩌구 저쩌구', '어쩌구 저쩌구2', '어쩌구 저쩌구3'],
  },
];

function Experience() {
  return (
    <>
      {temp.map((ex: TWorkExperience) => {
        return (
          <section>
            <div className="title">{ex.company}</div>
            <ul className="contents list-inside list-disc">
              {ex.contents.map(content => (
                <li>{content}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}

export default Experience;
