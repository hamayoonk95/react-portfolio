import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper"

import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good developer",
    imgURL: images.about_1,
  },
  {
    title: "Web Design",
    description: "I am a good developer",
    imgURL: images.about_2,
  },
  {
    title: "UI/UX",
    description: "I am a good developer",
    imgURL: images.about_3,
  },
  {
    title: "Full Stack",
    description: "I am a good developer",
    imgURL: images.about_4,
  },
];

const About = () => {
  return (
    <div>
      <h2 className="head-text">
        I know that <span>Good Design</span> means <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgURL} alt={about.title}></img>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, 'about');
