import styles from './Menu.module.css';
import cn from 'classnames';
import { MenuProps } from '../../../interfaces/props/Menu.props';
import MenuItem from '../MenuItem/MenuItem';
import { useMemo, useState } from 'react';

const Menu: React.FC<MenuProps> = ({
  children,
  className,
  struct,
  slim = false,
  orientation = 'v',
  actionOnClick,
  theme = 'light',
  ...props
}) => {
  const [selected, setSelected] = useState<number | string | null>(null);

  const getMenuItems = () => {
    if (struct)
      return struct.map((item, index) => (
        <MenuItem
          isSelect={selected}
          id={index}
          token={item.token}
          setSelected={setSelected}
          theme={theme}
          key={index}
          slim={slim}
          text={item.text}
          icon={item.icon}
          subIcon={item.subIcon}
          actionOnClick={actionOnClick}
        />
      ));
  };

  const menu = useMemo(
    () => (struct ? getMenuItems() : children),
    [struct, selected, slim, theme, className]
  );

  return (
    <div
      className={cn(
        styles.menu,
        className,
        {
          [styles.slim]: slim === true,
        },
        {
          [styles.vertical]: orientation === 'v',
          [styles.horizontal]: orientation === 'h',
        }
      )}
      {...props}
    >
      {menu}
    </div>
  );
};

export default Menu;
