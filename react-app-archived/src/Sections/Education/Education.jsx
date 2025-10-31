import * as React from 'react';
import Grid from '@mui/material/Grid';
import "./Education.css";
import CardSwap, { Card as SwapCard } from '../../components/CardSwap/CardSwap';
import CSCILogo from '../../img/RPI_Lockup_Sci_Md_White.png';
import HassLogo from '../../img/RPI_Lockup_HASS_Md_White (1).png';
import EconLogo from '../../img/RPI_Lockup_Economics_Md_White.png';



function Education() {
  return (
    <div className="Education" style={{
      height: "100vh",
      width: "100%",
      background: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
      <Grid container spacing={2} style={{ height: "100%" }}>
        <Grid item xs={12} md={4} style={{ padding: "2rem" }}>
          <div style={{width:"30vw", margin:"5vw"}}>
            <h1 style={{ color: "#DFDEDC", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
                Education
            </h1>
            <p style={{fontSize:"3vh", 
                font: "sans-serif", 
                color:"#A6A7A2", 
                textAlign:"left",
                textIndent:"3vw"}}>
                I’ve built a multidisciplinary foundation in Computer Science and Economics, 
                combining technical depth with a focus on human and market behavior. My studies 
                span machine learning, network science, and econometrics, and I’m now continuing 
                this path through graduate-level work in economic modeling and data analytics. 
                Across both fields, I aim to bridge technology and insight—using data-driven methods 
                to understand and solve real-world problems.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={8} style={{ position: "relative", height: "100%" }}>
            <div style={{
                    display: "flex",
                    justifyContent: "center", /* Centers horizontally */
                    alignItems: "center" /* Centers vertically */
            }}>
          <CardSwap
            width={"45vw"}
            height={"30vw"}
            cardDistance={60}
            verticalDistance={60}
            delay={7500}
            pauseOnHover={true}
            easing='elastic'
          >
            <SwapCard style={{ padding: "2rem", color: "#DFDEDC" }}>
                <img src={CSCILogo} alt="RPI School of Science"></img>
                <div style={{padding:"4rem"}}>
                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                        Rensselaer Polytechnic Institute
                        </h3>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        Bachelor of Science in Computer Science
                        </p>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        August 2022 - December 2025
                        </p>
                </div>
            </SwapCard>
            <SwapCard style={{ padding: "2rem", color: "#fff" }}>
                <img src={HassLogo} alt="RPI School of Hass"></img>
                <div style={{padding:"4rem"}}>
                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                        Rensselaer Polytechnic Institute
                        </h3>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        Bachelor of Science in Economics
                        </p>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        August 2022 - December 2025
                        </p>
                </div>
            </SwapCard>
            <SwapCard style={{ padding: "2rem", color: "#00ACAC" }}>
                <img src={EconLogo} alt="RPI Economcs"></img>
                <div style={{padding:"4rem"}}>
                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                        Rensselaer Polytechnic Institute
                        </h3>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        Master of Science in Economics
                        </p>
                    <p style={{fontSize:"3vh", fontFamily: "'Poppins', sans-serif", color:"#A6A7A2"}}>
                        January 2026 - December 2026
                        </p>
                </div>
            </SwapCard>
          </CardSwap>
          </div>
        </Grid>
      </Grid>
    </div>
    );
}
    


export default Education;