import { StaticImageData } from 'next/image';
import styles from '../../styles/ComponentStyles/Image.module.css'

interface ImageProps {
    src: string | StaticImageData,
}

const Image: React.FC <ImageProps> = ({ src }) => {
    const style = {
        backgroundImage: `url(${src})`,
    }
  return <div style={style} className={styles.image}/>;
};

export default Image;
