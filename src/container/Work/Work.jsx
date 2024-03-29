import React from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Work.scss';

const Work = () => {

  const works = [
    { 
      name: 'Paint App', 
      title: 'Paint App', 
      description: 'Replica of MS-Paint made with JavaScript using OOP',
      imgURL: images.paintImg, 
      projectLink: 'https://hamayoonk95.github.io/Paint-App/', codeLink: 'https://github.com/hamayoonk95/Paint-App', 
    },
    { 
      name: '2D Game', 
      title: 'JavaScript 2D Game', 
      description: '2D game made in canvas with JS using P5JS library',
      imgURL: images.gameImg, 
      projectLink: 'https://hamayoonk95.github.io/JavaScript-2D-Game/', codeLink: 'https://github.com/hamayoonk95/JavaScript-2D-Game', 
    },
    { 
      name: 'Cell Activity', 
      title: 'Cell Activity', 
      description: 'Interactive model of human cells and viruses in a 3d space',
      imgURL: images.cellsImg, 
      projectLink: '', 
      codeLink: 'https://github.com/hamayoonk95/Cell-Activity', 
    },
  ]

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> section</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgURL} alt={work.name} />
            
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{ scale: [1, 0.9]}}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}


export default AppWrap(Work, 'work');