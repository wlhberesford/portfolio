import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BigDataBowl from '../../img/BigDataBowl.jpg';
import RSEi from '../../img/Logo_Orange.png';
import DependNetwork from '../../img/texas_depend_post.png';
import TwitterLogo from '../../img/Twitter-Logo.png';
import HatTrick from '../../img/HatTrickDemo.jpg';

/*
{
      title: 'Algorithm Visualizer',
      description:
        'An interactive web application that visualizes common sorting and pathfinding algorithms.',
      technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
      githubUrl: 'https://github.com/yourusername/algorithm-visualizer',
      demoUrl: 'https://algorithm-viz-demo.netlify.app',
      imageUrl:
        'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=2070',
    },
*/

function Projects() {
  const projects = [
    {
      title: 'Kaggle NFL Big Data Bowl 2026',
      description:
        'Building an LSTM model to predict player location during passing plays after the ball is thrown',
      technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
      githubUrl: 'https://github.com/yourusername/algorithm-visualizer',
      demoUrl: 'https://algorithm-viz-demo.netlify.app',
      imageUrl:
        BigDataBowl,
    },
    {
      title: 'Alumni Networking Interface',
      description:
        'Managing a project with Proffessional fraternity to create a search interface for alumni and their contact information',
      technologies: ['React', 'Firebase', 'TailwindCSS'],
      githubUrl: 'https://github.com/yourusername/budget-planner',
      demoUrl: 'https://student-budget-planner.netlify.app',
      imageUrl:
        RSEi,
    },
    {
      title: 'Sports Betting Arbitrage ETL',
      description:
        'ETL pipline that takes in real time sports betting data and outputs Arbitrage Opportunities',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/ecommerce-analytics',
      demoUrl: 'https://demo-ecommerce-analytics.netlify.app',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'Cookie Index',
      description:
        'Dashboard for new economic inicator that realates the price of a cookie and average wage as a measure of general well being',
      technologies: ['Python', 'FRED data api', 'Pyplot'],
      githubUrl: 'https://github.com/yourusername/economic-analyzer',
      imageUrl:
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2070',
    },
    {
      title: 'U.S. Mobility Network Model',
      description:
        'Modeled U.S. mobility data with a Behavioral Dependency Network, achieving higher accuracy than the benchmark Gravity model',
      technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
      githubUrl: 'https://github.com/yourusername/algorithm-visualizer',
      demoUrl: 'https://algorithm-viz-demo.netlify.app',
      imageUrl:
        DependNetwork,
    },
    {
      title: 'Tweet Influence Prediction',
      description:
        'Used an iterative feature regression model to analyse it tweet based or profile based features were better predictors of a tweets virality',
      technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
      githubUrl: 'https://github.com/yourusername/algorithm-visualizer',
      demoUrl: 'https://algorithm-viz-demo.netlify.app',
      imageUrl:
        TwitterLogo,
    },
    {
      title: 'Hat Trick',
      description:
        'Submission for Future Business Leaders of America Competition, I built Soccer version of frogger which was presented at the national level',
      technologies: ['Python', 'Pygame', 'Photoshop'],
      githubUrl: 'https://github.com/yourusername/algorithm-visualizer',
      demoUrl: 'https://youtu.be/u7woge-8GIk',
      imageUrl:
      HatTrick
    },
  ];

  return (
    <div className="Projects" style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#000000",
      padding: "4rem 2rem",
      margin: "0 auto",
      
    }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item size={12} style={{ marginBottom: "3rem" }}>
          <h1 style={{ 
            color: "#DFDEDC", 
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            margin: 0
          }}>
            Projects
          </h1>
        </Grid>
        
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <div style={{
              width: '30vw'
            }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                imageUrl={project.imageUrl}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;