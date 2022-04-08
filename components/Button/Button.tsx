import { CSSProperties, MouseEvent, ReactNode } from "react";
import styles from '../../styles/ComponentStyles/Button.module.css'


type Event = MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent

interface ButtonProps {
    children: ReactNode,
    filled?: boolean, // Reversed or not
    styleOption?: CSSProperties | undefined,
    onClick: (e:Event) => void;
}

const Button: React.FC<ButtonProps> = ({children, filled, onClick, styleOption}) => {
    const createRipple = (event : Event) => {
  const button = event.currentTarget as HTMLElement;
  
  if (button) {
      const top = event.pageY;
      const left = event.pageX
    //   console.log(rect);
      
    
      const circle = document.createElement('span');
      circle.classList.add('ripple');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      event.pageY
    
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${left - radius}px`;
      circle.style.top = `${top - radius}px`;   
      // circle.style.left = `${event.clientX - radius}px`;
      // circle.style.top = `${event.clientY - radius}px`;   
      console.log(event.pageY);
         
    
      button.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 200);
  }
}
    const handleClick = (e: Event) => {
        createRipple(e)
        onClick(e);
    } 
    const styleOptions = styleOption? styleOption: {}

    return <button 
        className={filled ? styles.filled : styles.normal}
        style={styleOptions}
        onClick={(e) => handleClick(e)}>
            {children}
        </button>;
};

export default Button;
