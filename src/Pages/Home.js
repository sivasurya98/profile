import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import ParticlesBachground from "../Components/ParticleBackground";
import { Projects, familyer } from "../json/Project";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onclickproject = (projectid) => {
    navigate("/Portfolio", { state: { projectid } });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div id="home" style={{ marginLeft: "2%" }}>
        <div className="main-text">
          <span>Hi, I'M SURYA PRAKASH D</span>
          <br />
          <span>WEB DEVELOPER</span>
        </div>
        <div className="child-text">
          {/* <span style={{ color: "red" }}>*</span> */}
          <span style={{ color: "white" }}>
            I specialize in ReactJs, React-native,Node Js, FireBase and Mysql.
          </span>
        </div>
      </div>
      <h2 style={{ textAlign: "center", color: "white" }}>
        Technologies Familiar With
      </h2>
      <div className="card">
        {familyer.map((image) => (
          <div
            key={image.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              style={{ alignSelf: "center" }}
              className="nodejs"
              src={image.image}
              alt="Node.js"
              width={100}
            />
            <span style={{ color: "white", textAlign: "center" }}>
              {image.title}
            </span>
          </div>
        ))}
      </div>
      <div id="portfolios" className="portfolio-section">
        <h2 style={{ textAlign: "center", color: "white" }}>My Projects</h2>
        <div className="portfolio-grid">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => {
                onclickproject(project.id);
              }}
            >
              <div style={{ width: "20%", margin: "0 auto" }}>
                <img src={project.image} className="project-image" />
              </div>
              <h3 style={{ color: "white" }}>{project.title}</h3>
              <p style={{ color: "white" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="testimonials" className="contact-section">
        <h2 style={{ textAlign: "center", color: "white" }}>Let's Connect</h2>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/surya-prakash-951853210"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", gap: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.52a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.45 20.45h-3.5v-5.9c0-1.41-.03-3.23-1.97-3.23s-2.27 1.54-2.27 3.13v6H9.2V9h3.35v1.56h.05c.47-.89 1.62-1.82 3.34-1.82 3.57 0 4.24 2.35 4.24 5.42v6.29z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dsurya1998@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", gap: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 4.01H2c-1.1 0-2 .9-2 2V18c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6.01c0-1.1-.9-2-2-2zm-1.2 2L12 10.99 3.2 6h17.6zM2 18V8l10 6 10-6v10H2z" />
            </svg>
            <span>Email</span>
          </a>
          <a
            // href="6381070371"
            style={{ display: "flex", gap: "10px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.6 10.8c1.2 2.5 3.1 4.5 5.6 5.6l1.9-1.9c.2-.2.5-.3.8-.2 1 .3 2.1.5 3.2.5.4 0 .7.3.7.7v3.3c0 .4-.3.8-.7.9-1.6.3-3.4.2-5-.3-2.7-1-5-3.1-6.3-5.6-1.3-2.6-1.7-5.4-1.2-8.1.1-.4.5-.7.9-.7h3.3c.4 0 .7.3.7.7 0 1.1.2 2.2.5 3.2.1.3 0 .6-.2.8l-1.9 1.9z" />
            </svg>
            <span>+91 6381070371</span>
          </a>
        </div>
      </div>

      <ParticlesBachground />
    </div>
  );
}

export default Home;
