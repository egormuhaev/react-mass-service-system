import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

const Header: React.FC<HeaderProps> = ({
  theme,
  className,
  neomorphism = false,
}) => {
  return (
    <div
      className={cn(
        className,
        styles.header,
        {
          [styles.neomorphism]: neomorphism,
        },
        {
          [styles.dark]: theme === 'dark',
        }
      )}
    ></div>
  );
};

export default Header;
