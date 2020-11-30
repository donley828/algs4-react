import React, { ReactNode, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@/components';
import './Menu.css';

const MenuContext = React.createContext({
  active: '',
  setActive: (key: string) => {},
});

export function MenuItem({
  children,
  value,
}: {
  children: HTMLElement | ReactNode;
  value: string;
}) {
  const handleClick = (value: string) => {};
  const { Consumer } = MenuContext;
  return (
    <Consumer>
      {({ active, setActive }) => (
        <li
          className={`menu--item${
            value === active ? ' menu--item__selected' : ''
          }`}
          onClick={() => {
            setActive(value);
            handleClick(value);
          }}
        >
          {children}
        </li>
      )}
    </Consumer>
  );
}

export function SubMenu({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (e: any) => {
    setOpen(!open);
  };

  return (
    <div
      className={`menu--item-submenu${
        open ? ' menu--item-submenu-opened' : ''
      }`}
    >
      <div className="menu--item-submenu-title" onClick={handleClick}>
        <Icon name="jianshen"></Icon>
        <span>{title}</span>
        <i className="menu--item-submenu-arrow"></i>
      </div>
      {open && (
        <ul role="menu" className="menu">
          {children}
        </ul>
      )}
    </div>
  );
}

export default function Menu({
  children,
  onSelect,
}: {
  children: ReactNode;
  onSelect?: (key: string) => void;
}) {
  const [active, setActive] = useState<string>('');
  const handleClick = (key: string) => {
    setActive(key);
    onSelect && onSelect(key);
  };

  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const { Provider } = MenuContext;

  return (
    <Provider value={{ active, setActive: handleClick }}>
      <ul role="menu" className="menu">
        {children}
      </ul>
    </Provider>
  );
}
