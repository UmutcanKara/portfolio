import styles from "../../styles/ViewStyles/Qualification.module.css";
import Button from "../../components/Button/Button";

import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import textData from "../../utils/textData";

const Qualifications = () => {
    const {skills} = textData
    const handleClick = () => {
        document.getElementById('Contact')?.scrollIntoView()
    }
  return <section className={styles.section} id='Qualifications'>
      <h3>Skills & Qualifications</h3>
      <h4>Qualifications</h4>
      <div className={styles.container}>
        <div className={styles.bubble}>
            <h4>Individual <PersonIcon/> </h4>
            <p>Able to effectively self-manage during independent projects utilizing reusable components I have already prepared, develop pixel perfect responsive websites and web applications.</p>
            
            <Button onClick={handleClick}>Contact Me</Button>
        </div>
        <div className={styles.bubble}>
            <h4>Team Environment <GroupsIcon/> </h4>
            <p>Experienced in the latest development tools and procedures, can shape multi-functional reusable code, and will continuously provide industry best practices.</p>
            <Button onClick={handleClick}>Contact Me</Button>
        </div>
        <div>
            
        </div>
        </div>
        <h4>Skills</h4>
        <div className={styles.skillCont}>
            {skills.map(skill => <h3 key={skill}> <CheckCircleOutlineIcon/> {skill}  </h3>)}
        </div>
  </section>;
};

export default Qualifications;
