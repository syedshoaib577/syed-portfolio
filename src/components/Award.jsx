import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { awards } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AwardCard = ({ index, awardTitle, orgName, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[24px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary overflow-hidden rounded-[24px] py-5 px-4 min-h-[320px] flex items-center justify-center flex-col'
      >
        <h4 className='text-white text-[13px] font-tilt text-center'>
          {orgName}
        </h4>

        <img
          src={icon}
          alt='award_image'
          className='w-56 h-56 object-cover overflow-hidden flex items-center justify-center rounded-2xl'
        />

        <p className='mt-2 text-white text-[14px] font-bold text-center'>
          {awardTitle}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Award = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Awards</p>
        <h2 className={styles.sectionHeadText}>Rewards & Recognition.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      These recognitions are a testament to the dedication, innovation and impact I've delivered across various projects. 
      Each award reflects not just a milestone, but the trust and collaboration of peers, mentors and stakeholders.
      <br /> 
      <br /> 
      I am grateful to have such a wonderful community of friends and colleagues. I remain committed to continuous learning, driving excellence and making meaningful contributions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {awards.map((award, index) => (
          <AwardCard key={award.title} index={index} {...award} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Award, "award");
