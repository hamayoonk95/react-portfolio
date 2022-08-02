import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap} from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  
  const skills = [
    {name: "HTML", imgURL: images.htmlIcon},
    {name: "CSS", imgURL: images.cssIcon},
    {name: "JavaScript", imgURL: images.jsIcon},
    {name: "React", imgURL: images.react_icon}, 
    {name: "Bootstrap", imgURL: images.bootstrap_icon},
    {name: "Sass", imgURL: images.sassIcon}
  ];

  const experiences = [
    {name: "Creative Alliance",title: "Website Tester", desc: "Tested their website for responsiveness issues", year: "2022"},
    {name: "Zeenat Restaurant",title: "Maitre D", desc: "Managed front of the restaurant", year: "2021"},
  ]

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
    
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src= {skill.imgURL} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={experience.name}
                        key={experience.name}
                      >
                        <h4 className="bold-text">{experience.name}</h4>
                        <p className="p-text">{experience.title}</p>
                      </motion.div>
                      <ReactTooltip
                        id={experience.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {experience.desc}
                      </ReactTooltip>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}


export default AppWrap(Skills, 'skills');