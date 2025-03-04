import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  children?: ReactNode
}

const Button: FC<Props> = ( { className, children, ...others } ) => {
  return (
    <button className={twMerge( 'font-black text-4xl', className )} {...others}>{children}</button>
  );
};

export default Button;