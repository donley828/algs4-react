/* eslint-disable */
const workercode = () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = function (e) {
    postMessage(`console.log('ss')`);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });

const worker_script = URL.createObjectURL(blob);

export default worker_script;
