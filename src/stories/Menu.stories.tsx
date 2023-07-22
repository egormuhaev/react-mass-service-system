import { Menu } from '../components';
import { MenuActionClick, MenuStruct } from '../interfaces/props/Menu.props';
import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineBars, AiOutlineFacebook } from 'react-icons/ai';
import '../index.css';

const onClick: MenuActionClick = (e) => {
  console.log(e.token);
};

const menu: MenuStruct[] = [
  {
    text: 'Главная',
    token: 'main',
    icon: <AiOutlineBars />,
  },
  {
    text: 'Сообщения',
    token: 'messages',
    icon: <AiOutlineFacebook />,
  },
];

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Vertical: Story = {
  args: {
    orientation: 'v',
    slim: true,
    theme: 'dark',
    style: { width: '270px' },
    actionOnClick: onClick,
    struct: menu,
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'h',
    slim: true,
    theme: 'dark',
    actionOnClick: onClick,
    struct: menu,
  },
};
