import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Hero() {
    // const el = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //     strings: ["CS @ University of Waterloo", "Computer Vision + Back-End @ Martinrea", "Software Engineer Intern @ Finastra", "Co-Founder, Director of Tech @ Wat Street"], // Strings to display
    //     // Speed settings, try diffrent values untill you get good results
    //     startDelay: 300,
    //     typeSpeed: 50,
    //     backSpeed: 50,
    //     backDelay: 2000,
    //     loop: true
    //     });

    //     // Destropying
    //     return () => {
    //     typed.destroy();
    //     };
    // }, []);

    return ( 
        <div className='App-header'>
        <main>
            <h1>
                <></>
                Wat Street
            </h1>
            <h4>
                Waterloo's Quantitative Finance Design Team
            </h4>
            
            <Stack direction="row" spacing={1} >
                <IconButton aria-label="mail" sx={{ color: '#EEB411' }} size = "large" href="mailto:watstreetwaterloo@gmail.com" target="_blank">
                    <EmailIcon />
                </IconButton>

                <IconButton aria-label="instagram" sx={{ color: '#EEB411' }} size = "large" href="https://instagram.com/wat.street/" target="_blank">
                    <InstagramIcon />
                </IconButton>

                <IconButton aria-label="linkedin" sx={{ color: '#EEB411' }} size = "large" href="https://www.linkedin.com/company/wat-street/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                
            </Stack>
        </main>
        </div>    
    );
}

export default Hero;