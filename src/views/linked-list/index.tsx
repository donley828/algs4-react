import React from 'react';

import { CodeEditor } from '@/components';

export default function LinkedList() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#ffffff',
          height: '100%',
          padding: '12px 0',
          borderRadius: '20px',
          boxSizing: 'border-box',
        }}
      >
        <CodeEditor></CodeEditor>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          marginLeft: '16px',
        }}
      >
        s
      </div>
    </>
  );
}
