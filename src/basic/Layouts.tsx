import React, { ReactNode } from 'react';
import './Layouts.css';
import { Link } from 'react-router-dom';
import routers from './routes.json';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const { routes } = routers;
  return (
    <div className="layouts">
      <div className="layouts--sidebar">
        {routes.map((item, key) => (
          <Link key={`link-${key}`} to={item.path}>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="layouts--main">
        <div className="layouts--main__header"></div>
        <div className="layouts--main__content">{children}</div>
      </div>
    </div>
  );
}
