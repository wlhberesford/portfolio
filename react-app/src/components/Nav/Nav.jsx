import { useState, useEffect } from 'react';
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
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < 10) {
                // Always show at the top
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div style={{  
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: 'auto',
            zIndex: 1000,
            pointerEvents: 'none',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.2s ease-in-out'
        }}>
        <Grid container spacing={2} style={{ pointerEvents: 'auto' }}>
            <Grid size={2}>
            </Grid>
            <Grid size={2}>
                {Button("Home", "#Hero")}
            </Grid>
            <Grid size={2}>
                {Button("Experience", "#Experience")}
            </Grid>
            <Grid size={2}>
                {Button("Education", "#Education")}
            </Grid>
            <Grid size={2}>
                {Button("Projects", "#Projects")}
            </Grid>
            <Grid size={2}>
            </Grid>
        </Grid>
        </div>
    );
}

export default Nav;
