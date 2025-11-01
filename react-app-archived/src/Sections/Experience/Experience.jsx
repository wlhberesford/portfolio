import * as React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Grid from '@mui/material/Grid';
import '@splidejs/react-splide/css';
import './Experience.css';
import OptumLogo from '../../img/Optum_logo.png';

import CSCILogo from '../../img/RPI_Lockup_Sci_Md_White.png';
import HassLogo from '../../img/RPI_Lockup_HASS_Md_White (1).png';
import EconLogo from '../../img/RPI_Lockup_Economics_Md_White.png';
import GPFSLogo from '../../img/GPFSLogo.png';

function Experience() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <div className="Experience" style={{
      height: "100vh",
      width: "100vw",
      background: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
        <Grid container spacing={2} style={{ height: "100%" }}>
                <Grid item size={12} style={{ padding: "2rem" }}>
                    <h1 style={{ color: "#DFDEDC", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
                        Experience
                    </h1>
                </Grid>
                <Grid item size={12} style={{ padding: "2rem" }}>
                    <div style={{display: "grid", placeItems:"center"}}>

                    <Splide options={{
                            rewind: true,
                            width: "60vw",
                            gap: '1rem',
                            arrows: true,
                            pagination: true,
                            drag: true,
                            type: 'fade',
                            perPage: 1,
                            perMove: 1,
                            padding: { left: 0, right: 0 },
                            speed: 1000,
                            updateOnMove: true,
                            waitForTransition: true,
                            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                            height: '70vh'
                        }}
                        aria-label="Experience Slides">
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#000",
                                position: "relative",
                                overflow: "hidden",
                                padding: "5rem",
                                outline: "1px solid #DFDEDC",
                                borderRadius: "1rem"
                            }}>
                                <div style={{ height: "50%", display: "flex", alignContent: "center", alignItems: "center"}}>
                                    <img src={OptumLogo} alt="RPI School of Science" ></img>
                                </div>
                                <div style={{padding:"1rem"}}>
                                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                                        Software Engineer Intern
                                    </h3>
                                    <p style={{fontSize:"2.5vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        June 2024 - August 2024
                                    </p>
                                    <p style={{fontSize:"2vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        At Optum (UnitedHealth Group), I helped develop Hello Holly, an AI-powered calling system 
                                        projected to save over $1.7 million annually by automating provider outreach. I worked across 
                                        the full stack—building Python/Flask services, integrating GPT-4o and Azure Speech for natural 
                                        voice interactions, and deploying with Docker and Kubernetes. The project was successfully handed 
                                        off to a full-time team for production development.
                                    </p>
                                </div>

                            </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#000",
                                position: "relative",
                                overflow: "hidden",
                                padding: "5rem",
                                outline: "1px solid #DFDEDC",
                                borderRadius: "1rem"
                            }}>
                                <div style={{ height: "50%", display: "flex", alignContent: "center", alignItems: "center"}}>
                                    <img src={HassLogo} alt="RPI School of Science" ></img>
                                </div>
                                <div style={{ height:"50%", padding:"1rem"}}>
                                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                                        Undergraduate Researcher (Economics Department)
                                    </h3>
                                    <p style={{fontSize:"2.5vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        Febuary 2025 - December 2025
                                    </p>
                                    <p style={{fontSize:"2vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        As an Undergraduate Researcher in Economics, I study algorithmic collusion under Professor Heng Liu, 
                                        simulating duopoly markets to examine how AI-driven pricing can lead to collusive behavior. I develop 
                                        Python-based simulation models using NumPy and pandas to test pricing dynamics across market conditions. 
                                        The project advances understanding of AI’s impact on competition and regulation.
                                    </p>
                                </div>

                            </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#000",
                                position: "relative",
                                overflow: "hidden",
                                padding: "5rem",
                                outline: "1px solid #DFDEDC",
                                borderRadius: "1rem"
                            }}>
                                <div style={{ height: "50%", display: "flex", alignContent: "center", alignItems: "center"}}>
                                    <img src={OptumLogo} alt="RPI School of Science" ></img>
                                </div>
                                <div style={{ height:"50%", padding:"1rem"}}>

                                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                                        Software Engineer Intern
                                    </h3>
                                    <p style={{fontSize:"2.5vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        June 2025 - August 2025
                                    </p>
                                    <p style={{fontSize:"2vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        At Optum, I built a multi-agent AI DevOps assistant using GPT-4.1, LangChain, and RAG, integrated 
                                        with Splunk, ServiceNow, and Azure Cognitive Search to streamline troubleshooting. I designed a custom 
                                        Model Context Protocol (MCP) enabling dynamic agent routing and faster, context-aware responses—cutting
                                         data retrieval time by over 50%. The project was recognized as one of Optum’s top 10 intern projects 
                                         nationwide and presented to senior leadership.
                                    </p>
                                    </div>
                                </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#000",
                                position: "relative",
                                overflow: "hidden",
                                padding: "5rem",
                                outline: "1px solid #DFDEDC",
                                borderRadius: "1rem"
                            }}>
                                <div style={{ height: "50%", display: "flex", alignContent: "center", alignItems: "center"}}>
                                    <img src={CSCILogo} alt="RPI School of Science" ></img>
                                </div>
                                <div style={{ height: "50%", padding:"1rem"}}>
                                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                                        Undergraduate Researcher (Physics Department)
                                    </h3>
                                    <p style={{fontSize:"2.5vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        October 2025 - December 2025
                                    </p>
                                    <p style={{fontSize:"2vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        As a Research Assistant in the Physics Department, I developed a Python ETL pipeline to extract, clean, 
                                        and visualize oscilloscope data from Argonne National Laboratory experiments. The system automated data 
                                        ingestion from .npz and .npy formats and produced structured outputs for analysis. This work enabled 
                                        reproducible, large-scale examination of experimental signals and laid the foundation for ongoing research.
                                    </p>
                                </div>

                            </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#000",
                                position: "relative",
                                overflow: "hidden",
                                padding: "5rem",
                                outline: "1px solid #DFDEDC",
                                borderRadius: "1rem"
                            }}>
                                <div style={{ height: "50%", display: "grid", placeItems:"center"}}>
                                    <img src={GPFSLogo} alt="RPI School of Science" style={{height: "100%"}}></img>
                                </div>
                                <div style={{ height:"50%", padding:"1rem"}}>

                                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                                        Data Intern
                                    </h3>
                                    <p style={{fontSize:"2.5vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        January 2026 - May 2026
                                    </p>
                                    <p style={{fontSize:"2vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                                        Supporting the data team at a private equity services firm by building Power BI dashboards, 
                                        developing Python-based tools for financial reporting, and assisting in the migration from 
                                        legacy software to a modern data platform. This role blends technical development and financial 
                                        insight, helping streamline reporting workflows and strengthen data-driven decision-making 
                                        across the organization.
                                    </p>
                                    </div>
                                </div>
                    </SplideSlide>
                    <SplideSlide>
                            <div style={{
                                height: "70vh",
                                width: "100%",
                                background: "#464545",                                
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <h1>Slide 3</h1>

                            </div>
                    </SplideSlide>
                    </Splide>
                    </div>
                </Grid>
        </Grid>
    
    

        
      
    </div>
    );
}
    


export default Experience;