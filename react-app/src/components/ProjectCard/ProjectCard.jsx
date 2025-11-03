import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';





export default function ProjectCard({ image, title, desc, skills = [] }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
        <div  className="project-card" style={{
                height: "100%",
                width: "100%",
                background: "#464545",
                padding: "2rem",
                // position: "relative",
                overflow: "hidden",
                // outline: "1px solid #DFDEDC",
                borderRadius: "1rem"

            }}
            onClick={handleOpen}
            onMouseDown={(e) => e.preventDefault()}>
                <div style={{display: "grid", placeItems:"center"}}>
                    <img src={image}  alt={"Oops no image"} style={{height: "7rem"}}></img>
               

                    <h3 style={{fontSize:"rem", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                        {title}
                    </h3>
                    
                    {/* Skills section at the bottom */}
                    <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: "0.5rem", 
                        marginTop: "auto",
                        paddingTop: "1rem"
                    }}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "1px solid #DFDEDC",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    color: "#A6A7A2",
                                    fontFamily: "'Poppins', sans-serif",
                                    backgroundColor: "transparent"
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                    
                    </div>
                </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{
                height: "50vh",
                width: "50vh",
                background: "#464545",
                position: "relative",
                overflow: "hidden",
                // outline: "1px solid #DFDEDC",
                borderRadius: "1rem"
            }}
            onClick={handleOpen}
            onMouseDown={(e) => e.preventDefault()}>
                <div style={{display: "grid", placeItems:"center"}}>
                    <img src={image}  alt={"Oops no image"} style={{height: "50%"}}></img>
                </div>
                <div style={{padding:"1rem"}}>

                    <h3 style={{fontSize:"4vh", fontFamily: "'Poppins', sans-serif", color:"#DFDEDC"}}>
                        {title}
                    </h3>
                    
                    {/* Skills section at the bottom */}
                    <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        gap: "0.5rem", 
                        marginTop: "auto",
                        paddingTop: "1rem"
                    }}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: "0.4rem 0.8rem",
                                    border: "1px solid #DFDEDC",
                                    borderRadius: "0.5rem",
                                    fontSize: "0.875rem",
                                    color: "#A6A7A2",
                                    fontFamily: "'Poppins', sans-serif",
                                    backgroundColor: "transparent"
                                }}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                    
                    </div>
                </div>
      </Modal>
    </div>
  );
}