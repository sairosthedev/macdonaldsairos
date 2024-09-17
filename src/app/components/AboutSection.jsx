import React from 'react'
import Image from 'next/image';


const AboutSection = () => {
  return (
    <section className='text-white' id="about"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/hero.png" width={500} height={500}
         className="rounded-full object cover" />
         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
         <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>  
         <p className="text-base lg:text-lg">
         I am a full stack web developer who loves building interactive and responsive web applications. My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
         </p>

         </div>
    </div>
    </section>
  )
};

export default AboutSection;