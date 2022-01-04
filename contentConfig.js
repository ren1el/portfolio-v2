import clayformee from './public/images/projects/clayformee.png'
import animalActions from './public/images/projects/animal-actions.png'
import zyllabi from './public/images/projects/zyllabi.png'

export const socialIconLinks = [
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/renielocampo',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ren1el',
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com/ren1el',
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/ren1el',
  },
]

export const featuredProjects = [
  {
    title: 'Clayformee',
    description: `A mobile-first e-commerce website for a client’s clay earring business. Faced with a number
        of design challenges, every decision came together to create an overall chic and pleasant
        shopping page.`,
    imgSrc: clayformee,
    iconLinks: [
      {
        name: 'Permalink',
        link: 'https://clayformee.gtsb.io/',
      },
    ],
  },
  {
    title: 'Animal Actions',
    description: `An Alexa skill that asks kids to follow a narrative story and answer questions using their
        speech input. I worked with a team to iteratively develop this application and research ways
        to design voice user interfaces for children, refactoring and adding new features along the
        way.`,
    imgSrc: animalActions,
  },
  {
    title: 'Zyllabi',
    description: `A full stack web application that crowd-sources and organizes course syllabi from UC Irvine.
        I was particularly interested in API and backend design, and hoping overall to alleviate the
        stress of signing up for classes.`,
    imgSrc: zyllabi,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/zyllabi/',
      },
      {
        name: 'Permalink',
        link: 'https://zyllabi.herokuapp.com/',
      },
    ],
  },
]

export const otherProjects = [
  {
    type: 'Side Project',
    title: 'Personal Website V1',
    description: `The first iteration of my personal website built with Gatsby for the first time. Makes use
        of HTML5 semantic elements as well as CSS3 flexbox layouts, media queries, and animations.`,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/ren1el.github.io/',
      },
      {
        name: 'Permalink',
        link: 'https://ren1el.github.io/',
      },
    ],
  },
  {
    type: 'Class Project',
    title: 'Sleep Tracker',
    description: `A minimal, hybrid iOS/Android application that allows users to log overnight sleep and their
        “sleepiness” throughout the day. Built with Ionic.`,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/sleeptracker/',
      },
    ],
  },
  {
    type: 'Side Project',
    title: 'E-commerce Landing Page Concept',
    description: `A responsive e-commerce landing page that mimics online fashion product websites, exercising
        my ability to use pure HTML/CSS/JavaScript to apply professional design qualities.`,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/ecommerce-landing-page/',
      },
      {
        name: 'Permalink',
        link: 'https://ren1el.github.io/ecommerce-landing-page/',
      },
    ],
  },
  {
    type: 'Interview Project',
    title: 'Dogs.ai',
    description: `Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
        consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque.`,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/dogs-ai/',
      },
    ],
  },
  {
    type: 'Interview Project',
    title: 'Calendar.ai',
    description: `Donec in ultrices augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum at nibh quis libero vulputate varius.`,
    iconLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ren1el/calendar-ai/',
      },
    ],
  },
]

export const education = [
  {
    heading: 'University of California, Irvine',
    description: 'B.S. Computer Science with a specialization in systems and software',
  },
]

export const experience = [
  {
    heading: 'Multi Media, LLC',
    subheading: 'Software Engineer',
    description: `Etiam vitae ipsum congue, lobortis massa a, suscipit metus. Duis auctor mattis felis
        quis ultrices. Suspendisse eu laoreet nunc. Proin orci urna, congue ac turpis
        fermentum, porta suscipit risus.`,
  },
  {
    heading: 'UC Irvine UROP',
    subheading: 'Research Assistant',
    description: `Donec in ultrices augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum at nibh quis libero vulputate varius. Nulla condimentum felis sit amet erat
        viverra, eu scelerisque tellus fermentum.`,
  },
  {
    heading: 'UC Irvine ICS',
    subheading: 'Python Tutor',
    description: `Mauris gravida pharetra metus, quis porttitor quam luctus et. Cras vestibulum
        consectetur turpis a venenatis. Vivamus et placerat diam, et mollis neque. Donec diam
        eros, porta efficitur sem ac, elementum lobortis massa.`,
  },
]

export const skills = [
  {
    title: 'Languages',
    skillList: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skillList: ['React', 'Redux', 'Gatsby', 'Next.js', 'Django', 'Express', 'Bootstrap'],
  },
  {
    title: 'Tools',
    skillList: ['AWS', 'MongoDB', 'Git', 'Node'],
  },
  {
    title: 'Design',
    skillList: ['Photoshop', 'Figma', 'Adobe XD'],
  },
]
