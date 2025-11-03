import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function AboutMe() {
  return (
    <div className="AboutMe" style={{
      height: "90%",
      width: "100%",
      background: "#000"
    }}>
        <Grid container spacing={2}>
            <Grid size={4}>
                <Box 
                width={"20vw"} 
                height={"35vh"}
                marginLeft={"5vw"}
                marginRight={"5vw"}              
                >
                    <h1>About Me</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.</p>
                </Box>
            </Grid>
            <Grid size={4}>
                <Box
                width={"20vw"} 
                height={"40vh"}
                marginLeft={"5vw"}
                marginRight={"5vw"}
                >
                    
                </Box>
            </Grid>
        </Grid>
    </div>
  );
}

export default AboutMe;