import React from 'react';
import './Button.scss';


interface ButtonProps {
  children?: string | number | React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  block?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({disabled, onClick = ()=>{}, className, block, style, children}, ref ) => {
  return (
   <button ref={ref} disabled={disabled} onClick={onClick} className={`Button ${className} ${block ? '--block' : ''}`} style={style}>
     {children}
   </button>
 )});
export default Button;