import textData from "../../../utils/textData";
import styles from '../../../styles/ComponentStyles/Layout.module.css'

const Footer = () => {
    const {links} = textData
  return <footer className={styles.footer}>
      <h3 className={styles.name}>Umutcan Kara</h3>
      <div className={styles.container}>
          {links.map(link => (
              <a href={`#${link}`} key={link} > {link} </a>
          ))}
      </div>
      <p>This Design was copied from Neo from figma</p>
  </footer>;
};

export default Footer;
