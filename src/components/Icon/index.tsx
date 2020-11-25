import React from 'react';

export default function Icon({ name }: { name: string }) {
  return <i className={`iconfont icon-${name}`}></i>;
}
