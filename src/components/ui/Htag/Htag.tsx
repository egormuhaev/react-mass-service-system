import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';
import style from './Htag.module.css';

export interface HtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  appearance?: 'primary' | 'default';
  size: 's' | 'm';
  textAlign?: 'center' | 'right' | 'left';
}

const Htag: React.FC<HtagProps> = ({
  children,
  size = 's',
  appearance = 'default',
  className,
  textAlign = 'center',
  ...props
}): JSX.Element => {
  return (
    <h1
      className={cn(
        className,
        style.h,
        {
          [style.primary]: appearance === 'primary',
          [style.default]: appearance === 'default',
        },
        {
          [style.s]: size === 's',
          [style.m]: size === 'm',
        },
        {
          [style.center]: textAlign === 'center',
          [style.right]: textAlign === 'right',
          [style.left]: textAlign === 'left',
        }
      )}
    >
      {children}
    </h1>
  );
};

export default Htag;
