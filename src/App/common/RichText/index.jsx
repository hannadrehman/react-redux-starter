/*
* @component RichText
* @type Pure Component
* @props {string} rawHtmlString
* @props {number} highlightTiming
* @requires react,prop-types,HighlightJs,util.js,quill.snow.scss,quill.core.css,
* tomorow-night-blue.css,style.css
* @children none
* @reduxActions false
* @actions none
* @description
* this component is used to display rich text and format it, hightlight it if
* there is any code in it. we are using HightlightJS to perform code syntax highlighting
*/
import React from 'react';
import PropTypes from 'prop-types';

import hightlightHTML from './utility';

import '../../../assets/css/quill.snow.css';
import '../../../assets/css/quill.core.css';
import '../../../assets/css/tomorrow-night-blue.css';
import './style.scss';

class RichText extends React.Component {
  static defaultProps={
    highlightTiming: 3000,
  }
  static propTypes = {
    rawHtmlString: PropTypes.string.isRequired,
    highlightTiming: PropTypes.number,
  };
  componentDidMount() {
  // set timer to hightlight syntax
    this.highlightTimer = setTimeout(() => {
      hightlightHTML(this.codeNode);
      // after success. clear timer
      clearTimeout(this.highlightTimer);
    }, this.props.highlightTiming);
  }
  componentDidUpdate() {
  // if component updated.means clear prev timer.
  // and set new timer.
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(() => {
      hightlightHTML(this.codeNode);
      // after success. clear timer
      clearTimeout(this.highlightTimer);
    }, this.props.highlightTiming);
  }
  render() {
    return (
      /*eslint-disable*/
      <article className="richtext_wrapper ql-container ql-snow richtext-wrapper">
        <section ref={(node)=>this.codeNode=node} className="ql-editor code-node" dangerouslySetInnerHTML={{ __html: this.props.rawHtmlString } /* eslint-disable-line  */} />
      </article>
     /*eslint-disable*/
    );
  }
}


export default RichText;
