// comment all register languages from node_modules/highlight.js/lib/index.js
// because of huge file size. we will define our usable languages here
// and will register them from here only

import { highlightBlock, registerLanguage } from 'highlight.js';

// to get language names refer to node_modules/highlight.js/lib/index.js.
//  all the available languages are there, be sure you use same casing
// NOTE: c is not supported. so dont use that
const registerLanguagesSet = ['javascript', 'python', 'bash', 'java', 'cpp'];
// NOTE:make sure the same array is in webpack.config.js also as highlightjsLanguages=[]
registerLanguagesSet.map((language) => {
  const langModule = require(`highlight.js/lib/languages/${language}`); //eslint-disable-line
  registerLanguage(language, langModule);
  return true;
});

const hightlightHTML = (node) => {
  if (node) {
    const codeBlocks = node.getElementsByClassName('ql-syntax');
    for (let i = 0; i < codeBlocks.length; i += 1) {
      highlightBlock(codeBlocks[i]);
    }
  }
};
export default hightlightHTML;
