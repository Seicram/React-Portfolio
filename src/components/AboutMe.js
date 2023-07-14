import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`page-container about-me-container ${isFlipped ? 'flipped' : ''}`}>
      <section id="about">
      <br></br>
        <h1 style={{ textAlign: 'center' }}>About Me</h1>
        <div className="card" onClick={handleCardClick}>
          <div className="card-inner">
            <div className="card-front">
              <img src="../img/profilepic.png" alt="Developer Avatar" style={{ width: '250%', height: '100%' }} />
            </div>
            <div className="card-back">
              <p>UnIted States Marine Corps: 10/16/1995 - 10/15/1999</p>
              <p>United States Army: 06/16/2000 - 06/15/2003</p>
            </div>
          </div>
        </div>
        <p>I am a military veteran with a demonstrated track record of excellence in various roles. Throughout my military career, I have served in diverse capacities, including leadership positions that have honed my skills in decision-making, problem-solving, and strategic planning. I have been trained to work efficiently under pressure, adapt to changing situations, and prioritize tasks effectively.</p>
<p>Currently, as an IT Specialist at the US Environmental Protection Agency, I contribute to the organization's mission by providing crucial support in application software development and coding. I collaborate with cross-functional teams to design, develop, and implement innovative solutions that address complex environmental challenges. I take pride in my ability to analyze user requirements, translate them into technical specifications, and deliver robust software applications that meet the highest quality standards.</p>
<p>In addition to my practical experience, I hold certifications in IT that validate my expertise in specific areas. I am committed to continuous academic growth and stay abreast of emerging technologies and industry trends. This enables me to propose and implement cutting-edge solutions that enhance efficiency, security, and user experience.</p>
<p>My leadership skills have been consistently recognized, and I have a proven track record of managing programs and ensuring compliance in the healthcare sector. I have successfully coordinated and supervised projects, overseeing the implementation of industry regulations, and achieving operational excellence. My ability to motivate and inspire team members fosters a collaborative and high-performing work environment.</p>
<p>What sets me apart is my commitment to personal and professional development. I actively seek opportunities to expand my knowledge, refine my skills, and stay ahead of industry advancements. This dedication allows me to deliver innovative solutions, embrace new technologies, and adapt to evolving business landscapes.</p>
<p>Throughout my career, I have demonstrated strong problem-solving, communication, and technical skills. I thrive in analyzing complex challenges, identifying root causes, and developing effective strategies to overcome obstacles. I am adept at communicating technical concepts to non-technical stakeholders, bridging the gap between technology and business objectives.</p>
<p>In summary, my extensive experience, leadership abilities, and commitment to growth make me a valuable asset. I excel in delivering results, contributing to organizational success, and fostering a culture of continuous improvement. I am dedicated to making a positive impact and driving innovation in the IT field.</p>
      </section>
    </div>
  );
};

export default AboutMe;
