import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Button(text, link ) {
  return (
    <Box>
      <h3 style={{
        color:"#464545",
        margin:"3vh",
        fontSize: "2.5vh",
        transition: "color 0.1s"
          }} 
          onMouseEnter={(e) => (e.currentTarget.style.color = "#00ACAC")} onMouseLeave={(e) => (e.currentTarget.style.color = "#464545")}

      ><a href={link} >{text}</a></h3>
    </Box>
  );
}



function Nav() {


    return (
        <div style={{  
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 10
        }}>
        <Grid container spacing={2}>
            <Grid size={2}>
            </Grid>
            <Grid size={2}>
                {Button("Home", "google.com")}
            </Grid>
            <Grid size={2}>
                {Button("Experience", "google.com")}
            </Grid>
            <Grid size={2}>
                {Button("Education", "google.com")}
            </Grid>
            <Grid size={2}>
                {Button("Projects", "google.com")}
            </Grid>
            <Grid size={2}>
            </Grid>
        </Grid>
        </div>
    );
}

export default Nav;
