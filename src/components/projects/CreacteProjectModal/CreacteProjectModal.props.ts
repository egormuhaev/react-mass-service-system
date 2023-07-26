export interface CreacteProjectModalProps {
  value: string;
  setValue: (val: string) => void;
  theme: 'dark' | 'light';
  onCreate: () => void;
}
