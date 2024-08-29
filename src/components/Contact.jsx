import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const slideIn = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <section id='contact' className='min-h-[50vh]' ref={ref}>
      <div className='container mx-auto px-4 py-16'>
        <animated.div style={slideIn} className='text-center mb-12'>
          <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 underline'>
            Contact Me!
          </h2>
        </animated.div>
        <div className='flex flex-col lg:flex-row'>
          <animated.div style={slideIn} className='flex-1 p-4'>
            <p className='font-bold text-3xl md:text-4xl lg:text-5xl'>
              Let's Chat.<br />
              Tell me About Your <br />
              Project
            </p>
          </animated.div>
          <animated.div style={slideIn} className='flex-1 p-4'>
            <p className='font-bold text-xl md:text-2xl lg:text-3xl text-center'>Send Me a Message</p>
            <div className='flex flex-wrap justify-center lg:justify-around mt-10'>
              <SocialIcon network="whatsapp" url="" className='m-2' />
              <SocialIcon network="telegram" url="" className='m-2' />
              <SocialIcon network="youtube" url="" className='m-2' />
              <SocialIcon network="github" url="" className='m-2' />
              <SocialIcon network="instagram" url="" className='m-2' />
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};
