import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>CollegeTips.in</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Implemented responsive UI using HTML, CSS, JavaScript, and React improving accessibility for 500+ users. Improved accessibility and UX through design collaboration. Contributed to a digital literacy platform for non-technical users
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>ShadowFox</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered an interactive personal portfolio website. Enhanced skills in responsive design, CSS animations, and debugging
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open to Work</h4>
                <h5>Looking for new opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
             Full Stack Developer with strong fundamentals in Data Structures, OOP, and Databases. Experienced in building responsive web applications using React.js, Node.js, MongoDB, and Django, with a focus on clean UI and efficient backend logic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
