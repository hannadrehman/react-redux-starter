
// import { RequestMaker } from '../../../Services/index';


export const hannad = 'hannad';

const insertToEditor = (url, editor) => {
  try {
    const range = editor.getEditor().getSelection();
    editor.getEditor().insertEmbed(range.index, 'image', url);
  } catch (e) {
    throw e;
  }
};

const saveToServer = (file, editor) => {
  try {
    const fd = new FormData();
    fd.append('image', file);
    insertToEditor('https://avatars0.githubusercontent.com/u/3639617?s=88&v=4', editor);
  } catch (e) {
    throw e;
  }
};

export const handleImage = (editor) => {
  try {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();
    // Listen upload local image and save to server
    input.onchange = () => {
      const file = input.files[0];
      // file type is only image.
      if (/^image\//.test(file.type)) {
        saveToServer(file, editor);
      } else {
        alert('You could only upload images.'); //eslint-disable-line
      }
    };
  } catch (e) {
    throw e;
  }
};
