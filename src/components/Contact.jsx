import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  return (
    <section id='contact' className='min-h-[50vh]'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
            Contact Me!
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 p-4'>
            <p className='font-bold text-3xl md:text-4xl lg:text-5xl'>
              Let's Chat.<br />
              Tell me About Your <br />
              Project
            </p>
          </div>
          <div className='flex-1 p-4'>
            <p className='font-bold text-xl md:text-2xl lg:text-3xl text-center'>Send Me a Message</p>
            <div className='flex flex-wrap justify-center lg:justify-around mt-10'>
              <SocialIcon network="whatsapp" url="" className='m-2' />
              <SocialIcon network="telegram" url="" className='m-2' />
              <SocialIcon network="youtube" url="" className='m-2' />
              <SocialIcon network="github" url="" className='m-2' />
              <SocialIcon network="instagram" url="" className='m-2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
