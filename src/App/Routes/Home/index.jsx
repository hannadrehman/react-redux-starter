import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './style.scss';


class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.count = 0;
  }
  render() {
    return (
      <article className="home-wrapper">
        <section className="">
          <h1>Welcome Home</h1>
          <section style={{ 'text-align': 'center' }}>
            <iframe title="React Fiber" width="560" height="315" src="https://www.youtube.com/embed/ZCuYPiUIONs" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen />
          </section>
        </section>
      </article>
    );
  }
}

// eslint-disable
function mapStateToProps() {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
