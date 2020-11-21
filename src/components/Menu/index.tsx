import React, { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Styles from './Menu.module.css';

const { Provider, Consumer } = React.createContext({
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
  const handleClick = () => {};
  return (
    <Consumer>
      {({ active, setActive }) => (
        <li
          className={`${Styles['menu--item']} ${
            value === active ? Styles['menu--item__selected'] : ''
          }`}
          onClick={() => setActive(value)}
        >
          {children}
        </li>
      )}
    </Consumer>
  );
}

export default function Menu({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string>('');
  const handleClick = (key: string) => {
    setActive(key);
  };

  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <Provider value={{ active, setActive: handleClick }}>
      <ul role="menu" className={Styles.menu}>
        {children}
      </ul>
    </Provider>
  );
}
