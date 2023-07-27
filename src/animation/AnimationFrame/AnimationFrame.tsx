import { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

export interface AnimationFrameProps extends MotionProps {
  children: React.ReactNode;
}

const AnimationFrame: React.FC<AnimationFrameProps> = ({
  children,
  ...props
}) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default AnimationFrame;
