import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-15 rounded-2xl xs:w-[495px] w-full'
  >
    <p className='text-white font-black text-[20px]'>"</p>

    <div className='mt-1 flex-grow'>
      <p className='text-white tracking-wider text-[14px]'>{testimonial}</p>

      <div className='mt-5 flex flex-col'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-0 text-secondary text-[13px]'>
            {designation} at {company}
          </p>
        </div>

        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What my peers say</p>
          <h2 className={styles.sectionHeadText}>Citations</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
