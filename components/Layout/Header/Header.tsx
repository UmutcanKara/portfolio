import textData from "../../../utils/textData";
import styles from '../../../styles/ComponentStyles/Layout.module.css'
const Header: React.FC = () => {
    const {links} = textData
  return <nav className={styles.nav}>
      <h3 className={styles.name}>Umutcan</h3>
      <div className={styles.container}>
          {links.map(link => (
              <a href={`#${link}`} key={link} className={styles.link}> {link} </a>
          ))}
      </div>
  </nav>;
};

export default Header;
