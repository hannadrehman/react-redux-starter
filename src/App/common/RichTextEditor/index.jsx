/*
* @component RichTextEditor
* @type Component
* @props {string} placeholder
* @props {function} richText callback that gets you the richtext from this component
* @requires React,ReactQuill,PropTypes
* @children ReactQuill
* @reduxActions false
* @actions none
* @description
* this is wrapper component over ReactQuill text editor component. it will take placeholder
* and a functiion richText which will be called onChanges if the ReactQull component
*
*/
import React from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';

import { handleImage } from './utility';

import './style.scss';

// for custom icons

const { Quill } = ReactQuill;
const icons = Quill.import('ui/icons');
icons.code = '<i class="fa fa-pencil-square" aria-hidden="true"></i>';
let globalEditorRef = null;

class RichTextEditor extends React.PureComponent {
  static modules = {
    syntax: false,
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        [{ align: [] }],
        ['blockquote', 'code-block', 'code'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: () => handleImage(globalEditorRef),
      },
    },
    clipboard: {
    // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    history: {
      delay: 1500,
      maxStack: 500,
      userOnly: true,
    },
  };
  /*
  * Quill RichTextEditor formats
  * See https://quilljs.com/docs/formats/
  */
  static formats = [
    'header', 'font', 'size', 'script', 'direction', 'color',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'background',
    'list', 'bullet', 'indent', 'align',
    'link', 'image', 'code-block', 'video', 'formula', 'code',
  ];

  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    richText: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.editorRef = null;
    globalEditorRef = this.editorRef;
  }
  componentDidUpdate() {
    if (this.state.text) {
      const len = this.editorRef.getEditor().getLength();
      this.props.richText(this.state.text, len);
    }
  }
  handleChange(value) {
    this.setState(prevState => ({ ...prevState, text: value }));
  }
  render() {
    return (
      <article className="richtexteditor_wrapper">
        <ReactQuill
          ref={(elem) => { this.editorRef = elem; globalEditorRef = elem; }}
          value={this.state.text}
          theme="snow"
          onChange={this.handleChange}
          modules={RichTextEditor.modules}
          formats={RichTextEditor.formats}
          bounds=".app"
          placeholder={this.props.placeholder}
        />
      </article>
    );
  }
}


export default RichTextEditor;
