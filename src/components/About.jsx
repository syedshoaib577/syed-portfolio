import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate Software Development Engineer in Test (SDET) with hands-on experience building robust 
        JavaScript-based automation frameworks for Web and Mobile applications using tools like WebdriverIO and Cypress. 
        I've also worked with Java, Selenium and Katalon Studio for automating Web and Desktop applications.
        <br />
        <br />
        Over the years, I've developed a strong command of BDD frameworks like Cucumber and Mocha, 
        and I'm comfortable implementing Keyword-Driven, Data-Driven, and Hybrid test strategies 
        depending on project needs. I use GitHub and Jenkins regularly to streamline CI/CD workflows 
        and keep quality checks tightly integrated into the pipeline.
        <br />
        <br />
        With a solid grounding in QA fundamentals and a problem-solving mindset, I thrive on building solutions 
        that not only ensure reliability but also reduce manual effort and boost efficiency. I'm always learning, 
        always iterating — whether it's a new tech stack or a better way to collaborate with teams and stakeholders.
        <br />
        <br />
        Let's connect and build something great — together.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
