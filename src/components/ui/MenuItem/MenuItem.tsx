import styles from './MenuItem.module.css';
import { MenuItemProps } from '../Menu/Menu.props';
import cn from 'classnames';
import { useCallback, useEffect, useState } from 'react';

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  theme,
  slim,
  id,
  token,
  setSelected,
  isSelect,
  actionOnClick,
  subIcon,
  neomorphism = false,
}) => {
  const [tooltip, setTooltip] = useState(false);

  const onClick = () => {
    setSelected(id);

    if (actionOnClick) {
      actionOnClick({ text, token });
    }
  };

  return (
    <div
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onClick={onClick}
      className={cn(
        styles.item,
        { [styles.neomorphism]: neomorphism },
        {
          [styles.light]: theme === 'light',
          [styles.dark]: theme === 'dark',
        }
      )}
    >
      <div
        className={cn(
          styles.inner,
          {
            [styles.slim]: slim,
          },
          {
            [styles.active]: isSelect === id,
          }
        )}
      >
        {icon && (
          <div
            className={cn(styles.mainIcon, {
              [styles.light]: theme === 'light',
              [styles.dark]: theme === 'dark',
            })}
          >
            {icon}
          </div>
        )}
        {!slim && <div className={styles.title}>{text}</div>}
        {!slim && subIcon && (
          <div className={cn(styles.subIcon)}>{subIcon}</div>
        )}
        {slim && tooltip && <div className={styles.tooltip}>{text}</div>}
      </div>
    </div>
  );
};

export default MenuItem;
