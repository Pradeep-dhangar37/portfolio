import React from 'react';

// Skill data array
const skillData = [
  {
    src: 'https://www.softwaredevelopersinc.com/images-2022/react-development.png',
    alt: 'React',
    label: 'React Js',
  },
  {
    src: 'https://www.svgrepo.com/show/376337/node-js.svg',
    alt: 'Node.js',
    label: 'Node.js',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
    alt: 'C',
    label: 'C',
  },
  {
    src: 'https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png',
    alt: 'C++',
    label: 'C++',
  },
  
  {
    src: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png',
    alt: 'Node.js',
    label: 'MongoDB',
  },
  {
    src: 'https://toppng.com/uploads/preview/mysql-logo-png-image-11660514413jvwkcjh4av.png',
    alt: 'C++',
    label: 'MySQL',
  },
  {
    src: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    alt: 'C++',
    label: 'Javascript',
  },
  {
    src: 'https://www.svgrepo.com/show/374144/typescript.svg',
    alt: 'C++',
    label: 'Typescript',
  },
  {
    src: 'https://toppng.com/uploads/preview/logo-google-firebase-logo-11563634544aqdbqci3yp.png',
    alt: 'C++',
    label: 'Firebase',
  },
];

export const Skills = () => {
  return (
    <section id='skills' className='min-h-screen bg-gray-100'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
            Skills
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {skillData.map((skill, index) => (
            <div
              key={index}
              className='skill flex flex-col items-center justify-between border border-gray-300 rounded-md p-6 text-center'
            >
              <img
                src={skill.src}
                alt={skill.alt} 
                width='80'
                height='80'
                className='mb-2'
              />
              <p className='text-lg font-semibold'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
