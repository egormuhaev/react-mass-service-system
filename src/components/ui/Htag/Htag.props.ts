import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  appearance?: 'primary' | 'default';
  size: 's' | 'm';
  textAlign?: 'center' | 'right' | 'left';
  theme?: 'dark' | 'light';
}
