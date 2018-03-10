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
          <section >
            HOME SCREEEEEEEEEEEEEEEEEEEEEEEEEEEEEN
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
