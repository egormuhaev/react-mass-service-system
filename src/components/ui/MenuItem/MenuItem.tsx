import styles from './MenuItem.module.css';
import { MenuItemProps } from '../../../interfaces/props/Menu.props';
import cn from 'classnames';
import { useCallback, useState } from 'react';

const MenuItem: React.FC<MenuItemProps> = ({
  text, // Текст пункта меню
  icon, // Основная иконка
  theme, // Цветовая тема
  slim, // Ширина
  id, // ID для выделения пунктов при выборе
  token, // данные которые можно передать в пункт меню
  setSelected, // функция устовновления выделения пункта меню
  isSelect, // текущий выбранный пункт меню
  actionOnClick, // функция которая срабатывает при активации пункта меню
  subIcon, // второстименноая иконка меню
}) => {
  const [tooltip, setTooltip] = useState(false);

  const onClick = useCallback(() => {
    if (isSelect !== id) {
      setSelected(id);
      if (actionOnClick) {
        actionOnClick({ text, token });
      }
    } else {
      setSelected(null);
    }
  }, [isSelect]);

  return (
    <div
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
      onClick={onClick}
      className={cn(styles.item, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
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
