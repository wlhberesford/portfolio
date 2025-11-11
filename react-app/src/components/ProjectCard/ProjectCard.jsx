import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, technologies, githubUrl, demoUrl, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "#000",
        border: "1px solid #464545",
        borderRadius: "1rem",
        padding: "2rem",
        height: "auto",
        minHeight: "400px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        borderColor: isHovered ? "#00ACAC" : "#464545",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(0, 172, 172, 0.1)" 
          : "0 4px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Image Section */}
      {imageUrl && (
        <div style={{
          height: "200px",
          width: "100%",
          marginBottom: "1.5rem",
          borderRadius: "0.5rem",
          overflow: "hidden",
          position: "relative"
        }}>
          <img 
            src={imageUrl} 
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
          />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered 
              ? "linear-gradient(45deg, rgba(0, 172, 172, 0.1), rgba(0, 0, 0, 0.3))"
              : "linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
            transition: "background 0.3s ease"
          }} />
        </div>
      )}

      {/* Content Section */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Title */}
        <h3 style={{
          fontSize: "1.75rem",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          color: "#DFDEDC",
          marginBottom: "1rem",
          lineHeight: "1.3",
          transition: "color 0.3s ease"
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
          color: "#A6A7A2",
          lineHeight: "1.6",
          marginBottom: "1.5rem",
          opacity: 0.9
        }}>
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem"
          }}>
            {technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  fontSize: "0.85rem",
                  fontFamily: "'Poppins', sans-serif",
                  padding: "0.25rem 0.75rem",
                  backgroundColor: isHovered ? "rgba(0, 172, 172, 0.15)" : "rgba(70, 69, 69, 0.3)",
                  color: isHovered ? "#00ACAC" : "#A6A7A2",
                  borderRadius: "1rem",
                  border: `1px solid ${isHovered ? "rgba(0, 172, 172, 0.3)" : "rgba(70, 69, 69, 0.5)"}`,
                  transition: "all 0.3s ease",
                  fontWeight: "500"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center"
        }}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.95rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "500",
                color: "#A6A7A2",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                border: "1px solid #464545",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#000";
                e.target.style.backgroundColor = "#DFDEDC";
                e.target.style.borderColor = "#DFDEDC";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#A6A7A2";
                e.target.style.backgroundColor = "transparent";
                e.target.style.borderColor = "#464545";
              }}
            >
              View Code
            </a>
          )}
          
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.95rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "500",
                color: "#000",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#00ACAC",
                border: "1px solid #00ACAC",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#00ACAC";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#00ACAC";
                e.target.style.color = "#000";
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;