import { Theme } from "../../ui/Modal/Modal.props";

export interface InputEmailProps {
  value: string;
  status: boolean;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: Theme
}
