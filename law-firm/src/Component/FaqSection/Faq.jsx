import React from "react";
import styles from "./Faq.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';

const Faq = () => {
  
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={styles.faqCon}>
      <h1>FAQ</h1>
      <div className={styles.faqBodyCon}>
        <h2 className={styles.faqBodyText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</h2>
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.accordion}>
        <AccordionSummary 
          
          expandIcon={<AddIcon sx={{backgroundColor:"#E3B748" ,borderRadius:"20px"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header" 
          className={styles.accordionSum}>
          <Typography >
          Do I need a personal injury report?
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDet}>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={styles.accordion}>
        <AccordionSummary
          expandIcon={<AddIcon sx={{backgroundColor:"#E3B748" ,borderRadius:"20px"}} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className={styles.accordionSum}>
          <Typography >How much is my case worth?</Typography>
        
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDet}>
          <Typography >
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={styles.accordion}>
        <AccordionSummary
          expandIcon={<AddIcon sx={{backgroundColor:"#E3B748" ,borderRadius:"20px"}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className={styles.accordionSum}
        >
          
          <Typography  >
          What should I do right after car accidect          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDet}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={styles.accordion}>
        <AccordionSummary
          expandIcon={<AddIcon sx={{backgroundColor:"#E3B748" ,borderRadius:"20px"}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className={styles.accordionSum}
        >
          <Typography >How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDet}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
        
        </div>
      </div>
    </div>
  );
};

export default Faq;
