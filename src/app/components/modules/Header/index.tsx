import { useState } from 'react';

import Icon from '@/app/components/atoms/Icon';
import NavbarItem from '@/app/components/atoms/NavbarItem';
import { theme } from '@/app/components/modules/ThemeProvider/theme';
import { NAVBAR_ITEM, NavbarItems } from '@/app/types/navbar';

const NAVBAR_ITEMS: NavbarItems[] = [
  {
    code: 'HOME',
    icon: 'ic_home_outline',
    name: NAVBAR_ITEM['HOME'],
  },
  {
    code: 'ABOUT',
    icon: 'ic_browser_outline',
    name: NAVBAR_ITEM['ABOUT'],
  },
  {
    code: 'FRUITS',
    icon: 'ic_cube_outline',
    name: NAVBAR_ITEM['FRUITS'],
  },
  {
    code: 'GARDENERS',
    icon: 'ic_grid_outline',
    name: NAVBAR_ITEM['GARDENERS'],
  },
];

const Header = () => {
  const [chooseItem, setChooseItem] = useState<string>('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {NAVBAR_ITEMS &&
        NAVBAR_ITEMS.map((item) => (
          <NavbarItem
            key={item.code}
            isActive={chooseItem === item.code}
            onClick={() => {
              setChooseItem(item.code);
            }}
            icon={
              <Icon
                color={
                  chooseItem === item.code ? theme.colors.primaryButton : theme.colors.darkGrey
                }
                size={24}
                name={item.icon}
              />
            }
            label={item.name}
          />
        ))}
    </div>
  );
};

export default Header;
