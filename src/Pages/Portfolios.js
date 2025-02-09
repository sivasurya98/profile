import React from "react";
import { useLocation } from "react-router-dom";
import ParticlesBackground from "../Components/ParticleBackground"; // Corrected component name
import { Projects } from "../json/Project";
import "../Styles/Portfolios.css";

function Portfolios() {
  const location = useLocation();
  const { projectid } = location.state;

  const projectdata = Projects.find((project) => project.id === projectid);

  if (!projectdata) {
    return <div>Project not found</div>;
  }

  const {
    title,
    description,
    longdescription,
    techone,
    techtwo,
    screenshot,
    Link,
  } = projectdata;

  return (
    <>
      {title === "Netflix Clone" && (
        <div className="portfolio-container">
          <div className="portfolio-content">
            <div className="portfolio-header">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="portfolio-details">
              <div className="portfolio-image">
                <img src={screenshot} alt={title} />
              </div>
              <div className="portfolio-info">
                <h2>About the Project</h2>
                <p>{longdescription}</p>
                <div className="tech-stack">
                  <h3>Tech Stack</h3>
                  <ul>
                    <li>{techone}</li>
                    <li>{techtwo}</li>
                    <div>
                      <a
                        className="project-link"
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tap to view This
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {title === "Product dashboard" && (
        <div className="portfolio-container-product">
          <div className="portfolio-content-content">
            <div className="portfolio-header-product">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="portfolio-details">
              <div className="portfolio-image">
                <img src={screenshot} alt={title} />
              </div>
              <div className="portfolio-info-product">
                <h2>About the Project</h2>
                <p>{longdescription}</p>
                <div className="tech-stack-product">
                  <h3>Tech Stack</h3>
                  <ul>
                    <li>{techone}</li>
                    <li>{techtwo}</li>
                    <div>
                      <a
                        className="project-two-link"
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tap to view This
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {title === "GitHub Explorer" && (
        <div className="portfolio-container-product">
          <div className="portfolio-content-content">
            <div className="portfolio-header-product">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="portfolio-details-github">
              <div className="portfolio-image">
                <img src={screenshot} alt={title} />
              </div>
              <div className="portfolio-info-product">
                <h2>About the Project</h2>
                <p>{longdescription}</p>
                <div className="tech-stack-product">
                  <h3>Tech Stack</h3>
                  <ul>
                    <li>{techone}</li>
                    <li>{techtwo}</li>
                    <div>
                      <a
                        className="project-two-link"
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tap to view This
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ParticlesBackground />
    </>
  );
}

export default Portfolios;
