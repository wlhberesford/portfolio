import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import OptumLogo from '../../img/Optum_logo.png';


const sampleProjects = [
    {
        image: OptumLogo,
        title: "Bettor Insights",
        desc: "Sports betting ETL pipeline that reads live betting odds to uncover arbitrage opportunities.",
        skills: ['Python', 'Supabase', 'Numpy', 'Pandas', 'SQL']
    },
    {
        image: OptumLogo,
        title: "E-Commerce Dashboard",
        desc: "Real-time analytics dashboard for tracking sales metrics and customer behavior patterns.",
        skills: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express']
    },
    {
        image: OptumLogo,
        title: "Task Management System",
        desc: "Collaborative project management tool with real-time updates and team notifications.",
        skills: ['TypeScript', 'Firebase', 'React', 'Material-UI', 'Redux']
    },
    {
        image: OptumLogo,
        title: "Weather Forecast App",
        desc: "Mobile-responsive weather application with 7-day forecasts and location-based alerts.",
        skills: ['JavaScript', 'REST API', 'CSS3', 'HTML5', 'OpenWeather']
    },
    {
        image: OptumLogo,
        title: "AI Chatbot Assistant",
        desc: "Natural language processing chatbot for customer support automation and FAQs.",
        skills: ['Python', 'TensorFlow', 'Flask', 'NLP', 'Docker']
    },
    {
        image: OptumLogo,
        title: "Portfolio Generator",
        desc: "Automated portfolio website builder with customizable themes and responsive layouts.",
        skills: ['Next.js', 'Tailwind', 'GraphQL', 'Vercel', 'Markdown']
    }
];


function Projects() {
  return (
    <div className="Project" style={{
      height: "100%",
      width: "100%",
      background: "#000",
      padding: "10rem",
      zIndex: 100,
      display: "flex",
      paddingLeft: "10vw",
      paddingRight: "10vw"

    }}>
        <Grid>
            {sampleProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    
                        <ProjectCard 
                            image={project.image} 
                            title={project.title} 
                            desc={project.desc} 
                            skills={project.skills}
                        />
                </Grid>
            ))}
        </Grid>
    </div>
  );
}

export default Projects;