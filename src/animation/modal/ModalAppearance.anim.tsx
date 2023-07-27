import AnimationFrame from '../AnimationFrame/AnimationFrame';

export const animate = {
  hidden: {
    y: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

export interface ModalAppearanceProps {
  children: React.ReactNode;
}

const ModalAppearance: React.FC<ModalAppearanceProps> = ({ children }) => {
  return (
    <AnimationFrame initial="hidden" whileInView="visible">
      <AnimationFrame variants={animate}>{children}</AnimationFrame>
    </AnimationFrame>
  );
};

export default ModalAppearance;
