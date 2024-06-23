// import React from 'react';

const Home = () => {
  return (
    <>
      <section id='Home' className="px-4 md:px-8 lg:px-12 xl:px-16">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-2xl text-center'>
              <span>Hi! Im Pradeep, a full-stack web developer.</span>
            </p>
             <span className="border-animation mt-4"></span>
            <p className='mt-4 text-lg text-center md:text-left'>
              Welcome to my portfolio website. I specialize in creating dynamic and engaging web applications using cutting-edge technologies. With a strong foundation in both frontend and backend development, I strive to build user-friendly and scalable solutions that exceed expectations.
            </p>
          </div>
          <div className='flex justify-center items-center md:justify-end'>
            <img className="max-w-full md:max-w-none h-auto" src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718064000&semt=sph" alt="Pradeep" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
