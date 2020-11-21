import React, { useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';

import testWorker from './test';

export default function CodeEditor() {
  const worker = new Worker(testWorker);

  worker.onmessage = (m) => {
    // eslint-disable-next-line no-eval
    eval(m.data);
  };

  worker.postMessage('im from main');

  return (
    <MonacoEditor
      width="600"
      language="typescript"
      value={`import React, { useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';

import testWorker from './test';

export default function CodeEditor() {
  const worker = new Worker(testWorker);

  worker.onmessage = (m) => {
    // eslint-disable-next-line no-eval
    eval(m.data);
  };

  worker.postMessage('im from main');

  return (
    <MonacoEditor
      width="400"
      language="typescript"
      value={\`\`}
    />
  );
}
`}
    />
  );
}
