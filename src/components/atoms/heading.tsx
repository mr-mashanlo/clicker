import { FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string,
  children?: ReactNode
}

const Heading: FC<Props> = ( { className, children, ...others } ) => {
  return (
    <p className={twMerge( 'font-black text-4xl', className )} {...others}>{children}</p>
  );
};

export default Heading;