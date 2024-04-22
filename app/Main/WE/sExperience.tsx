import React from 'react';

interface TWorkExperience {
  company: string;
  contents: string[];
  id: string;
}

const temp: TWorkExperience[] = [
  {
    company: 'HNINE',
    contents: ['어쩌구 저쩌구', '어쩌구 저쩌구2', '어쩌구 저쩌구3'],
    id: '1',
  },
];

function Experience() {
  return (
    <>
      {temp.map((ex: TWorkExperience) => {
        return (
          <section key={ex.id}>
            <div className="title">{ex.company}</div>
            <ul className="contents list-inside list-disc">
              {ex.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}

export default Experience;
