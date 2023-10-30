import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function Hero() {

    return ( 
        <div className='App-header'>
        <main>
            <h1>
                Wat Street
            </h1>
            <h4>
                Waterloo's Quantitative Finance Design Team - Testing
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