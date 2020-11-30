import React, { ReactNode } from 'react';
import './Layouts.css';
import { Link, useHistory } from 'react-router-dom';
import routers from './routes.json';

import Menu, { MenuItem, SubMenu } from '@/components/Menu';
import { Icon } from '@/components';

import AuthorLogo from '@/assets/images/author.jpg';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const { routes } = routers;
  const history = useHistory();
  return (
    <div className="layouts">
      <div className="layouts--sidebar">
        <div className="layouts--sidebar__header">Algorithms 4th</div>
        <Menu onSelect={(key) => history.push(key)}>
          {routes.map((item, key) =>
            item.childes ? (
              <SubMenu title={item.title} key={item.key}>
                {item.childes.map((child, idx) => (
                  <MenuItem value={child.path} key={child.key}>
                    <Icon name="jianshen"></Icon>
                    <Link to={child.path}>{child.title}</Link>
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={item.key} value={item.path}>
                <Icon name="jianshen"></Icon>
                <Link to={item.path}>{item.title}</Link>
              </MenuItem>
            )
          )}
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
