import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Button from '../../components/Button/Button';

import styles from '../../styles/ViewStyles/Contact.module.css'

import textData from '../../utils/textData';

const Contact: React.FC = () => {
    const {contact} = textData;
    
    const renderButtons = () => {
        const keys = Object.keys(contact)
        const values = Object.values(contact)
        values.map((value, idx) => {
            const onClick = () => {
                location.href = value
            }
            switch (keys[idx]) {
                case "LinkedIn":
                    <Button onClick={onClick}> <LinkedInIcon/> </Button>
                    break
                case "github":
                    <Button onClick={onClick}> <GitHubIcon/> </Button>
                    break
                case "instagram":
                    <Button onClick={onClick}> <InstagramIcon/> </Button> 
                    break
                default:
                    break
            }
        })
    }
    
  return <section className={styles.section} id='Contact'>
      <h3>Contact Me</h3>
      <p>Get In Touch</p>
    <div className={styles.linkCont}>
        <div className={styles.contactCont}>
            <LinkedInIcon /> 
            <a href="https://www.linkedin.com/in/umutcan-kara-6607981b2/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className={styles.contactCont}>
            <GitHubIcon /> 
            <a href="https://github.com/UmutcanKara/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className={styles.contactCont}>
            <InstagramIcon /> 
            <a href="https://www.instagram.com/umurcankata/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className={styles.contactCont}>
            <EmailIcon /> 
            <p>Email: Umutcan_kara@hotmail.com</p>
        </div>
    </div>
  </section>;
};

export default Contact;
