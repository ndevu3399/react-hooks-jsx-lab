// src/components/About.js
import React from 'react';
import { image } from '../data/data'; // Ensure this is correctly imported

const About = () => (
  <div id="about" data-testid="about">
    <h2>About Me</h2>
    <p>Some information about me</p>
    <img src={image} alt="I made this" />
  </div>
);

export default About;
