import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper"
import { images } from "../../constants"

import "./About.scss";


const About = () => {

const abouts = [
  {title: "Goldsmiths University", description: "BSc Computer Science", imgUrl: images.goldsmiths_uni, year:"2021-present"},
  {title: "Coventry College", description: "Access to Higher Education: Computing", imgUrl: images.cov_college, year:"2020-2021"},
  {title: "Udemy", description: "Web Development Bootcamp", imgUrl: images.udemy, year:"2022"},
];

  return (
    <div>
      <h2 className="head-text">
        Education
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
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
            <p className="p-text">
              {about.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, 'about');
