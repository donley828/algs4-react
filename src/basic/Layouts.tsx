import React, { ReactNode } from 'react';
import './Layouts.css';
import { Link } from 'react-router-dom';
import routers from './routes.json';

import Menu, { MenuItem } from '@/components/Menu';

import AuthorLogo from '@/assets/images/author.jpg';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const { routes } = routers;
  return (
    <div className="layouts">
      <div className="layouts--sidebar">
        <div className="layouts--sidebar__header">Algorithms 4th</div>
        <Menu>
          {routes.map((item, key) => (
            <MenuItem key={item.key} value={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>

      <div className="layouts--main">
        <div className="layouts--main__header">
          <div>search</div>
          <img src={AuthorLogo} />
        </div>
        <div className="layouts--main__content">{children}</div>
      </div>
    </div>
  );
}
