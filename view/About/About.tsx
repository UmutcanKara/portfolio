import Button from "../../components/Button/Button";
import Photo from "../../Images/WIN_20220408_14_19_06_Pro.jpg"
import Image from "next/image";

import styles from '../../styles/ViewStyles/About.module.css'

type Event = MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent

const About: React.FC = () => {
  const buttonClick = (e:Event) => {
    const value = e.target.innerText
    const projects = document.getElementById('Projects');
    const contact = document.getElementById('Contact');
    value === "Projects" ? projects?.scrollIntoView() : contact?.scrollIntoView()
    
  }
  return <section id="About" >
      <p className={styles.hello}>Hello, I&apos;m</p>
      <h3 className={styles.name}>Umutcan Kara</h3>
      <p className={styles.occupation}> Front-end Developer</p>
      <div className={styles.buttonContainer}>
      </div>
      <div style={{overflow: 'hidden', width:'25%', alignSelf:'center', height:'fit-content', marginBottom:'2%'}}>
        <Image src={Photo} alt='photo' objectFit="cover" style={{borderRadius: '48px'}}/>
      </div>
    <h2 className={styles.shining}> About Me </h2>
    <div className={styles.details}>
      <p>
      Experienced Front-end Developer adept in all stages of web development. Knowledgeable in popular technologies such as React.js, Node.js, Express.js, MongoDB, Mongoose, and Next.js. Working voluntary at EESTEC student association. 
      </p>
      <div className={styles.buttonContainer}>

      <Button onClick={(e:Event) => buttonClick(e)}>Projects</Button>
      <Button onClick={(e:Event) =>buttonClick(e)} filled>Contact Me</Button>
      </div>
        
    </div>
  </section>;
};

export default About;
