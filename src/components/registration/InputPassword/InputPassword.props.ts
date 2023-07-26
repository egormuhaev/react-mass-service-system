import { Theme } from '../../ui/Modal/Modal.props';
export interface InputPasswordProps {
  value: string;
  status: boolean;
  complexity: number;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: Theme;
}
