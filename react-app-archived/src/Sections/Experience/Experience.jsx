import * as React from 'react';
import Grid from '@mui/material/Grid';
import SpotlightCard from '../../components/SpotlightCard/SpotlightCard';


function Experience() {
  return (
    <div className="Education" style={{
      height: "100vh",
      width: "100%",
      background: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
        <Grid container spacing={2}>
            <Grid size={12}>
                <h1>Experience</h1>
            </Grid>
            <Grid size={4}>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgb(0,172,172)">
                    Balls
                </SpotlightCard>
                
            </Grid>
            <Grid size={4}>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgb(0,172,172)">
                    Balls
                </SpotlightCard>
                
            </Grid>
            <Grid size={4}>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgb(0,172,172)">
                    Balls
                </SpotlightCard>
            </Grid>
        </Grid>
        
      
    </div>
    );
}
    


export default Experience;