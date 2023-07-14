import React from 'react';
import Header from './Header';

const LandingPage = () => {
  return (
    <div className="page-container">
      <Header style={{ textAlign: 'center' }}/>
      <br></br>
      <h1 style={{ textAlign: 'center' }}>Welcome to My Portfolio</h1>
      <p>Feel free to explore and delve into the world of my projects, experiences, and skills. Within these pages, you will discover a glimpse into my journey as a professional, showcasing my passion for innovation and dedication to excellence.

<p>As you navigate through the various sections, you will find detailed information about my background, expertise, and achievements. From my educational qualifications to my professional experiences, I have honed my skills in various domains, including software development, application design, and project management.</p>
<p>But it doesn't stop there. Beyond the technical realm, you will uncover the essence of who I am as an individual. As a creative thinker and problem solver, I strive to approach each project with a fresh perspective, delivering solutions that are not only functional but also aesthetically pleasing and user-friendly.</p>
<p>So go ahead, immerse yourself in the captivating world of my projects. From web development to software applications, each project has been meticulously crafted, showcasing my ability to transform ideas into reality. Feel free to reach out to me if you have any questions or would like to discuss potential collaborations. I'm excited to connect and share my passion for innovation with you.</p>
Thank you for visiting my portfolio, and I hope you enjoy your exploration!</p>
      
      {/* Add animated characters */}
      <div className="animated-character" style={{ top: '100px', left: '100px' }}>
        {/* Add your animated character content */}
      </div>
      <div className="animated-character" style={{ top: '200px', left: '200px' }}>
        {/* Add your animated character content */}
      </div>
      
      {/* Add more animated characters as needed */}
    </div>
  );
};

export default LandingPage;
