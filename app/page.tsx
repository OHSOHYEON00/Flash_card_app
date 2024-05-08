import React from 'react';
import Image from 'next/image';
import Toolbar from 'components/Toolbar';
import Header from 'components/ui/Header';
import Tag from 'components/ui/Tag';
import Process from 'components/Process';
import { headerFont, techStacks } from 'utils/utils';

function Greeting() {
  return (
    <div className=" bg-bg text-[#E6E6E6] h-full">
      <Toolbar />
      <section className="px-24 py-16 w-full">
        <article className="flex flex-row">
          <div>
            <span className={`${headerFont.className} text-5xl`}>
              Hi, I'm Sohyeon Oh.
            </span>
            <div>
              Hi there! I am a Frontend developer who has experienced with 2.5
              years, building web application from building to deploy, tests,
              and manage.
            </div>
            <a
              href={
                'https://drive.google.com/file/d/1ZRU4_PAQWV_k1sTUnwWTZgjlJa1er8mh/view?usp=sharing'
              }
              className="hover:underline-offset-4 hover:underline hover:decoration-wavy hover:decoration-red-600"
              target="_blank">
              {' '}
              {'->'} Check my CV (pdf){' '}
            </a>
          </div>
          <Image src={''} alt="profile" />
        </article>

        <article>
          <Header content="01. About me" />
          <div>
            Hi, 나는 오소현이고 웹을 통해 사람들에게 필요한 서비스를 만들고
            개선하는 것을 좋아한다. 요즘은 Next.js, PWA 관심이 많고 더 나은
            사용성을 위한 개선과 반응형에 관심이 많다. 2019년에 컴퓨터 과학 및
            공학 학사를 받았고 2021년부터 한국의 Software & Design Solutions
            에이전시 회사에서 R&D팀 프론트엔드 개발자로 근무했다. 주로
            클라이언트들의 비즈니스 개선 또는 문제해결을 위해 웹 서비스를
            제공하는 일을 했다. 또, R&D팀으로서 개발실 내의 기술적인 이슈
            (반복되는 업무)와 업무 프로세스 개선하는 일을 했다. 어떻게 하면 더
            원활히, 즐겁게 업무할 수 있을까를 항상 고민한다.
          </div>
        </article>

        <article>
          <Header content="Why did I come to abroad?" align={'right'} />
          <section className="flex flex-row">
            <Image src={''} alt={'activate_world'} />
            <div>
              나는 도전을 좋아하고 적응력이 뛰어난 사람이다. 해외에 나온 이유는
              다양한 문화를 가진 사람들과 함께 여러 문화가 공존하는 환경에서
              일하고 생각을 나누고 싶기 때문이다. 한국에서 일한 경험도 좋았지만
              더 넓은 세계에서 일하는 경험을 가지며 도전해보고 싶었다.
            </div>
          </section>
        </article>

        <article>
          <Header content="02. Work Experience" />
          <div>
            여기는 회사에 대한 설명이 들어가면 좋을 것 같고 - 회사에 대한 간략한
            설명은 이해를 돕기 위한 배경, 내가 어떤 역할을 했는지가 제일 중요할
            듯 회사 이름, 어떤 회사인지, 규모 (정말 간략하게) 개발실에서 R&D팀은
            어떤 역할을 하는 팀이었는지, 왜 만들어졌는지 주로 작업한
            프로젝트들은 어떤 문제를 해결하기 위한 프로젝트들이었는지
            프로젝트에서 나는 주로 어떤 역할을 했는지, 어떻게 일했는지는 여길
            클릭해줘 (아래 설명)
          </div>
          <div className="flex flex-wrap">
            {techStacks.map(tech => {
              return (
                <Tag key={tech.name} type={tech.type}>
                  {tech.name}
                </Tag>
              );
            })}
          </div>
        </article>

        <article>
          <Header content="03. How I worked" />
          <div>
            클라이언트에게 의뢰를 받아 프로젝트별로 업무가 진행되기 때문에 주로
            아래와 같은 사이클로 업무가 이뤄졌다. (마우스를 올리면 각 스텝별
            디테일을 확인할 수 있어)
          </div>
          <Process />
        </article>

        <article>
          <Header content="04. Projects" />
        </article>
      </section>
    </div>
  );
}

export default Greeting;
