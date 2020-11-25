import React, { useRef, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';

import testWorker from './test';

export default function CodeEditor() {
  const worker = new Worker(testWorker);

  // worker.onmessage = (m) => {
  //   // eslint-disable-next-line no-eval
  //   eval(m.data);
  // };

  worker.postMessage('im from main');

  const editorDidMount = (editor: any, monaco: any) => {
    console.log(editor, monaco);
    let tsProxy;
    monaco.languages.typescript
      .getTypeScriptWorker()
      .then(function (worker: (v: any) => Promise<any>) {
        worker([editor.getModel().uri]).then(function (proxy) {
          tsProxy = proxy;
          // @ts-ignore
          tsProxy
            .getEmitOutput(editor.getModel().uri.toString())
            .then((r: any) => {
              console.log(r);
            });
        });
      });
    console.log(tsProxy);
  };

  const onChange = (newValue: string, e: any) => {
    console.log('onChange', newValue, e);
  };

  return (
    <MonacoEditor
      width="600"
      language="typescript"
      editorDidMount={editorDidMount}
      onChange={onChange}
      value={`console.log('sss');\nlet name: string = \`Gene\`;function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };`}
    />
  );
}
