import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type Theme = 'dark' | 'light';
export type Position = 'bottom' | 'right' | 'top' | 'left';
export type MessageType = 'warring' | 'error' | 'success' | 'loading' | 'info';

export interface MessageProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  align?: Position[2];
  theme?: Theme;
  mesages: MessageItemProps[];
  loadings: MessageItemProps[];
}

export interface MessageItemProps {
  messageList?: MessageItemProps[];
  setMessageList?: (messageList: MessageItemProps[]) => void;
  time?: number;
  theme?: Theme;
  text: string;
  type?: MessageType;
  id?: string;
}
